import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import { SectionHeader, FeatureCard, FaqList, DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleLoop, DoodleArrowCurly } from "@/components/Doodles";
import { services } from "@/lib/services";
import type { Location } from "@/lib/locations";
import { faqPageLd, breadcrumbLd, absUrl, PERSON_ID } from "@/lib/seo";

export default function LocationView({ location }: { location: Location }) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Engineering & Automation",
    name: `AI Engineer in ${location.areaName}, Muhammad Hamd`,
    description: location.metaDescription,
    provider: { "@id": PERSON_ID },
    areaServed: location.areaName,
    url: absUrl(`/${location.slug}`),
  };

  return (
    <PageShell>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqPageLd(location.faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: location.h1, path: `/${location.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <span className="pointer-events-none absolute right-12 top-1 hidden h-3.5 w-3.5 rotate-45 bg-amber-400 sm:block" />

        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          {location.h1}
          <DoodleLoop className="pointer-events-none absolute -right-12 -top-5 hidden h-10 w-10 text-blue-200 lg:block" />
        </h1>
        <div className="mt-5 max-w-[62ch] space-y-4 text-[16px] leading-relaxed text-zinc-600">
          {location.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:muhammadhamdali572@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-[#195de6] px-6 py-3.5 text-[15px] font-extrabold text-white no-underline shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]"
          >
            <Mail size={17} /> Start a project
          </a>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-6 py-3.5 text-[15px] font-extrabold text-zinc-950 no-underline transition-all hover:-translate-y-0.5 hover:text-[#195de6]"
          >
            How I work <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why work with me */}
      <section className="relative mt-20">
        <SectionHeader kicker="Why me" title="Why work with me" doodle="double" />
        <DoodleArrowCurly className="pointer-events-none absolute right-[6%] top-2 hidden h-12 w-12 -rotate-12 text-sky-400 lg:block" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {location.reasons.map((r, i) => (
            <FeatureCard key={r.title} index={i} title={r.title}>
              {r.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mt-20">
        <SectionHeader kicker="Capabilities" title={`Services I offer in ${location.areaName}`} />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-zinc-100 bg-white p-4 no-underline transition-all hover:border-zinc-950 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
            >
              <span className="font-display text-[15px] font-bold text-zinc-950 transition-colors group-hover:text-[#195de6]">
                {s.name}
              </span>
              <ArrowRight size={16} className="shrink-0 text-zinc-300 transition-colors group-hover:text-[#195de6]" />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <SectionHeader kicker="Questions" title="Frequently asked" doodle="double" />
        <FaqList faqs={location.faqs} />
      </section>

      {/* CTA */}
      <section className="mt-16">
        <DarkCTA
          title={`Need an AI engineer in ${location.areaName}?`}
          text="Tell me what you want to build or automate, and I'll reply with whether I can help and how I'd approach it."
          primary={{ label: "Start a project", href: "mailto:muhammadhamdali572@gmail.com" }}
          secondary={{ label: "Book a call", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
