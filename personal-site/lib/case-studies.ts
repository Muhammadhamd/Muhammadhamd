/**
 * Case studies = the products and projects Muhammad Hamd has built or engineered.
 * Distinct from `works` in lib/data.ts, which are professional roles/companies
 * (the /experience page). These render on /case-studies, grouped by category.
 *
 * Entries flagged `draft: true` are placeholders awaiting a verified brief from
 * the owner — the UI shows them muted with a "Details coming soon" note so no
 * unverified claims are published. Fill in real copy + set draft:false per brief.
 */

export type CaseCategory = "AI SaaS" | "Mobile App" | "CRM" | "Web Platform";

export const CATEGORY_ORDER: CaseCategory[] = [
  "AI SaaS",
  "Mobile App",
  "CRM",
  "Web Platform",
];

export const CATEGORY_META: Record<
  CaseCategory,
  { blurb: string; icon: string }
> = {
  "AI SaaS": {
    blurb: "Products I founded and shipped end to end, where LLMs do the heavy lifting.",
    icon: "sparkles",
  },
  "Mobile App": {
    blurb: "iOS and Android apps I engineered — from backend APIs to the screens users tap.",
    icon: "smartphone",
  },
  CRM: {
    blurb: "Custom CRMs and internal tools that replace spreadsheets with real systems.",
    icon: "layers",
  },
  "Web Platform": {
    blurb: "Web apps and platforms built for real users, not demos.",
    icon: "globe",
  },
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: CaseCategory;
  role: string;
  year: string;
  /** One-line hook shown on the card. */
  tagline: string;
  /** 1–2 sentence description. */
  summary: string;
  logo: string;
  /** Live URL, if public. */
  link?: string;
  stack: string[];
  /** Short outcome/feature bullets. */
  highlights?: string[];
  /** Placeholder awaiting a verified brief — rendered muted, excluded from schema. */
  draft?: boolean;
};

export const caseStudies: CaseStudy[] = [
  // ── AI SaaS (verified) ──────────────────────────────────────────────
  {
    slug: "watbot",
    name: "WatBot",
    category: "AI SaaS",
    role: "Founder & Lead Engineer",
    year: "2025 – Present",
    tagline: "Customer-support AI that runs on WhatsApp.",
    summary:
      "A WhatsApp AI platform for automating customer support, distributed as a secure, local-first compiled binary. I built the core engine in Go with the whatsmeow library for direct WhatsApp Web integration, and an OpenAI layer for context-aware replies.",
    logo: "/work-logos/watbotlogo.png",
    link: "https://watbot.ai",
    stack: ["Go", "whatsmeow", "OpenAI", "React", "WebSockets"],
    highlights: [
      "Core processing engine written from scratch in Go",
      "Local-first binary — customer data never leaves their machine",
      "Architected for expansion to Instagram & Facebook",
    ],
  },
  {
    slug: "selfbrand",
    name: "selfbrand AI",
    category: "AI SaaS",
    role: "Founder & Builder",
    year: "2024 – Present",
    tagline: "AI personal branding for busy founders.",
    summary:
      "A SaaS that uses AI to generate roughly 80% of the work of personal branding — positioning, daily content, and long-term authority strategy — for founders and service providers who can't afford a ghostwriter.",
    logo: "/work-logos/selfbrand logo.png",
    link: "https://selfbrand.app",
    stack: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Generates positioning, content & strategy end to end",
      "Deeper personal-positioning layer than generic AI writers",
      "Built and shipped solo",
    ],
  },
  {
    slug: "asmara-ai",
    name: "Asmara.AI",
    category: "AI SaaS",
    role: "Full-stack Engineer",
    year: "2025",
    tagline: "AI-native automation for modern businesses.",
    summary:
      "An AI-native platform for intelligent automation and workflows. I worked as a full-stack engineer, building product features end to end — LLM orchestration, backend APIs, and the Next.js interface.",
    logo: "/work-logos/asmaraailogo.png",
    link: "https://asmara.ai",
    stack: ["Next.js", "OpenAI", "Python", "Tailwind CSS"],
    highlights: [
      "Shipped features across the full stack",
      "LLM orchestration and backend APIs",
      "Next.js user-facing interface",
    ],
  },

  // ── Mobile Apps (awaiting briefs) ───────────────────────────────────
  {
    slug: "swiftgo",
    name: "SwiftGo",
    category: "Mobile App",
    role: "Engineer",
    year: "",
    tagline: "Mobile app.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/swiftgologo.png",
    stack: [],
    draft: true,
  },
  {
    slug: "swiftwire",
    name: "SwiftWire",
    category: "Mobile App",
    role: "Engineer",
    year: "",
    tagline: "Mobile app.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/swiftwire.jfif",
    stack: [],
    draft: true,
  },
  {
    slug: "matchify",
    name: "Matchify",
    category: "Mobile App",
    role: "Engineer",
    year: "",
    tagline: "Mobile app.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/matchify.png",
    stack: [],
    draft: true,
  },

  // ── Web Platforms (awaiting briefs) ─────────────────────────────────
  {
    slug: "medicexams",
    name: "MedicExams",
    category: "Web Platform",
    role: "Engineer",
    year: "",
    tagline: "Web platform.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/medicexams.jfif",
    stack: [],
    draft: true,
  },
  {
    slug: "valoov",
    name: "Valoov",
    category: "Web Platform",
    role: "Engineer",
    year: "",
    tagline: "Web platform.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/valoov-ai.jfif",
    stack: [],
    draft: true,
  },
  {
    slug: "kafela",
    name: "Kafela",
    category: "Web Platform",
    role: "Engineer",
    year: "",
    tagline: "Web platform.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/kafela.webp",
    stack: [],
    draft: true,
  },
  {
    slug: "kwsb",
    name: "KWSB",
    category: "Web Platform",
    role: "Engineer",
    year: "",
    tagline: "Web platform.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/kwsb.png",
    stack: [],
    draft: true,
  },
  {
    slug: "yacht-master",
    name: "Yacht Master Inc",
    category: "Web Platform",
    role: "Engineer",
    year: "",
    tagline: "Web platform.",
    summary: "Case study coming soon — details being finalized.",
    logo: "/portfolio-line-logos/yacht-master0inc.jfif",
    stack: [],
    draft: true,
  },
];

/** Case studies grouped by category, in display order, skipping empty groups. */
export function caseStudiesByCategory() {
  return CATEGORY_ORDER.map((category) => ({
    category,
    meta: CATEGORY_META[category],
    items: caseStudies.filter((c) => c.category === category),
  })).filter((g) => g.items.length > 0);
}
