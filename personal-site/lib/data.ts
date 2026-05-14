export type WorkItem = {
  slug: string;
  company: string;
  site: string;
  role: string;
  period: string;
  location: string;
  type: string;
  tagline: string;
  stack: string[];
  description: string[];
  logo?: string;
};

export const works: WorkItem[] = [
  {
    slug: "mindkeepr",
    company: "MindKeepr",
    site: "https://mindkeepr.com",
    role: "Full-stack AI Engineer",
    period: "Feb 2025 – Present",
    location: "Tallinn, Estonia · Hybrid",
    type: "Full-time",
    tagline: "The Knowledge Retention Company",
    stack: ["Python", "Agentic AI", "LLMs", "RAG", "Vector Embeddings"],
    description: [
      "Leading the development of advanced AI-powered knowledge retention systems designed to help organizations seamlessly capture, structure, and deploy their internal knowledge at an enterprise scale.",
      "Architecting and deploying complex agentic AI pipelines that proactively surface the most relevant information exactly when users need it. This system significantly reduces the time required to onboard new team members and actively prevents critical institutional knowledge from being lost during employee transitions.",
      "Engineering solutions across the entire technical stack, from integrating large language models and building robust backend APIs to designing intuitive product interfaces. A major priority in this role is ensuring that all AI behaviors are completely reliable, highly predictable, and safe for mission-critical production environments.",
    ],
    logo: "/work-logos/mindkeeprlogo.png",
  },
  {
    slug: "watbot",
    company: "WatBot",
    site: "https://watbot.store",
    role: "Software Engineer",
    period: "Aug 2025 – Present",
    location: "Pakistan · Remote",
    type: "Self-employed",
    tagline: "Customer Support AI Powered by WhatsApp",
    stack: ["Go", "whatsmeow", "OpenAI", "React", "WebSockets"],
    description: [
      "Founded, architected, and successfully launched WatBot. This is a comprehensive WhatsApp AI platform engineered specifically for automating customer support, uniquely distributed as a secure, local-first compiled binary.",
      "Developed the core processing engine from scratch in Go, utilizing the whatsmeow library to achieve direct and highly efficient integration with the WhatsApp Web protocol. The conversational intelligence layer is powered by advanced OpenAI integrations, enabling the system to provide highly context-aware and natural responses to user inquiries.",
      "Designed and implemented a responsive React frontend that allows users to easily manage ongoing conversations and configure bot behaviors. The system architecture is fully prepared for an upcoming expansion to include Instagram and Facebook, aiming to provide complete automated coverage across the entire Meta ecosystem.",
    ],
    logo: "/work-logos/watbotlogo.png",
  },
  {
    slug: "cubitrek",
    company: "Cubitrek",
    site: "https://cubitrek.com",
    role: "Agentic AI Engineer & Full-stack Developer",
    period: "May 2024 – May 2025 · 1 yr 1 mo",
    location: "On-site",
    type: "Full-time",
    tagline: "Engineering & AI Systems",
    stack: ["Python", "Node.js", "Next.js", "Azure", "LLM Prompting", "Google Ads API"],
    description: [
      "Rapidly progressed from a Full-stack Developer role into the position of Agentic AI Engineer during a highly productive year at Cubitrek. Throughout this time, I focused on delivering machine learning-driven business solutions and developing sophisticated autonomous AI systems.",
      "During my tenure as an Agentic AI Engineer, I took ownership of designing and constructing complex agentic AI workflows using Python. My primary focus was on enabling autonomous task execution and orchestrating multiple large language models to solve intricate business problems without human intervention.",
      "In my foundational role as a Full-stack Developer, I engineered scalable MERN stack applications that seamlessly integrated custom machine learning algorithms and robust Python business logic. My responsibilities also included conducting deep research into the Google Ads API for data enrichment, managing Azure virtual machine infrastructure, and actively collaborating with the team on advanced LLM prompting strategies.",
    ],
    logo: "/work-logos/cubitreklogo.png",
  },
  {
    slug: "asmara-ai",
    company: "Asmara.AI",
    site: "https://asmara.ai",
    role: "Founder & Builder",
    period: "2025 – Present",
    location: "Karachi, Pakistan · Remote",
    type: "Self-employed",
    tagline: "AI-Native Product",
    stack: ["Next.js", "OpenAI", "Python", "Tailwind CSS"],
    description: [
      "Currently founding and actively building Asmara.AI, which is an innovative AI-native platform specifically targeted at revolutionizing automation and creating highly intelligent workflows for modern, fast-paced businesses.",
      "Taking complete ownership of designing the product architecture from end to end. This involves orchestrating complex LLM integrations, building resilient backend systems, and crafting seamless user-facing interfaces. Every technical decision is driven by a commitment to delivering practical, measurable AI utility rather than just following industry hype.",
    ],
    logo: "/work-logos/asmaraailogo.png",
  },
  {
    slug: "selfbrand",
    company: "SelfBrand.app",
    site: "https://selfbrand.app",
    role: "Founder & Builder",
    period: "2024 – Present",
    location: "Remote",
    type: "Self-employed",
    tagline: "AI Personal Branding for Founders",
    stack: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    description: [
      "Founded and developed SelfBrand.app, an innovative personal branding software-as-a-service platform. The system leverages AI to autonomously generate approximately eighty percent of the required output, including core brand positioning, daily content, social media presence, and long-term authority-building strategies.",
      "The platform is strategically targeted at busy founders, high-level service providers, and industry professionals. It provides them with a highly consistent and credible personal brand presence without requiring the massive financial overhead typically associated with hiring dedicated ghostwriters or specialized content marketing agencies.",
      "While the product competes directionally with existing AI content generation tools, social media schedulers, and traditional ghostwriting platforms, it strongly differentiates itself by offering a much deeper, highly customized layer of personal positioning and strategic brand planning.",
    ],
    logo: "/work-logos/selfbrand logo.png",
  },
  {
    slug: "vative-apps",
    company: "VativeApps",
    site: "https://vativeapps.com",
    role: "Node.js Developer",
    period: "Dec 2023 – May 2024 · 6 mos",
    location: "Karachi · On-site",
    type: "Full-time",
    tagline: "Mobile App Development Company",
    stack: ["Node.js", "Express", "SQL", "RabbitMQ", "OpenAI", "Google Play API"],
    description: [
      "Engineered robust and highly scalable Node.js Express REST APIs, alongside real-time WebSocket servers, to power the backend infrastructure for a diverse suite of VativeApps' mobile platform products.",
      "Successfully integrated complex third-party services, including the Google App Purchase API for seamless in-app billing and advanced OpenAI models for new AI-powered mobile features. Additionally, I implemented RabbitMQ to establish a highly reliable message queuing system across our distributed microservices.",
      "Maintained a rigorous focus on writing exceptionally well-structured and easily maintainable code. I consistently optimized system performance and query execution speeds across multiple complex SQL-backed relational database systems.",
    ],
    logo: "/work-logos/vativeappslogo.png",
  },
];

export const experience = [
  {
    role: "Full-stack AI Engineer",
    company: "MindKeepr",
    companySlug: "mindkeepr",
    period: "Feb 2025 – Present",
    location: "Tallinn, Estonia · Hybrid",
  },
  {
    role: "Software Engineer",
    company: "WatBot.ai",
    companySlug: "watbot",
    period: "Aug 2025 – Present",
    location: "Pakistan · Remote",
  },
  {
    role: "Agentic AI Engineer",
    company: "Cubitrek",
    companySlug: "cubitrek",
    period: "Feb 2025 – May 2025",
    location: "On-site",
  },
  {
    role: "Full-stack Developer",
    company: "Cubitrek",
    companySlug: "cubitrek",
    period: "May 2024 – May 2025",
    location: "On-site",
  },
  {
    role: "Node.js Developer",
    company: "VativeApps",
    companySlug: "vative-apps",
    period: "Dec 2023 – May 2024",
    location: "Karachi · On-site",
  },
];
