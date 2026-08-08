import type { Metadata } from "next";
import { works } from "@/lib/data";

/** Canonical origin for the site. Update here if the domain ever changes. */
export const SITE_URL = "https://hamdali.com";

/** Absolute URL helper. */
export const absUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Stable @id of the Person entity (defined in full in the homepage @graph). */
export const PERSON_ID = `${SITE_URL}/#person`;

/**
 * Self-contained Person node for use on non-homepage routes. Google validates
 * structured data per page, so referencing PERSON_ID by @id alone leaves a
 * dangling node on subpages. Emit this instead wherever a page names the person
 * as provider, author, publisher, or subject, so the entity resolves on-page
 * and still merges with the full homepage Person via the shared @id.
 */
export const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Muhammad Hamd",
  url: SITE_URL,
  jobTitle: "Agentic AI Engineer & Full-Stack Developer",
};

/** URL of a dynamically generated 1200x630 OpenGraph card (see app/og/route.tsx). */
export const ogImageUrl = (title: string, tag = "Muhammad Hamd") =>
  absUrl(`/og?title=${encodeURIComponent(title)}&tag=${encodeURIComponent(tag)}`);

/** Strip the " | Muhammad Hamd" brand suffix so the OG card shows a clean title. */
const cardTitle = (t: string) => t.replace(/\s*\|\s*Muhammad Hamd\s*$/i, "").trim();

/**
 * Generic per-page Metadata builder: unique title/description, own canonical,
 * a unique OG + Twitter image, and matching OpenGraph. Use on every new route
 * so nothing inherits the homepage canonical, og:url, or social image.
 */
/** The site author's X/Twitter handle, used for twitter:site and twitter:creator. */
const TWITTER_HANDLE = "@m_hamd_";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  ogTitle,
  ogTag,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  ogTitle?: string;
  ogTag?: string;
  // Article-only: rendered as og:article:published_time / modified_time /
  // author, which social scrapers and AI crawlers use as freshness signals.
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absUrl(path);
  const card = ogTitle ?? cardTitle(title);
  const img = ogImageUrl(card, ogTag ?? "Muhammad Hamd");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Muhammad Hamd",
      type,
      images: [{ url: img, width: 1200, height: 630, alt: card }],
      ...(type === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, authors: [absUrl("/about")] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [img],
    },
  };
}

export type Faq = { q: string; a: string };

/** Build FAQPage JSON-LD (feeds Google rich results + AI-model citations). */
export function faqPageLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Build BreadcrumbList JSON-LD from [name, path] pairs. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

/**
 * Per-work-page SEO copy. Unique, natural title and description for every
 * /work/* page.
 */
const workSeo: Record<string, { title: string; description: string }> = {
  mindkeepr: {
    title: "MindKeepr: Full-stack AI Engineer (RAG & Agentic Pipelines) | Muhammad Hamd",
    description:
      "Muhammad Hamd is a Full-stack AI Engineer at MindKeepr in Tallinn, Estonia, where he architects agentic AI knowledge-retention systems with RAG, LLMs, and vector embeddings.",
  },
  watbot: {
    title: "WatBot: WhatsApp AI Automation Built in Go | Muhammad Hamd",
    description:
      "WatBot is a WhatsApp AI customer-support automation platform that Muhammad Hamd built in Go with whatsmeow, OpenAI, and a React dashboard. He is the founder and software engineer.",
  },
  cubitrek: {
    title: "Cubitrek: Agentic AI Engineer & Full-stack Developer | Muhammad Hamd",
    description:
      "At Cubitrek, Muhammad Hamd built autonomous agentic AI workflows in Python and scalable MERN apps, integrated the Google Ads API, and managed Azure infrastructure.",
  },
  "asmara-ai": {
    title: "Asmara.AI: Founder & AI Systems Builder | Muhammad Hamd",
    description:
      "Asmara.AI is an AI-native automation product founded by Muhammad Hamd that focuses on LLM orchestration and intelligent business workflow automation.",
  },
  selfbrand: {
    title: "SelfBrand.app: Founder & AI Personal-Branding SaaS | Muhammad Hamd",
    description:
      "SelfBrand.app is an AI personal-branding SaaS founded by Muhammad Hamd that automates roughly 80% of content and positioning for founders and professionals using LLMs.",
  },
  "vative-apps": {
    title: "VativeApps: Node.js Backend Engineer (APIs & WebSockets) | Muhammad Hamd",
    description:
      "At VativeApps, Muhammad Hamd built scalable Node.js and Express REST APIs, real-time WebSockets, RabbitMQ queues, and OpenAI and Google Play billing integrations.",
  },
};

/**
 * Build full per-work-page Metadata: unique title and description, its own
 * canonical URL, a unique OG image, and matching OpenGraph and Twitter cards.
 */
export function workMetadata(slug: string): Metadata {
  const work = works.find((w) => w.slug === slug);
  const seo = workSeo[slug];
  if (!work || !seo) {
    return { alternates: { canonical: absUrl(`/work/${slug}`) } };
  }
  const url = absUrl(`/work/${slug}`);
  const img = ogImageUrl(work.company, "Case Study");
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: "Muhammad Hamd",
      type: "article",
      images: [{ url: img, width: 1200, height: 630, alt: `Muhammad Hamd, ${work.company}` }],
    },
    twitter: { card: "summary_large_image", images: [img] },
  };
}
