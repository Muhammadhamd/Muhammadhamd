import { SiOpenai, SiClaude, SiPerplexity } from "react-icons/si";
import { absUrl } from "@/lib/seo";

/**
 * "Read this page with AI" deep-link. Builds a prompt that points an LLM at the
 * current page URL and opens it in ChatGPT, Perplexity, or Claude in a new tab.
 * Minimal: just the brand icons, centered, with a tooltip on hover. Server
 * component; pass the page path and a short topic label.
 */
export default function AskAI({ path, label }: { path: string; label: string }) {
  const url = absUrl(path);
  const prompt = `Read this page: ${url}\n\nGive me a clear, concise summary of "${label}", the key takeaways, and how it might apply to my situation. Use the page itself as your source.`;
  const q = encodeURIComponent(prompt);

  const targets = [
    { name: "ChatGPT", href: `https://chatgpt.com/?q=${q}`, Icon: SiOpenai, color: "#10a37f" },
    { name: "Claude", href: `https://claude.ai/new?q=${q}`, Icon: SiClaude, color: "#d97757" },
    { name: "Perplexity", href: `https://www.perplexity.ai/search?q=${q}`, Icon: SiPerplexity, color: "#20808d" },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {targets.map((t) => (
        <a
          key={t.name}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Read this page with ${t.name}`}
          aria-label={`Read this page with ${t.name}`}
          className="group text-zinc-400 transition-all duration-200 hover:-translate-y-0.5"
        >
          <t.Icon
            className="h-[22px] w-[22px] transition-colors group-hover:[color:var(--brand)]"
            style={{ ["--brand" as string]: t.color }}
          />
        </a>
      ))}
    </div>
  );
}
