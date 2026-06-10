"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import {
  DefaultChatTransport,
  lastAssistantMessageIsCompleteWithToolCalls,
  isToolUIPart,
  getToolName,
} from "ai";
import { Send, Sparkles, RotateCcw, X, Search, FileText, Compass, Mail, Wand2, Calendar, CornerDownRight } from "lucide-react";
import MiniMarkdown from "@/components/MiniMarkdown";
import ResumeCard from "@/components/ResumeCard";
import type { ProfileData } from "@/lib/types";
import type { ChatUIMessage } from "@/lib/chat-types";

interface AIAssistantProps {
  profile: ProfileData;
  onClose?: () => void;
}

// Page-aware opener: greet with context for the page the visitor is on, warm
// and inviting, and end with a question so it actually starts a conversation.
function openerFor(path: string, name: string): string {
  if (path.startsWith("/services/whatsapp"))
    return `Hey! WhatsApp automation is literally what I built WatBot for. What's eating your team's time right now, support or sales?`;
  if (path.startsWith("/services/rag"))
    return `Hey! So you're into grounded AI. Are you trying to get accurate answers out of your own docs or data?`;
  if (path.startsWith("/services/agentic"))
    return `Hey! Agentic AI is my favorite thing to build. What's the workflow you'd love to just run itself?`;
  if (path.startsWith("/services"))
    return `Hey, glad you're here. Tell me the problem you're trying to solve and I'll show you exactly how I'd tackle it.`;
  if (path.startsWith("/work"))
    return `Hey! Want the real story behind this project, or are you weighing up something similar for yourself?`;
  if (path.startsWith("/hire-me") || path.startsWith("/contact"))
    return `Hey, good to see you here. What are you trying to build or automate? Give me the gist and I'll tell you how I'd approach it.`;
  if (path.startsWith("/blog"))
    return `Hey! Ask me anything about this, or about how I'd apply it to your own setup.`;
  return `Hey, I'm ${name}. Ask me anything about my work, or tell me what you're trying to build and I'll take it from there.`;
}

// Friendly labels for the live "reasoning" chips, by tool + state.
function chipFor(name: string, done: boolean, input: unknown, output: unknown) {
  const path = (input as { path?: string })?.path;
  const query = (input as { query?: string })?.query;
  switch (name) {
    case "search_site": {
      const n = (output as { results?: unknown[] })?.results?.length;
      return { Icon: Search, text: done ? `Searched the site${n != null ? ` · ${n} hits` : ""}` : `Searching for "${query ?? "…"}"` };
    }
    case "read_page":
      return { Icon: FileText, text: done ? `Read ${path ?? "a page"}` : `Reading ${path ?? "a page"}…` };
    case "recommend_service":
      return { Icon: Wand2, text: done ? "Matched a service" : "Finding the right service…" };
    case "navigate":
      return { Icon: Compass, text: done ? `Opened ${path ?? "a page"}` : `Opening ${path ?? "a page"}…` };
    case "capture_lead":
      return { Icon: Mail, text: done ? "Captured your details" : "Saving your details…" };
    case "schedule_meeting":
      return { Icon: Calendar, text: done ? "Opened my calendar" : "Pulling up my calendar…" };
    default:
      return { Icon: Sparkles, text: done ? "Done" : "Working…" };
  }
}

// Open the Calendly popup overlay. Loads Calendly's widget script once on
// demand (no global script tag needed); falls back to a new tab if it fails.
function openCalendly(url: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
  const open = () => {
    if (w.Calendly) w.Calendly.initPopupWidget({ url });
    else window.open(url, "_blank", "noopener,noreferrer");
  };
  // Inject the stylesheet + script the first time, then open on load.
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  if (w.Calendly) {
    open();
  } else if (!document.getElementById("calendly-widget-js")) {
    const script = document.createElement("script");
    script.id = "calendly-widget-js";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = open;
    script.onerror = () => window.open(url, "_blank", "noopener,noreferrer");
    document.body.appendChild(script);
  } else {
    // Script tag exists but not ready yet — fall back to a new tab.
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

// Pull a trailing "OPTIONS: a | b | c" line out of an assistant message so we
// can render tappable quick-reply chips and keep it out of the bubble text.
function parseOptions(text: string): { body: string; options: string[] } {
  const m = text.match(/(^|\n)\s*OPTIONS:\s*(.+?)\s*$/i);
  if (!m) return { body: text, options: [] };
  const options = m[2].split("|").map((s) => s.trim()).filter(Boolean);
  const body = text.slice(0, m.index).trim();
  return { body, options };
}

export default function AIAssistant({ profile, onClose }: AIAssistantProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [inputText, setInputText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, addToolResult, status, setMessages } = useChat<ChatUIMessage>({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    // After a client-run tool result is added, auto-continue the agent.
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    // `navigate` runs on the client: drive the router, then return a result.
    onToolCall: ({ toolCall }) => {
      if (toolCall.toolName === "navigate") {
        const path = (toolCall.input as { path?: string })?.path;
        if (path) router.push(path);
        addToolResult({ tool: "navigate", toolCallId: toolCall.toolCallId, output: { ok: true } });
      }
    },
  });

  const welcome = openerFor(pathname || "/", profile.name);
  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBusy]);

  const submit = (text: string) => {
    if (!text.trim() || isBusy) return;
    sendMessage({ text });
    setInputText("");
  };

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
            <p className="font-display text-[13.5px] font-bold text-zinc-950">{profile.name}&apos;s AI twin</p>
            <p className="text-[11px] text-zinc-500">Agentic · replies in his voice</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMessages([])}
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
        {/* Welcome bubble (shown until the first message) */}
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border-2 border-zinc-950 bg-white px-3.5 py-2.5 text-[13.5px] leading-relaxed text-zinc-800">
              {welcome}
            </div>
          </div>
        )}

        {messages.map((msg, mi) => {
          const isAi = msg.role === "assistant";
          const isLast = mi === messages.length - 1;
          return (
            <div key={msg.id} id={`chat-msg-${msg.id}`} className={`flex flex-col gap-1.5 ${isAi ? "items-start" : "items-end"}`}>
              {msg.parts.map((part, i) => {
                // Plain text — the spoken answer / question. Split on blank
                // lines so the agent can "text" in 2-3 separate bubbles, and
                // pull out any OPTIONS: line as tappable quick-reply chips.
                if (part.type === "text") {
                  if (!part.text) return null;
                  const { body, options } = isAi ? parseOptions(part.text) : { body: part.text, options: [] };
                  const bubbles = body.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
                  return (
                    <React.Fragment key={i}>
                      {bubbles.map((bubble, j) => (
                        <div
                          key={`${i}-${j}`}
                          className={`max-w-[85%] border-2 border-zinc-950 px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                            isAi
                              ? "rounded-2xl rounded-tl-sm bg-white text-zinc-800"
                              : "whitespace-pre-wrap rounded-2xl rounded-tr-sm bg-[#7c3bed] font-medium text-white"
                          }`}
                        >
                          {isAi ? <MiniMarkdown text={bubble} /> : bubble}
                        </div>
                      ))}
                      {/* Quick-reply options rendered as a structured "question
                          card" — a labelled panel that reads as the agent
                          waiting for your answer, not another chat bubble. Tap a
                          chip to answer, or type your own in the input below. */}
                      {options.length > 0 && isLast && (
                        <div
                          id={`chat-options-${msg.id}`}
                          className="mt-1 w-[88%] rounded-2xl rounded-tl-sm border-2 border-dashed border-[#7c3bed]/45 bg-violet-50/50 p-2.5"
                        >
                          <div className="mb-2 flex items-center gap-1.5 px-0.5 text-[10px] font-bold uppercase tracking-wider text-[#7c3bed]/75">
                            <CornerDownRight className="h-3 w-3" />
                            <span>Tap to answer{isBusy ? "" : " — or type your own below"}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {options.map((opt, k) => (
                              <button
                                key={k}
                                type="button"
                                disabled={isBusy}
                                onClick={() => submit(opt)}
                                id={`btn-option-${k}`}
                                className="group inline-flex items-center gap-1 rounded-full border-2 border-[#7c3bed] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#7c3bed] shadow-[2px_2px_0px_0px_rgba(124,59,237,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#7c3bed] hover:text-white active:translate-y-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }

                // Tool parts — the visible "agentic" layer.
                if (isToolUIPart(part)) {
                  const name = getToolName(part);
                  const done = part.state === "output-available";

                  // Lead capture renders a one-tap "Email Hamd" card that opens
                  // Gmail compose pre-filled (the server already auto-emails it).
                  if (name === "capture_lead" && done) {
                    const o = part.output as { gmailUrl?: string; name?: string };
                    return (
                      <a
                        key={i}
                        href={o.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="btn-lead-email-hamd"
                        className="flex max-w-[85%] items-center gap-2.5 rounded-2xl rounded-tl-sm border-2 border-zinc-950 bg-violet-50 px-3.5 py-2.5 text-[13px] font-semibold text-zinc-900 shadow-[3px_3px_0px_0px_rgba(124,59,237,1)] transition hover:-translate-y-0.5"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-[#7c3bed]" />
                        <span>Send these details to Hamd</span>
                      </a>
                    );
                  }

                  // Schedule a meeting renders a one-tap "Book a call" card that
                  // opens the Calendly popup overlay (falls back to /contact).
                  if (name === "schedule_meeting" && done) {
                    const o = part.output as { url?: string | null; fallback?: string };
                    return (
                      <button
                        key={i}
                        type="button"
                        id="btn-book-call"
                        onClick={() => (o.url ? openCalendly(o.url) : router.push(o.fallback || "/contact"))}
                        className="flex max-w-[85%] items-center gap-2.5 rounded-2xl rounded-tl-sm border-2 border-zinc-950 bg-violet-50 px-3.5 py-2.5 text-left text-[13px] font-semibold text-zinc-900 shadow-[3px_3px_0px_0px_rgba(124,59,237,1)] transition hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Calendar className="h-4 w-4 shrink-0 text-[#7c3bed]" />
                        <span>Book a time that works for you</span>
                      </button>
                    );
                  }

                  // Send resume renders a rich document card (first-page
                  // preview + filename + download), WhatsApp/LinkedIn style.
                  if (name === "send_resume" && done) {
                    const o = part.output as { url?: string; filename?: string };
                    return o.url ? (
                      <ResumeCard key={i} url={o.url} filename={o.filename} />
                    ) : null;
                  }

                  const { Icon, text } = chipFor(name, done, part.input, part.output);
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-500"
                    >
                      <Icon className={`h-3 w-3 ${done ? "text-emerald-600" : "text-[#7c3bed] animate-pulse"}`} />
                      {text}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          );
        })}

        {isBusy && (
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

      {/* Suggestions (until first message) */}
      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2 bg-[#fbfaff] px-4 pb-2 pt-1">
          {profile.chatSuggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => submit(s)}
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
          submit(inputText);
        }}
        className="flex items-center gap-2 border-t-2 border-zinc-950 bg-white p-3"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask me anything…"
          disabled={isBusy}
          id="input-chat-text"
          className="flex-1 rounded-full border-2 border-zinc-950 bg-white px-4 py-2.5 text-[13.5px] text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#7c3bed]/30 transition"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isBusy}
          id="btn-send-message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-950 bg-[#7c3bed] text-white transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:border-zinc-300 disabled:bg-zinc-200 disabled:text-zinc-400 cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
