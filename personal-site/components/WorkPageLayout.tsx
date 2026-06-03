import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Sparkles, Compass, Layers } from "lucide-react";
import type { WorkItem } from "@/lib/data";
import { DoodleSquiggle, DoodleDoubleUnderline, DoodleSparkle, DottedPattern } from "@/components/Doodles";
import { SITE_URL, absUrl } from "@/lib/seo";

export default function WorkPageLayout({ work }: { work: WorkItem }) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: absUrl("/#work") },
      {
        "@type": "ListItem",
        position: 3,
        name: work.company,
        item: absUrl(`/work/${work.slug}`),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-blue-100 selection:text-black overflow-x-hidden relative pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Decorative scattered geometric shapes matching homepage */}
      <div className="absolute top-24 left-[8%] w-3 h-3 rounded-full bg-[#195de6] pointer-events-none" />
      <div className="absolute top-44 right-[8%] w-3.5 h-3.5 bg-sky-400 rotate-12 pointer-events-none" />
      <div className="absolute bottom-40 left-[10%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-amber-400 pointer-events-none" />

      {/* Header Container */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b-2 border-zinc-900/5 px-6 py-4 mb-8">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-base font-bold text-zinc-950 no-underline hover:text-[#195de6] transition-colors"
          >
            <ArrowLeft size={16} className="text-[#195de6]" />
            <span>Muhammad Hamd</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold bg-zinc-900 text-white rounded-full px-3 py-1 text-[11px] uppercase tracking-wider">
              {work.type}
            </span>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <main className="max-w-[800px] mx-auto px-6 relative">
        <DottedPattern className="w-[120px] h-[120px] right-2 top-2" />

        {/* Navigation Indicator */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-zinc-950 no-underline uppercase tracking-widest transition-colors"
          >
            ← Back to All Systems
          </Link>
        </div>

        {/* Master Case Study Header */}
        <section className="bg-white border-2 border-zinc-950 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] mb-10 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              {work.logo && (
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-zinc-950 bg-white shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] shrink-0">
                  <Image
                    src={work.logo}
                    alt={`${work.company} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
              <div className="text-left">
                <h1 className="font-display text-2xl md:text-3.5xl font-bold tracking-tight text-zinc-950 leading-none">
                  {work.company}
                </h1>
                <p className="text-xs text-zinc-500 mt-1.5 font-medium">{work.role}</p>
              </div>
            </div>

            <a
              href={work.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#195de6] hover:text-[#154fc4] border-2 border-zinc-950 bg-blue-50/50 hover:bg-blue-50 rounded-full px-4 py-2 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all no-underline"
            >
              <span>{work.site.replace("https://", "")}</span>
              <ExternalLink size={12} className="shrink-0" />
            </a>
          </div>

          <div className="relative inline-block mt-2">
            <p className="text-zinc-600 text-sm md:text-base font-semibold italic">{work.tagline}</p>
            <DoodleSquiggle className="w-32 text-amber-300 absolute bottom-[-6px] left-0" />
          </div>

          {/* Structured Trusted Meta Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t-2 border-zinc-100 pt-6">
            {[
              { label: "Role Title", value: work.role, color: "text-[#195de6]" },
              { label: "Engagement", value: work.type, color: "text-sky-500" },
              { label: "Timeframe", value: work.period, color: "text-amber-500" },
              { label: "Location Map", value: work.location, color: "text-indigo-500" },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-zinc-50/50 p-3.5 rounded-2xl border border-zinc-200/60">
                <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-extrabold flex items-center gap-1">
                  <span className={`w-1 h-1 rounded-full ${color} inline-block`} />
                  {label}
                </p>
                <p className="text-[12.5px] font-bold text-zinc-900 leading-tight mt-1">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative Description Section resembling a clean paper-form layout */}
        <section className="bg-white border-2 border-zinc-950 rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] mb-8">
          <h3 className="font-display font-extrabold text-[15px] text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-1.5 border-b border-zinc-100 pb-2">
            <Compass className="w-4.5 h-4.5 text-[#195de6]" />
            Project Context & Implementation Narrative
          </h3>
          
          <div className="space-y-6 text-zinc-700 text-base leading-relaxed">
            {work.description.map((para, i) => (
              <p key={i} className="first-letter:text-lg first-letter:font-bold first-letter:text-zinc-900">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="bg-white border-2 border-zinc-950 rounded-3xl p-6 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] mb-12">
          <h3 className="font-display font-extrabold text-[12px] text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-zinc-100 pb-2">
            <Layers className="w-4 h-4 text-sky-500" />
            Infrastructure & Languages Utilized
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {work.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3.5 py-1.5 border-2 border-zinc-200 bg-white text-zinc-800 font-semibold rounded-full hover:border-zinc-900 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Return to Dashboard Footer */}
        <div className="border-t-2 border-zinc-900/5 pt-10 text-center relative">
          <DoodleSparkle className="absolute top-1/2 left-4 text-violet-400 animate-pulse pointer-events-none" />
          
          <Link
            href="/"
            className="inline-flex items-center justify-center font-display font-bold text-sm bg-zinc-950 hover:bg-zinc-850 text-white px-7 py-3.5 rounded-full border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-x-[0px] active:translate-y-[0px] transition-all no-underline"
          >
            ← Return to Main Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
