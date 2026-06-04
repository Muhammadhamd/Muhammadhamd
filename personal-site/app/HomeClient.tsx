"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Mail,
  ArrowRight,
  Sparkles,
  Bot,
  Terminal,
  Compass,
  Cpu,
  Layers,
  Award,
  PenTool,
  CheckCircle2,
  Workflow,
  MessageSquare,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium, FaLinkedin } from "react-icons/fa6";
import { works } from "@/lib/data";
import {
  DoodleSquiggle,
  DoodleDoubleUnderline,
  DoodlePlayfulStar,
  DoodleSparkle,
  DoodleLoop,
  DoodleArrow,
  DoodleArrowCurly,
  SpeechBubble,
  DottedPattern,
} from "@/components/Doodles";

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

export default function HomeClient() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToStep = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-blue-100 selection:text-black overflow-x-hidden relative pb-16">

      {/* Decorative scattered geometric shapes matching reference images */}
      <div className="absolute top-28 left-[10%] w-3 h-3 rounded-full bg-[#195de6] pointer-events-none animate-pulse" />
      <div className="absolute top-52 right-[8%] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-amber-400 pointer-events-none rotate-12" />
      <div className="absolute top-[450px] left-[5%] w-3.5 h-3.5 bg-[#195de6] rotate-45 pointer-events-none" />
      <div className="absolute top-[800px] right-[10%] w-3 h-3 rounded-full bg-violet-400 pointer-events-none" />
      <div className="absolute bottom-[600px] left-[8%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-amber-500 pointer-events-none -rotate-12" />
      <div className="absolute bottom-40 right-[12%] w-3.5 h-3.5 bg-[#195de6] rotate-12 pointer-events-none" />

      {/* Premium Header / Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b-2 border-zinc-900/5 px-6 py-4">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-zinc-950 flex items-center gap-1.5">
              Muhammad Hamd
              <span className="w-2.5 h-2.5 rounded-full bg-[#195de6] inline-block animate-ping" />
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[13.5px] font-semibold text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition-colors">About</a>
            <a href="#products" className="hover:text-zinc-950 transition-colors">Products</a>
            <a href="#experience" className="hover:text-zinc-950 transition-colors">Case Studies</a>
            <a href="#focus" className="hover:text-zinc-950 transition-colors">Systems</a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              id="btn-open-ai-clone-header"
              className="trigger-ai-clone text-xs font-bold px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all cursor-pointer"
            >
              Ask Twin AI
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section Container */}
      <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28 max-w-[1100px] mx-auto overflow-visible">
        <DottedPattern className="w-[180px] h-[180px] top-6 right-20" />
        
        {/* Centered Main Column Layout representing the beautiful centered header structure */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Creative, highly polished single Profile Image at Center Top */}
          <div className="relative mb-8 group select-none">
            {/* Draw playful hand-drawn ray lines above the head like the Teksyo attachment */}
            <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 flex justify-between w-12 opacity-60">
              <div className="w-[3px] h-[16px] bg-zinc-300 rounded-full -rotate-12" />
              <div className="w-[3px] h-[16px] bg-zinc-300 rounded-full" />
              <div className="w-[3px] h-[16px] bg-zinc-300 rounded-full rotate-12" />
            </div>

            {/* Playful Floating Doodles on the sides to recreate the Teksyo vibe in a creative, professional way */}
            <DoodlePlayfulStar className="absolute left-[-45px] top-[15px] w-6 h-6 text-amber-400 animate-spin-slow opacity-80" />
            <DoodleLoop className="absolute right-[-45px] top-[10px] w-10 h-10 text-zinc-900 opacity-20" />
            
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-zinc-950 bg-white shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-zinc-300 group-hover:rotate-45 transition-transform duration-1000" />
              <div className="absolute inset-4 rounded-full bg-amber-50" />
              <Image
                src="/hamd.png"
                alt="Muhammad Hamd"
                width={144}
                height={144}
                className="w-[90%] h-[90%] object-cover object-top rounded-full z-10"
                priority
              />
            </div>

            {/* Micro active role badge overlaying the DP container for MindKeepr Tallinn */}
            <div className="absolute bottom-[-10px] right-[-32px] bg-white border-2 border-zinc-950 px-3 py-1.5 rounded-2xl shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] flex items-center gap-1.5 z-20 hover:scale-105 transition-transform select-none">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-pulse" />
              <div className="text-left leading-none">
                <p className="text-[7.5px] uppercase font-black tracking-widest text-[#a8a29e]">ACTIVE ROLE</p>
                <p className="text-[10px] font-black text-zinc-950 whitespace-nowrap mt-0.5">MindKeepr Tallinn</p>
              </div>
            </div>
          </div>



          {/* Main Title Heading with Playful Centered Squiggle Details */}
          <div className="relative mb-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-none">
              Muhammad Hamd
            </h1>
            <DoodleSquiggle className="w-48 text-[#195de6]/30 absolute bottom-[-10px] left-1/2 transform -translate-x-1/2" />
          </div>

          <p className="font-display text-xl sm:text-2xl font-bold text-zinc-600 mt-5 mb-6 tracking-wide flex items-center justify-center gap-2">
            <span>AI. Automation. Systems.</span>
            <span className="text-[#195de6]">⚡</span>
          </p>

          <div className="max-w-[620px] text-center mx-auto text-zinc-600 text-base sm:text-[17px] leading-relaxed mb-8 flex flex-col items-center">
            <p>
              Leading the construction of production-ready agentic workflows, custom LLM infrastructure, and web scraping networks that replace digital manual toil with highly scalable, self-running systems.
            </p>
            
            {/* Real Status indicator kept and beautifully styled */}
            <div className="mt-5 p-3 bg-white border border-zinc-200/85 rounded-2xl inline-flex items-center gap-2 hover:border-zinc-300 transition-colors shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block animate-ping" />
              <span className="text-[13px] text-zinc-500 font-semibold">
                Building <a href="https://watbot.store" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-900 hover:underline">WatBot</a> and <a href="https://selfbrand.app" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-900 hover:underline">selfbrand AI</a>
              </span>
            </div>
          </div>

          {/* Quick CTAs centered with offset shadow */}
          <div className="flex flex-wrap gap-4 items-center justify-center relative w-full mb-8 z-10">
            <Link
              href="/hire-me"
              className="inline-flex items-center justify-center font-display font-bold text-sm bg-zinc-950 hover:bg-zinc-800 text-white px-7 py-3.5 rounded-full border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(25,93,230,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(25,93,230,1)] active:translate-x-[0px] active:translate-y-[0px] transition-all cursor-pointer no-underline"
            >
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhamdali572@gmail.com&su=Hey%20Hamd,%20I%20want%20to%20scale%20my%20business%20with%20AI&body=hey%20Hamd%20I%20want%20to%20scale%20my%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-display font-bold text-sm bg-[#195de6] hover:bg-[#154fc4] text-white px-7 py-3.5 rounded-full border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-x-[0px] active:translate-y-[0px] transition-all cursor-pointer no-underline"
            >
              Let's Partner Up
              <Mail className="ml-2 w-4 h-4" />
            </a>

            <button
              id="btn-open-ai-clone-hero"
              className="trigger-ai-clone inline-flex items-center justify-center font-display font-bold text-sm bg-white hover:bg-zinc-50 text-zinc-950 px-6 py-3.5 rounded-full border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-x-[0px] active:translate-y-[0px] transition-all cursor-pointer"
            >
              Chat with My AI Clone
              <Sparkles className="ml-2 w-4 h-4 text-[#195de6]" />
            </button>
          </div>

          {/* Connected Social Accounts */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="text-xs uppercase tracking-widest text-[#a8a29e] font-extrabold font-display">Connect:</span>
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-zinc-500 hover:border-zinc-950 hover:text-zinc-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,0.04)] hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[-1.5px] transition-all no-underline"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── Section: Products (Primary SaaS Cards) ── */}
      <section id="products" className="px-6 py-12 md:py-16 max-w-[1100px] mx-auto scroll-mt-24">
        <div className="text-center md:text-left mb-10 relative">
          <div className="inline-flex items-center gap-1.5 text-zinc-400 font-display font-bold text-[11px] tracking-widest uppercase mb-2">
            <span>MY WORKBENCH</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-zinc-950 flex flex-wrap items-center justify-center md:justify-start gap-2">
            Production Products I Founded & Build
          </h2>
          <DoodleDoubleUnderline className="w-64 text-amber-400 block h-2 mx-auto md:mx-0 mt-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Product A: WatBot */}
          <div className="bg-white border-2 border-zinc-950 rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-all flex flex-col justify-between relative group">
            <span className="absolute top-4 right-4 bg-emerald-50 border-2 border-emerald-100 text-emerald-600 font-display text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
              ACTIVE SAAS
            </span>
            
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-zinc-950 bg-white shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                  <Image
                    src="/work-logos/watbotlogo.png"
                    alt="WatBot logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display text-xl font-bold text-zinc-900 leading-none">WatBot</h3>
                    <a
                      href="https://watbot.store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-950 transition-colors pt-0.5"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">watbot.store</p>
                </div>
              </div>

              <p className="text-base font-semibold text-zinc-800 mb-3 font-display leading-snug">
                Customer Support AI Powered by WhatsApp
              </p>
              
              <p className="text-[14.5px] leading-relaxed text-zinc-600 mb-6">
                AI automation and conversational workflow system built for enterprise-grade messaging and automated business operational support.
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Linked:</span>
                <a
                  href="https://linkedin.com/company/watbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:border-zinc-900 transition-all"
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
              <a
                href="https://watbot.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors"
              >
                Visit Site <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Product B: selfbrandAI */}
          <div className="bg-white border-2 border-zinc-950 rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] transition-all flex flex-col justify-between relative group">
            <span className="absolute top-4 right-4 bg-indigo-50 border-2 border-indigo-100 text-indigo-600 font-display text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
              LAUNCHED CO-FOUNDED
            </span>

            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-zinc-950 bg-white shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                  <Image
                    src="/work-logos/selfbrand logo.png"
                    alt="selfbrandAI logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display text-xl font-bold text-zinc-900 leading-none">selfbrandAI</h3>
                    <a
                      href="https://selfbrand.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-950 transition-colors pt-0.5"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">selfbrand.app</p>
                </div>
              </div>

              <p className="text-base font-semibold text-zinc-800 mb-3 font-display leading-snug">
                AI Personal Branding for Founders
              </p>

              <p className="text-[14.5px] leading-relaxed text-zinc-600 mb-6">
                AI-powered systems engineered for personal branding, content automation, cross-platform social scheduling, and founder authority-building.
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Linked:</span>
                <a
                  href="https://linkedin.com/company/selfbrandai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:border-zinc-900 transition-all"
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
              <a
                href="https://selfbrand.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors"
              >
                Visit Site <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section: Interactive Selector Experience (About, Specialties & Philosophy) ── */}
      <section id="about" className="relative max-w-[1100px] mx-auto py-16 md:py-24 scroll-mt-24 select-none">
        <div className="relative w-full flex items-center justify-center overflow-visible py-4 z-10">
          <DottedPattern className="w-[180px] h-[180px] top-6 left-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 px-6">
            
            {/* Left panel: Simulated Interactive and Clean scrolling steps pairing with Framer Motion */}
            <div className="lg:col-span-7 flex flex-col justify-center min-h-[400px]">
              
              {/* Elegant, clean text-only navigation tabs without boxes or borders */}
              <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-zinc-100 pb-4">
                {[
                  { index: 0, label: "About Hamd" },
                  { index: 1, label: "What I Work On" },
                  { index: 2, label: "AI & Automation Philosophy" }
                ].map((tab) => (
                  <button
                    key={tab.index}
                    onClick={() => scrollToStep(tab.index)}
                    className={`text-xs sm:text-sm font-extrabold tracking-wide pb-2 transition-all relative cursor-pointer ${
                      activeStep === tab.index
                        ? "text-[#195de6]"
                        : "text-zinc-400 hover:text-zinc-600"
                    }`}
                  >
                    {tab.label}
                    {activeStep === tab.index && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#195de6] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="text-left space-y-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-[#195de6] font-bold font-display block">WELCOME & ABOUT ME</span>
                    <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none mb-4">
                      Meet, Hamd!
                    </h2>
                    
                    <p className="text-zinc-650 text-base sm:text-lg leading-relaxed max-w-[580px]">
                      Your go-to expert in turning startup dreams into thriving realities. He brings deep experience in crafting AI systems, web scraping networks, and SaaS solutions that not only automate operations but propel your business forward.
                    </p>
                       <p className="text-xs font-semibold text-zinc-400 italic">
                      see what his satisfied partners have to share about their experiences.
                    </p>

                    {/* Minimalist Grid Stats without boxes or buttons */}
                    <div className="flex flex-wrap gap-8 pt-4 select-none">
                      {/* Followers Stat with raw clean layout */}
                      <div className="flex items-center gap-3">
                        <FaLinkedin className="w-8 h-8 text-[#195de6] shrink-0" />
                        <div className="text-left">
                          <p className="text-2xl font-black text-zinc-950 tracking-tight leading-none">5,000+</p>
                          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1 leading-none">Followers</p>
                        </div>
                      </div>

                      {/* AI Visibility Stat with raw clean layout */}
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-violet-500 shrink-0" />
                        <div className="text-left">
                          <p className="text-2xl font-black text-zinc-950 tracking-tight leading-none">2,300+</p>
                          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1 leading-none">AI Visibility</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="text-left space-y-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-[#195de6] font-bold font-display block">MY WORK & SPECIALTIES</span>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#195de6] tracking-tight leading-none mb-4">
                      What I Work On
                    </h2>
                    
                    <p className="text-zinc-650 text-base sm:text-lg leading-relaxed max-w-[580px]">
                      Solving high-end scraping, data pipeline, and conversational automation challenges:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[580px]">
                      {[
                        "AI Agentic Workflows",
                        "Content Automation Engines",
                        "WhatsApp Support Systems",
                        "Scraping & Data Pipelines"
                      ].map((item, id) => (
                        <div key={id} className="flex items-center gap-3 py-1">
                          <span className="text-[#195de6] font-extrabold text-lg">✓</span>
                          <span className="text-zinc-800 font-bold text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-zinc-100 max-w-[580px]">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-extrabold mb-2">Core Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "AI agents",
                          "LLM integrations",
                          "Web scraping networks",
                          "Vector databases",
                          "Automation pipelines",
                          "Scalable SaaS apps"
                        ].map((spec) => (
                          <span key={spec} className="text-xs px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200/60 font-bold text-zinc-600">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="text-left space-y-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-[#195de6] font-bold font-display block">SYSTEMS PHILOSOPHY</span>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none mb-4">
                      AI Systems & Automation
                    </h2>
                    
                    <p className="text-zinc-650 text-base sm:text-lg leading-relaxed max-w-[580px]">
                      Replacing repetitive workflows with complete, stable systems that run themselves.
                    </p>

                    <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-[580px]">
                      My work replaces manual routines with complete, autonomous systems that drive stable operational flow, automated messaging, and back-end efficiency.
                    </p>

                    <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded-2xl max-w-[580px]">
                      <p className="text-xs font-extrabold text-amber-800 mb-1 uppercase tracking-wider">The Engineering Core</p>
                      <p className="text-sm font-semibold text-zinc-700 leading-relaxed">
                        Scalable automation is built using compiled Go modules and robust queue messaging to ensure zero data-loss pipelines.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right panel: Sticky Illustration Display with dynamic speech bubbles of HamdIllus */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center pt-8 lg:pt-0">
              <div className="relative">
                
                {/* Dynamic Speech Bubble targeting current step */}
                <SpeechBubble
                  text={
                    activeStep === 0
                      ? "Hi! I'm Hamd, an AI systems builder. Let's make things scale! ⚡"
                      : activeStep === 1
                      ? "I build complete scraping networks and LLM agent chains! 🛠️"
                      : "No temporary hacks. Only clean, tested, and reliable systems! 🚀"
                  }
                  className="absolute top-[-75px] right-[10px] transform hover:scale-105 transition-all duration-300 z-10 scale-100 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]"
                  orientation="right"
                />

                {/* Character Illustration display from custom file */}
                <div className="relative w-80 h-[380px] md:w-80 md:h-[420px] rounded-3xl border-4 border-zinc-950 bg-white shadow-[8px_8px_0px_0px_rgba(25,93,230,1)] flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-2 rounded-2xl border-2 border-dashed border-zinc-100 group-hover:rotate-6 transition-transform duration-1000" />
                  <Image
                    src="/HamdIllus.png"
                    alt="Muhammad Hamd Illustration"
                    width={340}
                    height={450}
                    className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                </div>

                {/* Scattered playful dots & triangular geometry matching target layout precisely */}
                <div className="absolute top-[-30px] right-[-20px] w-4 h-4 rounded-full bg-sky-400 animate-pulse pointer-events-none" />
                <div className="absolute top-[-10px] left-[-30px] w-3.5 h-3.5 bg-rose-500 rotate-45 pointer-events-none" />
                <div className="absolute top-[40%] right-[-45px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-amber-400 rotate-12 pointer-events-none" />
                <div className="absolute bottom-[-15px] left-[-35px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-amber-500 -rotate-12 pointer-events-none" />
                <div className="absolute bottom-[-20px] right-[-10px] w-3.5 h-3.5 bg-red-400 rotate-12 pointer-events-none" />

                {/* Bottom tag indicator */}
                <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-zinc-950 text-white border-2 border-zinc-950 text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(25,93,230,1)] z-20 whitespace-nowrap select-none">
                  AI SYSTEMS BUILDER
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── Section: Engineering, Infrastructure, Writing, Focus Grid ── */}
      <section id="focus" className="px-6 py-12 max-w-[1100px] mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bento Box 1: Engineering & Infrastructure */}
          <div className="bg-[#fafbfd] border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
            <h3 className="font-display font-extrabold text-[17px] text-zinc-900 mb-4 flex items-center gap-2">
              <Terminal className="text-indigo-500 w-5 h-5 leading-none shrink-0" />
              Engineering & Infra
            </h3>
            <p className="text-[13px] text-zinc-500 font-semibold mb-3">Muhammad Hamd works across:</p>
            <ul className="space-y-2 text-[13.5px] text-zinc-600">
              {[
                "AI agents & autonomous workflows",
                "LLM integrations & orchestration",
                "Backend API architecture",
                "Web scraping & data pipelines",
                "Vector databases",
                "Scalable business SaaS"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-zinc-300 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-zinc-200/50 text-[11px] text-zinc-400 italic">
              Focus is building reliable systems operating at scale.
            </div>
          </div>

          {/* Bento Box 2: Writing & Thinking */}
          <div className="bg-[#fdfafb] border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[17px] text-zinc-900 mb-4 flex items-center gap-2">
                <PenTool className="text-rose-500 w-5 h-5 leading-none shrink-0" />
                Writing & Thinking
              </h3>
              <p className="text-[13px] text-zinc-500 font-semibold mb-3">Hamd writes about:</p>
              <ul className="space-y-2 text-[13.5px] text-zinc-600">
                {[
                  "AI systems & pipelines",
                  "Automation ecosystems",
                  "Product engineering challenges",
                  "Autonomous software paradigms",
                  "Systems thinking models"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-zinc-300 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-200/50 text-[11px] text-rose-500/80 font-semibold">
              Practical implementation over abstractions.
            </div>
          </div>

          {/* Bento Box 3: Current Focus */}
          <div className="bg-[#fcfcfa] border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-[17px] text-zinc-900 mb-4 flex items-center gap-2">
                <Award className="text-amber-500 w-5 h-5 leading-none shrink-0" />
                Current Focus
              </h3>
              <p className="text-[13px] text-zinc-500 font-semibold mb-3">Building AI-native projects in:</p>
              <ul className="space-y-2 text-[13.5px] text-zinc-600">
                {[
                  "Workflow automation layers",
                  "Conversational meta integrations",
                  "Active system efficiency"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 font-medium">
                    <span className="text-amber-500">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[12px] leading-relaxed text-zinc-500 mt-4 pt-4 border-t border-zinc-200/50">
              Passionate about how autonomous agents replace repetitive digital toil across enterprise-facing software products.
            </p>
          </div>

        </div>
      </section>

      {/* ── Section: Past Experience & Case Studies ── */}
      <section id="experience" className="px-6 py-12 md:py-16 max-w-[1100px] mx-auto scroll-mt-24">
        <div className="bg-white border-2 border-zinc-950 rounded-3xl p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#a8a29e] font-bold font-display block mb-1">JOURNEY ROADMAP</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-950">Past Experience & Engineering History</h2>
            <p className="text-[14.5px] text-zinc-500 mt-2">
              Combining full-stack software development, automated architecture design, and modern agentic engineering.
            </p>
          </div>

          {/* Detailed case study navigation triggers */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-100 pb-2 mb-4">
              Select Case Studies & Professional Roles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {works.map((w) => (
                <Link
                  key={w.slug}
                  href={`/work/${w.slug}`}
                  className="flex items-center justify-between p-4 rounded-2xl border-2 border-zinc-100 hover:border-zinc-950 bg-white hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] transition-all group no-underline"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center border border-zinc-200 bg-white shrink-0 shadow-sm">
                      {w.logo ? (
                        <Image
                          src={w.logo}
                          alt={`${w.company} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-50 flex items-center justify-center">
                          <span className="text-[11px] font-bold text-zinc-400">
                            {w.company.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-zinc-950 group-hover:text-[#195de6] transition-colors leading-tight">
                        {w.company}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5 font-medium">{w.role}</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{w.period}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 group-hover:border-[#195de6] group-hover:bg-blue-50 flex items-center justify-center text-zinc-400 group-hover:text-[#195de6] transition-all shrink-0 ml-2">
                    <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: How to Work With Me ── */}
      <section className="px-6 py-12 max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-display block mb-1">ONBOARDING & ENGAGEMENT</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-950">How We Can Work Together</h2>
          <DoodleSquiggle className="w-48 text-[#195de6]/30 block h-2 mx-auto mt-1" />
        </div>

        {/* 3 Step custom pipeline resembling mockup 1 & 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <DoodleArrowCurly className="w-12 h-12 absolute left-[30%] top-[-20px] text-sky-400 hidden lg:block -rotate-12" />
          <DoodleLoop className="w-12 h-12 absolute left-[64%] top-[10px] text-blue-200 hidden lg:block rotate-45" />

          {/* Step 1 */}
          <div className="bg-white border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center font-bold text-amber-600 mb-4">
                1
              </div>
              <h3 className="font-display font-extrabold text-[16px] text-zinc-950 mb-2">Aligning Vision</h3>
              <p className="text-xs text-zinc-500 mb-3">Muhammad Hamd works with:</p>
              <ul className="space-y-1.5 text-[13.5px] text-zinc-600 font-medium">
                <li>✦ Bold Founders</li>
                <li>✦ Tech Businesses</li>
                <li>✦ Product Engineering Teams</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400">
              We define workflow goals upfront.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center font-bold text-sky-600 mb-4">
                2
              </div>
              <h3 className="font-display font-extrabold text-[16px] text-zinc-950 mb-2">System Design</h3>
              <p className="text-xs text-zinc-500 mb-3">Core automation focus areas:</p>
              <ul className="space-y-1.5 text-[13.5px] text-zinc-600 font-medium">
                <li>✦ Custom Agentic Architectures</li>
                <li>✦ Deep Automation Integrations</li>
                <li>✦ High-Efficiency Backend Pipelines</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400">
              Drafting production-grade architectures.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-2 border-zinc-950 rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] relative flex flex-col justify-between border-l-[#195de6] border-l-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center font-bold text-[#195de6] mb-4">
                3
              </div>
              <h3 className="font-display font-extrabold text-[16px] text-zinc-900 mb-2">Robust Execution</h3>
              <p className="text-xs text-zinc-500 mb-3">Engagements focus on:</p>
              <ul className="space-y-1.5 text-[13.5px] text-zinc-600 font-medium">
                <li>✦ Practical Software Products</li>
                <li>✦ Long-Term Stable Codebases</li>
                <li>✦ Rigorous Testing Standards</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-[#195de6] font-bold">
              No temporary hacks or unstable scripts.
            </div>
          </div>

        </div>
      </section>

      {/* ── Section: Reach Out / Contact Drawer ── */}
      <section id="contact" className="px-6 py-12 md:py-16 max-w-[1100px] mx-auto scroll-mt-24">
        <div className="bg-[#18181b] border-4 border-zinc-950 text-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(25,93,230,0.95)] relative overflow-hidden text-center md:text-left">
          <DottedPattern className="w-[150px] h-[150px] right-2 top-2 opacity-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-widest text-sky-300 font-bold font-display block mb-1">GET IN TOUCH</span>
              <h2 className="font-display text-2xl sm:text-3.5xl font-bold tracking-tight mb-4">
                Ready to Architect Something Stellar?
              </h2>
              <p className="text-zinc-300 text-[14.5px] max-w-[620px] leading-relaxed">
                I collaborate with selective founders, builders, and platforms to construct custom LLM microservices, Go engines, and clean dashboards. Let's arrange a time to speak!
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 items-center md:items-end justify-center w-full">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhamdali572@gmail.com&su=Hey%20Hamd,%20I%20want%20to%20scale%20my%20business%20with%20AI&body=hey%20Hamd%20I%20want%20to%20scale%20my%20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center font-display font-bold text-xs bg-[#195de6] hover:bg-[#124cb8] text-white px-6 py-3.5 rounded-full border-2 border-white/20 transition-all no-underline"
              >
                <Mail className="mr-2 w-4.5 h-4.5" />
                muhammadhamdali572@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/muhammadhamd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center font-display font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3.5 rounded-full border border-zinc-700 transition-all no-underline"
              >
                <FaLinkedinIn className="mr-2 w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Entity Footer (Google SEO Schema Match) ── */}
      <footer className="mt-12 px-6 border-t-2 border-zinc-900/5 pt-12 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-zinc-400">
          
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-extrabold mb-3">About this site</p>
            <p className="leading-relaxed">
              This is the personal website of <strong className="text-zinc-600 font-bold">Muhammad Hamd</strong>, also known as <strong className="text-zinc-600 font-bold">Hamd Ali</strong> and <strong className="text-zinc-600 font-bold">Muhammad Hamd Ali</strong>, an AI systems builder and technology entrepreneur based in Karachi, Pakistan.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-widest text-[#8a8a8a] font-extrabold mb-3">Professional Blueprint</p>
            <p className="leading-relaxed">
              Muhammad Hamd (username: <strong className="text-zinc-600 font-bold">muhammadhamd</strong>) builds agentic AI systems, workflow automation, and SaaS products. He is the founder of WatBot, selfbrand AI, and Asmara.AI, and works as a Full-stack AI Engineer at MindKeepr in Tallinn, Estonia. Focuses on vector search, conversational infrastructure, and scalable backend engineering.
            </p>
          </div>

          <div className="md:col-span-3 text-left md:text-right flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#a8a29e] font-extrabold mb-2">Location status</p>
              <p className="font-semibold text-zinc-500">🇵🇰 Karachi, Pakistan</p>
              <p className="text-zinc-400 mt-1">hamdali.com</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-100 text-[10px] text-zinc-300">
              © 2026 Muhammad Hamd Ali. Karachi, Pakistan
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
