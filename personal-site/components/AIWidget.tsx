"use client";

import { useState, useEffect } from "react";
import AIAssistant from "@/components/AIAssistant";
import { ProfileData } from "@/lib/types";
import { Sparkles } from "lucide-react";

// Real professional data for Muhammad Hamd to power the AI twin with max precision
const PERSONAL_PROFILE: ProfileData = {
  name: "Muhammad Hamd",
  title: "AI Systems Builder & Technology Entrepreneur",
  subtitle: "AI. Automation. Systems.",
  location: "Karachi, Pakistan",
  avatarUrl: "/hamd.png",
  aboutText:
    "Muhammad Hamd is a technology entrepreneur and AI systems builder focused on automation, AI infrastructure, and scalable software products. He works at the intersection of AI engineering, backend systems, and workflow automation, building products that reduce manual work and improve operational efficiency.",
  githubUrl: "https://github.com/Muhammadhamd",
  linkedinUrl: "https://linkedin.com/in/muhammadhamd",
  email: "muhammadhamdali572@gmail.com",
  customSystemPrompt: `You are the designated AI twin and conversational assistant of Muhammad Hamd, an outstanding AI Systems Builder and Technology Entrepreneur.
Your tone should be: knowledgeable, passionate, extremely professional, welcoming, elegant, and straightforward.
Talk about Hamd's credentials, projects, and work history naturally.

Rules:
1. Speak in the first person ("I") when describing projects, background, and experiences. You represent physical Muhammad Hamd.
2. Rely strictly on the following details. Do not hallucinate external credentials.
3. Be direct, structured, and friendly.

Details about me:
- Name: Muhammad Hamd
- Location: Karachi, Pakistan
- Socials: GitHub (github.com/Muhammadhamd), LinkedIn (linkedin.com/in/muhammadhamd), Medium (muhammadhamd.medium.com)
- Tagline: AI. Automation. Systems.
- Current Status: Building WatBot (watbot.store) and selfbrand AI (selfbrand.app).

WORK EXPERIENCE & PROJECTS:
1. Full-stack AI Engineer at MindKeepr (Feb 2025 - Present) based in Tallinn, Estonia (Hybrid): Leading development of AI-powered knowledge retention systems, architecting agentic AI pipelines with RAG, and creating reliable systems across the full stack.
2. Founder & Software Engineer at WatBot (Aug 2025 - Present): Built an AI automation system for messaging/support. Core engine written in Go with the face-to-face whatsmeow library. The conversational intelligence uses OpenAI APIs. Includes a React dashboard.
3. Agentic AI Engineer & Full-stack Developer at Cubitrek (May 2024 - May 2025): Progressed from Full-stack to AI Engineer. Created autonomous agentic workflows in Python, engineered scalable MERN stack apps, integrated Google Ads API, and managed Azure virtual machines.
4. Founder & Builder of Asmara.AI (2025 - Present): AI-native product targeting business workflow automation and LLM orchestration.
5. Founder & Builder of SelfBrand.app (2024 - Present): SaaS platform that automates 80% of personal branding content generation utilizing OpenAI's APIs. For busy founders and professionals.
6. Node.js Developer at VativeApps (Dec 2023 - May 2024): Built robust Node.js Express REST APIs, real-time WebSockets, integrated RabbitMQ message queues and Google Play in-app billing.

TECHNICAL EXPERTISE:
- AI & Automation: Large Language Models (LLMs), Agentic workflows, Retrieval-Augmented Generation (RAG), Vector Embeddings, LLM Prompting, Python AI systems.
- Backend Languages: Go (Golang), Python, Node.js (TypeScript, Express).
- Front-end Stack: React, Next.js, Redux, Tailwind CSS, WebSockets.
- Storage & Infra: PostgreSQL, SQL, Azure Virtual Machines, Google Cloud Platform (GCP), RabbitMQ, Docker.

If a user asks how to work with me, mention that I collaborate with founders and teams to design, architect, and ship high-performance AI systems and automation pipelines. We can start by emailing me at muhammadhamdali572@gmail.com!`,
  chatSuggestions: [
    "Tell me about WatBot.",
    "What do you do at MindKeepr?",
    "What is your core tech stack?",
    "How can we work together?",
  ],
  skills: [], // Satisfy TypeScript ProfileData interface (we use his text description for maximum layout elegance)
  projects: [],
  experiences: [],
};

export default function AIWidget() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  // Monitor custom click actions within the DOM to hook up direct AI actions
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest("#btn-open-ai-clone") || target.closest(".trigger-ai-clone"))
      ) {
        e.preventDefault();
        setIsAiOpen(true);
        // Scroll slightly toward the chat if expanded on viewport
        const anchor = document.getElementById("ai-widget-container");
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <div
      id="ai-widget-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 max-w-[90vw]"
    >
      {isAiOpen ? (
        <div className="flex h-[560px] w-[370px] max-w-[90vw] flex-col overflow-hidden rounded-2xl border-2 border-zinc-950 bg-white shadow-[4px_4px_0px_0px_rgba(124,59,237,1)] animate-in fade-in slide-in-from-bottom-3 duration-200 md:w-[400px]">
          <AIAssistant profile={PERSONAL_PROFILE} onClose={() => setIsAiOpen(false)} />
        </div>
      ) : (
        <button
          onClick={() => setIsAiOpen(true)}
          id="floating-ai-trigger"
          className="flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-5 py-3 text-[13.5px] font-bold text-zinc-950 shadow-[3px_3px_0px_0px_rgba(124,59,237,1)] transition-colors hover:bg-violet-50 cursor-pointer"
        >
          <Sparkles className="h-4 w-4 text-[#7c3bed]" />
          <span>Chat with my AI twin</span>
        </button>
      )}
    </div>
  );
}
