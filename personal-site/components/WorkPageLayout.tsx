import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { WorkItem } from "@/lib/data";

export default function WorkPageLayout({ work }: { work: WorkItem }) {
  return (
    <main className="max-w-[720px] mx-auto px-5 py-14 md:py-20">
      <Link href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[#A8A29E] hover:text-[#FF5E5B] no-underline transition-colors mb-14">
        <ArrowLeft size={14} />
        Muhammad Hamd
      </Link>

      <header className="mb-12">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
          <div className="flex items-center gap-4">
            {work.logo && (
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border border-[#EBE5DF] bg-white shrink-0 shadow-sm">
                <Image src={work.logo} alt={`${work.company} logo`} width={48} height={48} className="w-9 h-9 object-contain" />
              </div>
            )}
            <h1 className="text-[28px] md:text-[32px] font-bold tracking-tight text-[#171716]">{work.company}</h1>
          </div>
          <a href={work.site} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#A8A29E] hover:text-[#FF5E5B] no-underline transition-colors bg-white border border-[#EBE5DF] px-3 py-1.5 rounded-full hover:border-[#FF5E5B]/30">
            {work.site.replace("https://", "")}
            <ExternalLink size={11} />
          </a>
        </div>
        <p className="text-[#6B6560] text-base">{work.tagline}</p>

        <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          {[
            { label: "Role", value: work.role },
            { label: "Type", value: work.type },
            { label: "Period", value: work.period },
            { label: "Location", value: work.location },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl border border-[#EBE5DF] p-3">
              <p className="text-[10px] uppercase tracking-widest text-[#A8A29E] mb-1">{label}</p>
              <p className="text-[13px] font-semibold text-[#171716] leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </header>


      <section className="space-y-5 text-[15px] leading-[1.8] text-[#6B6560] mb-12">
        {work.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section className="mb-14 bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8A29E] mb-4">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {work.stack.map((tech) => (
            <span key={tech} className="text-xs px-4 py-2 rounded-full bg-[#F5F1EC] text-[#6B6560] font-medium border border-[#EBE5DF] hover:border-[#FF5E5B]/30 hover:text-[#FF5E5B] hover:bg-[#FFF1F0] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="border-t border-[#EBE5DF] pt-8">
        <Link href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#A8A29E] hover:text-[#FF5E5B] no-underline transition-colors">
          <ArrowLeft size={14} />
          Back to all work
        </Link>
      </div>
    </main>
  );
}
