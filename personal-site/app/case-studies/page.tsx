import { Sparkles, Smartphone, Layers, Globe } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import { DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleDoubleUnderline } from "@/components/Doodles";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { pageMetadata, breadcrumbLd, absUrl, personRef } from "@/lib/seo";
import {
  caseStudiesByCategory,
  caseStudies,
  type CaseCategory,
} from "@/lib/case-studies";

export const metadata = pageMetadata({
  title: "Case Studies: AI SaaS, Mobile Apps & Platforms | Muhammad Hamd",
  description:
    "Projects Muhammad Hamd has built and engineered — AI SaaS like WatBot and selfbrand AI, live mobile apps (SwiftWire, SwiftGo, Matchify, KWSB), a CRM, and web platforms. Real, shipped products.",
  path: "/case-studies",
  ogTitle: "Case Studies — products I've shipped",
  ogTag: "Case Studies",
});

const CATEGORY_ICON: Record<
  CaseCategory,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "AI SaaS": Sparkles,
  "Mobile App": Smartphone,
  CRM: Layers,
  "Web Platform": Globe,
};

const groups = caseStudiesByCategory();

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
        url: absUrl(`/case-studies/${c.slug}`),
      })),
  },
};

export default function CaseStudiesPage() {
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
          live mobile apps I engineered, a CRM, and web platforms. Grouped by
          what they are, so you can jump straight to the work that looks like
          yours.
        </p>

        {/* Category jump nav */}
        <div className="flex flex-wrap gap-2 mt-6">
          {groups.map(({ category, items }) => {
            const Icon = CATEGORY_ICON[category];
            return (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-zinc-700 bg-white border-2 border-zinc-200 hover:border-zinc-950 rounded-full px-3.5 py-1.5 no-underline transition-all hover:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5"
              >
                <Icon size={13} className="text-[#7c3bed]" />
                {category}
                <span className="text-zinc-400">{items.length}</span>
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
                  <p className="text-[13.5px] text-zinc-500 mt-0.5">
                    {meta.blurb}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((c) => (
                  <CaseStudyCard key={c.slug} c={c} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16">
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
