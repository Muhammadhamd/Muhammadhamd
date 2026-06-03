import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import { SectionHeader, DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleSparkle } from "@/components/Doodles";
import { services } from "@/lib/services";
import { pageMetadata, breadcrumbLd, absUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Engineering & Automation Services | Muhammad Hamd",
  description:
    "AI engineering and automation services by Muhammad Hamd: agentic AI development, LLM integration, AI workflow automation, CRM automation, WhatsApp AI, and RAG systems.",
  path: "/services",
  ogTitle: "AI Engineering & Automation Services",
  ogTag: "Services",
});

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Engineering & Automation Services by Muhammad Hamd",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: absUrl(`/services/${s.slug}`),
  })),
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <JsonLd data={itemListLd} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <DoodleSparkle className="pointer-events-none absolute -left-2 top-1 hidden h-6 w-6 lg:block" />
        <h1 className="font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          AI Engineering &amp; Automation{" "}
          <span className="relative inline-block text-[#195de6]">Services</span>
        </h1>
        <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-zinc-600">
          I&apos;m <strong className="text-zinc-900">Muhammad Hamd</strong>, an agentic AI
          engineer and systems builder in Karachi, Pakistan. I design and ship production-ready
          AI systems end to end. Pick a service to see exactly what I build.
        </p>
      </section>

      {/* Service cards */}
      <section className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => {
          const tints = ["#fafbfd", "#fdfafb", "#fcfcfa", "#f7f9ff"];
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-3xl border-2 border-zinc-950 p-6 no-underline shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_rgba(24,24,27,1)]"
              style={{ backgroundColor: tints[i % tints.length] }}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-[19px] font-extrabold text-zinc-950 transition-colors group-hover:text-[#195de6]">
                  {s.name}
                </h2>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-500 transition-colors group-hover:bg-[#195de6] group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <p className="mt-1.5 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                {s.tagline}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">{s.metaDescription}</p>
            </Link>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-14">
        <DarkCTA
          kicker="Not sure which?"
          title="Tell me the problem, not the solution"
          text="Describe what you're trying to build or automate. I'll point you to the right service and tell you how I'd approach it."
          primary={{ label: "Email me", href: "mailto:muhammadhamdali572@gmail.com" }}
          secondary={{ label: "Hire me", href: "/hire-me" }}
        />
      </section>
    </PageShell>
  );
}
