import { agenticPosts } from "@/lib/posts/agentic";
import { llmPosts } from "@/lib/posts/llm";
import { automationPosts } from "@/lib/posts/automation";
import { hiringPosts } from "@/lib/posts/hiring";
import { pakistanPosts } from "@/lib/posts/pakistan";
import { fullstackPosts } from "@/lib/posts/fullstack";
import { chatbotPosts } from "@/lib/posts/chatbots";
import { regionPosts } from "@/lib/posts/regions";
import { aiVisibilityPosts } from "@/lib/posts/ai-visibility";
import { fetchRemotePost, fetchRemoteSummaries, type PostSummary } from "@/lib/cms";

export { author } from "@/lib/blog-types";
export type { Post, Block } from "@/lib/blog-types";
export type { PostSummary } from "@/lib/cms";

/**
 * Posts written in code (lib/posts/*), newest first. This is the built-in
 * fallback and is what the chat agent still indexes (lib/site-content.ts).
 * Blog pages should use getAllPostSummaries()/getPostBySlug() below, which
 * also include articles published from the CMS.
 */
export const posts = [
  ...agenticPosts,
  ...llmPosts,
  ...automationPosts,
  ...hiringPosts,
  ...pakistanPosts,
  ...fullstackPosts,
  ...chatbotPosts,
  ...regionPosts,
  ...aiVisibilityPosts,
].sort((a, b) => (a.date < b.date ? 1 : -1));

/** Synchronous, local-only lookup. Prefer getPostBySlug() for pages. */
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const localSummaries: PostSummary[] = posts.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  cluster: p.cluster,
  date: p.date,
  updated: p.updated,
  readMinutes: p.readMinutes,
}));

/**
 * Every post (code + CMS) as a summary, newest first. A CMS article replaces a
 * code post with the same slug, so a post can be migrated by re-creating it in
 * the CMS. If the CMS is off or unreachable this degrades to the code posts.
 */
export async function getAllPostSummaries(): Promise<PostSummary[]> {
  const remote = await fetchRemoteSummaries();
  const bySlug = new Map<string, PostSummary>();
  for (const s of localSummaries) bySlug.set(s.slug, s);
  for (const s of remote ?? []) bySlug.set(s.slug, s);
  return [...bySlug.values()].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/**
 * One full post by slug: the CMS version if it exists there, else the code
 * version. Returns undefined if neither has it. If the CMS can't be reached and
 * there is no code version, this throws rather than returning undefined, so an
 * outage never gets a real CMS-only article cached as a 404 (Next keeps serving
 * the last good page and retries).
 */
export async function getPostBySlug(slug: string) {
  const local = getPost(slug);

  // The (cached) article list is the index: only ask the CMS for a single
  // article if it actually has that slug. Avoids one request per code post.
  const summaries = await fetchRemoteSummaries();
  if (summaries) {
    if (!summaries.some((s) => s.slug === slug)) return local; // not in the CMS
  } else if (local) {
    return local; // CMS unreachable or off: serve the code version
  }

  const remote = await fetchRemotePost(slug);
  if (remote !== "not-found" && remote !== "error") return remote;
  if (local) return local;
  if (remote === "error" && process.env.NEXT_PHASE !== "phase-production-build") {
    throw new Error(`CMS unreachable while resolving /blog/${slug}`);
  }
  return undefined;
}
