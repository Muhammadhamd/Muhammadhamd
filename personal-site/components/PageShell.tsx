import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { works } from "@/lib/data";

const linkCls = "text-zinc-500 hover:text-[#7c3bed] no-underline transition-colors";
const colHead = "text-[11px] uppercase tracking-widest text-zinc-400 font-extrabold mb-3";

/** Reusable JSON-LD <script> for server components. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Hire Me", href: "/hire-me" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Medium", href: "https://muhammadhamd.medium.com/", Icon: FaMedium },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadhamd", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/Muhammadhamd", Icon: FaGithub },
];

/**
 * Shared chrome (header + footer) for content pages (hire-me, about, contact,
 * services, uses). Matches the site's neo-brutalist design: Space Grotesk
 * display type, brand blue #7c3bed, thick borders, hard offset shadows.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-violet-100 selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b-2 border-zinc-900/5 px-6 py-4">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-base font-extrabold text-zinc-950 no-underline hover:text-[#7c3bed] transition-colors"
          >
            <ArrowLeft size={16} className="text-[#7c3bed]" />
            <span>Muhammad Hamd</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14px] font-semibold text-zinc-600 no-underline hover:text-[#7c3bed] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/hire-me"
            className="hidden sm:inline-flex items-center gap-2 bg-[#7c3bed] text-white font-extrabold text-[13px] px-4 py-2.5 rounded-full border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all no-underline"
          >
            Hire Me
          </Link>
        </div>
      </header>

      {/* Page body */}
      <main className="max-w-[860px] mx-auto px-6 py-12 sm:py-16">{children}</main>

      {/* Footer */}
      <footer className="border-t-2 border-zinc-900/5 mt-8">
        <div className="max-w-[1000px] mx-auto px-6 py-10">
          <div className="grid gap-6 lg:grid-cols-3 text-[13px] leading-relaxed text-zinc-500">
            <p>
              <strong className="text-zinc-700">Muhammad Hamd</strong> (also known
              as Hamd Ali) is an agentic AI engineer and systems builder based in
              Karachi, Pakistan, available globally.
            </p>
            <p>
              Founder of WatBot, selfbrand AI, and Asmara.AI. Full-stack AI
              Engineer at MindKeepr (Tallinn, Estonia). Building production-ready
              LLM systems and workflow automation.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-700 no-underline shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 hover:text-[#7c3bed] transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
              <p className="text-[12px] text-zinc-400">
                © {new Date().getFullYear()} Muhammad Hamd Ali · Karachi, Pakistan
              </p>
            </div>
          </div>
          <nav className="mt-8 grid gap-8 border-t-2 border-zinc-900/5 pt-8 sm:grid-cols-2 md:grid-cols-4 text-[12.5px]">
            <div>
              <p className={colHead}>Explore</p>
              <ul className="space-y-2">
                {[
                  { label: "Hire Me", href: "/hire-me" },
                  { label: "Services", href: "/services" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Blog", href: "/blog" },
                  { label: "Uses", href: "/uses" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={colHead}>Services</p>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className={linkCls}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={colHead}>Hire in</p>
              <ul className="space-y-2">
                <li><Link href="/ai-engineer-pakistan" className={linkCls}>AI Engineer in Pakistan</Link></li>
                <li><Link href="/ai-engineer-karachi" className={linkCls}>AI Engineer in Karachi</Link></li>
                <li><Link href="/ai-automation-dubai" className={linkCls}>AI Automation in Dubai</Link></li>
                <li><Link href="/ai-automation-qatar" className={linkCls}>AI Automation in Qatar</Link></li>
                <li><Link href="/ai-automation-saudi-arabia" className={linkCls}>AI Automation in Saudi Arabia</Link></li>
                <li><Link href="/ai-automation-middle-east" className={linkCls}>AI Automation in the Middle East</Link></li>
                <li><Link href="/ai-automation-consultant-uk" className={linkCls}>AI Consultant in the UK</Link></li>
                <li><Link href="/ai-automation-consultant-usa" className={linkCls}>AI Consultant in the US</Link></li>
              </ul>
            </div>
            <div>
              <p className={colHead}>Case Studies</p>
              <ul className="space-y-2">
                {works.map((w) => (
                  <li key={w.slug}>
                    <Link href={`/work/${w.slug}`} className={linkCls}>{w.company}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 border-t border-zinc-100 pt-6 text-[12px] font-semibold text-zinc-400">
            <span className="text-zinc-500">Hire an AI engineer:</span>
            <Link href="/ai-engineer-pakistan" className="no-underline hover:text-[#7c3bed]">Pakistan</Link>
            <Link href="/ai-engineer-karachi" className="no-underline hover:text-[#7c3bed]">Karachi</Link>
            <Link href="/ai-automation-dubai" className="no-underline hover:text-[#7c3bed]">Dubai</Link>
            <Link href="/ai-automation-qatar" className="no-underline hover:text-[#7c3bed]">Qatar</Link>
            <Link href="/ai-automation-saudi-arabia" className="no-underline hover:text-[#7c3bed]">Saudi Arabia</Link>
            <Link href="/ai-automation-middle-east" className="no-underline hover:text-[#7c3bed]">Middle East</Link>
            <Link href="/ai-automation-consultant-uk" className="no-underline hover:text-[#7c3bed]">UK</Link>
            <Link href="/ai-automation-consultant-usa" className="no-underline hover:text-[#7c3bed]">US</Link>
            <Link href="/services" className="no-underline hover:text-[#7c3bed]">Services</Link>
            <Link href="/blog" className="no-underline hover:text-[#7c3bed]">Blog</Link>
            <Link href="/uses" className="no-underline hover:text-[#7c3bed]">Uses</Link>
            <Link href="/hire-me" className="no-underline hover:text-[#7c3bed]">Hire Me</Link>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-semibold text-zinc-400">
            <span className="text-zinc-500">AI automation for:</span>
            {industries.map((i) => (
              <Link key={i.slug} href={`/ai-for/${i.slug}`} className="no-underline hover:text-[#7c3bed]">
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
