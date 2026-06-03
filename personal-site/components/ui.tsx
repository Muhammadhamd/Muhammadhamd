import {
  DoodleSquiggle,
  DoodleDoubleUnderline,
  DoodleLoop,
  DoodleArrowCurly,
  DoodlePlayfulStar,
  DoodleSparkle,
  DottedPattern,
} from "@/components/Doodles";

/**
 * Shared creative primitives that echo the homepage design language:
 * lightweight kickers, doodle-underlined headings, clean marker lists,
 * tinted feature cards, scattered doodles, and a dark CTA block.
 * No heavy bordered "eyebrow pills".
 */

/* ── Section header: small kicker + display heading + hand-drawn underline ── */
export function SectionHeader({
  title,
  doodle = "squiggle",
  align = "left",
  className = "",
}: {
  kicker?: string;
  title: React.ReactNode;
  doodle?: "squiggle" | "double" | "none";
  align?: "left" | "center";
  kickerColor?: string;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      <h2 className="font-display text-[26px] sm:text-[32px] font-extrabold tracking-tight text-zinc-950 leading-[1.1]">
        {title}
      </h2>
      {doodle === "squiggle" && (
        <DoodleSquiggle className={`h-2.5 ${align === "center" ? "w-44 mx-auto" : "w-40"} text-[#195de6]/40 mt-2`} />
      )}
      {doodle === "double" && (
        <DoodleDoubleUnderline className={`h-2.5 ${align === "center" ? "w-52 mx-auto" : "w-48"} text-amber-400 mt-2`} />
      )}
    </div>
  );
}

/* ── Clean check list (blue ticks, no boxes) ── */
export function CheckList({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul className={`mt-6 grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-zinc-700">
          <span className="mt-0.5 shrink-0 font-extrabold text-[#195de6]">✓</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Star list (amber ✦ markers, homepage step style) ── */
export function StarList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-[14px] font-medium text-zinc-600">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2">
          <span className="text-amber-500">✦</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Light pill (subtle, not heavy bordered) ── */
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200/70 bg-zinc-50 px-3 py-1.5 text-[13px] font-bold text-zinc-600 transition-colors hover:border-[#195de6]/40 hover:text-zinc-900">
      {children}
    </span>
  );
}

export function PillRow({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {items.map((it) => (
        <Pill key={it}>{it}</Pill>
      ))}
    </div>
  );
}

/* ── Tinted feature card with a colored accent (bento style) ── */
const TINTS = ["#fafbfd", "#fdfafb", "#fcfcfa", "#f7f9ff"];
const ACCENTS = [
  { bg: "bg-amber-100", text: "text-amber-600" },
  { bg: "bg-sky-100", text: "text-sky-600" },
  { bg: "bg-blue-50", text: "text-[#195de6]" },
  { bg: "bg-violet-100", text: "text-violet-600" },
];

export function FeatureCard({
  index = 0,
  icon,
  title,
  children,
}: {
  index?: number;
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  const tint = TINTS[index % TINTS.length];
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div
      className="rounded-3xl border-2 border-zinc-950 p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]"
      style={{ backgroundColor: tint }}
    >
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${accent.bg} ${accent.text} font-display font-black`}>
        {icon ?? index + 1}
      </div>
      <h3 className="font-display text-[16px] font-extrabold text-zinc-950">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">{children}</p>
    </div>
  );
}

/* ── FAQ accordion (soft border, lightens the heavy look) ── */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-all open:border-zinc-950 hover:border-zinc-950"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-[15px] font-bold text-zinc-950">
            {f.q}
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#195de6] transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ── Dark CTA block (homepage contact section style) ── */
export function DarkCTA({
  title,
  text,
  primary,
  secondary,
}: {
  kicker?: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-4 border-zinc-950 bg-[#18181b] p-8 md:p-12 text-white shadow-[8px_8px_0px_0px_rgba(25,93,230,0.95)]">
      <DottedPattern className="w-[150px] h-[150px] right-2 top-2 opacity-10" />
      <div className="relative grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-8 text-center md:text-left">
          <h2 className="font-display text-[24px] sm:text-[32px] font-bold tracking-tight">{title}</h2>
          <p className="mt-3 max-w-[60ch] text-[14.5px] leading-relaxed text-zinc-300">{text}</p>
        </div>
        <div className="flex flex-col items-center gap-3 md:col-span-4 md:items-end">
          <a
            href={primary.href}
            target={primary.href.startsWith("http") ? "_blank" : undefined}
            rel={primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/20 bg-[#195de6] px-6 py-3.5 font-display text-[13px] font-bold text-white no-underline transition-all hover:bg-[#124cb8]"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              target={secondary.href.startsWith("http") ? "_blank" : undefined}
              rel={secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3.5 font-display text-[13px] font-bold text-white no-underline transition-all hover:bg-zinc-700"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Scattered decorative doodles + geometric shapes for a section ── */
export function Scatter() {
  return (
    <>
      <DoodleLoop className="pointer-events-none absolute right-[4%] top-10 hidden h-12 w-12 rotate-12 text-blue-200 lg:block" />
      <DoodleArrowCurly className="pointer-events-none absolute left-[3%] top-1/3 hidden h-12 w-12 -rotate-12 text-sky-400 lg:block" />
      <DoodlePlayfulStar className="pointer-events-none absolute right-[8%] bottom-24 hidden h-6 w-6 lg:block" />
      <DoodleSparkle className="pointer-events-none absolute left-[8%] bottom-1/4 hidden h-6 w-6 lg:block" />
      <span className="pointer-events-none absolute left-[6%] top-24 hidden h-3 w-3 rounded-full bg-[#195de6] lg:block" />
      <span className="pointer-events-none absolute right-[6%] top-1/2 hidden h-3 w-3 rotate-45 bg-amber-400 lg:block" />
    </>
  );
}
