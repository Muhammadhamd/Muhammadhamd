import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageShell, { JsonLd } from "@/components/PageShell";
import AuthorCard from "@/components/AuthorCard";
import { FaqList, DarkCTA } from "@/components/ui";
import AskAI from "@/components/AskAI";
import { autoLink } from "@/lib/autolink";
import { type Post } from "@/lib/blog";
import { faqPageLd, breadcrumbLd, absUrl, personRef } from "@/lib/seo";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function Prose({ post }: { post: Post }) {
  const used = new Set<string>();
  return (
    <div className="mt-8">
      {post.body.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 font-display text-[24px] sm:text-[26px] font-extrabold tracking-tight text-zinc-950"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-7 font-display text-[18px] font-bold text-zinc-950">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mt-4 text-[16px] leading-[1.75] text-zinc-700">
                {autoLink(block.text, used)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 space-y-2.5">
                {block.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-zinc-700">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3bed]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-4 space-y-2.5">
                {block.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-zinc-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7c3bed] text-[11px] font-black text-white">
                      {j + 1}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="mt-6 border-l-4 border-[#7c3bed] bg-[#f7f9ff] px-5 py-4 text-[16px] font-medium italic leading-relaxed text-zinc-700"
              >
                {block.text}
              </blockquote>
            );
          case "code":
            return (
              <pre
                key={i}
                className="mt-6 overflow-x-auto rounded-2xl border-2 border-zinc-950 bg-zinc-950 p-4 text-[13px] leading-relaxed text-zinc-100 shadow-[3px_3px_0px_0px_rgba(124,59,237,1)]"
              >
                <code className="whitespace-pre font-mono">{block.code}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default function BlogPostView({ post }: { post: Post }) {
  const url = absUrl(`/blog/${post.slug}`);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: "en-US",
    keywords: post.keyword,
    image: absUrl("/hamd.png"),
    mainEntityOfPage: url,
    url,
    author: personRef,
    publisher: personRef,
  };

  return (
    <PageShell>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(post.faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-zinc-500 no-underline hover:text-[#7c3bed] transition-colors"
        >
          <ArrowLeft size={14} /> All posts
        </Link>

        <h1 className="mt-5 font-display text-[30px] sm:text-[40px] font-extrabold leading-[1.08] tracking-tight text-zinc-950">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b-2 border-zinc-900/5 pb-6">
          <AuthorCard variant="byline" />
          <p className="text-[13px] font-semibold text-zinc-400">
            {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </div>

        <div className="mt-6">
          <AskAI path={`/blog/${post.slug}`} label={post.title} />
        </div>

        <Prose post={post} />

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-[24px] font-extrabold tracking-tight text-zinc-950">
            Frequently Asked Questions
          </h2>
          <FaqList faqs={post.faqs} />
        </section>

        {/* Author bio */}
        <div className="mt-12">
          <AuthorCard variant="card" />
        </div>

        {/* Related */}
        {post.related.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-[18px] font-extrabold tracking-tight text-zinc-950">
              Keep reading
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              {post.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#7c3bed] no-underline hover:gap-3 transition-all"
                >
                  <ArrowRight size={16} /> {r.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-12">
          <DarkCTA
            title="Want this built for your team?"
            text="I build production AI systems and automation end to end. Tell me what you need and I'll tell you honestly how I'd approach it."
            primary={{ label: "Start a project", href: "mailto:muhammadhamdali572@gmail.com" }}
            secondary={{ label: "Hire me", href: "/hire-me" }}
          />
        </div>
      </article>
    </PageShell>
  );
}
