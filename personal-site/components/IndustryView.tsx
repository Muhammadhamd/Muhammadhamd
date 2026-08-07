import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import AskAI from "@/components/AskAI";
import { SectionHeader, FeatureCard, FaqList, DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleLoop, DoodleArrowCurly } from "@/components/Doodles";
import type { Industry } from "@/lib/industries";
import { faqPageLd, breadcrumbLd, absUrl, ogImageUrl, personRef } from "@/lib/seo";

export default function IndustryView({ industry }: { industry: Industry }) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `AI Automation for ${industry.name}`,
    name: `AI Automation for ${industry.name} by Muhammad Hamd`,
    description: industry.metaDescription,
    image: ogImageUrl(industry.h1, "AI Automation"),
    provider: personRef,
    areaServed: "Worldwide",
    url: absUrl(`/ai-for/${industry.slug}`),
  };

  return (
    <PageShell>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqPageLd(industry.faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: industry.h1, path: `/ai-for/${industry.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <span className="pointer-events-none absolute right-12 top-1 hidden h-3.5 w-3.5 rotate-45 bg-[#7c3bed] sm:block" />

        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          {industry.h1}
          <DoodleLoop className="pointer-events-none absolute -right-12 -top-5 hidden h-10 w-10 text-violet-200 lg:block" />
        </h1>
        <div className="mt-5 max-w-[62ch] space-y-4 text-[16px] leading-relaxed text-zinc-600">
          {industry.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:muhammadhamdali572@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#7c3bed] px-6 py-3.5 text-[15px] font-extrabold text-white no-underline shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]"
          >
            <Mail size={17} /> Start a project
          </a>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-6 py-3.5 text-[15px] font-extrabold text-zinc-950 no-underline transition-all hover:-translate-y-0.5 hover:text-[#7c3bed]"
          >
            How I work <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <AskAI path={`/ai-for/${industry.slug}`} label={industry.h1} />
      </section>

      {/* Where AI helps */}
      <section className="relative mt-20">
        <SectionHeader title={`Where AI helps in ${industry.name.toLowerCase()}`} doodle="double" />
        <DoodleArrowCurly className="pointer-events-none absolute right-[6%] top-2 hidden h-12 w-12 -rotate-12 text-[#7c3bed] lg:block" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {industry.useCases.map((u, i) => (
            <FeatureCard key={u.title} index={i} title={u.title}>
              {u.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* What I'd automate first */}
      <section className="mt-20">
        <SectionHeader title="What I'd automate first" />
        <ol className="mt-7 space-y-4">
          {industry.workflow.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-zinc-950 bg-violet-50 font-display text-[14px] font-black text-[#7c3bed]">
                {i + 1}
              </span>
              <span className="text-[15.5px] leading-relaxed text-zinc-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Proof + services */}
      <section className="mt-20">
        <SectionHeader title="How I'd build it" doodle="none" />
        <p className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-zinc-600">
          I build on the systems I have already shipped, and I combine the services below to fit your
          exact workflow rather than selling a fixed package.
        </p>
        <div className="mt-6 flex flex-col gap-2.5">
          <Link
            href={industry.proof.href}
            className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#7c3bed] no-underline transition-all hover:gap-3"
          >
            <ArrowRight size={16} /> {industry.proof.label}
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {industry.services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-zinc-100 bg-white p-4 no-underline transition-all hover:border-zinc-950 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
            >
              <span className="font-display text-[15px] font-bold text-zinc-950 transition-colors group-hover:text-[#7c3bed]">
                {s.label}
              </span>
              <ArrowRight size={16} className="shrink-0 text-zinc-300 transition-colors group-hover:text-[#7c3bed]" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <SectionHeader title="Frequently asked" doodle="double" />
        <FaqList faqs={industry.faqs} />
      </section>

      {/* CTA */}
      <section className="mt-16">
        <DarkCTA
          title={`Want AI automation built for ${industry.name.toLowerCase()}?`}
          text="Tell me what you want to automate, and I'll reply with whether I can help and how I'd approach it."
          primary={{ label: "Start a project", href: "mailto:muhammadhamdali572@gmail.com" }}
          secondary={{ label: "Book a call", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
