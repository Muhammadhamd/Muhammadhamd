import { GoogleGenAI, Type, type Content, type Tool } from "@google/genai";
import { listSitePages, getPageContent } from "@/lib/site-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
const MODEL = "gemini-2.5-flash";

// ── Rate limiting: in-memory per IP+device, auto-expires after the window ──
const WINDOW_MS = 3 * 60 * 60 * 1000; // 3 hours, then the count resets on its own
const MAX_PER_WINDOW = 25;
const hits = new Map<string, { count: number; first: number }>();

function allow(key: string): boolean {
  const now = Date.now();
  for (const [k, v] of hits) if (now - v.first > WINDOW_MS) hits.delete(k); // prune expired
  const cur = hits.get(key);
  if (!cur || now - cur.first > WINDOW_MS) {
    hits.set(key, { count: 1, first: now });
    return true;
  }
  if (cur.count >= MAX_PER_WINDOW) return false;
  cur.count++;
  return true;
}

const PAGE_INDEX = listSitePages()
  .map((p) => `${p.url} — ${p.title}: ${p.summary}`)
  .join("\n");

const SYSTEM = `You are the AI twin of Muhammad Hamd on his personal website. You speak AS Muhammad Hamd, in the first person ("I").

Voice: short, sharp, and to the point. Reply in 1 to 3 sentences. No fluff, no filler, no walls of text. Confident, plain, and a little warm. Never use em dashes. Write in plain text, no markdown. When you point someone to a page, give its path plainly, like /services or /blog/rag-vs-fine-tuning.

Who you are: an agentic AI engineer and systems builder in Karachi, Pakistan. Founder of WatBot, selfbrand AI, and Asmara.AI; full-stack AI engineer at MindKeepr (Estonia).

These are all the pages on the site (path, title, summary):
${PAGE_INDEX}

Rules:
- Answer ONLY from this site. Use the summaries above first. If you need the full detail of a page, call read_page with its path, then answer from it.
- Do not invent facts, projects, or numbers. If something is not on the site, say you are not sure and point them to /contact.
- Keep it tight and helpful. For hiring or project questions, nudge them toward /hire-me or emailing, briefly.`;

const tools: Tool[] = [
  {
    functionDeclarations: [
      {
        name: "read_page",
        description: "Read the full text of one page by its URL path, for example '/blog/what-is-agentic-ai' or '/services/crm-automation'.",
        parameters: {
          type: Type.OBJECT,
          properties: { path: { type: Type.STRING, description: "The URL path of the page to read." } },
          required: ["path"],
        },
      },
    ],
  },
];

function runTool(name: string, args: Record<string, unknown>) {
  if (name === "list_site_pages") return { pages: listSitePages() };
  if (name === "read_page") {
    const content = getPageContent(String(args.path ?? ""));
    return content
      ? { content }
      : { error: "Page not found.", available: listSitePages().map((p) => p.url) };
  }
  return { error: "Unknown tool." };
}

type HistoryItem = { role: string; content: string };

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const ua = request.headers.get("user-agent") || "";
    if (!allow(`${ip}|${ua.slice(0, 48)}`)) {
      return Response.json(
        { error: "You have hit the message limit for now. Please try again in a couple of hours, or email me at muhammadhamdali572@gmail.com." },
        { status: 429 }
      );
    }

    const { message, history } = await request.json();
    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    // Build conversation, keep it short for speed and cost.
    const contents: Content[] = ((history as HistoryItem[]) || [])
      .slice(-8)
      .map((h) => ({ role: h.role === "assistant" ? "model" : "user", parts: [{ text: h.content }] }));
    contents.push({ role: "user", parts: [{ text: message }] });

    let answer = "";
    for (let step = 0; step < 5; step++) {
      const resp = await ai.models.generateContent({
        model: MODEL,
        contents,
        config: { systemInstruction: SYSTEM, tools, temperature: 0.5 },
      });

      const calls = resp.functionCalls;
      if (calls && calls.length > 0) {
        contents.push({ role: "model", parts: calls.map((c) => ({ functionCall: c })) });
        contents.push({
          role: "user",
          parts: calls.map((c) => ({
            functionResponse: {
              name: c.name as string,
              response: runTool(c.name as string, (c.args as Record<string, unknown>) || {}),
            },
          })),
        });
        continue;
      }

      answer = (resp.text || "").trim();
      break;
    }

    return Response.json({
      text: answer || "I am not sure about that one. Try the contact page and I will get back to you.",
    });
  } catch (error: unknown) {
    console.error("Error in /api/chat:", error);
    const msg = error instanceof Error ? error.message : "Something went wrong with the assistant.";
    return Response.json({ error: msg }, { status: 500 });
  }
}
