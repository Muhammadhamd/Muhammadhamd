import type { Faq } from "@/lib/seo";

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  solves: string[];
  builds: { title: string; body: string }[];
  stack: string[];
  related: { label: string; href: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "agentic-ai-development",
    name: "Agentic AI Development",
    metaTitle: "Hire an Agentic AI Engineer | Muhammad Hamd",
    metaDescription:
      "Custom agentic AI systems built by Muhammad Hamd: autonomous agents that plan, use tools, and execute multi-step work with LangChain, LangGraph, CrewAI, and AutoGen.",
    h1: "Agentic AI Development",
    tagline: "Autonomous systems that do the work",
    intro:
      "I'm Muhammad Hamd, an agentic AI engineer based in Karachi, Pakistan, and I build production-ready agentic AI systems for founders and teams worldwide. Agentic AI goes beyond a chatbot, because it is software that reasons across steps, calls tools and APIs, keeps memory, and completes real work on its own. I design and ship these systems end to end, from the planning layer through the production hardening that makes them reliable.",
    solves: [
      "Manual, multi-step workflows that eat your team's hours every week",
      "Tasks that need judgment and tool use, not just a single LLM call",
      "Processes where a human currently copies data between systems all day",
      "Operations that should run autonomously but safely, with guardrails",
    ],
    builds: [
      {
        title: "Autonomous agents",
        body: "Agents that plan a goal, choose the right tools, execute steps, and recover from errors. I build them with LangChain, LangGraph, CrewAI, or AutoGen, depending on what the job needs.",
      },
      {
        title: "Tool & API integration",
        body: "I give agents safe access to your real systems, including internal APIs, databases, search, and third-party services, so they can act rather than only talk.",
      },
      {
        title: "Memory & state",
        body: "Short-term and long-term memory so agents remember context across a task and across sessions, backed by vector stores and structured state.",
      },
      {
        title: "Human-in-the-loop & guardrails",
        body: "Approval gates, validation, and fallbacks that keep autonomous systems safe and predictable in production, which is the part most demos skip.",
      },
    ],
    stack: ["Python", "LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI", "Anthropic", "pgvector"],
    related: [
      { label: "See my Cubitrek agentic AI work", href: "/work/cubitrek" },
      { label: "LLM Integration service", href: "/services/llm-integration" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "What is agentic AI development?",
        a: "It is building AI systems that autonomously plan and execute multi-step tasks using tools, memory, and reasoning, rather than answering a single prompt. Think of an agent that can research, decide, call APIs, and finish a job on its own.",
      },
      {
        q: "Which agent framework do you use?",
        a: "It depends on the task. I use LangGraph for controllable stateful workflows, CrewAI for multi-agent collaboration, and AutoGen for conversational agent setups, and I fall back to plain LangChain or custom Python when that is simpler and more reliable.",
      },
      {
        q: "How do you keep autonomous agents safe?",
        a: "With guardrails such as input and output validation, scoped tool permissions, human approval for sensitive actions, retries with fallbacks, and monitoring. I treat reliability as a first-class requirement rather than an afterthought.",
      },
      {
        q: "Can you build an agent for my specific workflow?",
        a: "Yes. I start by mapping your actual workflow and success metrics, and then I design the smallest agentic system that solves it reliably. Email me with what you are trying to automate and I will tell you how I would approach it.",
      },
    ],
  },
  {
    slug: "llm-integration",
    name: "LLM Integration",
    metaTitle: "Hire an LLM Engineer for Your Product | Muhammad Hamd",
    metaDescription:
      "Add LLMs to your product the right way. Muhammad Hamd is a freelance LLM engineer who integrates OpenAI, Anthropic, and open-source models with RAG, prompt engineering, orchestration, and cost control.",
    h1: "LLM Integration",
    tagline: "LLMs wired into your product, properly",
    intro:
      "I'm Muhammad Hamd, an AI engineer from Karachi, Pakistan, and I integrate large language models into real products for companies worldwide. Adding an LLM is easy to prototype and hard to get right in production, because latency, cost, hallucinations, and reliability all bite. I handle the full integration, which covers model selection, RAG, prompt and context engineering, orchestration, evaluation, and the cost and fallback controls that keep it dependable.",
    solves: [
      "An LLM prototype that works in a demo but breaks or costs too much in production",
      "Hallucinated answers because the model isn't grounded in your data",
      "No clear way to evaluate, monitor, or improve LLM output over time",
      "Vendor lock-in or runaway API bills with no cost controls",
    ],
    builds: [
      {
        title: "Model selection & orchestration",
        body: "Choosing and combining OpenAI, Anthropic, and open-source models per task, with routing and orchestration so each request uses the right model at the right cost.",
      },
      {
        title: "RAG grounding",
        body: "Retrieval-augmented generation that grounds answers in your documents and data, which keeps them accurate, current, and traceable instead of made up.",
      },
      {
        title: "Prompt & context engineering",
        body: "Structured prompts, context windows, and output schemas that make responses consistent and machine-usable rather than free-form text.",
      },
      {
        title: "Evaluation & cost control",
        body: "Test harnesses, monitoring, caching, and fallbacks that control quality, latency, and spend as you scale.",
      },
    ],
    stack: ["OpenAI", "Anthropic", "Open-source LLMs", "RAG", "Python", "Node.js", "pgvector", "Pinecone"],
    related: [
      { label: "Enterprise AI work at MindKeepr", href: "/work/mindkeepr" },
      { label: "RAG & Vector Search service", href: "/services/rag-systems" },
      { label: "Agentic AI Development", href: "/services/agentic-ai-development" },
    ],
    faqs: [
      {
        q: "Which LLM providers do you work with?",
        a: "I work with OpenAI, Anthropic, and open-source models such as Llama and Mistral, whether self-hosted or accessed through a provider. I pick based on your accuracy, latency, privacy, and cost needs, and I often route between them.",
      },
      {
        q: "Should I use RAG or fine-tuning?",
        a: "Usually RAG first, because it grounds the model in your data, is cheaper to maintain, and updates instantly. Fine-tuning helps for style, format, or narrow tasks. I will recommend the right mix for your use case rather than defaulting to one.",
      },
      {
        q: "How do you control LLM costs?",
        a: "Through model routing that sends easy tasks to cheaper models, plus caching, prompt compression, output limits, and monitoring. Together these usually cut spend significantly without hurting quality.",
      },
      {
        q: "Can you integrate an LLM into an existing codebase?",
        a: "Yes. I regularly add LLM features to existing products and work alongside in-house teams through shared repos, code reviews, and clear documentation, so your team can maintain it after handoff.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Workflow Automation",
    metaTitle: "AI Workflow Automation with n8n & Python | Muhammad Hamd",
    metaDescription:
      "Replace manual operations with AI-driven workflow automation. Muhammad Hamd builds reliable pipelines with n8n, Make, and custom Python, complete with error handling and monitoring.",
    h1: "AI Workflow Automation",
    tagline: "Manual operations, automated reliably",
    intro:
      "I'm Muhammad Hamd, an AI automation engineer based in Karachi, Pakistan, and I build workflow automation for businesses worldwide. Most teams still move data by hand between tools, chase follow-ups, and copy-paste reports. I replace that repetitive digital work with AI-driven pipelines using n8n, Make, and custom Python, and these pipelines are reliable, observable, and built to keep running while you sleep.",
    solves: [
      "Hours lost every week to copy-paste work between apps and spreadsheets",
      "Manual follow-ups, data entry, and reporting that should run themselves",
      "Brittle no-code automations that silently break with no alerts",
      "Tasks that need AI judgment such as summarizing, classifying, or drafting inside a workflow",
    ],
    builds: [
      {
        title: "n8n & Make workflows",
        body: "Visual automations that connect your tools and add LLM steps for summarizing, classifying, routing, and drafting, and that stay maintainable by your team.",
      },
      {
        title: "Custom Python pipelines",
        body: "When no-code hits its limits, I build robust Python pipelines with proper error handling, retries, logging, and scheduling.",
      },
      {
        title: "AI-in-the-loop steps",
        body: "LLM-powered steps embedded in workflows that turn unstructured input such as emails, documents, and messages into structured actions automatically.",
      },
      {
        title: "Monitoring & reliability",
        body: "Alerts, retries, and dashboards so automations fail loudly and recover gracefully instead of breaking silently.",
      },
    ],
    stack: ["n8n", "Make", "Python", "OpenAI", "REST APIs", "Webhooks", "PostgreSQL", "Docker"],
    related: [
      { label: "CRM Automation service", href: "/services/crm-automation" },
      { label: "WhatsApp AI Automation", href: "/services/whatsapp-ai-automation" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "What can you automate with AI?",
        a: "Lead follow-ups, data entry and enrichment, reporting, email and message triage, document processing, content drafting, and any repetitive workflow that moves data between systems or needs simple judgment.",
      },
      {
        q: "Do you use n8n or custom code?",
        a: "Both. I use n8n or Make when a visual workflow is the fastest reliable option, and I switch to custom Python when the logic is complex or needs tighter control. Often the answer is a hybrid of the two.",
      },
      {
        q: "How reliable are these automations?",
        a: "Built properly, they are very reliable. I add error handling, retries, and monitoring so failures are caught and recovered, unlike quick no-code setups that break silently.",
      },
      {
        q: "How long does an automation take to build?",
        a: "A focused automation often takes from a few days to a couple of weeks, depending on the integrations and edge cases. I will give you a clear estimate after scoping the workflow.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    metaTitle: "CRM Automation with AI | Muhammad Hamd",
    metaDescription:
      "Automate your CRM with custom AI workflows for lead scoring, follow-up sequences, data enrichment, and reporting, all built by a production AI engineer.",
    h1: "Automate Your CRM with Custom AI Systems",
    tagline: "Your CRM, working on autopilot",
    intro:
      "I'm Muhammad Hamd, an AI engineer based in Karachi, Pakistan, and I build AI-powered CRM automation for sales and revenue teams worldwide. If you are searching for a CRM automation engineer who works with AI, that is exactly what I do. Your CRM holds the data but still needs people to score leads, write follow-ups, enrich records, and pull reports. I connect AI to HubSpot, Salesforce, Pipedrive, and GoHighLevel so those tasks happen automatically, accurately, and at scale.",
    solves: [
      "Reps spending selling time on manual data entry and follow-up writing",
      "Leads going cold because follow-ups are slow or inconsistent",
      "Dirty, incomplete CRM records that no one has time to enrich",
      "Reporting that takes hours to assemble by hand each week",
    ],
    builds: [
      {
        title: "AI lead scoring",
        body: "Models and rules that score and prioritize leads from your CRM data and signals, so reps focus on the deals most likely to close.",
      },
      {
        title: "Automated follow-up sequences",
        body: "Context-aware follow-ups that AI drafts and CRM events trigger, so each message is personalized at scale instead of a generic blast.",
      },
      {
        title: "Data enrichment & hygiene",
        body: "Automatic enrichment and de-duplication that keep records complete and clean without manual effort.",
      },
      {
        title: "Reporting & insights",
        body: "Pipeline and performance reports delivered automatically on a schedule, so leadership always has current numbers.",
      },
    ],
    stack: ["HubSpot", "Salesforce", "Pipedrive", "GoHighLevel", "n8n", "Python", "OpenAI", "REST APIs"],
    related: [
      { label: "AI Workflow Automation service", href: "/services/ai-automation" },
      { label: "Hire me", href: "/hire-me" },
      { label: "Contact", href: "/contact" },
    ],
    faqs: [
      {
        q: "How much does CRM automation with AI cost?",
        a: "It depends on the scope and on which CRM and workflows you need. Focused automations are priced per project, while broader builds are scoped after a short discovery call. Reach out and I will send a clear quote.",
      },
      {
        q: "Which CRMs do you support?",
        a: "Mainly HubSpot, Salesforce, Pipedrive, and GoHighLevel, plus any CRM with a usable API. I work with your existing setup rather than forcing a migration.",
      },
      {
        q: "Will AI follow-ups sound generic?",
        a: "No. They are grounded in each contact's CRM context and in your tone, so they read as personalized. You stay in control, with optional human approval before anything sends.",
      },
      {
        q: "How long does CRM automation take to set up?",
        a: "A first valuable automation such as AI follow-up sequences is often live within a couple of weeks. We start with the highest-impact workflow and expand from there.",
      },
    ],
  },
  {
    slug: "whatsapp-ai-automation",
    name: "WhatsApp AI Automation",
    metaTitle: "WhatsApp AI Automation in Pakistan | Muhammad Hamd",
    metaDescription:
      "Conversational WhatsApp AI automation for support and sales, built by Muhammad Hamd, creator of WatBot, a WhatsApp AI platform written in Go with OpenAI. Strong demand across Pakistan and MENA.",
    h1: "WhatsApp AI Automation",
    tagline: "AI that talks to your customers on WhatsApp",
    intro:
      "I'm Muhammad Hamd, an AI engineer based in Karachi, Pakistan, and I am the founder of WatBot, a WhatsApp AI automation platform. WhatsApp is where customers in Pakistan, MENA, and South Asia actually message businesses, and most of that is still answered by hand. I build conversational AI that handles support and sales on WhatsApp automatically, using the exact stack behind WatBot, which is a Go engine, the whatsmeow protocol library, and OpenAI-powered conversation.",
    solves: [
      "Support teams manually answering the same WhatsApp questions all day",
      "Slow response times that lose sales and frustrate customers",
      "No way to handle WhatsApp volume after hours or at scale",
      "Wanting AI replies that still escalate to a human when needed",
    ],
    builds: [
      {
        title: "Conversational AI agents",
        body: "AI that understands customer messages, answers in context, and handles common support and sales conversations on WhatsApp automatically.",
      },
      {
        title: "WhatsApp integration",
        body: "Reliable WhatsApp connectivity that uses the same whatsmeow-based approach as WatBot, with the option of the official WhatsApp Business API.",
      },
      {
        title: "Human handoff",
        body: "Smooth escalation to a human agent for complex cases, with the full conversation context so nothing is lost.",
      },
      {
        title: "Dashboard & controls",
        body: "A management dashboard to configure bot behavior, monitor conversations, and review performance.",
      },
    ],
    stack: ["Go", "whatsmeow", "OpenAI", "React", "WebSockets", "WhatsApp Business API"],
    related: [
      { label: "See WatBot, my WhatsApp AI platform", href: "/work/watbot" },
      { label: "AI Workflow Automation service", href: "/services/ai-automation" },
      { label: "Contact", href: "/contact" },
    ],
    faqs: [
      {
        q: "Can you build an AI system for my WhatsApp Business?",
        a: "Yes, and it is exactly what I do. I founded WatBot, a WhatsApp AI automation platform, so I can build a custom WhatsApp AI for your support or sales and integrate it with your systems.",
      },
      {
        q: "Do you use the official WhatsApp Business API?",
        a: "I work with both the official WhatsApp Business API and a whatsmeow-based engine like the one in WatBot. I will recommend the right approach for your volume, compliance needs, and budget.",
      },
      {
        q: "Can the AI hand off to a human?",
        a: "Yes. The system escalates to a human agent for anything it should not handle, and it passes along the full context so the customer never has to repeat themselves.",
      },
      {
        q: "Is WhatsApp AI automation useful in Pakistan and MENA?",
        a: "Very much so, because WhatsApp is the dominant business messaging channel across Pakistan, MENA, and South Asia, so automating it has an outsized impact on response time and sales.",
      },
    ],
  },
  {
    slug: "rag-systems",
    name: "RAG & Vector Search",
    metaTitle: "RAG & Vector Search Systems | Muhammad Hamd",
    metaDescription:
      "RAG and vector search systems that ground AI in your data. Muhammad Hamd builds accurate, production-ready retrieval pipelines with Pinecone, FAISS, Weaviate, and pgvector.",
    h1: "RAG & Vector Search Systems",
    tagline: "Grounded answers from your own data",
    intro:
      "I'm Muhammad Hamd, an AI engineer from Karachi, Pakistan, and I build retrieval-augmented generation (RAG) and vector search systems for technical teams worldwide. If your AI needs to answer from your documents, knowledge base, or product data accurately and with sources, then you need real retrieval rather than a bigger prompt. I design RAG pipelines end to end, which covers chunking, embeddings, vector storage, retrieval tuning, and evaluation, using Pinecone, FAISS, Weaviate, or pgvector.",
    solves: [
      "AI that hallucinates because it isn't grounded in your real data",
      "Search that returns irrelevant chunks and poor answers",
      "Large, changing knowledge bases the model can't fit in a prompt",
      "Needing answers with citations and traceability for trust",
    ],
    builds: [
      {
        title: "Ingestion & chunking",
        body: "Pipelines that parse and chunk your documents and data intelligently, so retrieval returns the right context instead of noise.",
      },
      {
        title: "Embeddings & vector storage",
        body: "The right embedding model and vector store for your scale and budget, whether Pinecone, Weaviate, FAISS, or pgvector, set up for fast and accurate search.",
      },
      {
        title: "Retrieval tuning",
        body: "Hybrid search, re-ranking, and metadata filtering so the most relevant context reaches the model every time.",
      },
      {
        title: "Evaluation & citations",
        body: "Retrieval evaluation together with grounded, cited answers, so you can measure quality and trust the output.",
      },
    ],
    stack: ["Pinecone", "FAISS", "Weaviate", "pgvector", "Python", "OpenAI", "Embeddings", "LangChain"],
    related: [
      { label: "Enterprise RAG work at MindKeepr", href: "/work/mindkeepr" },
      { label: "LLM Integration service", href: "/services/llm-integration" },
      { label: "Contact", href: "/contact" },
    ],
    faqs: [
      {
        q: "What is a RAG system?",
        a: "Retrieval-Augmented Generation retrieves relevant pieces of your own data and feeds them to an LLM at query time, so answers are grounded in your information instead of the model's training data, which keeps them accurate, current, and citable.",
      },
      {
        q: "Which vector database should I use?",
        a: "It depends on scale, budget, and infrastructure. pgvector is great if you already run Postgres, Pinecone is a managed option, and Weaviate or FAISS suit other needs. I will recommend one based on your requirements rather than a default.",
      },
      {
        q: "How do you improve RAG accuracy?",
        a: "Through better chunking, hybrid search that combines keywords and vectors, re-ranking, metadata filtering, and retrieval evaluation. Most weak RAG systems fail at retrieval rather than at the LLM, and that is where I focus.",
      },
      {
        q: "Can you add RAG to my existing AI app?",
        a: "Yes. I can add a retrieval layer to an existing LLM application so it answers from your data, with evaluation to prove the quality improvement.",
      },
    ],
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    metaTitle: "Hire an AI Chatbot Developer | Muhammad Hamd",
    metaDescription:
      "Custom AI chatbot development by the founder of WatBot. Support and sales chatbots grounded in your data with RAG, deployed on your website, WhatsApp, or app.",
    h1: "Custom AI Chatbot Development",
    tagline: "Chatbots that answer from your data, not guesses",
    intro:
      "I'm Muhammad Hamd, an AI engineer based in Karachi, Pakistan, and I founded WatBot, a WhatsApp AI platform for customer support. I build custom AI chatbots for businesses worldwide, which means bots grounded in your real data through RAG rather than a thin wrapper over a prompt. I handle the full build, from conversation design and knowledge grounding to deployment on your website, WhatsApp, or app, plus the monitoring that keeps answers accurate in production.",
    solves: [
      "Support teams answering the same questions by hand all day",
      "Off-the-shelf bots that can't answer questions about your product or policies",
      "Leads that message you after hours and never hear back",
      "A chatbot demo that impressed everyone but was never safe to put in front of customers",
    ],
    builds: [
      {
        title: "Support & sales chatbots",
        body: "Chatbots that resolve common support questions and qualify leads in natural conversation, tuned to how your business actually talks to customers.",
      },
      {
        title: "Grounding in your data",
        body: "RAG pipelines that connect the bot to your docs, help center, and product data, so it answers from facts with sources instead of guessing.",
      },
      {
        title: "Multi-channel deployment",
        body: "One bot deployed where your customers are, whether that is a website widget, WhatsApp using the approach behind WatBot, or inside your app.",
      },
      {
        title: "Human handoff & monitoring",
        body: "Escalation to a human with full context when the bot should not answer, plus logs and analytics so you can see what customers ask and where the bot needs work.",
      },
    ],
    stack: ["OpenAI", "Anthropic", "RAG", "pgvector", "Node.js", "Next.js", "Go", "WhatsApp Business API"],
    related: [
      { label: "See WatBot, my WhatsApp AI platform", href: "/work/watbot" },
      { label: "RAG & Vector Search service", href: "/services/rag-systems" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "How much does custom AI chatbot development cost?",
        a: "It depends on channels, integrations, and how much knowledge grounding the bot needs. My work runs $50 to $120 per hour, and I quote fixed prices for well-defined builds. Tell me your use case and I will send a clear quote.",
      },
      {
        q: "Why build a custom chatbot instead of using an off-the-shelf tool?",
        a: "Off-the-shelf tools are fine for a simple FAQ list. A custom build makes sense when the bot must answer accurately from your data, follow your business logic, integrate with your systems, or run on WhatsApp at scale. You own the system, and it grows with you instead of hitting a plan limit.",
      },
      {
        q: "Can the chatbot answer questions from our own documents?",
        a: "Yes. I ground chatbots in your documents and data with RAG, so answers come from your actual content and can include sources. That is the difference between a bot that helps customers and one that makes things up.",
      },
      {
        q: "Which channels can you deploy an AI chatbot on?",
        a: "Website chat widgets, WhatsApp, and in-app chat are the most common. I founded WatBot, a WhatsApp AI automation platform, so WhatsApp deployments in particular are production work I do every day.",
      },
    ],
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    metaTitle: "MVP Development for Startups | Muhammad Hamd",
    metaDescription:
      "MVP development for startups with Next.js, Node.js, and AI where it matters. By Muhammad Hamd, who shipped SelfBrand.app, WatBot, and Asmara.AI solo.",
    h1: "MVP Development for Startups",
    tagline: "From idea to a working product, in weeks",
    intro:
      "I'm Muhammad Hamd, a full-stack and AI engineer based in Karachi, Pakistan, and I build MVPs for founders who need a real product rather than a prototype. I have shipped my own products solo, including SelfBrand.app, WatBot, and Asmara.AI, so I make the same calls a founder makes: what to build now, what to keep manual, and what to cut. I build with Next.js, Node.js, Python, and PostgreSQL, and I add AI where it earns its place rather than as a sticker on the landing page.",
    solves: [
      "An idea and maybe designs, but no technical co-founder to build it",
      "Agency quotes that cost more and take longer than your runway allows",
      "A no-code prototype that proved demand but can't become a real product",
      "Investors and customers expecting an AI feature that actually works",
    ],
    builds: [
      {
        title: "Scope & architecture",
        body: "A build plan that cuts the MVP to what proves the business, with an architecture you can grow instead of rewrite.",
      },
      {
        title: "The full product",
        body: "Frontend, backend, database, auth, payments, and deployment, built end to end with Next.js, Node.js, and PostgreSQL.",
      },
      {
        title: "AI features that earn their place",
        body: "RAG, chat, and automation where they genuinely improve the product, built the same way I built them into SelfBrand.app and WatBot.",
      },
      {
        title: "Launch & handoff",
        body: "Deployment, monitoring, and clean documented code, so your future team can take over without archaeology.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "OpenAI", "Vercel"],
    related: [
      { label: "See SelfBrand.app, a SaaS I built solo", href: "/work/selfbrand" },
      { label: "AI Chatbot Development service", href: "/services/ai-chatbot-development" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "How long does MVP development take?",
        a: "Most MVPs I build take four to eight weeks depending on scope. The biggest factor is how disciplined we are about cutting features, and I will push you to cut, because a smaller product launched sooner teaches you more than a bigger one launched late.",
      },
      {
        q: "How much does it cost to build an MVP?",
        a: "It depends on scope, but my rate is $50 to $120 per hour and I quote fixed prices for well-defined builds. That usually lands well below US agency quotes for the same product, because you are paying one senior engineer rather than an agency's overhead.",
      },
      {
        q: "Can you build an AI MVP?",
        a: "Yes, and it is where I do my best work, because I am both a full-stack engineer and an AI engineer. I build the product and the AI inside it as one system, including RAG, chat, and automation, instead of bolting an API call onto a form.",
      },
      {
        q: "What happens after the MVP launches?",
        a: "You get clean, documented code that any competent team can take over, and I can stay on for iterations if you want. I run my own products in production, so I build with maintenance in mind from day one.",
      },
    ],
  },
  {
    slug: "n8n-automation",
    name: "n8n Development",
    metaTitle: "Hire an n8n Developer & Expert | Muhammad Hamd",
    metaDescription:
      "Hire an n8n developer who builds automation that holds up in production. Workflow design, self-hosted n8n setup, custom API integrations, and AI steps.",
    h1: "Hire an n8n Developer",
    tagline: "n8n workflows that hold up in production",
    intro:
      "I'm Muhammad Hamd, an automation engineer based in Karachi, Pakistan, and I build and maintain n8n workflows for businesses worldwide. n8n is my daily tool for AI workflow automation, and the difference between a weekend n8n experiment and a workflow your business depends on is error handling, monitoring, and clean design. I do the full job, which covers designing workflows, self-hosting n8n properly, building custom integrations, and adding LLM steps that give your automations judgment.",
    solves: [
      "Workflows someone built once that now break silently and nobody can fix",
      "An n8n instance on a starter server that falls over as volume grows",
      "APIs and internal tools that n8n's built-in nodes don't cover",
      "Automations that need AI judgment such as classifying, summarizing, or drafting",
    ],
    builds: [
      {
        title: "Workflow design & build",
        body: "Clean, documented n8n workflows that your team can read and modify, built around your actual process instead of a template.",
      },
      {
        title: "Self-hosted n8n done right",
        body: "Docker-based self-hosted setups with backups, upgrades, queue mode for scale, and monitoring, so the instance itself is never the weak point.",
      },
      {
        title: "Custom nodes & API integrations",
        body: "When a built-in node does not exist, I write the code node or custom integration that connects n8n to your internal APIs and tools.",
      },
      {
        title: "AI steps inside workflows",
        body: "LLM-powered steps for classifying, summarizing, extracting, and drafting, wired into n8n with cost controls and fallbacks.",
      },
    ],
    stack: ["n8n", "Docker", "PostgreSQL", "JavaScript", "Python", "OpenAI", "Webhooks", "REST APIs"],
    related: [
      { label: "AI Workflow Automation service", href: "/services/ai-automation" },
      { label: "CRM Automation service", href: "/services/crm-automation" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "What does an n8n developer do that I can't do myself?",
        a: "n8n's visual editor makes simple automations easy, and you should build those yourself. An n8n developer earns their fee on the hard parts, such as error handling, self-hosted scaling, custom API integrations, and AI steps, which is the difference between a demo and a system your business can rely on.",
      },
      {
        q: "Should I self-host n8n or use n8n Cloud?",
        a: "n8n Cloud is the right call if you want zero maintenance and your volume is modest. Self-hosting wins on cost at scale, data control, and custom nodes. I set up self-hosted instances with Docker, backups, and monitoring, and I will tell you honestly which one fits your case.",
      },
      {
        q: "Can you fix or take over an existing n8n setup?",
        a: "Yes, and it is a common request. I audit the existing workflows, add the missing error handling and alerts, document what each workflow does, and then extend from there, so you are not locked to whoever built it first.",
      },
      {
        q: "What does it cost to hire an n8n developer?",
        a: "My work runs $50 to $120 per hour, with fixed prices for well-defined workflow builds. A focused automation is often live within days to a couple of weeks, so the typical project is small compared to the hours it saves.",
      },
    ],
  },
  {
    slug: "ai-visibility",
    name: "AI Visibility Audit",
    metaTitle: "AI Visibility Audit for Products & SaaS | Muhammad Hamd",
    metaDescription:
      "Find out if ChatGPT, Perplexity, and Claude can see your product, then fix it. Muhammad Hamd audits structured data, rendering, and entity consistency and repairs what he finds.",
    h1: "AI Visibility Audit",
    tagline: "Ranking on Google is not the same as being cited by AI",
    intro:
      "I'm Muhammad Hamd, a full-stack and AI engineer based in Karachi, Pakistan, and I audit and fix why products are invisible to AI platforms even when they rank fine on Google. I ran this exact audit on my own site, hamdali.com, using AI-assisted tooling, and found real gaps, including structured data that looked correct in the code but resolved as an empty, dangling reference on every page except the homepage. I fix the same class of problem for other builders, from the schema and rendering layer up to how consistently your brand appears across the web.",
    solves: [
      "Your product ranks on Google, but ChatGPT, Perplexity, and Claude have never heard of it",
      "Structured data that looks right in the code but is broken or incomplete on the actual page",
      "Content that renders fine in a browser but is invisible to crawlers because it loads client-side",
      "No way to tell whether GPTBot, ClaudeBot, or PerplexityBot can even reach your site",
    ],
    builds: [
      {
        title: "The AI visibility audit",
        body: "I test your product with real prompts across ChatGPT, Perplexity, and Claude, check how much of your site is actually indexed, and inspect every page's structured data for gaps and dangling references, the same process I ran on my own site.",
      },
      {
        title: "Structured data & entity fixes",
        body: "I repair and add Organization, Product, Person, and FAQPage schema so it resolves correctly on every page, not just the homepage, and ties back to one consistent entity.",
      },
      {
        title: "Server-side rendering & crawler access",
        body: "I confirm your key content and schema render in the raw server HTML, not only after client-side JavaScript runs, and that AI crawlers are not accidentally blocked in robots.txt.",
      },
      {
        title: "Entity consistency & citation groundwork",
        body: "I align your name, description, and positioning across your site, LinkedIn, GitHub, and directories, and add an llms.txt file and quotable, self-contained FAQ content that AI models can cite directly.",
      },
    ],
    stack: ["JSON-LD", "Schema.org", "Next.js SSR", "GPTBot", "PerplexityBot", "ClaudeBot", "llms.txt", "Google Search Console"],
    related: [
      { label: "Is Your Product Visible on AI Platforms?", href: "/blog/is-my-product-visible-on-ai-platforms" },
      { label: "Why AI Visibility Differs by Region", href: "/blog/ai-visibility-by-region" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "What is an AI visibility audit?",
        a: "It is a check of whether AI platforms such as ChatGPT, Perplexity, and Claude can find, read, and cite your product, covering structured data, server-side rendering, crawler access, and entity consistency. Most sites have never had this checked, only a traditional SEO audit.",
      },
      {
        q: "How is this different from a normal SEO audit?",
        a: "A traditional SEO audit checks whether Google can rank you. This checks whether AI models can find and cite you, which depends more on structured data resolving correctly per page, content being server-rendered, and your entity being consistent across the web, not just keywords and backlinks.",
      },
      {
        q: "Do you just report issues, or fix them too?",
        a: "I fix them. I found and repaired a dangling schema reference across my own site's pages, added missing structured data, and confirmed server-side rendering, so this is the same hands-on engineering work, not a slide deck of recommendations.",
      },
      {
        q: "How much does an AI visibility audit cost?",
        a: "It depends on the size of your site and how many issues surface. I scope it after a short look at what you have and send a clear quote, the same way I do for any project.",
      },
    ],
  },
  {
    slug: "full-stack-development",
    name: "Full-Stack Development",
    metaTitle: "Hire a Full-Stack AI Developer | Muhammad Hamd",
    metaDescription:
      "Full-stack development with AI built in. Muhammad Hamd builds complete products in Next.js, Node.js, and Python, from MindKeepr enterprise systems to SelfBrand.app.",
    h1: "Full-Stack AI Development",
    tagline: "The whole product, not just the model",
    intro:
      "I'm Muhammad Hamd, a full-stack and AI engineer based in Karachi, Pakistan, and I build complete products end to end. Most AI engineers can wire up a model but cannot ship the product around it, and most full-stack developers bolt AI on as an afterthought. I do both, because I have built AI into my own products such as SelfBrand.app and Asmara.AI, and I engineer full production stacks at MindKeepr in Estonia. I work in Next.js, Node.js, Python, and PostgreSQL, from the database to the interface.",
    solves: [
      "Needing one engineer who can build the frontend, backend, and the AI inside it",
      "Handing an AI feature to a full-stack team that has never shipped one in production",
      "A product that stalls because the model works but nothing around it does",
      "Juggling separate contractors for the app, the API, and the AI",
    ],
    builds: [
      {
        title: "Frontend & interfaces",
        body: "Fast, accessible interfaces in Next.js and React, the same stack behind SelfBrand.app, Asmara.AI, and this site, built for real users rather than a demo.",
      },
      {
        title: "Backend & APIs",
        body: "Reliable backends and REST or streaming APIs in Node.js and Python, with auth, background jobs, and the database design that keeps them fast as you grow.",
      },
      {
        title: "AI as part of the product",
        body: "LLM features, RAG, chat, and automation engineered into the product itself, not stapled on, so the AI and the app share one clean architecture.",
      },
      {
        title: "Deployment & reliability",
        body: "Deployment on Vercel or your own infrastructure, with monitoring, error handling, and documentation, so the product runs and your team can maintain it.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "OpenAI", "Docker"],
    related: [
      { label: "MVP Development service", href: "/services/mvp-development" },
      { label: "See SelfBrand.app, built end to end", href: "/work/selfbrand" },
      { label: "Hire me", href: "/hire-me" },
    ],
    faqs: [
      {
        q: "What does full-stack AI development mean?",
        a: "It means building the complete product, the frontend, the backend, the database, and the AI inside it, as one system. I am both a full-stack engineer and an AI engineer, so you get the app and the intelligence in it from one person rather than stitching together separate contractors.",
      },
      {
        q: "Which stack do you build with?",
        a: "Next.js and React on the frontend, Node.js and Python on the backend, PostgreSQL for data, and OpenAI or Anthropic for AI, all deployed on Vercel or your own infrastructure. It is the same stack I use for my own products and at MindKeepr.",
      },
      {
        q: "Can you join an existing engineering team?",
        a: "Yes. I work alongside in-house teams through shared repos, code reviews, and clear documentation, and I am comfortable owning either the AI layer or a full feature end to end. The UTC+5 time zone overlaps EU mornings and US evenings for daily collaboration.",
      },
      {
        q: "Do you only build AI products?",
        a: "No. I build standard web products too, and I add AI only where it genuinely improves them. If your product does not need AI, I will tell you honestly rather than sell you a feature you will not use.",
      },
    ],
  },
];
