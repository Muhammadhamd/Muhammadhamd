import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import AskAI from "@/components/AskAI";
import {
  SectionHeader,
  CheckList,
  FeatureCard,
  PillRow,
  FaqList,
  DarkCTA,
} from "@/components/ui";
import { DottedPattern, DoodleArrowCurly, DoodleLoop } from "@/components/Doodles";
import { services } from "@/lib/services";
import {
  pageMetadata,
  faqPageLd,
  breadcrumbLd,
  absUrl,
  ogImageUrl,
  personRef,
} from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  return pageMetadata({
    title: svc.metaTitle,
    description: svc.metaDescription,
    path: `/services/${slug}`,
    ogTitle: svc.name,
    ogTag: "AI Service",
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: svc.name,
    name: `${svc.name} by Muhammad Hamd`,
    description: svc.metaDescription,
    image: ogImageUrl(svc.name, "AI Service"),
    provider: personRef,
    areaServed: "Worldwide",
    url: absUrl(`/services/${svc.slug}`),
  };

  return (
    <PageShell>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqPageLd(svc.faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: svc.name, path: `/services/${svc.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <span className="pointer-events-none absolute -left-3 top-2 hidden h-3 w-3 rounded-full bg-[#7c3bed] sm:block" />
        <span className="pointer-events-none absolute right-10 top-0 hidden h-3.5 w-3.5 rotate-45 bg-[#7c3bed] sm:block" />

        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          {svc.h1}
          <DoodleLoop className="pointer-events-none absolute -right-12 -top-6 hidden h-10 w-10 text-violet-200 lg:block" />
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-zinc-600">
          {svc.intro}
        </p>
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
        <AskAI path={`/services/${svc.slug}`} label={svc.name} />
      </section>

      {/* What this solves */}
      <section className="mt-20">
        <SectionHeader kicker="The problem" title="What this solves" doodle="double" />
        <CheckList items={svc.solves} columns={2} />
      </section>

      {/* What I build */}
      <section className="relative mt-20">
        <SectionHeader kicker="The work" title="What I build" />
        <DoodleArrowCurly className="pointer-events-none absolute right-[6%] top-2 hidden h-12 w-12 -rotate-12 text-[#7c3bed] lg:block" />
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {svc.builds.map((b, i) => (
            <FeatureCard key={b.title} index={i} title={b.title}>
              {b.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* Tools & stack */}
      <section className="mt-20">
        <SectionHeader kicker="Toolbox" title="Tools & stack" doodle="none" />
        <PillRow items={svc.stack} />
      </section>

      {/* Related */}
      <section className="mt-16">
        <p className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-zinc-400">
          Keep exploring
        </p>
        <div className="mt-4 flex flex-col gap-2.5">
          {svc.related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#7c3bed] no-underline transition-all hover:gap-3"
            >
              <ArrowRight size={16} /> {r.label}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <SectionHeader kicker="Questions" title="Frequently asked" doodle="double" />
        <FaqList faqs={svc.faqs} />
      </section>

      {/* CTA */}
      <section className="mt-16">
        <DarkCTA
          kicker="Let's build"
          title={`Want ${svc.name.toLowerCase()} for your team?`}
          text="Tell me what you're trying to build. I'll reply with whether I can help and how I'd approach it."
          primary={{ label: "Start a project", href: "mailto:muhammadhamdali572@gmail.com" }}
          secondary={{ label: "Book a call", href: "/contact" }}
        />
      </section>
    </PageShell>
  );
}
