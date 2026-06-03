"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, RefreshCw, AlertCircle, MessageSquare } from "lucide-react";
import { ChatMessage, ProfileData } from "@/lib/types";

interface AIAssistantProps {
  profile: ProfileData;
}

export default function AIAssistant({ profile }: AIAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi! I am ${profile.name}'s AI assistant. Ask me anything about my background, core expertise, previous projects, or work history!`,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsgId = `user-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMsgId,
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      // Keep only last 8 messages for context to optimize token limits and speed
      const chatHistoryForBackend = messages
        .filter((msg) => msg.id !== "welcome")
        .slice(-8)
        .map((msg) => ({
          role: msg.role,
          content: msg.content
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistoryForBackend,
          systemPrompt: profile.customSystemPrompt
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch response from API");
      }

      const assistantMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: data.text || "I was unable to formulate a response. Please try reframing.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error("Chat error:", err);
      // Give a helpful message to guide them on setup
      setErrorStatus(err.message || "Something went wrong.");
      
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: `⚠️ System Note: I ran into an issue connecting with Gemini. If you are running this app for the first time, please make sure to add your **GEMINI_API_KEY** in the Secrets panel in Google AI Studio, then restart or reload.`,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: `Hi! Let's start over. I am ${profile.name}'s AI assistant. What would you like to know about me?`,
        timestamp: new Date()
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <div id="ai-assistant-sec" className="bg-[#fafafc] overflow-hidden flex flex-col h-full relative font-sans">
      {/* Bot Chat Header / Drag handle area with Neo-brutalist thick border */}
      <div className="bg-zinc-100 px-5 py-4 border-b-4 border-zinc-950 flex items-center justify-between select-none">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border-2 border-[#195de6]">
              <Sparkles className="w-5 h-5 text-[#195de6]" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-950 rounded-full"></span>
          </div>
          <div className="text-left">
            <h4 className="font-display font-display font-extrabold text-zinc-900 text-sm tracking-wide flex items-center gap-1.5 leading-none">
              <span>{profile.name}</span>
              <span className="text-[9px] bg-[#195de6] text-white font-black px-2 py-0.5 rounded-full uppercase tracking-wider">CLONE</span>
            </h4>
            <p className="text-[10px] text-zinc-500 font-bold mt-1">Powered by Gemini 3.5 Flash</p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          title="Reset conversation"
          className="p-2 border-2 border-zinc-950 bg-white hover:bg-zinc-50 text-zinc-900 hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] rounded-xl transition-all cursor-pointer flex items-center justify-center"
          id="btn-reset-chat"
        >
          <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-5 bg-[#fafafc]">
        {messages.map((msg) => {
          const isAi = msg.role === "assistant";
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${isAi ? "mr-auto" : "ml-auto flex-row-reverse"}`}
              id={`chat-msg-${msg.id}`}
            >
              {/* Profile Badge inside Chat */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black border-2 border-zinc-950 shadow-[1.5px_1.5px_0px_0px_rgba(24,24,27,1)] ${
                  isAi
                    ? "bg-amber-150 text-zinc-900"
                    : "bg-blue-100 text-zinc-900"
                }`}
              >
                {isAi ? <Bot className="w-4 h-4 stroke-[2.5]" /> : <User className="w-4 h-4 stroke-[2.5]" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`p-3.5 rounded-2xl text-sm leading-relaxed border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] ${
                  isAi
                    ? "bg-white text-zinc-800 rounded-tl-none font-medium"
                    : "bg-[#195de6] text-white rounded-tr-none font-semibold"
                }`}
              >
                <div className="whitespace-pre-wrap font-sans">{msg.content}</div>
                <div className={`mt-2 text-[9px] font-bold text-right ${isAi ? "text-zinc-400" : "text-blue-200"}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%] mr-auto" id="chat-msg-loading">
            <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-zinc-950 flex items-center justify-center">
              <Bot className="w-4 h-4 animate-bounce shrink-0 text-zinc-950" />
            </div>
            <div className="p-4 bg-white text-zinc-600 border-2 border-zinc-950 rounded-2xl rounded-tl-none text-sm flex items-center gap-2.5 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] font-semibold">
              <span className="dot-pulse-loading flex gap-1">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
              <span>Twin AI is typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Chat Pills context-styled */}
      {messages.length === 1 && (
        <div className="px-5 py-3 border-t-2 border-zinc-950 bg-[#f3f4f6]/65">
          <p className="text-[9px] text-zinc-400 mb-2 font-black tracking-widest uppercase">SUGGESTED DISCUSSIONS</p>
          <div className="flex flex-wrap gap-2">
            {profile.chatSuggestions.map((suggestion: string, idx: number) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(suggestion)}
                className="text-[11px] bg-white hover:bg-amber-50 border-2 border-zinc-950 text-zinc-800 hover:text-zinc-900 font-extrabold px-3 py-1.5 rounded-full transition-all shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-left cursor-pointer"
                id={`btn-suggest-${idx}`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input Form with Neo-brutalist theme */}
      <form onSubmit={handleFormSubmit} className="p-4 border-t-4 border-zinc-950 bg-zinc-100 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Ask ${profile.name}'s clone...`}
          disabled={isLoading}
          className="flex-1 bg-white border-2 border-zinc-950 rounded-xl px-4 py-3 text-sm text-zinc-900 font-bold placeholder-zinc-400 focus:outline-none focus:border-[#195de6] focus:ring-0 shadow-inner"
          id="input-chat-text"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="bg-[#195de6] hover:bg-[#124cb8] disabled:bg-zinc-200 disabled:text-zinc-400 border-2 border-zinc-950 text-white font-black p-3 rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:shadow-none transition-all cursor-pointer"
          id="btn-send-message"
        >
          <Send className="w-4 h-4 stroke-[2.5]" />
        </button>
      </form>
    </div>
  );
}
