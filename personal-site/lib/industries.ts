import type { Faq } from "@/lib/seo";

export type Industry = {
  slug: string; // "restaurants" -> /ai-for/restaurants
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  useCases: { title: string; body: string }[];
  workflow: string[]; // "what I'd automate first", ordered
  proof: { label: string; href: string };
  services: { label: string; href: string }[];
  faqs: Faq[];
};

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    metaTitle: "AI & WhatsApp Automation for Restaurants | Muhammad Hamd",
    metaDescription:
      "WhatsApp ordering bots and AI automation for restaurants, by WatBot founder Muhammad Hamd. Take orders, handle bookings, and answer customers automatically.",
    h1: "AI Automation for Restaurants",
    tagline: "Take orders and answer customers, automatically",
    intro: [
      "I'm Muhammad Hamd, an AI and automation engineer based in Karachi, Pakistan, and I build AI systems that let restaurants take orders and answer customers on WhatsApp without a person watching the phone all day. Most restaurants lose orders during the rush and after hours, because someone has to read every message and reply by hand.",
      "I founded WatBot, a WhatsApp AI automation platform, so a WhatsApp ordering bot is not a template I bought. It is the exact kind of system I built and run. I connect the bot to your menu, your booking calendar, and your team, so it handles the routine and passes real edge cases to a human.",
    ],
    useCases: [
      {
        title: "WhatsApp ordering bot",
        body: "Customers browse the menu, place an order, and confirm it in a WhatsApp chat. The bot understands natural messages, not just button taps, and sends clean orders to your kitchen.",
      },
      {
        title: "Reservations & bookings",
        body: "The AI takes table reservations, checks availability against your calendar, confirms, and reminds, so no booking is lost in a full inbox.",
      },
      {
        title: "Menu & FAQ answers",
        body: "Grounded in your real menu and policies with RAG, the bot answers questions about ingredients, timings, delivery areas, and prices without making things up.",
      },
      {
        title: "Review & follow-up automation",
        body: "After an order, the AI can request a review, handle a complaint gracefully, and re-engage past customers with an offer, all on the channel they already use.",
      },
    ],
    workflow: [
      "Map your busiest message types, usually orders, timings, and delivery questions, and automate those first.",
      "Connect the bot to your menu and booking calendar so answers and orders are always current.",
      "Set the human handoff rules, so anything sensitive or unusual reaches your team with full context.",
      "Launch on WhatsApp, watch real conversations, and tune the bot from what customers actually ask.",
    ],
    proof: { label: "See WatBot, my WhatsApp AI platform", href: "/work/watbot" },
    services: [
      { label: "WhatsApp AI Automation", href: "/services/whatsapp-ai-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "AI Workflow Automation", href: "/services/ai-automation" },
    ],
    faqs: [
      {
        q: "Can you build a WhatsApp ordering bot for my restaurant?",
        a: "Yes. I founded WatBot, a WhatsApp AI platform, and I build ordering bots that read natural messages, take orders against your real menu, and send them to your kitchen. The bot hands anything unusual to a human with the full conversation.",
      },
      {
        q: "Will the bot understand messages, not just menu buttons?",
        a: "Yes. It uses an LLM to understand how customers actually type, including typos and half-sentences, and it stays grounded in your menu and policies through RAG so its answers are accurate.",
      },
      {
        q: "Can it handle reservations and busy-time rushes?",
        a: "Yes. The AI takes reservations against your calendar and replies instantly even when every table is full and nobody can reach the phone, which is exactly when restaurants lose orders today.",
      },
      {
        q: "How much does restaurant AI automation cost?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined builds. A first WhatsApp ordering and FAQ bot is often live within a couple of weeks, so the initial project stays small and pays back quickly during the rush.",
      },
    ],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    metaTitle: "AI Automation for Marketing Agencies | Muhammad Hamd",
    metaDescription:
      "White-label AI automation for marketing agencies. Muhammad Hamd builds client reporting, content pipelines, and AI chatbots you can resell under your own brand.",
    h1: "AI Automation for Marketing Agencies",
    tagline: "AI builds you can resell under your own brand",
    intro: [
      "I'm Muhammad Hamd, an AI and automation engineer based in Karachi, Pakistan, and I build AI systems that marketing agencies deliver to their clients under their own brand. Agencies win AI work faster than they can staff it, and hiring an in-house AI engineer rarely pencils out for a handful of client projects.",
      "I work as your quiet build partner. I have shipped my own AI product, SelfBrand.app, which automates personal branding content end to end, and I did deep Google Ads API data work at Cubitrek, so I understand both the marketing side and the engineering side of what you sell. You keep the client relationship, and I keep the systems reliable.",
    ],
    useCases: [
      {
        title: "White-label AI builds",
        body: "Chatbots, automations, and AI features built to your spec and delivered under your brand, so you can sell AI services without hiring an engineer for each project.",
      },
      {
        title: "Client reporting automation",
        body: "Automated pulls from ad platforms, analytics, and CRMs into clean scheduled reports, so your team stops assembling slide decks by hand every month.",
      },
      {
        title: "Content & campaign pipelines",
        body: "AI-drafted content and campaign assets at scale, grounded in each client's voice and brief, the same approach behind SelfBrand.app.",
      },
      {
        title: "GoHighLevel & CRM automation",
        body: "Lead capture, follow-up sequences, and enrichment wired into GoHighLevel or your clients' CRMs, so campaigns convert without manual chasing.",
      },
    ],
    workflow: [
      "Start with one repeatable deliverable you sell often, such as reporting or lead follow-up, and automate that first.",
      "Package it as a white-label system your account team can deploy for any client.",
      "Add AI where it lifts quality, such as content drafting or chat, with your brand and voice baked in.",
      "Hand you clean documentation, so your team runs it day to day and I stay on only for new builds.",
    ],
    proof: { label: "See SelfBrand.app, my AI content product", href: "/work/selfbrand" },
    services: [
      { label: "AI Workflow Automation", href: "/services/ai-automation" },
      { label: "CRM Automation", href: "/services/crm-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
    ],
    faqs: [
      {
        q: "Do you white-label AI work for agencies?",
        a: "Yes. I build under your brand and stay behind the scenes, so the work ships as yours. You own the client relationship and pricing, and I deliver the systems and keep them reliable.",
      },
      {
        q: "Can you automate client reporting across ad platforms?",
        a: "Yes. I connect ad platforms, analytics, and CRMs into automated, scheduled reports. I did deep Google Ads API data work at Cubitrek, so pulling and shaping marketing data into clean reports is familiar ground.",
      },
      {
        q: "Can agencies resell chatbots and automations you build?",
        a: "Yes, that is the core of how I work with agencies. I build the chatbot or automation to your spec, you deploy it for your client under your brand, and I provide documentation so your team can support it.",
      },
      {
        q: "How does pricing work for agency partnerships?",
        a: "My work runs $50 to $120 per hour, with fixed quotes per build, and many agencies keep me on a light retainer for ongoing projects. You mark up the work to your client as you see fit.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Clinics & Healthcare",
    metaTitle: "AI & WhatsApp Automation for Clinics | Muhammad Hamd",
    metaDescription:
      "WhatsApp automation and AI for clinics and healthcare practices. Muhammad Hamd builds appointment reminders, patient intake, and admin automation with human oversight.",
    h1: "AI Automation for Clinics and Healthcare",
    tagline: "Automate the admin, keep humans in the loop",
    intro: [
      "I'm Muhammad Hamd, an AI and automation engineer based in Karachi, Pakistan, and I build AI systems that take the repetitive admin work off clinic staff so they can focus on patients. Front desks spend hours on appointment reminders, intake forms, and the same WhatsApp questions all day, and every one of those is automatable.",
      "I am careful about where AI belongs in healthcare. I automate the administrative layer, such as scheduling, reminders, intake, and document summaries, and I keep a human in the loop for anything clinical. I hold these systems to the reliability standards I apply at MindKeepr in Estonia, where the AI pipelines are mission-critical, because a healthcare setting is no place for a bot that guesses.",
    ],
    useCases: [
      {
        title: "Appointment reminders & scheduling",
        body: "Automated WhatsApp and SMS reminders that cut no-shows, plus booking and rescheduling against your calendar, so the front desk is not on the phone all day.",
      },
      {
        title: "Patient intake on WhatsApp",
        body: "Conversational intake that collects details and forms before the visit in the channel patients already use, in English or the local language, with the data handed cleanly to your team.",
      },
      {
        title: "FAQ and triage-to-human",
        body: "An assistant that answers routine questions about timings, location, and services, grounded in your real information, and routes anything clinical or sensitive straight to a person.",
      },
      {
        title: "Document & report summaries",
        body: "AI that summarizes and organizes admin documents and correspondence to save staff time, with outputs a human reviews rather than acts on blindly.",
      },
    ],
    workflow: [
      "Start with no-shows. Automated appointment reminders are the fastest, safest win and pay for themselves quickly.",
      "Move routine WhatsApp questions and intake to an assistant, so the front desk handles exceptions, not repetition.",
      "Set strict human-in-the-loop rules, so anything clinical or sensitive always reaches a person with full context.",
      "Keep data controlled, with options to run on your own infrastructure, and review outputs before they are trusted.",
    ],
    proof: { label: "See my enterprise AI work at MindKeepr", href: "/work/mindkeepr" },
    services: [
      { label: "WhatsApp AI Automation", href: "/services/whatsapp-ai-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "AI Workflow Automation", href: "/services/ai-automation" },
    ],
    faqs: [
      {
        q: "Can you build WhatsApp automation for a clinic?",
        a: "Yes. I build WhatsApp automation for appointment reminders, patient intake, and routine questions, and I founded WatBot, a WhatsApp AI platform, so this is production work I do regularly. Anything clinical or sensitive is routed to a human with full context.",
      },
      {
        q: "Is it safe to use AI in a healthcare setting?",
        a: "It is safe when you use it for the right things. I automate the administrative layer, such as scheduling, reminders, and intake, and I keep humans in the loop for anything clinical. I do not build AI to make medical decisions, and I hold these systems to enterprise reliability standards.",
      },
      {
        q: "How do you handle patient data?",
        a: "I design systems with data control as a requirement, including keeping data on your own infrastructure where needed and limiting what the AI can access. Privacy and reliability are treated as first-class parts of the build, not afterthoughts.",
      },
      {
        q: "What does clinic automation cost?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined builds. A first system such as automated appointment reminders and WhatsApp intake is often live within a couple of weeks and pays back quickly by cutting no-shows and front-desk load.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    metaTitle: "AI Automation for E-Commerce Stores | Muhammad Hamd",
    metaDescription:
      "AI automation for e-commerce, by WatBot founder Muhammad Hamd. WhatsApp order updates, COD confirmation, product-catalog chatbots, and abandoned-cart follow-ups.",
    h1: "AI Automation for E-Commerce",
    tagline: "Answer, confirm, and recover sales automatically",
    intro: [
      "I'm Muhammad Hamd, an AI and automation engineer based in Karachi, Pakistan, and I build AI systems that handle the repetitive customer messages and follow-ups that eat an online store's time. Most stores answer the same questions all day, chase abandoned carts by hand, and lose orders to slow replies, and all of that can run on its own.",
      "I founded WatBot, a WhatsApp AI platform, which matters for e-commerce in markets like Pakistan and the Gulf where a large share of orders run on cash on delivery and get confirmed over WhatsApp. I build the conversational flows that confirm those orders, cut fake COD orders, and answer product questions grounded in your real catalog.",
    ],
    useCases: [
      {
        title: "Order status & support on WhatsApp",
        body: "An assistant that answers where-is-my-order and product questions instantly, grounded in your catalog and order data with RAG, so support is not a person copying tracking numbers all day.",
      },
      {
        title: "COD confirmation flows",
        body: "Automated WhatsApp confirmation for cash-on-delivery orders that verifies the customer before dispatch, which cuts fake orders and failed deliveries in COD-heavy markets.",
      },
      {
        title: "Abandoned-cart recovery",
        body: "AI-timed follow-ups that recover carts on the channel customers actually read, personalized to what they left behind rather than a generic blast.",
      },
      {
        title: "Product catalog chatbot",
        body: "A chatbot that answers questions about sizes, stock, variants, and delivery from your live catalog, so browsers get an answer and convert instead of leaving.",
      },
    ],
    workflow: [
      "Start with the message you send most, usually order status and COD confirmation, and automate those first.",
      "Connect the bot to your store data and catalog so answers and confirmations are always accurate.",
      "Add abandoned-cart follow-ups on WhatsApp, where open rates are far higher than email.",
      "Route complaints and edge cases to a human with full context, so nothing sensitive is handled by a bot.",
    ],
    proof: { label: "See WatBot, my WhatsApp AI platform", href: "/work/watbot" },
    services: [
      { label: "WhatsApp AI Automation", href: "/services/whatsapp-ai-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "CRM Automation", href: "/services/crm-automation" },
    ],
    faqs: [
      {
        q: "Can you automate WhatsApp for my online store?",
        a: "Yes. I founded WatBot, a WhatsApp AI platform, and I build WhatsApp automation for order status, COD confirmation, product questions, and abandoned-cart recovery, grounded in your real store data so answers are accurate.",
      },
      {
        q: "Can AI reduce fake cash-on-delivery orders?",
        a: "Yes. An automated WhatsApp confirmation flow verifies the customer and the order before dispatch, which cuts fake COD orders and failed deliveries. This is a common, high-return automation for stores in Pakistan and the Gulf.",
      },
      {
        q: "Does the chatbot answer from my live product catalog?",
        a: "Yes. I ground the chatbot in your catalog and order data with RAG, so it answers questions about stock, sizes, variants, and delivery from your real information rather than guessing.",
      },
      {
        q: "How much does e-commerce AI automation cost?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined builds. A first automation such as order-status and COD-confirmation flows is often live within a couple of weeks and pays back quickly through recovered sales and fewer failed deliveries.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    metaTitle: "AI Automation for Logistics & Freight | Muhammad Hamd",
    metaDescription:
      "AI automation for logistics and freight forwarders. Muhammad Hamd builds shipment updates, document processing, and quote automation with Python and LLMs.",
    h1: "AI Automation for Logistics and Freight",
    tagline: "Automate the paperwork and the status chasing",
    intro: [
      "I'm Muhammad Hamd, an AI and automation engineer based in Karachi, Pakistan, a major port and freight hub, and I build AI systems for logistics companies and freight forwarders. This industry runs on documents and status updates, and both are full of manual work, from reading bills of lading and invoices by hand to answering where-is-my-shipment all day.",
      "I have built the kind of engineering this needs. At Cubitrek I built agentic AI workflows and Python business logic that automate multi-step processes, and document-heavy operations are exactly where that pays off. I connect AI to your real systems so the routine runs itself and your team handles the exceptions.",
    ],
    useCases: [
      {
        title: "Document processing",
        body: "AI that reads and extracts data from bills of lading, invoices, and customs paperwork, turning documents into structured records instead of manual data entry.",
      },
      {
        title: "Shipment status updates",
        body: "Automated status replies on WhatsApp and email, grounded in your tracking data, so customers and partners get answers without a person checking a portal each time.",
      },
      {
        title: "Quote & booking automation",
        body: "Workflows that draft quotes and capture bookings from incoming requests, so enquiries turn into jobs faster with less back and forth.",
      },
      {
        title: "Exception alerts",
        body: "Monitoring that flags delays, missing documents, and stuck shipments and routes them to the right person, so problems surface early instead of at the deadline.",
      },
    ],
    workflow: [
      "Start with the highest-volume manual task, usually document data entry or status replies, and automate that first.",
      "Connect the AI to your tracking and document systems so extractions and updates are accurate.",
      "Add exception alerts, so delays and missing paperwork are caught early rather than at the deadline.",
      "Keep a human in the loop for anything customs-sensitive or high-value, with full context passed along.",
    ],
    proof: { label: "See my agentic workflow work at Cubitrek", href: "/work/cubitrek" },
    services: [
      { label: "AI Workflow Automation", href: "/services/ai-automation" },
      { label: "RAG & Vector Search", href: "/services/rag-systems" },
      { label: "WhatsApp AI Automation", href: "/services/whatsapp-ai-automation" },
    ],
    faqs: [
      {
        q: "Can AI automate freight and logistics paperwork?",
        a: "Yes. I build AI that reads bills of lading, invoices, and customs documents and extracts the data into structured records, which removes a large amount of manual entry. Outputs can be reviewed by a person before anything customs-sensitive is acted on.",
      },
      {
        q: "Can you automate shipment status replies?",
        a: "Yes. I build automated status responses on WhatsApp and email grounded in your tracking data, so customers and partners get instant answers instead of your team checking a portal for every enquiry.",
      },
      {
        q: "Do you understand the logistics industry?",
        a: "I am based in Karachi, a major port and freight hub, and I built document-heavy and agentic automation at Cubitrek. The problem shape here, structured data trapped in documents and repetitive status work, is exactly what that engineering solves.",
      },
      {
        q: "How much does logistics automation cost?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined builds. A first automation such as document extraction or automated status replies is often live within a couple of weeks and pays back quickly in hours saved.",
      },
    ],
  },
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    metaTitle: "Add AI Features to Your SaaS Product | Muhammad Hamd",
    metaDescription:
      "Add real AI features to your SaaS or ship an AI-native product. Muhammad Hamd builds RAG, in-app copilots, and AI onboarding, and runs his own SaaS products.",
    h1: "AI for SaaS Products and Startups",
    tagline: "Ship the AI features your users expect",
    intro: [
      "I'm Muhammad Hamd, a full-stack and AI engineer based in Karachi, Pakistan, and I add AI features to SaaS products and build AI-native ones from scratch. Investors and users now expect AI inside a product, but most teams either bolt on a raw API call or stall because nobody on the team has shipped AI in production.",
      "I have shipped my own SaaS products, including SelfBrand.app and Asmara.AI, and I build AI into a B2B SaaS at MindKeepr in Estonia. So I build the feature and the product around it as one system, which is the difference between an AI feature that ships and one that stays a demo.",
    ],
    useCases: [
      {
        title: "RAG over your customer data",
        body: "In-product search and answers grounded in each customer's own documents and data, so the feature is accurate and private rather than a generic chatbot.",
      },
      {
        title: "In-app AI copilots",
        body: "Assistants that live inside your product and help users do the core job faster, wired into your real data and actions instead of a floating chat box.",
      },
      {
        title: "AI onboarding & activation",
        body: "AI that guides new users to their first win, which lifts activation, the metric that decides whether a SaaS retains and grows.",
      },
      {
        title: "Cost control at scale",
        body: "Model routing, caching, and per-tenant limits so your AI features stay affordable as usage grows, which most teams discover too late.",
      },
    ],
    workflow: [
      "Pick the one AI feature that changes activation or retention, and build that first rather than a scattered set.",
      "Ground it in your real product data with RAG, so it is accurate and defensible, not a generic wrapper.",
      "Add cost controls from day one, so the feature does not become a margin problem at scale.",
      "Instrument it, so you can see whether the AI feature actually moves the metric it was built for.",
    ],
    proof: { label: "See Asmara.AI, my AI-native product", href: "/work/asmara-ai" },
    services: [
      { label: "Full-Stack Development", href: "/services/full-stack-development" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "LLM Integration", href: "/services/llm-integration" },
    ],
    faqs: [
      {
        q: "Can you add AI features to my existing SaaS?",
        a: "Yes. I regularly add AI features such as RAG search, in-app copilots, and AI onboarding to existing products, working alongside your team through shared repos and code reviews. I build the feature into your product's architecture rather than bolting on a stray API call.",
      },
      {
        q: "Can you build an AI-native SaaS from scratch?",
        a: "Yes, and it is where I do my best work, because I am both a full-stack engineer and an AI engineer. I have shipped my own SaaS products, SelfBrand.app and Asmara.AI, so I build the product and the AI in it as one system.",
      },
      {
        q: "How do you keep AI feature costs under control?",
        a: "With model routing that sends easy work to cheaper models, plus caching, prompt limits, and per-tenant controls. I build these in from the start, because AI cost usually becomes a margin problem only after a feature ships without them.",
      },
      {
        q: "How much does it cost to add AI to a SaaS?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined features. A focused first AI feature such as RAG search is often a couple of weeks of work, so you can ship and measure it before investing further.",
      },
    ],
  },
  {
    slug: "personal-brands",
    name: "Personal Brands & Creators",
    metaTitle: "AI Content Systems for Personal Brands | Muhammad Hamd",
    metaDescription:
      "AI systems for personal brands, creators, and coaches, by the founder of SelfBrand.app. Custom content pipelines and audience chatbots trained on your voice.",
    h1: "AI for Personal Brands and Creators",
    tagline: "Your voice, running at scale",
    intro: [
      "I'm Muhammad Hamd, an AI engineer based in Karachi, Pakistan, and I build the AI systems behind personal brands for creators, coaches, and founders. Building an audience takes consistent content in a real voice, and doing that by hand does not scale while you also run a business.",
      "I founded SelfBrand.app, an AI personal-branding product that automates roughly 80 percent of content and positioning for founders and professionals. So this is not theory. I build custom versions of exactly this, content pipelines and audience tools trained on your voice, for people who want their own system rather than an off-the-shelf tool.",
    ],
    useCases: [
      {
        title: "Content pipelines in your voice",
        body: "AI that drafts posts, threads, and newsletters grounded in your real voice and ideas, so output stays consistent without sounding generic. This is the core of what SelfBrand.app does.",
      },
      {
        title: "Positioning & brand strategy systems",
        body: "AI that turns your expertise and goals into clear positioning and a content plan, rather than random posting, so the brand compounds over time.",
      },
      {
        title: "Audience Q&A chatbot",
        body: "A chatbot trained on your content that answers your audience's questions in your voice, on your site or WhatsApp, which deepens engagement while you sleep.",
      },
      {
        title: "Repurposing automation",
        body: "Workflows that turn one piece, such as a talk or a long post, into many formats automatically, so each idea reaches more of your audience.",
      },
    ],
    workflow: [
      "Capture your voice and best ideas first, so everything the AI produces sounds like you rather than a template.",
      "Automate the format you post most, usually short posts or a newsletter, before adding others.",
      "Add an audience chatbot trained on your content, so engagement continues outside posting.",
      "Keep you in final control, with approval before anything publishes, so the brand stays authentically yours.",
    ],
    proof: { label: "See SelfBrand.app, my AI branding product", href: "/work/selfbrand" },
    services: [
      { label: "AI Workflow Automation", href: "/services/ai-automation" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "Full-Stack Development", href: "/services/full-stack-development" },
    ],
    faqs: [
      {
        q: "Can you build a custom AI content system for my personal brand?",
        a: "Yes. I founded SelfBrand.app, which automates roughly 80 percent of content and positioning, and I build custom versions of that for creators, coaches, and founders who want their own system trained on their voice rather than an off-the-shelf tool.",
      },
      {
        q: "Will the content actually sound like me?",
        a: "Yes, that is the point. I ground the system in your real voice, ideas, and past content, so output reads as yours, and you keep final approval before anything publishes. A generic tool cannot do this the way a system built on your own material can.",
      },
      {
        q: "Can you build a chatbot trained on my content?",
        a: "Yes. I build audience chatbots grounded in your content with RAG, so they answer your audience in your voice on your site or WhatsApp. It deepens engagement and captures leads while you focus on the work.",
      },
      {
        q: "How much does an AI personal-branding system cost?",
        a: "My work runs $50 to $120 per hour, with fixed quotes for well-defined builds. A first content pipeline is often live within a couple of weeks, and it saves hours every week while keeping your presence consistent.",
      },
    ],
  },
];
