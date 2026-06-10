import { Mail, Calendar, MapPin, Clock } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import PageShell, { JsonLd } from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import CalendlyInline from "@/components/CalendlyInline";
import { DottedPattern, DoodleSparkle } from "@/components/Doodles";
import { pageMetadata, breadcrumbLd, absUrl, PERSON_ID } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Muhammad Hamd: Book an Agentic AI Engineer",
  description:
    "Get in touch with Muhammad Hamd, agentic AI engineer in Karachi, Pakistan. Email, LinkedIn, or book a call to discuss LLM systems, AI agents, and automation projects.",
  path: "/contact",
  ogTitle: "Let's talk about your AI system",
  ogTag: "Contact",
});

const EMAIL = "muhammadhamdali572@gmail.com";
// Single source of truth: the same CALENDLY_URL the chat's schedule_meeting
// tool uses. Falls back to the public handle if the env var is unset, so the
// "Book a call" link is never dead.
const CALENDAR_URL = process.env.CALENDLY_URL || "https://calendly.com/muhammadhamd";

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: absUrl("/contact"),
  name: "Contact Muhammad Hamd",
  mainEntity: { "@id": PERSON_ID },
};

const channels = [
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Calendar, label: "Book a call", value: "Pick a time that works for you", href: CALENDAR_URL },
  { Icon: FaLinkedinIn, label: "LinkedIn", value: "linkedin.com/in/muhammadhamd", href: "https://linkedin.com/in/muhammadhamd" },
  { Icon: FaGithub, label: "GitHub", value: "github.com/Muhammadhamd", href: "https://github.com/Muhammadhamd" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={contactLd} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      {/* Hero */}
      <section className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <DoodleSparkle className="pointer-events-none absolute -left-2 top-1 hidden h-6 w-6 lg:block" />
        <h1 className="font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          Let&apos;s talk about your{" "}
          <span className="text-[#7c3bed]">AI system</span>
        </h1>
        <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-zinc-600">
          Tell me what you&apos;re trying to build or automate. I read every message and reply
          with whether I can help and how I&apos;d approach it. I&apos;m{" "}
          <strong className="text-zinc-900">Muhammad Hamd</strong>, based in Karachi, Pakistan
          (UTC+5), working remotely with clients worldwide.
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <div className="rounded-3xl border-2 border-zinc-950 bg-[#fafafc] p-6 shadow-[5px_5px_0px_0px_rgba(124,59,237,0.95)] sm:p-7">
          <h2 className="mb-4 font-display text-[18px] font-extrabold text-zinc-950">Send a message</h2>
          <ContactForm />
        </div>

        {/* Channels */}
        <div className="space-y-3">
          {channels.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-2xl border-2 border-zinc-100 bg-white p-4 no-underline transition-all hover:border-zinc-950 hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-[#7c3bed]">
                <Icon size={17} />
              </span>
              <div>
                <p className="font-display text-[14px] font-bold text-zinc-950">{label}</p>
                <p className="text-[13px] text-zinc-500">{value}</p>
              </div>
            </a>
          ))}

          <div className="rounded-2xl border-2 border-zinc-100 bg-[#f7f9ff] p-4">
            <div className="flex items-center gap-2 text-[13px] font-bold text-zinc-700">
              <MapPin size={15} className="text-[#7c3bed]" /> Karachi, Pakistan
            </div>
            <div className="mt-2 flex items-center gap-2 text-[13px] font-bold text-zinc-700">
              <Clock size={15} className="text-[#7c3bed]" /> UTC+5, overlapping EU mornings and US evenings
            </div>
          </div>
        </div>
      </div>

      {/* Inline scheduler — only rendered when a real CALENDLY_URL is set */}
      {process.env.CALENDLY_URL ? (
        <section className="mt-12">
          <h2 className="mb-4 font-display text-[20px] font-extrabold text-zinc-950">
            Or grab a time directly
          </h2>
          <CalendlyInline url={process.env.CALENDLY_URL} />
        </section>
      ) : null}
    </PageShell>
  );
}
