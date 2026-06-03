import type { Faq } from "@/lib/seo";

/** A content block in a blog post body. Rendered server-side by BlogPostView. */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "code"; code: string }
  | { t: "quote"; text: string };

export type Post = {
  slug: string;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keyword: string;
  cluster: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  readMinutes: number;
  body: Block[];
  faqs: Faq[];
  related: { label: string; href: string }[];
};

/** Author profile shown on the blog index and every post. */
export const author = {
  name: "Muhammad Hamd",
  title: "Agentic AI Engineer & Systems Builder",
  shortBio:
    "Agentic AI engineer in Karachi, Pakistan. I build production AI systems, autonomous agents, and automation for founders and teams worldwide.",
  longBio:
    "Muhammad Hamd is an agentic AI engineer and systems builder based in Karachi, Pakistan. He builds production-ready AI systems for founders and teams worldwide, and is the founder of WatBot, selfbrand AI, and Asmara.AI. He also works as a full-stack AI engineer at MindKeepr in Tallinn, Estonia, where he architects agentic AI pipelines with RAG. Everything he writes comes from systems he has actually shipped.",
  image: "/hamd.png",
  profileUrl: "/about",
  socials: {
    linkedin: "https://linkedin.com/in/muhammadhamd",
    github: "https://github.com/Muhammadhamd",
    medium: "https://muhammadhamd.medium.com/",
    x: "https://x.com/m_hamd_",
  },
};
