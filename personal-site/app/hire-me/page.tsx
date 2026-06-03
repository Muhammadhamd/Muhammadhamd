import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Clock, Globe, Check } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import {
  SectionHeader,
  FeatureCard,
  PillRow,
  FaqList,
  DarkCTA,
} from "@/components/ui";
import {
  DottedPattern,
  DoodleLoop,
  DoodleArrowCurly,
  DoodlePlayfulStar,
} from "@/components/Doodles";
import { works } from "@/lib/data";
import {
  pageMetadata,
  faqPageLd,
  breadcrumbLd,
  absUrl,
  PERSON_ID,
  type Faq,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hire an Agentic AI Engineer & Automation Expert | Muhammad Hamd",
  description:
    "Hire a production-ready agentic AI engineer with 3+ years shipping real systems. LLM integration, AI agents, CRM automation, WhatsApp AI, RAG systems. Karachi-based, available globally.",
  path: "/hire-me",
  ogTitle: "Hire an Agentic AI Engineer",
  ogTag: "Available for hire",
});

const services = [
  { title: "Agentic AI Development", body: "Autonomous AI agents that plan, use tools, and execute multi-step work, all built with LangChain, LangGraph, CrewAI, and AutoGen." },
  { title: "LLM Integration", body: "Production LLM features wired into your product across OpenAI, Anthropic, and open models, with RAG, prompt engineering, and cost control." },
  { title: "AI Workflow Automation", body: "Replacing manual operations with reliable pipelines using n8n, Make, and custom Python, with error handling and human-in-the-loop built in." },
  { title: "CRM Automation", body: "Connecting AI to HubSpot, Salesforce, Pipedrive, and GHL for lead scoring, follow-up sequences, enrichment, and reporting." },
  { title: "WhatsApp AI Automation", body: "Conversational AI for messaging and support, using the exact stack behind WatBot, my WhatsApp automation platform built in Go." },
  { title: "RAG & Vector Search", body: "Retrieval systems that actually ground answers, built on Pinecone, FAISS, Weaviate, and pgvector and tuned for accuracy and latency." },
];

const process = [
  { title: "Discovery", body: "We scope the real problem, the success metrics, and the constraints, with no guesswork." },
  { title: "Architecture", body: "I design the system: models, tools, data flow, and failure modes, mapped to your stack." },
  { title: "Build", body: "Iterative delivery with working demos. You see progress every few days, not at the end." },
  { title: "Ship & harden", body: "Monitoring, fallbacks, and cost controls so it runs reliably in production." },
];

const stack = [
  "Python", "Go", "Node.js / TypeScript", "Next.js", "LangChain", "LangGraph",
  "CrewAI", "AutoGen", "OpenAI", "Anthropic", "RAG", "pgvector", "Pinecone",
  "n8n", "PostgreSQL", "Docker", "Azure", "GCP",
];

const availability = [
  { icon: <Clock size={18} />, title: "Start within days", body: "Remote and on UTC+5, overlapping EU mornings and US evenings." },
  { icon: <Globe size={18} />, title: "Global clients", body: "Founders, CTOs, and teams across the US, EU, and MENA." },
  { icon: <Check size={18} />, title: "Flexible engagements", body: "Project-based or hourly ($50 to $120). Fixed quotes for clear scope." },
];

const faqs: Faq[] = [
  { q: "What's your rate?", a: "Engagements are scoped per project. As a guide, rates fall between $50 and $120 per hour depending on scope and timeline, with fixed-price options for well-defined builds. Reach out with your project and I'll send a clear quote." },
  { q: "How fast can you start?", a: "I can typically begin within a few days of agreeing scope. For urgent work, I'll tell you honestly whether I can hit your timeline before we commit." },
  { q: "What's your process?", a: "Discovery, then architecture, then iterative build with frequent demos, then ship and harden for production. You stay in the loop the entire time and see working software early." },
  { q: "Can you work with my existing team?", a: "Yes. I regularly integrate with in-house engineering teams through code reviews, shared repos, and clear documentation, so your team can own the system after handoff." },
  { q: "What time zone are you in, and do you work remotely?", a: "I'm based in Karachi, Pakistan (UTC+5) and work fully remotely. That gives strong overlap with European mornings and US evenings." },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agentic AI Engineering & Automation",
  name: "Agentic AI Engineering & Automation by Muhammad Hamd",
  description: "Production-ready agentic AI development, LLM integration, AI workflow automation, CRM automation, WhatsApp AI, and RAG systems.",
  provider: { "@id": PERSON_ID },
  areaServed: "Worldwide",
  url: absUrl("/hire-me"),
};

export default function HireMePage() {
  return (
    <PageShell>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Hire Me", path: "/hire-me" }])} />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <DoodlePlayfulStar className="pointer-events-none absolute -left-2 top-1 hidden h-6 w-6 lg:block" />

        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          Hire an Agentic AI Engineer Who Ships{" "}
          <span className="relative inline-block text-[#195de6]">
            Production Systems
            <DoodleLoop className="pointer-events-none absolute -right-12 -top-5 hidden h-10 w-10 text-blue-200 lg:block" />
          </span>
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-zinc-600">
          I&apos;m <strong className="text-zinc-900">Muhammad Hamd</strong>, an agentic AI
          engineer and systems builder, and an AI automation engineer for hire based in
          Karachi, Pakistan. For more than three years I&apos;ve shipped real AI systems such
          as LLM integrations, autonomous agents, CRM and WhatsApp automation, and RAG
          infrastructure, for founders and teams who need software that works in production,
          not demos.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:muhammadhamdali572@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#195de6] px-6 py-3.5 text-[15px] font-extrabold text-white no-underline shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]"
          >
            <Mail size={17} /> Start a project
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-6 py-3.5 text-[15px] font-extrabold text-zinc-950 no-underline transition-all hover:-translate-y-0.5 hover:text-[#195de6]"
          >
            Book a call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* What I build */}
      <section className="mt-20">
        <SectionHeader kicker="What I build" title="Systems, not demos" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <FeatureCard key={s.title} index={i} title={s.title}>
              {s.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* My process */}
      <section className="relative mt-20">
        <SectionHeader kicker="How it goes" title="My process" doodle="double" />
        <DoodleArrowCurly className="pointer-events-none absolute left-[34%] top-2 hidden h-11 w-11 -rotate-12 text-sky-400 lg:block" />
        <DoodleLoop className="pointer-events-none absolute left-[66%] top-4 hidden h-11 w-11 rotate-45 text-blue-200 lg:block" />
        <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 font-display text-[17px] font-black text-[#195de6]">
                {i + 1}
              </div>
              <h3 className="mt-3 font-display text-[16px] font-extrabold text-zinc-950">{p.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent work */}
      <section className="mt-20">
        <SectionHeader kicker="Proof" title="Recent work" />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {works.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-zinc-100 bg-white p-4 no-underline transition-all hover:border-zinc-950 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  {w.logo ? (
                    <Image src={w.logo} alt={`${w.company} logo`} width={44} height={44} className="h-full w-full object-contain p-1.5" />
                  ) : (
                    <span className="text-[11px] font-bold text-zinc-400">{w.company.substring(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <p className="font-display text-[15px] font-bold text-zinc-950 transition-colors group-hover:text-[#195de6]">{w.company}</p>
                  <p className="text-[12.5px] text-zinc-500">{w.role}</p>
                </div>
              </div>
              <ArrowRight size={16} className="shrink-0 text-zinc-300 transition-colors group-hover:text-[#195de6]" />
            </Link>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-20">
        <SectionHeader kicker="Toolbox" title="Tech stack" doodle="none" />
        <PillRow items={stack} />
      </section>

      {/* Availability */}
      <section className="mt-20">
        <SectionHeader kicker="Working together" title="Availability & rates" />
        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {availability.map((a, i) => (
            <FeatureCard key={a.title} index={i} icon={a.icon} title={a.title}>
              {a.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <SectionHeader kicker="Questions" title="Frequently asked" doodle="double" />
        <FaqList faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="mt-16">
        <DarkCTA
          title="Have a system that should run itself?"
          text="Tell me what you're trying to automate or build. I'll reply with whether I can help and how I'd approach it."
          primary={{ label: "muhammadhamdali572@gmail.com", href: "mailto:muhammadhamdali572@gmail.com" }}
          secondary={{ label: "Connect on LinkedIn", href: "https://linkedin.com/in/muhammadhamd" }}
        />
      </section>
    </PageShell>
  );
}
