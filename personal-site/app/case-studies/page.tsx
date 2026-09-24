import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Smartphone, Layers, Globe } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import { DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleDoubleUnderline } from "@/components/Doodles";
import { pageMetadata, breadcrumbLd, absUrl, personRef } from "@/lib/seo";
import {
  caseStudiesByCategory,
  caseStudies,
  type CaseCategory,
} from "@/lib/case-studies";

export const metadata = pageMetadata({
  title: "Case Studies: AI SaaS, Mobile Apps & Platforms | Muhammad Hamd",
  description:
    "Selected projects Muhammad Hamd has built and engineered — AI SaaS products like WatBot and selfbrand AI, mobile apps, CRMs, and web platforms. Real systems, shipped to production.",
  path: "/case-studies",
  ogTitle: "Case Studies — products I've shipped",
  ogTag: "Case Studies",
});

const CATEGORY_ICON: Record<CaseCategory, React.ComponentType<{ size?: number; className?: string }>> = {
  "AI SaaS": Sparkles,
  "Mobile App": Smartphone,
  CRM: Layers,
  "Web Platform": Globe,
};

const groups = caseStudiesByCategory();

// ItemList schema over the verified (non-draft) case studies only.
const listLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: absUrl("/case-studies"),
  name: "Case Studies by Muhammad Hamd",
  about: personRef,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies
      .filter((c) => !c.draft)
      .map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: c.link ?? absUrl("/case-studies"),
      })),
  },
};

export default function CaseStudiesPage() {
  const verified = caseStudies.filter((c) => !c.draft).length;

  return (
    <PageShell>
      <JsonLd data={listLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />

      {/* Header */}
      <header className="relative mb-14">
        <DottedPattern className="w-[120px] h-[120px] right-0 top-0 opacity-70" />
        <span className="text-xs uppercase tracking-widest text-[#a8a29e] font-extrabold font-display block mb-2">
          Selected Work
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-950 leading-[1.05]">
          Case Studies
        </h1>
        <DoodleDoubleUnderline className="w-56 text-[#7c3bed] block h-2 mt-2" />
        <p className="text-[15px] sm:text-base text-zinc-600 mt-5 max-w-2xl leading-relaxed">
          Products and projects I&apos;ve built end to end — AI SaaS I founded,
          mobile apps I engineered, CRMs, and web platforms. Grouped by what they
          are, so you can jump straight to the work that looks like yours.
        </p>

        {/* Category jump nav */}
        <div className="flex flex-wrap gap-2 mt-6">
          {groups.map(({ category }) => {
            const Icon = CATEGORY_ICON[category];
            return (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-zinc-700 bg-white border-2 border-zinc-200 hover:border-zinc-950 rounded-full px-3.5 py-1.5 no-underline transition-all hover:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5"
              >
                <Icon size={13} className="text-[#7c3bed]" />
                {category}
              </a>
            );
          })}
        </div>
      </header>

      {/* Category sections */}
      <div className="space-y-16">
        {groups.map(({ category, meta, items }) => {
          const Icon = CATEGORY_ICON[category];
          return (
            <section
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-24"
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-violet-50 border-2 border-zinc-950 flex items-center justify-center shrink-0 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                  <Icon size={18} className="text-[#7c3bed]" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-zinc-950 leading-tight">
                    {category}
                  </h2>
                  <p className="text-[13.5px] text-zinc-500 mt-0.5">{meta.blurb}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((c) => {
                  const isLink = !c.draft && !!c.link;
                  const cardClass = `relative flex flex-col rounded-3xl border-2 p-6 no-underline transition-all ${
                    c.draft
                      ? "border-dashed border-zinc-200 bg-zinc-50/60"
                      : "border-zinc-950 bg-white shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] group"
                  }`;
                  const body = (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border-2 bg-white shrink-0 ${
                            c.draft ? "border-zinc-200 opacity-70" : "border-zinc-950"
                          }`}
                        >
                          <Image
                            src={c.logo}
                            alt={`${c.name} logo`}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain p-1.5"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3
                              className={`font-display text-lg font-bold leading-tight truncate ${
                                c.draft ? "text-zinc-500" : "text-zinc-950 group-hover:text-[#7c3bed] transition-colors"
                              }`}
                            >
                              {c.name}
                            </h3>
                            {!c.draft && c.link && (
                              <ArrowUpRight
                                size={16}
                                className="text-zinc-400 group-hover:text-[#7c3bed] transition-colors shrink-0"
                              />
                            )}
                          </div>
                          <p className="text-[12px] text-zinc-500 font-medium mt-0.5">
                            {c.role}
                            {c.year ? ` · ${c.year}` : ""}
                          </p>
                        </div>
                      </div>

                      <p
                        className={`text-[13.5px] leading-relaxed ${
                          c.draft ? "text-zinc-400 italic" : "text-zinc-600"
                        }`}
                      >
                        {c.summary}
                      </p>

                      {!c.draft && c.highlights && c.highlights.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                          {c.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-2 text-[12.5px] text-zinc-600"
                            >
                              <span className="text-[#7c3bed] font-bold shrink-0">
                                ✦
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {!c.draft && c.stack.length > 0 && (
                        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                          {c.stack.map((s) => (
                            <span
                              key={s}
                              className="text-[10.5px] font-bold uppercase tracking-wide text-zinc-500 bg-zinc-100 rounded-full px-2 py-0.5"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {c.draft && (
                        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 rounded-full px-2.5 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 inline-block" />
                          Coming soon
                        </span>
                      )}
                    </>
                  );
                  return isLink ? (
                    <a
                      key={c.slug}
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {body}
                    </a>
                  ) : (
                    <div key={c.slug} className={cardClass}>
                      {body}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footnote for drafts */}
      <p className="text-[12px] text-zinc-400 mt-12">
        {verified} case studies published. More write-ups are being finalized.
      </p>

      <div className="mt-14">
        <DarkCTA
          title="Have a project like one of these?"
          text="Whether it's an AI SaaS, a mobile app, a CRM, or a platform to rebuild, I can help you scope it and ship it. Tell me what you're building."
          primary={{ label: "Start a project", href: "/hire-me" }}
          secondary={{ label: "Read the blog", href: "/blog" }}
        />
      </div>
    </PageShell>
  );
}
