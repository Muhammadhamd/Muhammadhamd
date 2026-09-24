import { diagrams } from "@/components/BlogDiagrams";
import type { Block, Post } from "@/lib/blog-types";

/**
 * Client for the private hamdali-cms public read API. Articles written in the
 * CMS (dashboard or MCP) are mapped onto the site's `Post` shape here, and
 * defensively sanitized: the CMS accepts any string where the site's renderer
 * only knows a fixed set of values, and one bad block must never take a whole
 * post page down.
 *
 * CMS_API_URL overrides the base URL; set it to an empty string to turn the CMS
 * off entirely (the site then serves only the posts in lib/posts/*).
 */
const RAW_BASE = process.env.CMS_API_URL ?? "https://hamdali-cms.vercel.app";
const BASE = RAW_BASE.trim().replace(/\/+$/, "");

/** How long a fetched CMS response is reused before Next revalidates it (ISR). */
const REVALIDATE_SECONDS = 300;
const TIMEOUT_MS = 8000;

export const cmsEnabled = BASE !== "";

export type PostSummary = Pick<
  Post,
  "slug" | "title" | "excerpt" | "cluster" | "date" | "updated" | "readMinutes"
>;

type Fetched<T> = { status: "ok"; data: T } | { status: "not-found" } | { status: "error" };

async function cmsGet<T>(path: string): Promise<Fetched<T>> {
  if (!cmsEnabled) return { status: "not-found" };
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status === 404) return { status: "not-found" };
    if (!res.ok) {
      console.warn(`[cms] ${path} -> HTTP ${res.status}`);
      return { status: "error" };
    }
    return { status: "ok", data: (await res.json()) as T };
  } catch (err) {
    console.warn(`[cms] ${path} failed:`, err instanceof Error ? err.message : err);
    return { status: "error" };
  }
}

// ── Remote shapes (only the fields we read) ────────────────────────────────

type RemoteSummary = {
  slug?: unknown;
  title?: unknown;
  excerpt?: unknown;
  cluster?: unknown;
  date?: unknown;
  updatedAt?: unknown;
  readMinutes?: unknown;
};

type RemoteArticle = RemoteSummary & {
  metaTitle?: unknown;
  metaDescription?: unknown;
  keyword?: unknown;
  body?: unknown;
  faqs?: unknown;
  related?: unknown;
  pillarSlug?: unknown;
  clusterSlugs?: unknown;
};

type RemoteList = { articles?: RemoteSummary[]; hasNextPage?: boolean };

// ── Helpers ────────────────────────────────────────────────────────────────

const str = (v: unknown): string => (typeof v === "string" ? v : "");
const isDay = (s: string) => /^\d{4}-\d{2}-\d{2}/.test(s);
/** The site formats dates from a plain yyyy-mm-dd string. */
const day = (v: unknown): string => (isDay(str(v)) ? str(v).slice(0, 10) : new Date().toISOString().slice(0, 10));

function words(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function estimateReadMinutes(body: Block[]): number {
  let n = 0;
  for (const b of body) {
    if ("text" in b) n += words(b.text);
    else if ("items" in b) n += b.items.reduce((a, it) => a + words(it), 0);
  }
  return Math.max(1, Math.round(n / 200));
}

const isStrArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === "string");

/**
 * Turn CMS body content into blocks the site can always render. Anything the
 * renderer can't handle is degraded to readable text (or dropped) instead of
 * throwing: an unknown diagram key would crash `diagrams[key]`, and next/image
 * throws for any remote host not allow-listed in next.config.ts.
 */
function sanitizeBlocks(raw: unknown): Block[] {
  if (!Array.isArray(raw)) return [];
  const out: Block[] = [];
  for (const b of raw as Record<string, unknown>[]) {
    if (!b || typeof b !== "object") continue;
    switch (b.t) {
      case "p":
      case "h2":
      case "h3":
      case "quote":
        if (typeof b.text === "string" && b.text) out.push({ t: b.t, text: b.text });
        break;
      case "ul":
      case "ol":
        if (isStrArray(b.items) && b.items.length) out.push({ t: b.t, items: b.items });
        break;
      case "code":
        if (typeof b.code === "string" && b.code) out.push({ t: "code", code: b.code });
        break;
      case "figure": {
        const alt = str(b.alt);
        if (typeof b.diagram === "string" && Object.hasOwn(diagrams, b.diagram)) {
          out.push({ t: "figure", diagram: b.diagram as keyof typeof diagrams, caption: str(b.caption), alt });
        } else if (alt) {
          out.push({ t: "p", text: alt }); // keep the diagram's content for readers and crawlers
        }
        break;
      }
      case "img": {
        const src = str(b.src);
        const alt = str(b.alt);
        if (src.startsWith("/")) {
          out.push({ t: "img", src, alt, caption: str(b.caption) || undefined });
        } else if (alt) {
          out.push({ t: "p", text: alt });
        }
        break;
      }
    }
  }
  return out;
}

function sanitizeFaqs(raw: unknown): Post["faqs"] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((f): f is { q: string; a: string } => !!f && typeof f.q === "string" && typeof f.a === "string")
    .map((f) => ({ q: f.q, a: f.a }));
}

function sanitizeRelated(raw: unknown): Post["related"] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((r): r is { label: string; href: string } => !!r && typeof r.label === "string" && typeof r.href === "string")
    .map((r) => ({ label: r.label, href: r.href }));
}

function toSummary(a: RemoteSummary): PostSummary | null {
  const slug = str(a.slug);
  const title = str(a.title);
  if (!slug || !title) return null;
  const date = day(a.date);
  const updated = isDay(str(a.updatedAt)) ? str(a.updatedAt).slice(0, 10) : undefined;
  return {
    slug,
    title,
    excerpt: str(a.excerpt),
    cluster: str(a.cluster),
    date,
    updated: updated && updated !== date ? updated : undefined,
    readMinutes: typeof a.readMinutes === "number" && a.readMinutes > 0 ? a.readMinutes : 5,
  };
}

function toPost(a: RemoteArticle): Post | null {
  const summary = toSummary(a);
  if (!summary) return null;
  const body = sanitizeBlocks(a.body);
  if (body.length === 0) return null;
  return {
    ...summary,
    metaTitle: str(a.metaTitle) || summary.title,
    metaDescription: str(a.metaDescription) || summary.excerpt,
    keyword: str(a.keyword),
    readMinutes: typeof a.readMinutes === "number" && a.readMinutes > 0 ? a.readMinutes : estimateReadMinutes(body),
    body,
    faqs: sanitizeFaqs(a.faqs),
    related: sanitizeRelated(a.related),
    pillarSlug: str(a.pillarSlug) || undefined,
    clusterSlugs: isStrArray(a.clusterSlugs) && a.clusterSlugs.length ? a.clusterSlugs : undefined,
  };
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Every published CMS article as a summary (no body), following pagination.
 * Returns null when the CMS is off or unreachable, so callers can fall back to
 * the local posts instead of failing the page.
 */
export async function fetchRemoteSummaries(): Promise<PostSummary[] | null> {
  if (!cmsEnabled) return null;
  const all: PostSummary[] = [];
  for (let page = 1; page <= 20; page++) {
    const res = await cmsGet<RemoteList>(`/api/v1/articles?page=${page}&limit=50`);
    if (res.status !== "ok") return null; // never serve a half-fetched list
    for (const a of res.data.articles ?? []) {
      const s = toSummary(a);
      if (s) all.push(s);
    }
    if (!res.data.hasNextPage) break;
  }
  return all;
}

/**
 * One published CMS article by slug: the article, "not-found" if the CMS has no
 * such published article, or "error" if the CMS couldn't be reached (the caller
 * decides whether to fall back or keep serving a cached page).
 */
export async function fetchRemotePost(slug: string): Promise<Post | "not-found" | "error"> {
  const res = await cmsGet<{ article?: RemoteArticle }>(`/api/v1/articles/${encodeURIComponent(slug)}`);
  if (res.status === "error") return "error";
  if (res.status === "not-found" || !res.data.article) return "not-found";
  return toPost(res.data.article) ?? "not-found";
}
