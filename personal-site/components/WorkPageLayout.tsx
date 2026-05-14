import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { WorkItem } from "@/lib/data";

export default function WorkPageLayout({ work }: { work: WorkItem }) {
  return (
    <main className="max-w-[640px] mx-auto px-5 py-14">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 no-underline transition-colors mb-12"
      >
        <ArrowLeft size={13} />
        Muhammad Hamd
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
          <div className="flex items-center gap-3">
            {work.logo && (
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 bg-white shrink-0 shadow-sm">
                <Image
                  src={work.logo}
                  alt={`${work.company} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-[#111111]">{work.company}</h1>
          </div>
          <a
            href={work.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-800 no-underline transition-colors pt-1.5"
          >
            {work.site.replace("https://", "")}
            <ExternalLink size={10} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">{work.tagline}</p>

        {/* Meta grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm border border-gray-100 rounded-xl p-4 bg-gray-50">
          {[
            { label: "Role", value: work.role },
            { label: "Type", value: work.type },
            { label: "Period", value: work.period },
            { label: "Location", value: work.location },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
              <p className="text-[13px] font-medium text-[#111111] leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Description */}
      <section className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600 mb-10">
        {work.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      {/* Stack */}
      <section className="mb-12">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Stack</p>
        <div className="flex flex-wrap gap-2">
          {work.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 border border-gray-200 rounded-full text-gray-500 bg-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-gray-100 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 no-underline transition-colors"
        >
          <ArrowLeft size={13} />
          Back to all work
        </Link>
      </div>
    </main>
  );
}
