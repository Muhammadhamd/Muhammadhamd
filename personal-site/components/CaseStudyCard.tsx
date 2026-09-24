import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { CaseStudy } from "@/lib/case-studies";

/** A single case-study card. Mobile apps get a phone-screenshot strip so they
 *  read as real apps; everything else gets a clean logo + copy card. */
export function CaseStudyCard({ c }: { c: CaseStudy }) {
  const href = `/case-studies/${c.slug}`;
  const isMobile = c.platform === "mobile" && (c.screenshots?.length ?? 0) > 0;

  if (isMobile) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-zinc-950 bg-gradient-to-b from-zinc-50 to-white no-underline shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]"
      >
        {/* App header — like an app-store listing */}
        <div className="flex items-center gap-3 p-5 pb-3">
          <div className="w-12 h-12 rounded-[14px] overflow-hidden border-2 border-zinc-950 bg-white shrink-0">
            <Image
              src={c.logo}
              alt={`${c.name} logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <Smartphone size={12} className="text-[#7c3bed] shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7c3bed]">
                Mobile App
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-zinc-950 leading-tight truncate group-hover:text-[#7c3bed] transition-colors">
              {c.name}
            </h3>
            <p className="text-[11.5px] text-zinc-500 font-medium truncate">
              {c.role}
            </p>
          </div>
          <span className="shrink-0 self-start inline-flex items-center gap-1 rounded-full bg-zinc-950 text-white text-[10.5px] font-bold px-3 py-1.5 group-hover:bg-[#7c3bed] transition-colors">
            View <ArrowRight size={11} />
          </span>
        </div>

        <p className="px-5 text-[13px] leading-relaxed text-zinc-600">
          {c.tagline}
        </p>

        {/* Screenshot strip inside a "screen" */}
        <div className="mt-4 flex gap-3 overflow-hidden px-5 pt-1 pb-5 -mb-2">
          {c.screenshots!.slice(0, 3).map((s, i) => (
            <PhoneFrame
              key={s}
              src={s}
              alt={`${c.name} screenshot ${i + 1}`}
              width={112}
              className="translate-y-3 group-hover:translate-y-1 transition-transform"
            />
          ))}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl border-2 border-zinc-950 bg-white p-6 no-underline shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-zinc-950 bg-white shrink-0">
          <Image
            src={c.logo}
            alt={`${c.name} logo`}
            width={56}
            height={56}
            className="w-full h-full object-contain p-1.5"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-zinc-950 leading-tight group-hover:text-[#7c3bed] transition-colors">
            {c.name}
          </h3>
          <p className="text-[12px] text-zinc-500 font-medium mt-0.5">
            {c.role}
            {c.year ? ` · ${c.year}` : ""}
          </p>
        </div>
      </div>

      <p className="text-[13.5px] leading-relaxed text-zinc-600">{c.summary}</p>

      {c.highlights && c.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {c.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-[12.5px] text-zinc-600">
              <span className="text-[#7c3bed] font-bold shrink-0">✦</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {c.stack.length > 0 && (
        <div className="mt-auto pt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {c.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-[10.5px] font-bold uppercase tracking-wide text-zinc-500 bg-zinc-100 rounded-full px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#7c3bed] shrink-0">
            <ArrowRight size={13} />
          </span>
        </div>
      )}
    </Link>
  );
}
