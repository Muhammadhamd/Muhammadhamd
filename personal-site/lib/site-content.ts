import { posts } from "@/lib/blog";
import type { Block } from "@/lib/blog";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { works } from "@/lib/data";

/** A discoverable page for the chat agent. */
export type PageEntry = { url: string; title: string; summary: string };

/** A search hit returned to the agent: a page plus why it matched. */
export type SearchHit = PageEntry & { score: number };

/** A service recommendation: which service fits a described problem, and why. */
export type ServiceMatch = { url: string; name: string; tagline: string; why: string };

/**
 * Flat index of every real page on the site, generated from data (not
 * hardcoded). The chat agent calls this to discover what exists, then reads a
 * page by URL for the actual content.
 */
export function listSitePages(): PageEntry[] {
  const staticPages: PageEntry[] = [
    { url: "/", title: "Home", summary: "Muhammad Hamd, agentic AI engineer and systems builder in Karachi, Pakistan." },
    { url: "/about", title: "About", summary: "His story: from backend engineer to agentic AI engineer; founder of WatBot, selfbrand AI, Asmara.AI." },
    { url: "/hire-me", title: "Hire Me", summary: "Services, process, availability, and rates; how to hire him." },
    { url: "/contact", title: "Contact", summary: "Email, LinkedIn, and calendar to reach Muhammad Hamd." },
    { url: "/uses", title: "Uses", summary: "His tech stack and the tools he builds with." },
    { url: "/services", title: "Services", summary: "Index of his AI engineering and automation services." },
    { url: "/blog", title: "Blog", summary: "Articles on agentic AI, LLMs, RAG, and automation." },
  ];
  const servicePages = services.map((s) => ({ url: `/services/${s.slug}`, title: s.name, summary: s.metaDescription }));
  const locationPages = locations.map((l) => ({ url: `/${l.slug}`, title: l.h1, summary: l.metaDescription }));
  const workPages = works.map((w) => ({ url: `/work/${w.slug}`, title: w.company, summary: `${w.role}. ${w.tagline}` }));
  const blogPages = posts.map((p) => ({ url: `/blog/${p.slug}`, title: p.title, summary: p.excerpt }));
  return [...staticPages, ...servicePages, ...locationPages, ...workPages, ...blogPages];
}

const STATIC_CONTENT: Record<string, string> = {
  "/": "Muhammad Hamd is an agentic AI engineer and systems builder in Karachi, Pakistan. He builds production AI systems, autonomous agents, and workflow automation. Founder of WatBot, selfbrand AI, and Asmara.AI. Full-stack AI engineer at MindKeepr in Estonia.",
  "/about": "Muhammad Hamd started in backend engineering at VativeApps, moved into agentic AI at Cubitrek, founded WatBot (a WhatsApp AI platform in Go), selfbrand AI, and Asmara.AI, and now works at MindKeepr in Estonia building RAG pipelines. He believes AI should remove manual work, not add complexity, and ships systems end to end.",
  "/hire-me": "Hire Muhammad Hamd for agentic AI development, LLM integration, AI workflow automation, CRM automation, WhatsApp AI, and RAG systems. Remote, UTC+5, roughly $50 to $120 per hour with fixed-price options, available for new projects.",
  "/contact": "Reach Muhammad Hamd by email at muhammadhamdali572@gmail.com, on LinkedIn at linkedin.com/in/muhammadhamd, or by booking a call.",
  "/uses": "His stack: Python, Go, TypeScript, LangChain, LangGraph, CrewAI, AutoGen, OpenAI, Anthropic, RAG, pgvector, Pinecone, n8n, PostgreSQL, Docker, Next.js, and React.",
  "/services": "His services: agentic AI development, LLM integration, AI workflow automation, CRM automation, WhatsApp AI automation, and RAG and vector search.",
  "/blog": "His blog covers agentic AI, LLM engineering, AI automation, hiring AI engineers, and the Pakistan AI scene.",
};

const blockText = (b: Block): string =>
  "text" in b ? b.text : "items" in b ? b.items.join("; ") : "";

/** Return the full text content of a page by its URL path, or null. */
export function getPageContent(path: string): string | null {
  const clean = (path.split("?")[0].replace(/\/+$/, "") || "/").toLowerCase();

  const blog = clean.match(/^\/blog\/(.+)$/);
  if (blog) {
    const p = posts.find((x) => x.slug === blog[1]);
    if (p) {
      const body = p.body.map(blockText).filter(Boolean).join("\n\n");
      const faq = p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
      return `# ${p.title}\n\n${body}\n\nFAQ:\n${faq}`;
    }
  }

  const svc = clean.match(/^\/services\/(.+)$/);
  if (svc) {
    const s = services.find((x) => x.slug === svc[1]);
    if (s) {
      const builds = s.builds.map((b) => `${b.title}: ${b.body}`).join(" ");
      const faq = s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
      return `# ${s.name}\n\n${s.intro}\n\nWhat this solves: ${s.solves.join("; ")}\n\nWhat I build: ${builds}\n\nStack: ${s.stack.join(", ")}\n\nFAQ:\n${faq}`;
    }
  }

  const loc = locations.find((l) => `/${l.slug}` === clean);
  if (loc) {
    const reasons = loc.reasons.map((r) => `${r.title}: ${r.body}`).join(" ");
    const faq = loc.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
    return `# ${loc.h1}\n\n${loc.intro.join("\n\n")}\n\nWhy work with me: ${reasons}\n\nFAQ:\n${faq}`;
  }

  const work = clean.match(/^\/work\/(.+)$/);
  if (work) {
    const w = works.find((x) => x.slug === work[1]);
    if (w) return `# ${w.company} (${w.role})\n\n${w.tagline}\n\n${w.description.join("\n\n")}\n\nStack: ${w.stack.join(", ")}`;
  }

  return STATIC_CONTENT[clean] ?? null;
}

// ── Agent helpers: search, recommend, and a real bio ───────────────────────

const STOP = new Set([
  "the", "a", "an", "and", "or", "but", "of", "to", "in", "on", "for", "with",
  "my", "me", "i", "you", "your", "is", "are", "do", "does", "can", "how",
  "what", "who", "about", "tell", "it", "that", "this", "we", "us", "his",
]);

const tokenize = (s: string): string[] =>
  s.toLowerCase().match(/[a-z0-9]+/g)?.filter((w) => w.length > 2 && !STOP.has(w)) ?? [];

/**
 * Keyword search across every page on the site (title + summary). Returns the
 * top matches with a score, so the agent can find relevant pages by meaning of
 * a question rather than guessing a URL. Falls back to nothing on empty input.
 */
export function searchSite(query: string, limit = 4): SearchHit[] {
  const terms = tokenize(query);
  if (terms.length === 0) return [];
  const pages = listSitePages();
  const hits = pages
    .map((p) => {
      const haystack = `${p.title} ${p.summary} ${p.url}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (haystack.includes(t)) score += 1;
        if (p.title.toLowerCase().includes(t)) score += 1; // title matches weigh more
      }
      return { ...p, score };
    })
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/**
 * Map a described problem ("my team answers the same WhatsApp questions all
 * day") to the single best service page, with a short reason. Scores each
 * service against its name, tagline, intro, and the problems it solves.
 */
export function recommendService(problem: string): ServiceMatch | null {
  const terms = tokenize(problem);
  if (terms.length === 0) return null;
  let best: { s: (typeof services)[number]; score: number } | null = null;
  for (const s of services) {
    const haystack = `${s.name} ${s.tagline} ${s.intro} ${s.solves.join(" ")}`.toLowerCase();
    let score = 0;
    for (const t of terms) if (haystack.includes(t)) score += 1;
    if (!best || score > best.score) best = { s, score };
  }
  if (!best || best.score === 0) return null;
  return {
    url: `/services/${best.s.slug}`,
    name: best.s.name,
    tagline: best.s.tagline,
    why: best.s.solves[0],
  };
}

/**
 * A compact, first-person bio compiled from the real work history in data.ts,
 * so the agent's system prompt carries genuine depth (roles, dates, stacks)
 * instead of thin summaries. Data-driven: stays in sync as data.ts changes.
 */
export function getProfileBrief(): string {
  const roles = works
    .map((w) => `- ${w.company} (${w.role}, ${w.period}): ${w.tagline}. Stack: ${w.stack.join(", ")}.`)
    .join("\n");
  return `I'm Muhammad Hamd (also Hamd Ali), an agentic AI engineer and systems builder in Karachi, Pakistan. I build production AI systems, autonomous agents, RAG pipelines, and workflow automation, end to end.

My work and projects:
${roles}

How I think: AI should remove manual work, not add complexity. I care about reliability, guardrails, monitoring, and cost control, which is what separates a demo from a system a business can depend on.`;
}
