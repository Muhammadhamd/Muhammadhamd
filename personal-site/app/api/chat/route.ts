import { GoogleGenAI } from "@google/genai";

// The Gemini SDK needs the Node.js runtime (not the Edge runtime).
export const runtime = "nodejs";
// Never cache chat responses.
export const dynamic = "force-dynamic";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

type HistoryItem = { role: string; content: string };

export async function POST(request: Request) {
  try {
    const { message, history, systemPrompt } = await request.json();

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    // Format history for the @google/genai SDK.
    // Role mapping: "assistant" -> "model", "user" -> "user".
    const contents = ((history as HistoryItem[]) || []).map((h) => ({
      role: h.role === "assistant" ? "model" : h.role,
      parts: [{ text: h.content }],
    }));

    // Append the user's current message.
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction: systemPrompt || "You are a helpful assistant clone.",
      },
    });

    return Response.json({ text: response.text });
  } catch (error: unknown) {
    const messageText =
      error instanceof Error ? error.message : "An error occurred with Gemini.";
    console.error("Error in /api/chat:", error);
    return Response.json({ error: messageText }, { status: 500 });
  }
}
