import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import AuthorCard from "@/components/AuthorCard";
import { DottedPattern, DoodleSparkle } from "@/components/Doodles";
import { posts } from "@/lib/blog";
import { pageMetadata, breadcrumbLd, absUrl, PERSON_ID } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Engineering & Automation Blog | Muhammad Hamd",
  description:
    "Practical articles on agentic AI, LLM integration, RAG, and AI automation by Muhammad Hamd, an agentic AI engineer in Karachi, Pakistan. Written from systems actually shipped.",
  path: "/blog",
  ogTitle: "AI Engineering & Automation Blog",
  ogTag: "Blog",
});

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Muhammad Hamd: AI Engineering & Automation Blog",
  url: absUrl("/blog"),
  inLanguage: "en-US",
  author: { "@id": PERSON_ID },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: absUrl(`/blog/${p.slug}`),
    datePublished: p.date,
  })),
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

const TINTS = ["#fafbfd", "#f7f9ff", "#fdfafb", "#fcfcfa"];

export default function BlogIndexPage() {
  return (
    <PageShell>
      <JsonLd data={blogLd} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <DoodleSparkle className="pointer-events-none absolute -left-2 top-1 hidden h-6 w-6 lg:block" />
        <h1 className="font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          AI Engineering &amp; Automation,{" "}
          <span className="text-[#7c3bed]">from the build side</span>
        </h1>
        <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-zinc-600">
          Practical guides on agentic AI, LLM integration, RAG, and automation. Every article
          comes from systems I have actually shipped, not theory.
        </p>
      </section>

      {/* Author */}
      <div className="mt-8">
        <AuthorCard variant="card" />
      </div>

      {/* Posts */}
      <section className="mt-10 grid gap-5">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-3xl border-2 border-zinc-950 p-6 no-underline shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]"
            style={{ backgroundColor: TINTS[i % TINTS.length] }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-[11px] font-black uppercase tracking-[0.16em] text-[#7c3bed]">
                {p.cluster}
              </span>
              <span className="text-[12px] font-semibold text-zinc-400">
                {fmt(p.date)} · {p.readMinutes} min
              </span>
            </div>
            <h2 className="mt-2 font-display text-[21px] font-extrabold leading-snug text-zinc-950 transition-colors group-hover:text-[#7c3bed]">
              {p.title}
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-zinc-600">{p.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-[#7c3bed]">
              Read article <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
