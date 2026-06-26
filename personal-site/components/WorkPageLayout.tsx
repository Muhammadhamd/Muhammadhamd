import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { WorkItem } from "@/lib/data";

export default function WorkPageLayout({ work }: { work: WorkItem }) {
  return (
    <main className="max-w-[640px] mx-auto px-5 py-14 bg-[#ffffff] min-h-screen">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#195DE6] no-underline transition-colors mb-12"
      >
        <ArrowLeft size={13} />
        Muhammad Hamd
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
          <div className="flex items-center gap-3">
            {work.logo && (
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center border border-[#E8E4DE] bg-white shrink-0 shadow-sm">
                <Image
                  src={work.logo}
                  alt={`${work.company} logo`}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">{work.company}</h1>
          </div>
          <a
            href={work.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#195DE6] no-underline transition-colors pt-1.5"
          >
            {work.site.replace("https://", "")}
            <ExternalLink size={10} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">{work.tagline}</p>

        {/* Meta grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm border border-[#E8E4DE] rounded-xl p-4 bg-white shadow-sm">
          {[
            { label: "Role", value: work.role },
            { label: "Type", value: work.type },
            { label: "Period", value: work.period },
            { label: "Location", value: work.location },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
              <p className="font-medium text-[#1A1A1A]">{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Description */}
      <section className="mb-12">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">About</p>
        <div className="space-y-4 text-[15px] leading-relaxed text-gray-500">
          {work.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-12">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Stack</p>
        <div className="flex flex-wrap gap-2">
          {work.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 border border-[#E8E4DE] rounded-full text-gray-500 bg-white shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-[#E8E4DE] pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#195DE6] no-underline transition-colors"
        >
          <ArrowLeft size={13} />
          Back to all work
        </Link>
      </div>
    </main>
  );
}

