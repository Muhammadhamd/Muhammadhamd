/**
 * Case studies = the products and projects Muhammad Hamd has built or engineered.
 * Distinct from `works` in lib/data.ts, which are professional roles/companies
 * (the /experience page). These render on /case-studies (grouped by category)
 * and each has a detail page at /case-studies/<slug>.
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
    blurb: "AI products and platforms — some I founded, some I engineered end to end.",
    icon: "sparkles",
  },
  "Mobile App": {
    blurb: "Live iOS & Android apps I engineered — from backend APIs to the screens users tap.",
    icon: "smartphone",
  },
  CRM: {
    blurb: "Custom CRMs and internal tools that replace spreadsheets with real systems.",
    icon: "layers",
  },
  "Web Platform": {
    blurb: "Marketplaces and web platforms built for real users, not demos.",
    icon: "globe",
  },
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: CaseCategory;
  /** Drives the display style — mobile apps get phone frames. */
  platform?: "mobile" | "web";
  role: string;
  year: string;
  /** One-line hook shown on the card. */
  tagline: string;
  /** 1–2 sentence description for the card. */
  summary: string;
  logo: string;
  /** Live URL, if public. */
  link?: string;
  /** Google Play URL for mobile apps. */
  playStore?: string;
  stack: string[];
  /** Short outcome/feature bullets. */
  highlights?: string[];
  /** Portrait app screenshots (mobile) — shown in phone frames on the detail page. */
  screenshots?: string[];
  /** Longer paragraphs for the detail page. */
  overview?: string[];
  /** Placeholder awaiting a verified brief — rendered muted, excluded from schema. */
  draft?: boolean;
};

export const caseStudies: CaseStudy[] = [
  // ── AI SaaS ─────────────────────────────────────────────────────────
  {
    slug: "watbot",
    name: "WatBot",
    category: "AI SaaS",
    platform: "web",
    role: "Founder & Lead Engineer",
    year: "2025 – Present",
    tagline: "Customer-support AI that runs on WhatsApp.",
    summary:
      "A WhatsApp AI platform for automating customer support, distributed as a secure, local-first compiled binary. I built the core engine in Go and an OpenAI layer for context-aware replies.",
    logo: "/work-logos/watbotlogo.png",
    link: "https://watbot.ai",
    stack: ["Go", "whatsmeow", "OpenAI", "React", "WebSockets"],
    highlights: [
      "Core processing engine written from scratch in Go",
      "Local-first binary — customer data never leaves their machine",
      "Architected for expansion to Instagram & Facebook",
    ],
    overview: [
      "WatBot is a WhatsApp AI platform I founded that automates customer support end to end. Unlike cloud SaaS competitors, it ships as a secure, local-first compiled binary, so a business's conversations and customer data never leave their own machine.",
      "I built the core processing engine from scratch in Go using the whatsmeow library for direct integration with the WhatsApp Web protocol, with an OpenAI layer providing context-aware, natural replies. A React dashboard lets users manage conversations and configure bot behavior, and the architecture is ready to expand across the whole Meta ecosystem.",
    ],
  },
  {
    slug: "selfbrand",
    name: "selfbrand AI",
    category: "AI SaaS",
    platform: "web",
    role: "Founder & Builder",
    year: "2024 – Present",
    tagline: "AI personal branding for busy founders.",
    summary:
      "A SaaS that uses AI to generate roughly 80% of the work of personal branding — positioning, daily content, and long-term authority strategy — for founders who can't afford a ghostwriter.",
    logo: "/work-logos/selfbrand logo.png",
    link: "https://selfbrand.app",
    stack: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Generates positioning, content & strategy end to end",
      "Deeper personal-positioning layer than generic AI writers",
      "Built and shipped solo",
    ],
    overview: [
      "selfbrand AI is a SaaS I founded and built solo. It uses AI to automate roughly 80% of the work of personal branding — brand positioning, daily content, social presence, and long-term authority strategy — for busy founders, service providers, and professionals.",
      "Where generic AI writers stop at a caption, selfbrand adds a deeper layer of personal positioning and strategic brand planning, giving people a consistent, credible presence without the overhead of a ghostwriter or content agency.",
    ],
  },
  {
    slug: "asmara-ai",
    name: "Asmara.AI",
    category: "AI SaaS",
    platform: "web",
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
    overview: [
      "Asmara.AI is an AI-native platform for intelligent automation and workflows. I worked on it as a full-stack engineer — not a founder — contributing across the stack rather than owning the company.",
      "My work spanned LLM orchestration, backend systems and APIs, and the Next.js user-facing interface, with a focus on shipping practical, reliable AI utility for real users.",
    ],
  },
  {
    slug: "medicexams",
    name: "MedicExams",
    category: "AI SaaS",
    platform: "web",
    role: "AI Engineer",
    year: "",
    tagline: "AI agents for a US medical-exam platform.",
    summary:
      "A US-based medical software platform where I worked as an AI engineer, building chatbot agents that automate internal and support workflows.",
    logo: "/portfolio-line-logos/medicexams.jfif",
    link: "https://medicexams.com",
    stack: ["AI Agents", "LLMs", "Automation", "Node.js"],
    highlights: [
      "Built chatbot agents to automate repetitive tasks",
      "AI engineering for a US healthcare-education product",
      "Focused on reliable, production-grade agent behavior",
    ],
    overview: [
      "MedicExams is a US-based medical software platform. I worked with the team as an AI engineer, designing and building chatbot agents that automate a range of their internal and support tasks.",
      "The emphasis was on dependable agent behavior in a healthcare-adjacent context — automations that save the team time without introducing risk.",
    ],
  },
  {
    slug: "valoov",
    name: "Valoov",
    category: "AI SaaS",
    platform: "web",
    role: "Full-stack & Agentic AI Engineer",
    year: "",
    tagline: "Financial software with agentic AI built in.",
    summary:
      "A financial software product where I worked as both a full-stack software engineer and an agentic AI engineer, building product features and the AI systems inside them.",
    logo: "/portfolio-line-logos/valoov-ai.jfif",
    link: "https://valoov.ai",
    stack: ["Next.js", "Agentic AI", "LLMs", "Node.js", "PostgreSQL"],
    highlights: [
      "Full-stack product engineering",
      "Agentic AI systems inside a fintech product",
      "Shipped features across frontend, backend, and AI",
    ],
    overview: [
      "Valoov is a financial software product. I worked on it in a dual role — as a full-stack software engineer and an agentic AI engineer — so I built both the product features and the AI systems that power them.",
      "That meant shipping across the whole stack, from the interface and backend APIs down to the agentic AI workflows that give the product its intelligence.",
    ],
  },

  // ── Mobile Apps ─────────────────────────────────────────────────────
  {
    slug: "swiftwire",
    name: "SwiftWire",
    category: "Mobile App",
    platform: "mobile",
    role: "Full-stack Engineer",
    year: "2026",
    tagline: "Borderless crypto & cash payments.",
    summary:
      "A secure fintech app for instant crypto and local money transfers across borders. I worked as a full-stack engineer on the wallet, transfers, and payout flows.",
    logo: "/portfolio-line-logos/swiftwire.jpg",
    link: "https://swiftwire.com",
    playStore:
      "https://play.google.com/store/apps/details?id=com.swiftWire.swiftWire",
    stack: ["Flutter", "Dart", "Firebase", "Crypto Wallets", "KYC/AML"],
    highlights: [
      "Instant crypto + fiat transfers across borders",
      "Multi-currency wallet with bank & mobile-money payouts",
      "Bank-grade security: AES-256, TLS 1.3, 2FA & biometrics",
    ],
    screenshots: [
      "/project-shots/swiftwire-1.jpg",
      "/project-shots/swiftwire-2.jpg",
      "/project-shots/swiftwire-3.jpg",
      "/project-shots/swiftwire-4.jpg",
    ],
    overview: [
      "SwiftWire is a secure fintech app that connects the world through instant crypto and local money transfers — fast, borderless, and affordable. Users can send and receive both crypto and fiat, hold a multi-currency wallet (USDT, BTC and more), and pay out directly to bank accounts or mobile money like MTN MoMo and Airtel.",
      "I worked as a full-stack engineer across the wallet, transfer, and payout flows. The product is built for real financial trust — bank-grade AES-256 encryption, TLS 1.3, two-step verification, biometric logins, and full KYC/AML — in collaboration with regulated payment partners.",
    ],
  },
  {
    slug: "swiftgo",
    name: "SwiftGo",
    category: "Mobile App",
    platform: "mobile",
    role: "Full-stack Engineer & Technology Consultant",
    year: "2026",
    tagline: "Online shopping & creator marketplace.",
    summary:
      "An online shopping marketplace and all-in-one professional ecosystem for creators and freelancers, with an AI assistant, jobs, and an in-app wallet. I worked as a full-stack engineer and technology consultant.",
    logo: "/portfolio-line-logos/swiftgologo.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.swiftgo.swiftgo",
    stack: ["Flutter", "Dart", "Firebase", "GPT-4o", "Google Maps"],
    highlights: [
      "Online marketplace with sellers, variants & cart",
      "Swift AI assistant powered by GPT-4o vision",
      "In-app digital wallet with secure payouts",
    ],
    screenshots: [
      "/project-shots/swiftgo-1.jpg",
      "/project-shots/swiftgo-2.jpg",
      "/project-shots/swiftgo-3.jpg",
    ],
    overview: [
      "SwiftGo is an online shopping marketplace built for an emerging market, grown into an all-in-one professional ecosystem for creators and freelancers. It combines a shopping marketplace (sellers, product variants, cart, maps-based delivery) with a job marketplace, a creator mode, and an in-app digital wallet.",
      "I worked as a full-stack engineer and technology consultant — building product features across the stack and advising on the technical direction. The app also includes Swift AI, an assistant powered by GPT-4o vision that answers questions, analyzes images, and generates content.",
    ],
  },
  {
    slug: "matchify",
    name: "Matchify",
    category: "Mobile App",
    platform: "mobile",
    role: "Backend Engineer @ VativeApps",
    year: "2024",
    tagline: "Modern dating & matching app.",
    summary:
      "A modern dating app that connects people through smart matching, swiping, and secure chat. I built the backend as an engineer at VativeApps.",
    logo: "/portfolio-line-logos/matchify.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.vativeApps.matchify",
    stack: ["Node.js", "Express", "WebSockets", "REST APIs", "SQL"],
    highlights: [
      "Backend for matching, profiles & real-time chat",
      "Smart matching based on interests & preferences",
      "Secure, private chat infrastructure",
    ],
    screenshots: [
      "/project-shots/matchify-1.jpg",
      "/project-shots/matchify-2.jpg",
      "/project-shots/matchify-3.jpg",
    ],
    overview: [
      "Matchify is a modern dating app that helps people find meaningful matches through smart matching, easy swiping, in-depth profiles, and secure chat. It's a live product on the Play Store built by VativeApps.",
      "I worked on Matchify as a backend engineer at VativeApps, building the APIs and real-time infrastructure behind matching, user profiles, and private chat — the systems that make swiping and conversations feel instant and reliable.",
    ],
  },
  {
    slug: "kwsb",
    name: "KWSB",
    category: "Mobile App",
    platform: "mobile",
    role: "Technical Lead",
    year: "",
    tagline: "Utility app for Karachi's water board.",
    summary:
      "The official mobile app for KWSB, Karachi's Water & Sewerage Board, letting citizens manage water services online. I led it as technical lead.",
    logo: "/portfolio-line-logos/kwsb.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.hta.kwsb.ots",
    stack: ["React Native", "Node.js", "REST APIs", "Payments"],
    highlights: [
      "Official app for a large public water utility",
      "Led the project as technical lead",
      "Digitized services for citizens across Karachi",
    ],
    screenshots: [
      "/project-shots/kwsb-1.jpg",
      "/project-shots/kwsb-2.jpg",
      "/project-shots/kwsb-3.jpg",
    ],
    overview: [
      "KWSB is the official mobile app for the Karachi Water & Sewerage Board, one of Pakistan's largest public utilities. It brings water-service tasks that used to mean queueing in person into a single app for citizens.",
      "I led the project as technical lead, owning the technical direction and delivery of the app across its service and payment flows for a very large user base.",
    ],
  },

  // ── CRM ─────────────────────────────────────────────────────────────
  {
    slug: "kafela",
    name: "Kafela",
    category: "CRM",
    platform: "web",
    role: "Full-stack Engineer",
    year: "",
    tagline: "A CRM for a religious community network.",
    summary:
      "A CRM platform for a religious organization and teaching network. I worked as a full-stack engineer building the product.",
    logo: "/portfolio-line-logos/kafela.webp",
    link: "https://kafelanetwork.vercel.app/",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "i18n"],
    highlights: [
      "CRM for managing a community & teaching network",
      "Multi-language content (incl. Bengali)",
      "Full-stack build from data model to UI",
    ],
    overview: [
      "Kafela is a CRM built for a religious community and teaching network. It organizes members, content, and teaching material into one system, with multi-language support so the community can use it in their own language.",
      "I worked as a full-stack engineer on the platform, building it from the data model and backend through to the user-facing interface.",
    ],
  },

  // ── Web Platform ────────────────────────────────────────────────────
  {
    slug: "yacht-master",
    name: "Yacht Master Inc",
    category: "Web Platform",
    platform: "web",
    role: "Software Engineer",
    year: "",
    tagline: "Marketplace for shops & luxury yachts.",
    summary:
      "An online marketplace connecting shops and buyers around yachts and luxury goods. I worked as a software engineer on the platform.",
    logo: "/portfolio-line-logos/yacht-master0inc.jfif",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Payments"],
    highlights: [
      "Two-sided marketplace for shops & yachts",
      "Listings, storefronts & buyer flows",
      "Engineered for a premium, luxury audience",
    ],
    overview: [
      "Yacht Master Inc is an online marketplace built around yachts and a network of shops — a two-sided platform connecting sellers and buyers in the luxury and marine space.",
      "I worked as a software engineer on the platform, contributing to the listings, storefront, and marketplace flows that power the product.",
    ],
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

/** Look up a single case study by slug. */
export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
