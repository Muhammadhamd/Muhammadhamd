import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { works } from "@/lib/data";

function SquiggleUnderline({ className }: { className?: string }) {
  return (
    <svg className={className} width="72" height="8" viewBox="0 0 72 8" fill="none" aria-hidden="true">
      <path d="M1 5c3-2 5-2 7 0s5 2 7 0 5-2 7 0 5 2 7 0 5-2 7 0 5 2 7 0 5-2 7 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SparkleDoodle({ className, ...rest }: { className?: string; [key: string]: unknown }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" {...rest}>
      <path d="M7 0.5L8.2 4.8L12.5 6L8.2 7.2L7 11.5L5.8 7.2L1.5 6L5.8 4.8L7 0.5Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <h2 className="text-xl font-bold tracking-tight text-[#171716] mb-2">{children}</h2>
      <SquiggleUnderline className="text-[#FF5E5B]" />
    </div>
  );
}

const socialIcons = [
  { label: "Medium", href: "https://muhammadhamd.medium.com/", icon: FaMedium },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadhamd", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/Muhammadhamd", icon: FaGithub },
];


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{

        "@type": "Person", "@id": "https://mhamd.selfbrand.app/#person",
        name: "Muhammad Hamd", alternateName: ["Hamd","Hamd Ali","Muhammad Hamd Ali","muhammadhamd"],
        url: "https://mhamd.selfbrand.app",
        image: { "@type": "ImageObject", url: "https://mhamd.selfbrand.app/hamd.png", width: 400, height: 400 },
        jobTitle: "AI Systems Builder & Technology Entrepreneur",
        description: "Muhammad Hamd is a technology entrepreneur, agentic AI engineer, and software builder based in Karachi, Pakistan. He builds AI-native products focused on automation, LLM infrastructure, and conversational systems.",
        nationality: { "@type": "Country", name: "Pakistan" },
        address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
        email: "muhammadhamdali572@gmail.com",
        sameAs: ["https://linkedin.com/in/muhammadhamd","https://github.com/Muhammadhamd","https://muhammadhamd.medium.com/","https://x.com/m_hamd_"],
        knowsAbout: ["Agentic AI Systems","Large Language Models","AI Automation","Backend Engineering","LLM Orchestration","RAG","Vector Databases","WhatsApp Automation","SaaS Product Development","n8n","Python","Node.js","Next.js","Go"],
        hasOccupation: { "@type": "Occupation", name: "AI Systems Engineer & Entrepreneur", occupationLocation: { "@type": "Country", name: "Pakistan" }, skills: "Agentic AI, LLM Integration, Backend Engineering, SaaS, Automation" },
        worksFor: [{ "@type": "Organization", name: "WatBot", url: "https://watbot.store" },{ "@type": "Organization", name: "selfbrand AI", url: "https://selfbrand.app" }],
        founder: [{ "@type": "Organization", name: "WatBot", url: "https://watbot.store" },{ "@type": "Organization", name: "selfbrand AI", url: "https://selfbrand.app" },{ "@type": "Organization", name: "Asmara.AI", url: "https://asmara.ai" }]
      }
,
      {
        "@type": "ProfilePage", "@id": "https://mhamd.selfbrand.app/#webpage",
        url: "https://mhamd.selfbrand.app",
        name: "Muhammad Hamd | AI Systems Builder & Entrepreneur",
        description: "Personal website of Muhammad Hamd (Hamd Ali), AI systems builder and technology entrepreneur from Karachi, Pakistan.",
        inLanguage: "en-US",
        isPartOf: { "@type": "WebSite", "@id": "https://mhamd.selfbrand.app/#website", url: "https://mhamd.selfbrand.app", name: "Muhammad Hamd", publisher: { "@id": "https://mhamd.selfbrand.app/#person" } },
        about: { "@id": "https://mhamd.selfbrand.app/#person" },
        mainEntity: { "@id": "https://mhamd.selfbrand.app/#person" },
        primaryImageOfPage: { "@type": "ImageObject", url: "https://mhamd.selfbrand.app/hamd.png" }
      },
      {
        "@type": "SoftwareApplication", name: "WatBot", url: "https://watbot.store", applicationCategory: "BusinessApplication",
        description: "AI-powered WhatsApp automation platform for customer support, built by Muhammad Hamd.",
        author: { "@id": "https://mhamd.selfbrand.app/#person" }, creator: { "@id": "https://mhamd.selfbrand.app/#person" }, operatingSystem: "Web"
      },
      {
        "@type": "SoftwareApplication", name: "selfbrand AI", url: "https://selfbrand.app", applicationCategory: "BusinessApplication",
        description: "AI-powered personal branding SaaS for founders and professionals, built by Muhammad Hamd.",
        author: { "@id": "https://mhamd.selfbrand.app/#person" }, creator: { "@id": "https://mhamd.selfbrand.app/#person" }, operatingSystem: "Web"
      },
      {
        "@type": "ItemList", name: "Products by Muhammad Hamd",
        itemListElement: [
          { "@type": "ListItem", position: 1, url: "https://watbot.store", name: "WatBot" },
          { "@type": "ListItem", position: 2, url: "https://selfbrand.app", name: "selfbrand AI" },
          { "@type": "ListItem", position: 3, url: "https://asmara.ai", name: "Asmara.AI" }
        ]
      }
    ]
  };

  return (
    <main className="max-w-[720px] mx-auto px-5 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ========== HERO ========== */}
      <section className="flex flex-col items-center text-center mb-20 md:mb-28">
        <div className="relative mb-8">
          <div className="absolute inset-0 w-28 h-28 -top-2 -left-2 bg-[#FFF1F0] rounded-[60%_40%_55%_45%/45%_55%_45%_55%] animate-blob-morph opacity-60" />
          <div className="absolute inset-0 w-28 h-28 -top-1 -right-1 bg-[#FFF8F0] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] animate-blob-morph opacity-50" style={{ animationDelay: "-3s" }} />
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <Image src="/hamd.png" alt="Muhammad Hamd" width={96} height={96} className="w-full h-full object-cover object-top" priority />
          </div>
          <SparkleDoodle className="absolute -top-3 -right-3 text-[#FFB74D] animate-pulse-soft" />
          <SparkleDoodle className="absolute -bottom-2 -left-2 text-[#FF5E5B] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        </div>

        <h1 className="text-[38px] md:text-[44px] font-bold tracking-tight text-[#171716] leading-[1.1] mb-2">Muhammad Hamd</h1>
        <SquiggleUnderline className="text-[#FF5E5B] mb-4" />
        <p className="text-lg md:text-xl font-medium text-[#6B6560] mb-6 tracking-wide">AI. Automation. Systems.</p>


        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EBE5DF] shadow-sm mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-sm text-[#6B6560]">
            Building{" "}
            <a href="https://watbot.store" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#171716] hover:text-[#FF5E5B] transition-colors">WatBot</a>{" "}
            &amp;{" "}
            <a href="https://selfbrand.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#171716] hover:text-[#FF5E5B] transition-colors">selfbrand AI</a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {socialIcons.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#EBE5DF] text-[#A8A29E] hover:border-[#FF5E5B] hover:text-[#FF5E5B] hover:shadow-md transition-all duration-200 no-underline">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </section>


      {/* ========== ABOUT + WHAT I WORK ON ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>About Muhammad Hamd</SectionHeading>
        <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-8 md:p-10 space-y-5">
          <p className="text-[15px] leading-[1.8] text-[#6B6560]">
            Muhammad Hamd is a technology entrepreneur and AI systems builder focused on automation, AI infrastructure, and scalable software products.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#6B6560]">
            He works at the intersection of AI engineering, backend systems, and workflow automation, building products that reduce manual work and improve operational efficiency.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#6B6560]">
            His work centers on practical AI systems designed for real-world usage rather than experimental concepts.
          </p>
          <div className="pt-4 mt-4 border-t border-[#F2EEE9]">
            <p className="text-[15px] font-semibold text-[#171716] mb-3">Muhammad Hamd builds AI systems for:</p>
            <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#6B6560] mb-4">
              <li>Automation</li><li>Content generation</li><li>Conversational workflows</li><li>Backend infrastructure</li>
            </ul>
            <p className="text-[13px] text-[#A8A29E] mb-3">This includes:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["AI agents","LLM integrations","Web scraping systems","Vector search infrastructure","Automation pipelines","Scalable SaaS applications"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-[#F5F1EC] text-[#6B6560] font-medium border border-[#EBE5DF] hover:border-[#FF5E5B] hover:text-[#FF5E5B] hover:bg-[#FFF1F0] transition-colors cursor-default">{t}</span>
              ))}
            </div>
            <p className="text-[15px] text-[#6B6560]">The focus is on building complete systems instead of isolated tools.</p>
          </div>
        </div>
      </section>


      {/* ========== PRODUCTS ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>Products</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="group bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8 hover:shadow-lg hover:border-[#FF5E5B]/20 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center bg-[#F5F1EC] border border-[#EBE5DF] shrink-0">
                <Image src="/work-logos/watbotlogo.png" alt="WatBot" width={40} height={40} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <a href="https://watbot.store" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#171716] hover:text-[#FF5E5B] transition-colors no-underline inline-flex items-center gap-1.5">
                  WatBot <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-xs text-[#A8A29E]">WhatsApp AI Platform</p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] flex-1">
              AI automation and conversational workflow system built for messaging and operational automation.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Go","WhatsApp","OpenAI","WebSockets"].map(t=><span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F1EC] text-[#A8A29E]">{t}</span>)}
            </div>
          </div>
          <div className="group bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8 hover:shadow-lg hover:border-[#FF5E5B]/20 transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center bg-[#F5F1EC] border border-[#EBE5DF] shrink-0">
                <Image src="/work-logos/selfbrand logo.png" alt="selfbrand AI" width={40} height={40} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <a href="https://selfbrand.app" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#171716] hover:text-[#FF5E5B] transition-colors no-underline inline-flex items-center gap-1.5">
                  selfbrand AI <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-xs text-[#A8A29E]">Personal Branding SaaS</p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] flex-1">
              AI-powered system for personal branding, content generation, and workflow automation.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Next.js","OpenAI","TypeScript","Tailwind"].map(t=><span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F1EC] text-[#A8A29E]">{t}</span>)}
            </div>
          </div>
        </div>
      </section>


      {/* ========== AI SYSTEMS & ENGINEERING ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>AI Systems &amp; Engineering</SectionHeading>
        <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-8 md:p-10 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-[#FF5E5B]" />
              <h3 className="text-base font-bold text-[#171716]">AI Systems &amp; Automation</h3>
            </div>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">Most digital work is still heavily manual.</p>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">Hamd&apos;s work focuses on replacing repetitive workflows with AI-driven systems that automate execution, communication, and operational tasks.</p>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">The approach emphasizes:</p>
            <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#6B6560] mb-3">
              <li>Scalability</li><li>Usability</li><li>Long-term system design</li><li>Reliable infrastructure</li>
            </ul>
            <p className="text-[15px] text-[#6B6560]">Over short-term automation hacks.</p>
          </div>
          <hr className="border-[#F2EEE9]" />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-[#FFB74D]" />
              <h3 className="text-base font-bold text-[#171716]">Engineering &amp; Infrastructure</h3>
            </div>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">Muhammad Hamd works across:</p>
            <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#6B6560] mb-3">
              <li>AI agents and autonomous systems</li><li>LLM integrations and orchestration</li><li>Backend architecture</li>
              <li>Workflow automation</li><li>Web scraping and data pipelines</li><li>Vector databases and retrieval systems</li><li>Scalable SaaS infrastructure</li>
            </ul>
            <p className="text-[15px] text-[#6B6560]">The focus is building reliable systems that can operate at scale.</p>
          </div>
        </div>
      </section>


      {/* ========== WRITING & CURRENT FOCUS ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>Writing &amp; Current Focus</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8">
            <h3 className="text-base font-bold text-[#171716] mb-3">Writing &amp; Thinking</h3>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] mb-3">Hamd writes about:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-[#6B6560] mb-3">
              <li>AI systems</li><li>Automation</li><li>Product engineering</li><li>Autonomous software</li><li>Systems thinking</li>
            </ul>
            <p className="text-[14px] text-[#6B6560]">His work focuses on practical implementation and real-world execution.</p>
          </div>
          <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8">
            <h3 className="text-base font-bold text-[#171716] mb-3">Current Focus</h3>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] mb-3">Muhammad Hamd is currently building AI-native systems focused on:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-[#6B6560] mb-3">
              <li>Workflow automation</li><li>Conversational infrastructure</li><li>Operational efficiency</li>
            </ul>
            <p className="text-[14px] text-[#6B6560]">He is particularly interested in how autonomous agents can replace repetitive digital work across modern software products.</p>
          </div>
        </div>
      </section>


      {/* ========== PAST EXPERIENCE ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>Past Experience</SectionHeading>
        <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-8 md:p-10">
          <div className="space-y-3 text-[15px] leading-[1.8] text-[#6B6560] mb-8">
            <p>Muhammad Hamd has built multiple AI products and automation systems across:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Content workflows</li><li>Backend infrastructure</li><li>Conversational tools</li><li>AI automation pipelines</li>
            </ul>
            <p>His background combines engineering, product development, and applied AI systems.</p>
          </div>
          <h3 className="text-sm font-bold text-[#171716] mb-5">Detailed Case Studies &amp; Roles</h3>
          <div className="space-y-1">
            {works.map((w) => (
              <Link key={w.slug} href={`/work/${w.slug}`}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#F5F1EC] group transition-all duration-200 no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-[#EBE5DF] group-hover:border-[#FF5E5B]/30 transition-colors shrink-0">
                    {w.logo ? (
                      <Image src={w.logo} alt={`${w.company} logo`} width={36} height={36} className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="text-[10px] font-bold text-[#A8A29E]">{w.company.substring(0,2).toUpperCase()}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#171716] group-hover:text-[#FF5E5B] transition-colors">{w.company}</p>
                    <p className="text-xs text-[#A8A29E]">{w.role}</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#D1CCC6] group-hover:text-[#FF5E5B] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ========== WORK WITH ME + CONTACT ========== */}
      <section className="mb-20 md:mb-28">
        <SectionHeading>Work With Me</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8">
            <h3 className="text-base font-bold text-[#171716] mb-3">How to Work With Me</h3>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] mb-3">Muhammad Hamd works with:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-[#6B6560] mb-3">
              <li>Founders</li><li>Businesses</li><li>Teams</li>
            </ul>
            <p className="text-[14px] leading-[1.7] text-[#6B6560] mb-3">On:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-[#6B6560] mb-3">
              <li>AI systems</li><li>Automation infrastructure</li><li>Scalable product development</li>
            </ul>
            <p className="text-[14px] text-[#6B6560]">Engagements are focused on building practical long-term systems rather than temporary solutions.</p>
          </div>
          <div className="bg-white rounded-3xl border border-[#EBE5DF] shadow-sm p-6 md:p-8">
            <h3 className="text-base font-bold text-[#171716] mb-3">Get in Touch</h3>
            <p className="text-[14px] text-[#6B6560] mb-5">You can connect with Hamd via:</p>
            <div className="space-y-3">
              <a href="https://linkedin.com/in/muhammadhamd" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-[#EBE5DF] hover:border-[#FF5E5B]/30 hover:bg-[#FFF1F0] transition-all duration-200 no-underline group">
                <div className="w-9 h-9 rounded-lg bg-[#F5F1EC] flex items-center justify-center group-hover:bg-[#FFF1F0] transition-colors">
                  <FaLinkedinIn size={14} className="text-[#6B6560] group-hover:text-[#FF5E5B] transition-colors" />
                </div>
                <span className="text-sm font-medium text-[#171716]">LinkedIn</span>
                <ArrowRight size={12} className="ml-auto text-[#D1CCC6] group-hover:text-[#FF5E5B] group-hover:translate-x-1 transition-all" />
              </a>
              <a href="mailto:muhammadhamdali572@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl border border-[#EBE5DF] hover:border-[#FF5E5B]/30 hover:bg-[#FFF1F0] transition-all duration-200 no-underline group">
                <div className="w-9 h-9 rounded-lg bg-[#F5F1EC] flex items-center justify-center group-hover:bg-[#FFF1F0] transition-colors">
                  <Mail size={14} className="text-[#6B6560] group-hover:text-[#FF5E5B] transition-colors" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#171716] block">Email</span>
                  <span className="text-xs text-[#A8A29E]">muhammadhamdali572@gmail.com</span>
                </div>
                <ArrowRight size={12} className="ml-auto text-[#D1CCC6] group-hover:text-[#FF5E5B] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ========== ENTITY FOOTER ========== */}
      <footer className="pt-12 border-t border-[#EBE5DF]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D1CCC6] mb-5">About this site</p>
        <div className="space-y-3 text-xs text-[#A8A29E] leading-relaxed">
          <p>This is the personal website of <strong className="text-[#6B6560]">Muhammad Hamd</strong>, also known as <strong className="text-[#6B6560]">Hamd Ali</strong> and <strong className="text-[#6B6560]">Muhammad Hamd Ali</strong>, an AI systems builder and technology entrepreneur based in Karachi, Pakistan.</p>
          <p>Muhammad Hamd (username: <strong className="text-[#6B6560]">muhammadhamd</strong>) builds agentic AI systems, automation infrastructure, and AI-native SaaS products. He is the founder of WatBot, selfbrand AI, and Asmara.AI, and works as a Full-stack AI Engineer at MindKeepr in Tallinn, Estonia.</p>
          <p>His work focuses on replacing manual digital work with intelligent, autonomous AI systems — spanning LLM integrations, vector search, conversational infrastructure, and scalable backend engineering.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-[#F2EEE9] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-[#A8A29E]">&copy; 2026 Muhammad Hamd Ali &middot; Karachi, Pakistan</p>
          <p className="text-xs text-[#D1CCC6]">mhamd.selfbrand.app</p>
        </div>
      </footer>
    </main>
  );
}
