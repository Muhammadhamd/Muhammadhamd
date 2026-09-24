import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import { DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleDoubleUnderline } from "@/components/Doodles";
import { pageMetadata, breadcrumbLd, absUrl, personRef } from "@/lib/seo";
import { works, experience } from "@/lib/data";

export const metadata = pageMetadata({
  title: "Experience: Roles & Engineering History | Muhammad Hamd",
  description:
    "The professional experience of Muhammad Hamd — full-stack AI engineer at MindKeepr (Estonia), agentic AI engineer at Cubitrek, Node.js developer at VativeApps, and founder of WatBot and selfbrand AI.",
  path: "/experience",
  type: "profile",
  ogTitle: "Experience & engineering history",
  ogTag: "Experience",
});

const experienceLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: absUrl("/experience"),
  name: "Experience — Muhammad Hamd",
  mainEntity: {
    ...personRef,
    hasOccupation: works.map((w) => ({
      "@type": "Role",
      roleName: w.role,
      name: `${w.role} at ${w.company}`,
      url: absUrl(`/work/${w.slug}`),
    })),
  },
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <JsonLd data={experienceLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Experience", path: "/experience" },
        ])}
      />

      {/* Header */}
      <header className="relative mb-14">
        <DottedPattern className="w-[120px] h-[120px] right-0 top-0 opacity-70" />
        <span className="text-xs uppercase tracking-widest text-[#a8a29e] font-extrabold font-display block mb-2">
          Career &amp; Roles
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-950 leading-[1.05]">
          Experience
        </h1>
        <DoodleDoubleUnderline className="w-52 text-[#7c3bed] block h-2 mt-2" />
        <p className="text-[15px] sm:text-base text-zinc-600 mt-5 max-w-2xl leading-relaxed">
          A full-stack AI engineer&apos;s path — from backend and Node.js work to
          agentic AI systems in production. Below are the companies and roles that
          shaped how I build. Looking for the products I&apos;ve shipped instead?{" "}
          <Link
            href="/case-studies"
            className="text-[#7c3bed] font-semibold underline decoration-2 underline-offset-2 hover:text-[#6d28d9]"
          >
            See the case studies
          </Link>
          .
        </p>
      </header>

      {/* Role cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((w) => (
          <Link
            key={w.slug}
            href={`/work/${w.slug}`}
            className="group flex flex-col rounded-3xl border-2 border-zinc-950 bg-white p-6 no-underline shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-zinc-950 bg-white shrink-0">
                {w.logo ? (
                  <Image
                    src={w.logo}
                    alt={`${w.company} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  <span className="text-[13px] font-bold text-zinc-400">
                    {w.company.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-lg font-bold text-zinc-950 leading-tight group-hover:text-[#7c3bed] transition-colors">
                  {w.company}
                </h2>
                <p className="text-[12.5px] text-zinc-500 font-medium mt-0.5">
                  {w.role}
                </p>
              </div>
            </div>

            <p className="text-[12px] text-zinc-400 font-medium flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1">
                <Briefcase size={12} /> {w.period}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> {w.location}
              </span>
            </p>

            <p className="text-[13.5px] text-zinc-600 leading-relaxed line-clamp-3">
              {w.description[0]}
            </p>

            <div className="mt-auto pt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {w.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-[10.5px] font-bold uppercase tracking-wide text-zinc-500 bg-zinc-100 rounded-full px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#7c3bed] shrink-0 ml-2">
                Read <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Compact timeline */}
      <section className="mt-16">
        <h2 className="font-display text-xl font-bold text-zinc-950 mb-6">
          Timeline
        </h2>
        <ol className="relative border-l-2 border-zinc-200 ml-2">
          {experience.map((e, i) => (
            <li key={`${e.companySlug}-${i}`} className="mb-7 ml-6">
              <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-[#7c3bed] border-2 border-white" />
              <div className="flex flex-wrap items-baseline gap-x-2">
                <Link
                  href={`/work/${e.companySlug}`}
                  className="font-display text-[15px] font-bold text-zinc-950 no-underline hover:text-[#7c3bed] transition-colors"
                >
                  {e.role}
                </Link>
                <span className="text-zinc-400 text-[13px]">·</span>
                <span className="text-[13.5px] font-semibold text-zinc-600">
                  {e.company}
                </span>
              </div>
              <p className="text-[12px] text-zinc-400 font-medium mt-0.5">
                {e.period} · {e.location}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14">
        <DarkCTA
          title="Want this kind of engineering on your team?"
          text="I take on full-stack and AI engineering work — from agentic systems and RAG pipelines to production web and mobile apps. Let's talk about what you're building."
          primary={{ label: "Hire me", href: "/hire-me" }}
          secondary={{ label: "See case studies", href: "/case-studies" }}
        />
      </div>
    </PageShell>
  );
}
