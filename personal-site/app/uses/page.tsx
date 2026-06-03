import PageShell, { JsonLd } from "@/components/PageShell";
import { SectionHeader, Pill, DarkCTA } from "@/components/ui";
import { DottedPattern, DoodlePlayfulStar } from "@/components/Doodles";
import { pageMetadata, breadcrumbLd, absUrl, PERSON_ID } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Uses: My AI Engineering Stack & Tools | Muhammad Hamd",
  description:
    "The tools and tech stack Muhammad Hamd uses for agentic AI development, LLM integration, RAG, and automation, including Python, Go, LangChain, n8n, pgvector, and Next.js.",
  path: "/uses",
  ogTitle: "What I Use",
  ogTag: "Tech Stack",
});

const groups: { title: string; note: string; tint: string; items: string[] }[] = [
  { title: "Languages", note: "What I write most systems in.", tint: "#fafbfd", items: ["Python", "Go", "TypeScript", "Node.js", "JavaScript", "SQL"] },
  { title: "AI & LLM", note: "For agentic systems and LLM features.", tint: "#f7f9ff", items: ["OpenAI", "Anthropic", "LangChain", "LangGraph", "CrewAI", "AutoGen", "RAG", "Embeddings"] },
  { title: "Vector & data", note: "Retrieval, storage, and messaging.", tint: "#fdfafb", items: ["pgvector", "Pinecone", "FAISS", "Weaviate", "PostgreSQL", "RabbitMQ"] },
  { title: "Automation", note: "How I replace manual work.", tint: "#fcfcfa", items: ["n8n", "Make", "Python pipelines", "whatsmeow (WhatsApp)", "REST APIs", "Webhooks"] },
  { title: "Frontend", note: "For dashboards and product UIs.", tint: "#fafbfd", items: ["React", "Next.js", "Tailwind CSS", "Redux", "WebSockets"] },
  { title: "Infrastructure & tools", note: "Where it runs and how I ship it.", tint: "#f7f9ff", items: ["Docker", "Azure", "Google Cloud", "Vercel", "Git", "VS Code"] },
];

const usesLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: absUrl("/uses"),
  name: "What Muhammad Hamd Uses",
  about: { "@id": PERSON_ID },
};

export default function UsesPage() {
  return (
    <PageShell>
      <JsonLd data={usesLd} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Uses", path: "/uses" }])} />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <DoodlePlayfulStar className="pointer-events-none absolute right-10 top-1 hidden h-6 w-6 lg:block" />
        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          What I <span className="text-[#195de6]">Use</span>
        </h1>
        <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-zinc-600">
          This is the actual stack I reach for when I build agentic AI systems, LLM
          integrations, RAG, and automation. I pick tools for reliability in production rather
          than for novelty, and I keep the list short on purpose.
        </p>
      </section>

      {/* Groups */}
      <section className="mt-12 grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-3xl border-2 border-zinc-950 p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
            style={{ backgroundColor: g.tint }}
          >
            <h2 className="font-display text-[18px] font-extrabold text-zinc-950">{g.title}</h2>
            <p className="mt-1 text-[13px] text-zinc-500">{g.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <Pill key={it}>{it}</Pill>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-14">
        <DarkCTA
          kicker="Build with this stack"
          title="Want a system built with these tools?"
          text="Tell me what you're trying to build or automate, and I'll tell you how I'd approach it with this stack."
          primary={{ label: "Hire me", href: "/hire-me" }}
          secondary={{ label: "Email me", href: "mailto:muhammadhamdali572@gmail.com" }}
        />
      </section>
    </PageShell>
  );
}
