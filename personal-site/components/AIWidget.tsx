"use client";

import { useState, useEffect } from "react";
import AIAssistant from "@/components/AIAssistant";
import { ProfileData } from "@/lib/types";
import { Sparkles } from "lucide-react";

// Minimal profile for the widget. The agent's real depth (work history, stacks,
// philosophy) is assembled server-side in lib/site-content.ts from lib/data.ts,
// so it actually reaches the model instead of sitting unused on the client.
const PERSONAL_PROFILE: ProfileData = {
  name: "Muhammad Hamd",
  chatSuggestions: [
    "Why should I hire you?",
    "I want to automate a manual process",
    "Show me your WhatsApp AI work.",
    "Tell me about WatBot.",
  ],
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
