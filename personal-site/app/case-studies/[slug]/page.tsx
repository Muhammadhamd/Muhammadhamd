import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { FaGooglePlay } from "react-icons/fa6";
import PageShell, { JsonLd } from "@/components/PageShell";
import { DarkCTA } from "@/components/ui";
import { DottedPattern } from "@/components/Doodles";
import { PhoneFrame } from "@/components/PhoneFrame";
import { pageMetadata, breadcrumbLd, absUrl, personRef } from "@/lib/seo";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.filter((c) => !c.draft).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.name}: ${c.tagline} | Muhammad Hamd`,
    description: c.summary,
    path: `/case-studies/${slug}`,
    type: "article",
    ogTitle: `${c.name} — case study`,
    ogTag: c.category,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c || c.draft) notFound();

  const isMobile = c.platform === "mobile" && (c.screenshots?.length ?? 0) > 0;

  const detailLd = {
    "@context": "https://schema.org",
    "@type": isMobile ? "SoftwareApplication" : "CreativeWork",
    name: c.name,
    url: c.link ?? c.playStore ?? absUrl(`/case-studies/${slug}`),
    description: c.summary,
    ...(isMobile
      ? {
          applicationCategory: "MobileApplication",
          operatingSystem: "Android",
        }
      : {}),
    author: personRef,
  };

  return (
    <PageShell>
      <JsonLd data={detailLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: c.name, path: `/case-studies/${slug}` },
        ])}
      />

      {/* Back */}
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-1.5 text-[13px] font-bold text-zinc-500 hover:text-[#7c3bed] no-underline transition-colors mb-8"
      >
        <ArrowLeft size={15} /> All case studies
      </Link>

      {/* Hero */}
      <div className="relative">
        <DottedPattern className="w-[110px] h-[110px] right-0 top-0 opacity-60" />
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-[18px] overflow-hidden border-2 border-zinc-950 bg-white shrink-0 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
            <Image
              src={c.logo}
              alt={`${c.name} logo`}
              width={64}
              height={64}
              className="w-full h-full object-contain p-1.5"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              {isMobile && <Smartphone size={13} className="text-[#7c3bed]" />}
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7c3bed]">
                {c.category}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 leading-tight">
              {c.name}
            </h1>
          </div>
        </div>

        <p className="text-[16px] sm:text-lg text-zinc-700 font-medium mt-5 max-w-2xl">
          {c.tagline}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-[13px] text-zinc-500 font-medium">
          <span>
            <span className="text-zinc-400">Role — </span>
            <span className="text-zinc-800 font-semibold">{c.role}</span>
          </span>
          {c.year && (
            <span>
              <span className="text-zinc-400">Year — </span>
              <span className="text-zinc-800 font-semibold">{c.year}</span>
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-6">
          {c.link && (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white font-bold text-[13px] px-4 py-2.5 rounded-full border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(124,59,237,0.9)] hover:-translate-y-0.5 transition-all no-underline"
            >
              <ExternalLink size={14} /> Visit site
            </a>
          )}
          {c.playStore && (
            <a
              href={c.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 font-bold text-[13px] px-4 py-2.5 rounded-full border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 transition-all no-underline"
            >
              <FaGooglePlay size={13} className="text-[#7c3bed]" /> Google Play
            </a>
          )}
        </div>
      </div>

      {/* Phone screenshot gallery (mobile) */}
      {isMobile && (
        <section className="mt-12 -mx-6 px-6 py-8 bg-zinc-950 rounded-3xl border-2 border-zinc-950 overflow-hidden">
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-5 px-1">
            Inside the app
          </p>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x">
            {c.screenshots!.map((s, i) => (
              <PhoneFrame
                key={s}
                src={s}
                alt={`${c.name} screenshot ${i + 1}`}
                width={210}
                priority={i === 0}
                className="snap-start"
              />
            ))}
          </div>
        </section>
      )}

      {/* Overview */}
      {c.overview && c.overview.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-zinc-950 mb-4">
            Overview
          </h2>
          <div className="space-y-4">
            {c.overview.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-zinc-700">
                {p}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Highlights + stack */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {c.highlights && c.highlights.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-bold text-zinc-950 mb-4">
              What I did
            </h2>
            <ul className="space-y-3">
              {c.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[14px] text-zinc-700">
                  <CheckCircle2
                    size={17}
                    className="text-[#7c3bed] shrink-0 mt-0.5"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {c.stack.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-bold text-zinc-950 mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {c.stack.map((s) => (
                <span
                  key={s}
                  className="text-[12px] font-bold text-zinc-700 bg-white border-2 border-zinc-200 rounded-full px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-14">
        <DarkCTA
          title={`Want something like ${c.name}?`}
          text="Tell me what you're building — mobile app, AI product, CRM, or platform — and I'll help you scope it and ship it."
          primary={{ label: "Start a project", href: "/hire-me" }}
          secondary={{ label: "More case studies", href: "/case-studies" }}
        />
      </div>
    </PageShell>
  );
}
