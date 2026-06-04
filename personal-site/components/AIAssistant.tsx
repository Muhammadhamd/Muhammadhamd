"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, RotateCcw, X } from "lucide-react";
import { ChatMessage, ProfileData } from "@/lib/types";

interface AIAssistantProps {
  profile: ProfileData;
  onClose?: () => void;
}

export default function AIAssistant({ profile, onClose }: AIAssistantProps) {
  const welcome: ChatMessage = {
    id: "welcome",
    role: "assistant",
    content: `Hey, I'm ${profile.name}'s AI twin. Ask me about my work, services, or anything on the site.`,
    timestamp: new Date(),
  };
  const [messages, setMessages] = useState<ChatMessage[]>([welcome]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .slice(-8)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();
      const content = res.ok
        ? data.text || "I couldn't put that into words. Try rephrasing?"
        : data.error || "Something went wrong. Please try again.";

      setMessages((prev) => [
        ...prev,
        { id: `ai-${Date.now()}`, role: "assistant", content, timestamp: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: "I'm having trouble connecting right now. Please try again in a moment.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => setMessages([{ ...welcome, timestamp: new Date() }]);

  return (
    <div id="ai-assistant-sec" className="flex h-full flex-col bg-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-zinc-950 bg-white px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-violet-100">
            <Sparkles className="h-4 w-4 text-[#7c3bed]" />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-zinc-950 bg-emerald-500" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-[13.5px] font-bold text-zinc-950">
              {profile.name}&apos;s AI twin
            </p>
            <p className="text-[11px] text-zinc-500">Replies in his voice</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={reset}
            title="Reset conversation"
            id="btn-reset-chat"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-600 transition-colors hover:text-[#7c3bed] cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              title="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-600 transition-colors hover:text-rose-600 cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-[#fbfaff] p-4">
        {messages.map((msg) => {
          const isAi = msg.role === "assistant";
          return (
            <div
              key={msg.id}
              id={`chat-msg-${msg.id}`}
              className={`flex ${isAi ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-wrap border-2 border-zinc-950 px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  isAi
                    ? "rounded-2xl rounded-tl-sm bg-white text-zinc-800"
                    : "rounded-2xl rounded-tr-sm bg-[#7c3bed] font-medium text-white"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex justify-start" id="chat-msg-loading">
            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border-2 border-zinc-950 bg-white px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7c3bed]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7c3bed] [animation-delay:0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7c3bed] [animation-delay:0.3s]" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2 bg-[#fbfaff] px-4 pb-2 pt-1">
          {profile.chatSuggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => send(s)}
              id={`btn-suggest-${i}`}
              className="rounded-full border-2 border-zinc-950 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-zinc-700 transition-colors hover:bg-violet-50 hover:text-[#7c3bed] cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(inputText);
        }}
        className="flex items-center gap-2 border-t-2 border-zinc-950 bg-white p-3"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask me anything…"
          disabled={isLoading}
          id="input-chat-text"
          className="flex-1 rounded-full border-2 border-zinc-950 bg-white px-4 py-2.5 text-[13.5px] text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#7c3bed]/30 transition"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          id="btn-send-message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-950 bg-[#7c3bed] text-white transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:border-zinc-300 disabled:bg-zinc-200 disabled:text-zinc-400 cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
