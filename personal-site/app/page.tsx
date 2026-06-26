'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Star, Quote, Mail, MapPin, Linkedin, Twitter, Github, ArrowLeft } from "lucide-react";
import { Squiggle, Sparkle, Diamond, Dot, Triangle, CharacterPlaceholder } from "@/components/DoodleShapes";

function DoodleDeco() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Squiggle className="absolute top-12 left-[8%] w-16 h-auto opacity-40" />
      <Sparkle className="absolute top-24 right-[12%] w-6 h-auto opacity-30" />
      <Triangle className="absolute bottom-32 left-[5%] w-5 h-auto opacity-20" />
      <Dot className="absolute top-1/3 right-[8%] w-4 h-auto opacity-30" />
      <Diamond className="absolute bottom-40 right-[20%] w-4 h-auto opacity-25" />
    </div>
  );
}

const testimonials = [
  {
    quote: "I hired Hamd for his expertise in AI & Backend Development. His deep understanding of AI, chatbots, and backend systems was impressive. He delivered high-quality, scalable solutions on time. I highly recommend him.",
    name: "Syed Arsalan Maqsood",
    role: "Co-Founder at Cubitrek",
  },
  {
    quote: "Hamd was a pleasure to collaborate with at VativeApps. He consistently delivered clean, well-structured code and had a knack for solving complex backend challenges with minimal guidance.",
    name: "Muhammad Uzair Khan",
    role: "CEO at VativeApps",
  },
  {
    quote: "I have known Hamd for over 3 years. He is a hardworking and dedicated individual. His ability to quickly learn new technologies and apply them to solve real-world problems is remarkable.",
    name: "Rafay Khan",
    role: "Co-Founder at First Three LLC",
  },
];

const experiences = [
  { role: "Full-stack AI Engineer", company: "MindKeepr", period: "Feb 2025 - Present", location: "Tallinn, Estonia \u00b7 Hybrid" },
  { role: "Software Engineer", company: "WatBot", period: "Aug 2025 - Present", location: "Pakistan \u00b7 Remote" },
  { role: "Agentic AI Engineer", company: "Cubitrek", period: "Feb 2025 - May 2025", location: "On-site" },
  { role: "Full-stack Developer", company: "Cubitrek", period: "May 2024 - May 2025", location: "On-site" },
  { role: "Founder & Builder", company: "Asmara.AI", period: "2025 - Present", location: "Remote" },
  { role: "Founder & Builder", company: "SelfBrand.app", period: "2024 - Present", location: "Remote" },
  { role: "Node.js Developer", company: "VativeApps", period: "Dec 2023 - May 2024", location: "Karachi \u00b7 On-site" },
];

const products = [
  {
    title: "WatBot",
    tagline: "Customer Support AI Powered by WhatsApp",
    desc: "Enterprise-grade WhatsApp AI platform for automating customer support. Distributed as a secure, local-first compiled binary with context-aware responses.",
    href: "https://watbot.store",
    color: "from-[#195de6] to-[#4a7cf7]",
    logo: "/work-logos/watbotlogo.png",
  },
  {
    title: "selfbrand AI",
    tagline: "AI Personal Branding for Founders",
    desc: "AI-powered SaaS that generates 80% of your personal branding - core positioning, daily content, social presence, and authority strategy - automatically.",
    href: "https://selfbrand.app",
    color: "from-[#10b981] to-[#195de6]",
    logo: "/work-logos/selfbrand logo.png",
  },
];

const writings = [
  {
    title: "Why I'm Building an AI That Replaces My Own Job",
    desc: "Exploring the paradox of creating autonomous systems that could eventually make my role obsolete - and why that's exactly the point.",
    readTime: "6 min read",
    href: "https://medium.com",
  },
  {
    title: "The Local-First Approach to AI Deployment",
    desc: "Why running AI models locally matters for privacy, latency, and reliability - and how WatBot implements this philosophy.",
    readTime: "5 min read",
    href: "https://medium.com",
  },
  {
    title: "Building Agentic AI Systems: A Practical Guide",
    desc: "Lessons learned from designing autonomous AI workflows that actually work in production environments.",
    readTime: "8 min read",
    href: "https://medium.com",
  },
];

function ScrollPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={"scroll-panel " + className + (visible ? " visible" : "")}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Hamd",
    "alternateName": ["Hamd Ali", "Muhammad Hamd Ali"],
    "givenName": "Muhammad",
    "familyName": "Hamd",
    "jobTitle": "AI Systems Builder & Entrepreneur",
    "description": "Technology entrepreneur and agentic AI engineer from Karachi, Pakistan. Founder of WatBot and selfbrand AI. Building autonomous AI systems for automation and conversational workflows.",
    "url": "https://mhamd.selfbrand.app",
    "sameAs": [ "https://linkedin.com/in/m-hamd/", "https://x.com/m_hamd_", "https://github.com/Hamd-Ali" ],
    "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Agentic AI", "LLMs", "Full-stack Development", "System Architecture"],
    "alumniOf": ["Cubitrek", "VativeApps"],
    "owns": ["WatBot", "SelfBrand.app", "Asmara.AI"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-full bg-[#195de6] flex items-center justify-center">
              <span className="text-sm font-bold text-white">MH</span>
            </div>
            <span className="font-semibold text-[#111827]">Muhammad Hamd</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors no-underline">Work</a>
            <a href="#experience" className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors no-underline">Experience</a>
            <a href="#writing" className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors no-underline">Writing</a>
            <a href="#contact" className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors no-underline">Contact</a>
            <a href="https://calendly.com/m-hamd/30min" target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary text-sm !py-2 !px-5">Book a call <ArrowUpRight size={14} /></a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#111827]" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-[#e5e7eb] px-5 py-4 space-y-3">
            <a href="#work" onClick={() => setMenuOpen(false)} className="block text-sm text-[#6b7280] hover:text-[#111827] no-underline">Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="block text-sm text-[#6b7280] hover:text-[#111827] no-underline">Experience</a>
            <a href="#writing" onClick={() => setMenuOpen(false)} className="block text-sm text-[#6b7280] hover:text-[#111827] no-underline">Writing</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-sm text-[#6b7280] hover:text-[#111827] no-underline">Contact</a>
            <a href="https://calendly.com/m-hamd/30min" target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary text-sm !py-2 !px-5 inline-flex">Book a call <ArrowUpRight size={14} /></a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <DoodleDeco />
        <div className="max-w-6xl mx-auto px-5 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#195de6]/10 text-[#195de6] text-xs font-medium mb-6">
                <Sparkle className="w-4 h-4 opacity-100" />
                AI Systems Builder & Entrepreneur
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.1] mb-6">
                Hi, I'm{" "}
                <span className="doodle-underline">Muhammad Hamd</span>
                <br />
                I Build Autonomous
                <br />
                <span className="text-[#195de6]">AI Systems</span>
              </h1>
              <p className="text-lg text-[#6b7280] max-w-lg mb-8 leading-relaxed">
                Technology entrepreneur and agentic AI engineer from Karachi, Pakistan.
                {" "}Founder of <strong className="text-[#111827]">WatBot</strong> and <strong className="text-[#111827]">selfbrand AI</strong>.
                {" "}Building autonomous AI systems for automation and conversational workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/m-hamd/30min" target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary">Book a call <ArrowUpRight size={16} /></a>
                <a href="#work" className="btn-pill btn-outline">View my work <ChevronRight size={16} /></a>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://linkedin.com/in/m-hamd/" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors"><Linkedin size={20} /></a>
                <a href="https://x.com/m_hamd_" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors"><Twitter size={20} /></a>
                <a href="https://github.com/Hamd-Ali" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors"><Github size={20} /></a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-80 md:w-80 md:h-96">
                <CharacterPlaceholder className="w-full h-full drop-shadow-xl" variant={1} />
                <Diamond className="absolute -top-2 -right-2 w-6 h-6 opacity-40" />
                <Dot className="absolute -bottom-4 left-10 w-5 h-5 opacity-40" />
                <Sparkle className="absolute top-10 -left-6 w-7 h-7 opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL SHOWCASE */}
      <section className="section-pad bg-white relative">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-24">
              <ScrollPanel>
                <div className="card-light">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#195de6]/10 flex items-center justify-center">
                      <span className="text-[#195de6] font-bold text-sm">01</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#111827]">About Me</h2>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed">I'm a technology entrepreneur and agentic AI engineer from Karachi, Pakistan, driven by a passion for building autonomous systems that solve real problems. I specialize in designing and deploying AI-powered solutions — from intelligent chatbots to complete agentic workflows — that help businesses automate, scale, and innovate without compromising on reliability.</p>
                  <p className="text-[#6b7280] leading-relaxed mt-4">Currently, I'm the founder of <strong className="text-[#111827]">WatBot</strong>, a WhatsApp AI platform for customer support automation, and <strong className="text-[#111827]">selfbrand AI</strong>, an AI-powered personal branding SaaS. I also work as a Full-stack AI Engineer at <strong className="text-[#111827]">MindKeepr</strong> in Tallinn, Estonia.</p>
                </div>
              </ScrollPanel>

              <ScrollPanel>
                <div className="card-light">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                      <span className="text-[#10b981] font-bold text-sm">02</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#111827]">What I Work On</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Agentic AI Systems", desc: "Autonomous AI workflows that reason, plan, and execute tasks without human intervention using LLMs and custom orchestration." },
                      { title: "Conversational AI", desc: "Intelligent chatbots and voice assistants powered by advanced NLP, context management, and multi-platform integration." },
                      { title: "Full-Stack Engineering", desc: "End-to-end application development from backend APIs and databases to responsive frontends and cloud infrastructure." },
                      { title: "AI Product Strategy", desc: "Taking AI-native products from concept to launch — defining vision, architecture, and go-to-market execution." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <Dot className="w-4 h-4 mt-1 shrink-0" />
                        <div>
                          <h3 className="font-semibold text-[#111827] text-sm">{item.title}</h3>
                          <p className="text-sm text-[#6b7280]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollPanel>

              <ScrollPanel>
                <div className="card-light">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#4a7cf7]/10 flex items-center justify-center">
                      <span className="text-[#4a7cf7] font-bold text-sm">03</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#111827]">AI Systems Philosophy</h2>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed mb-4">I believe AI systems should be reliable, predictable, and safe for production. My approach combines:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-[#6b7280]"><span className="text-[#195de6] font-bold shrink-0">→</span><span><strong className="text-[#111827]">Agentic Architectures:</strong> Multi-step reasoning pipelines with tool-use and memory for complex task automation.</span></li>
                    <li className="flex gap-3 text-sm text-[#6b7280]"><span className="text-[#195de6] font-bold shrink-0">→</span><span><strong className="text-[#111827]">Local-First Deployment:</strong> Running models locally where privacy and latency matter, with cloud fallback for scale.</span></li>
                    <li className="flex gap-3 text-sm text-[#6b7280]"><span className="text-[#195de6] font-bold shrink-0">→</span><span><strong className="text-[#111827]">Human-in-the-Loop:</strong> Designing systems where AI handles the heavy lifting but humans stay in control of critical decisions.</span></li>
                    <li className="flex gap-3 text-sm text-[#6b7280]"><span className="text-[#195de6] font-bold shrink-0">→</span><span><strong className="text-[#111827]">Continuous Learning:</strong> Feedback loops that improve system performance over time without manual retraining.</span></li>
                  </ul>
                </div>
              </ScrollPanel>
            </div>
            <div className="sticky top-32 hidden md:flex flex-col items-center justify-center">
              <div className="relative">
                <CharacterPlaceholder className="w-64 h-80 drop-shadow-xl" variant={2} />
                <div className="absolute -top-6 -right-8 bg-[#195de6] text-white text-xs font-medium px-4 py-2 rounded-2xl rounded-tr-none shadow-lg">That's me! 👋</div>
                <Squiggle className="absolute -bottom-6 -left-8 w-20 h-auto opacity-30" />
              </div>
              <p className="text-sm text-[#6b7280] mt-6 text-center max-w-[200px]">Scroll through to learn more about what I do</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="work" className="section-pad bg-[#f9fafb] relative">
        <DoodleDeco />
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What I've <span className="doodle-underline">Built</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Products and platforms I've founded and built from the ground up.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <a key={product.title} href={product.href} target="_blank" rel="noopener noreferrer" className="card-light group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline block">
                <div className="flex items-start gap-4 mb-4">
                  <div className={"w-14 h-14 rounded-xl bg-gradient-to-br " + product.color + " flex items-center justify-center shadow-md shrink-0"}>
                    <Image src={product.logo} alt={product.title} width={32} height={32} className="rounded" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#195de6] transition-colors">{product.title}</h3>
                    <p className="text-xs text-[#6b7280] font-medium">{product.tagline}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[#6b7280] group-hover:text-[#195de6] transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-sm text-[#6b7280] leading-relaxed">{product.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Kind <span className="doodle-underline">Words</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">What people I've worked with have to say.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={i === 1 ? "card-dark" : "card-light"}>
                <Quote size={20} className={i === 1 ? "text-[#4a7cf7] mb-3" : "text-[#195de6] mb-3"} />
                <p className={"text-sm leading-relaxed mb-5 " + (i === 1 ? "text-gray-300" : "text-[#6b7280]")}>"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-[#195de6]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#195de6]">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className={"text-sm font-semibold " + (i === 1 ? "text-white" : "text-[#111827]")}>{t.name}</p>
                    <p className={"text-xs " + (i === 1 ? "text-gray-400" : "text-[#6b7280]")}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section-pad bg-[#f9fafb] relative overflow-hidden">
        <DoodleDeco />
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">How I <span className="doodle-underline">Work</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">A simple, effective process for turning ideas into working systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-[#195de6]/20" />
            {[
              { step: "01", title: "Understand & Plan", desc: "Deep dive into your goals, challenges, and constraints. I ask the hard questions before writing a single line of code.", icon: "🎯" },
              { step: "02", title: "Design & Build", desc: "Rapid prototyping with continuous feedback. I build iteratively, shipping working systems fast while keeping quality high.", icon: "⚡" },
              { step: "03", title: "Deploy & Iterate", desc: "Production deployment with monitoring, optimization, and ongoing improvements. Your system keeps getting better over time.", icon: "🚀" },
            ].map((item) => (
              <div key={item.step} className="card-light text-center relative">
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-[10px] uppercase tracking-widest text-[#195de6] font-bold mb-1">{item.step}</p>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="relative inline-flex items-center gap-4 bg-white rounded-2xl shadow-md px-6 py-4 border border-[#e5e7eb]">
              <CharacterPlaceholder className="w-14 h-20" variant={3} />
              <div>
                <p className="text-sm font-semibold text-[#111827]">Sound like a fit?</p>
                <a href="https://calendly.com/m-hamd/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-[#195de6] font-medium hover:underline">Let's talk →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING & INFRASTRUCTURE */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Engineering & <span className="doodle-underline">Infrastructure</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">The technical foundations I rely on to build reliable, scalable systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", items: ["Python", "TypeScript", "Go", "Node.js", "SQL"], color: "#195de6" },
              { title: "AI & ML", items: ["OpenAI", "LangChain", "RAG", "Vector DBs", "Agentic Frameworks"], color: "#4a7cf7" },
              { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui", "Framer Motion"], color: "#10b981" },
              { title: "Infra & Tools", items: ["Docker", "Azure", "Linux", "Git", "CI/CD"], color: "#195de6" },
            ].map((cat) => (
              <div key={cat.title} className="card-light">
                <h3 className="text-sm font-bold text-[#111827] mb-3" style={{ color: cat.color }}>{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-[#f3f4f6] text-[#6b7280] font-medium">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EXPERIENCE */}
      <section id="experience" className="section-pad bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Past <span className="doodle-underline">Experience</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Roles and companies I've worked with, building AI systems and software.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#195de6] ring-2 ring-[#195de6]/20 group-hover:ring-4 transition-all" />
                  {i < experiences.length - 1 && <div className="w-0.5 flex-1 bg-[#e5e7eb] my-1" />}
                </div>
                <div className="pb-8 flex-1">
                  <div className="card-light group-hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-bold text-[#111827]">{exp.role}</h3>
                        <p className="text-sm text-[#195de6] font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-[#6b7280] whitespace-nowrap bg-[#f3f4f6] px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-xs text-[#6b7280] mt-2">{exp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO WORK WITH ME */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">How to Work <span className="doodle-underline">With Me</span></h2>
            <div className="space-y-5">
              {[
                { q: "I need an AI chatbot for my business", a: "I build conversational AI systems tailored to your industry. Whether it's WhatsApp, web, or voice — I handle everything from architecture to deployment." },
                { q: "I want to automate complex workflows", a: "I design and deploy agentic AI systems that automate multi-step processes, integrate with your existing tools, and adapt to changing requirements." },
                { q: "I'm looking for a technical co-founder", a: "If you have a compelling AI-native product idea and need someone to own the technical side from zero to launch, let's talk about partnership." },
                { q: "I need AI consulting for my team", a: "I help teams understand AI capabilities, choose the right approach, and build internal expertise. Workshops, architecture reviews, and hands-on guidance." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#195de6]/30 pl-4">
                  <p className="font-semibold text-[#111827] text-sm mb-1">{item.q}</p>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <CharacterPlaceholder className="w-56 h-72 drop-shadow-xl" variant={1} />
                <Triangle className="absolute -bottom-4 right-4 w-6 h-6 opacity-25" />
                <Dot className="absolute top-8 -left-5 w-4 h-4 opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="section-pad bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Writing & <span className="doodle-underline">Thinking</span></h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Thoughts on AI, engineering, and building products that matter.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {writings.map((post, i) => (
              <a key={i} href={post.href} target="_blank" rel="noopener noreferrer" className="card-light group flex items-start justify-between gap-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 no-underline">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#111827] group-hover:text-[#195de6] transition-colors mb-1">{post.title}</h3>
                  <p className="text-sm text-[#6b7280]">{post.desc}</p>
                  <span className="text-xs text-[#6b7280] mt-2 inline-block">{post.readTime}</span>
                </div>
                <ArrowUpRight size={18} className="text-[#6b7280] group-hover:text-[#195de6] transition-colors shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="card-dark text-center max-w-2xl mx-auto relative overflow-hidden">
            <DoodleDeco />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something<br /><span className="text-[#4a7cf7]">Together</span></h2>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">Have a project in mind? I'm always open to discussing new opportunities, interesting ideas, or potential collaborations.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://calendly.com/m-hamd/30min" target="_blank" rel="noopener noreferrer" className="btn-pill !bg-white !text-[#111827] hover:!bg-gray-100"><Mail size={16} /> Book a call</a>
                <a href="mailto:m.hamdxali@gmail.com" className="btn-pill !border-2 !border-white/30 !text-white hover:!bg-white/10">m.hamdxali@gmail.com</a>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <a href="https://linkedin.com/in/m-hamd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="https://x.com/m_hamd_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="https://github.com/Hamd-Ali" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#e5e7eb] bg-white">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#195de6] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">MH</span>
            </div>
            <span className="text-sm text-[#6b7280]">&copy; {new Date().getFullYear()} Muhammad Hamd</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/m-hamd/" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors text-sm no-underline">LinkedIn</a>
            <a href="https://x.com/m_hamd_" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors text-sm no-underline">Twitter</a>
            <a href="https://github.com/Hamd-Ali" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#195de6] transition-colors text-sm no-underline">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
