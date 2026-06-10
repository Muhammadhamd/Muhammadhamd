import type { UIMessage } from "ai";

/**
 * The tool surface the chat agent exposes, typed for the client so tool parts
 * (the reasoning chips) and addToolResult() for the client-run `navigate` tool
 * are fully type-safe. Mirrors the tools defined in app/api/chat/route.ts.
 * Kept here (not imported from the route) so no server-only code leaks into the
 * client bundle.
 */
export type ChatTools = {
  search_site: {
    input: { query: string };
    output: { results: { url: string; title: string; summary: string; score: number }[] };
  };
  read_page: {
    input: { path: string };
    output: { content?: string; error?: string; available?: string[] };
  };
  recommend_service: {
    input: { problem: string };
    output: { url?: string; name?: string; tagline?: string; why?: string; error?: string };
  };
  navigate: {
    input: { path: string; reason: string };
    output: { ok: boolean };
  };
  capture_lead: {
    input: { name: string; email: string; intent: string };
    output: {
      captured: boolean;
      emailed?: boolean;
      name: string;
      email: string;
      intent: string;
      gmailUrl: string;
      to: string;
    };
  };
  schedule_meeting: {
    input: { reason: string };
    output: { url: string | null; reason: string; fallback?: string };
  };
  send_resume: {
    input: { reason: string };
    output: { url: string; filename: string; reason: string };
  };
};

export type ChatUIMessage = UIMessage<never, never, ChatTools>;
