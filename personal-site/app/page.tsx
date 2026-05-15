import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { works } from "@/lib/data";

const socialIcons = [
  {
    label: "Medium",
    href: "https://muhammadhamd.medium.com/",
    icon: FaMedium,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammadhamd",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Muhammadhamd",
    icon: FaGithub,
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mhamd.selfbrand.app/#person",
        "name": "Muhammad Hamd",
        "alternateName": [
          "Hamd",
          "Hamd Ali",
          "Muhammad Hamd Ali",
          "muhammadhamd"
        ],
        "url": "https://mhamd.selfbrand.app",
        "image": {
          "@type": "ImageObject",
          "url": "https://mhamd.selfbrand.app/hamd.png",
          "width": 400,
          "height": 400
        },
        "jobTitle": "AI Systems Builder & Technology Entrepreneur",
        "description": "Muhammad Hamd (also known as Hamd Ali and Muhammad Hamd Ali) is a technology entrepreneur, agentic AI engineer, and software builder based in Karachi, Pakistan. He builds AI-native products focused on automation, LLM infrastructure, and conversational systems.",
        "nationality": {
          "@type": "Country",
          "name": "Pakistan"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Karachi",
          "addressCountry": "PK"
        },
        "email": "muhammadhamdali572@gmail.com",
        "sameAs": [
          "https://linkedin.com/in/muhammadhamd",
          "https://github.com/Muhammadhamd",
          "https://muhammadhamd.medium.com/",
          "https://x.com/m_hamd_"
        ],
        "knowsAbout": [
          "Agentic AI Systems",
          "Large Language Models",
          "AI Automation",
          "Backend Engineering",
          "LLM Orchestration",
          "Retrieval-Augmented Generation",
          "Vector Databases",
          "WhatsApp Automation",
          "SaaS Product Development",
          "n8n Workflow Automation",
          "Python AI Development",
          "Node.js",
          "Next.js",
          "Go (Golang)"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "AI Systems Engineer & Entrepreneur",
          "occupationLocation": {
            "@type": "Country",
            "name": "Pakistan"
          },
          "skills": "Agentic AI, LLM Integration, Backend Engineering, SaaS, Automation"
        },
        "worksFor": [
          {
            "@type": "Organization",
            "@id": "https://watbot.store/#org",
            "name": "WatBot",
            "url": "https://watbot.store"
          },
          {
            "@type": "Organization",
            "@id": "https://selfbrand.app/#org",
            "name": "selfbrand AI",
            "url": "https://selfbrand.app"
          }
        ],
        "founder": [
          {
            "@type": "Organization",
            "name": "WatBot",
            "url": "https://watbot.store"
          },
          {
            "@type": "Organization",
            "name": "selfbrand AI",
            "url": "https://selfbrand.app"
          },
          {
            "@type": "Organization",
            "name": "Asmara.AI",
            "url": "https://asmara.ai"
          }
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mhamd.selfbrand.app/#webpage",
        "url": "https://mhamd.selfbrand.app",
        "name": "Muhammad Hamd | AI Systems Builder & Entrepreneur",
        "description": "Personal website of Muhammad Hamd (Hamd Ali), AI systems builder and technology entrepreneur from Karachi, Pakistan.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://mhamd.selfbrand.app/#website",
          "url": "https://mhamd.selfbrand.app",
          "name": "Muhammad Hamd",
          "publisher": { "@id": "https://mhamd.selfbrand.app/#person" }
        },
        "about": { "@id": "https://mhamd.selfbrand.app/#person" },
        "mainEntity": { "@id": "https://mhamd.selfbrand.app/#person" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://mhamd.selfbrand.app/hamd.png"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://watbot.store/#app",
        "name": "WatBot",
        "url": "https://watbot.store",
        "applicationCategory": "BusinessApplication",
        "description": "AI-powered WhatsApp automation platform for customer support and conversational workflows, built by Muhammad Hamd.",
        "author": { "@id": "https://mhamd.selfbrand.app/#person" },
        "creator": { "@id": "https://mhamd.selfbrand.app/#person" },
        "operatingSystem": "Web"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://selfbrand.app/#app",
        "name": "selfbrand AI",
        "url": "https://selfbrand.app",
        "applicationCategory": "BusinessApplication",
        "description": "AI-powered personal branding SaaS for founders and professionals, built by Muhammad Hamd.",
        "author": { "@id": "https://mhamd.selfbrand.app/#person" },
        "creator": { "@id": "https://mhamd.selfbrand.app/#person" },
        "operatingSystem": "Web"
      },
      {
        "@type": "ItemList",
        "name": "Products by Muhammad Hamd",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://watbot.store",
            "name": "WatBot"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://selfbrand.app",
            "name": "selfbrand AI"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://asmara.ai",
            "name": "Asmara.AI"
          }
        ]
      }
    ]
  };

  return (
    <main className="max-w-[640px] mx-auto px-5 py-14 flex flex-col gap-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ── Hero ── */}
      <section className="flex flex-col items-center text-center mb-8">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mb-5 ring-2 ring-gray-100">
          <Image
            src="/hamd.png"
            alt="Muhammad Hamd"
            width={64}
            height={64}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        {/* Name as H1 */}
        <h1 className="text-[32px] font-bold tracking-tight text-[#111111] leading-tight mb-2">
          Muhammad Hamd
        </h1>

        {/* Tagline */}
        <h2 className="text-base font-medium text-gray-500 mb-6 tracking-wide">
          AI. Automation. Systems.
        </h2>

        {/* Social icon buttons */}
        <div className="flex items-center gap-3">
          {socialIcons.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-all no-underline"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </section>

      {/* ── Status ── */}
      <section className="mb-10 text-center">
        <p className="text-[14.5px] text-gray-500">
          Building <a href="https://watbot.store" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] hover:underline">WatBot</a> and <a href="https://selfbrand.app" target="_blank" rel="noopener noreferrer" className="font-medium text-[#111111] hover:underline">selfbrand AI</a>.
        </p>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── About Muhammad Hamd ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">About Muhammad Hamd</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>
            Muhammad Hamd is a technology entrepreneur and AI systems builder focused on automation, AI infrastructure, and scalable software products.
          </p>
          <p>
            He works at the intersection of AI engineering, backend systems, and workflow automation, building products that reduce manual work and improve operational efficiency.
          </p>
          <p>
            His work centers on practical AI systems designed for real-world usage rather than experimental concepts.
          </p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── What I Work On ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">What I Work On</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Muhammad Hamd builds AI systems for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Automation</li>
            <li>Content generation</li>
            <li>Conversational workflows</li>
            <li>Backend infrastructure</li>
          </ul>
          <p>This includes:</p>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {[
              "AI agents",
              "LLM integrations",
              "Web scraping systems",
              "Vector search infrastructure",
              "Automation pipelines",
              "Scalable SaaS applications"
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <p>The focus is on building complete systems instead of isolated tools.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── AI Systems & Automation ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">AI Systems & Automation</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Most digital work is still heavily manual.</p>
          <p>
            Hamd's work focuses on replacing repetitive workflows with AI-driven systems that automate execution, communication, and operational tasks.
          </p>
          <p>The approach emphasizes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scalability</li>
            <li>Usability</li>
            <li>Long-term system design</li>
            <li>Reliable infrastructure</li>
          </ul>
          <p>Over short-term automation hacks.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Products ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-5">Products</h2>
        <div className="space-y-8">
          <div className="group block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 bg-white">
                <Image
                  src="/work-logos/watbotlogo.png"
                  alt="WatBot logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://watbot.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[15px] font-bold text-[#111111] hover:text-blue-600 transition-colors no-underline"
                >
                  WatBot
                </a>
                <a
                  href="https://watbot.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#111111] transition-colors ml-1"
                >
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://linkedin.com/company/watbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#111111] transition-colors"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
            <p className="text-[14.5px] leading-[1.7] text-gray-600">
              AI automation and conversational workflow system built for messaging and operational automation.
            </p>
          </div>
          <div className="group block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 bg-white">
                <Image
                  src="/work-logos/selfbrand logo.png"
                  alt="selfbrandAI logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://selfbrand.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[15px] font-bold text-[#111111] hover:text-blue-600 transition-colors no-underline"
                >
                  selfbrandAI
                </a>
                <a
                  href="https://selfbrand.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#111111] transition-colors ml-1"
                >
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://linkedin.com/company/selfbrandai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#111111] transition-colors"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
            <p className="text-[14.5px] leading-[1.7] text-gray-600">
              AI-powered system for personal branding, content generation, and workflow automation.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Engineering & Infrastructure ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">Engineering & Infrastructure</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Muhammad Hamd works across:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI agents and autonomous systems</li>
            <li>LLM integrations and orchestration</li>
            <li>Backend architecture</li>
            <li>Workflow automation</li>
            <li>Web scraping and data pipelines</li>
            <li>Vector databases and retrieval systems</li>
            <li>Scalable SaaS infrastructure</li>
          </ul>
          <p>The focus is building reliable systems that can operate at scale.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Writing & Thinking ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">Writing & Thinking</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Hamd writes about:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI systems</li>
            <li>Automation</li>
            <li>Product engineering</li>
            <li>Autonomous software</li>
            <li>Systems thinking</li>
          </ul>
          <p>His work focuses on practical implementation and real-world execution.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Current Focus ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">Current Focus</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Muhammad Hamd is currently building AI-native systems focused on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Workflow automation</li>
            <li>Conversational infrastructure</li>
            <li>Operational efficiency</li>
          </ul>
          <p>He is particularly interested in how autonomous agents can replace repetitive digital work across modern software products.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Past Experience & Detailed Case Studies ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">Past Experience</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Muhammad Hamd has built multiple AI products and automation systems across:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Content workflows</li>
            <li>Backend infrastructure</li>
            <li>Conversational tools</li>
            <li>AI automation pipelines</li>
          </ul>
          <p>His background combines engineering, product development, and applied AI systems.</p>
        </div>

        {/* Internal links to /work/[slug] */}
        <div className="mt-8 space-y-1">
          <h3 className="text-sm font-semibold text-[#111111] mb-4">Detailed Case Studies & Roles</h3>
          {works.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="flex items-center justify-between py-3.5 border-b border-gray-100 group no-underline"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 bg-white group-hover:border-gray-200 transition-colors">
                  {w.logo ? (
                    <Image
                      src={w.logo}
                      alt={`${w.company} logo`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-gray-400">
                        {w.company.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111] group-hover:text-blue-600 transition-colors">
                    {w.company}
                  </p>
                  <p className="text-xs text-gray-500">{w.role}</p>
                </div>
              </div>
              <ArrowRight
                size={14}
                className="text-gray-300 group-hover:text-blue-600 transition-colors shrink-0 ml-3"
              />
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── How to Work With Me ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">How to Work With Me</h2>
        <div className="space-y-4 text-[14.5px] leading-[1.75] text-gray-600">
          <p>Muhammad Hamd works with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Founders</li>
            <li>Businesses</li>
            <li>Teams</li>
          </ul>
          <p>On:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI systems</li>
            <li>Automation infrastructure</li>
            <li>Scalable product development</li>
          </ul>
          <p>Engagements are focused on building practical long-term systems rather than temporary solutions.</p>
        </div>
      </section>

      <hr className="border-gray-100 mb-10" />

      {/* ── Contact ── */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#111111] mb-4">Contact</h2>
        <div className="space-y-2 text-[14.5px] text-gray-600">
          <p>You can connect with Hamd via:</p>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://linkedin.com/in/muhammadhamd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-gray-600 hover:text-[#111111] hover:underline transition-colors w-fit no-underline"
            >
              <FaLinkedinIn size={16} /> LinkedIn
            </a>
            <a
              href="mailto:muhammadhamdali572@gmail.com"
              className="flex items-center gap-2 font-medium text-gray-600 hover:text-[#111111] hover:underline transition-colors w-fit no-underline"
            >
              <Mail size={16} /> muhammadhamdali572@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Entity Footer (visible to users + Google) ── */}
      <section className="mt-4 pt-10 border-t border-gray-100">
        <p className="text-[11px] uppercase tracking-widest text-gray-300 mb-4">About this site</p>
        <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
          <p>
            This is the personal website of <strong className="text-gray-500">Muhammad Hamd</strong>, also known as{" "}
            <strong className="text-gray-500">Hamd Ali</strong> and{" "}
            <strong className="text-gray-500">Muhammad Hamd Ali</strong>, an AI systems builder and technology entrepreneur based in Karachi, Pakistan.
          </p>
          <p>
            Muhammad Hamd (username: <strong className="text-gray-500">muhammadhamd</strong>) builds agentic AI systems, automation infrastructure, and AI-native SaaS products. He is the founder of WatBot, selfbrand AI, and Asmara.AI, and works as a Full-stack AI Engineer at MindKeepr in Tallinn, Estonia.
          </p>
          <p>
            His work focuses on replacing manual digital work with intelligent, autonomous AI systems — spanning LLM integrations, vector search, conversational infrastructure, and scalable backend engineering.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2026 Muhammad Hamd Ali · Karachi, Pakistan
          </p>
          <p className="text-xs text-gray-300">
            mhamd.selfbrand.app
          </p>
        </div>
      </section>
    </main>
  );
}
