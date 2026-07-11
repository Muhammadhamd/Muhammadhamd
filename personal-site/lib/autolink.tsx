import Link from "next/link";
import React from "react";

/**
 * Phrase -> internal URL. Distinctive phrases only (product and service names),
 * so we add contextual links without over-linking common words. Each target is
 * linked once per page (the first time it appears in the body).
 */
const RULES: { phrase: string; href: string }[] = [
  { phrase: "agentic AI development", href: "/services/agentic-ai-development" },
  { phrase: "LLM integration", href: "/services/llm-integration" },
  { phrase: "CRM automation", href: "/services/crm-automation" },
  { phrase: "WhatsApp AI automation", href: "/services/whatsapp-ai-automation" },
  { phrase: "RAG systems", href: "/services/rag-systems" },
  { phrase: "vector search", href: "/services/rag-systems" },
  { phrase: "WatBot", href: "/work/watbot" },
  { phrase: "selfbrand AI", href: "/work/selfbrand" },
  { phrase: "MindKeepr", href: "/work/mindkeepr" },
  { phrase: "Cubitrek", href: "/work/cubitrek" },
  { phrase: "Asmara.AI", href: "/work/asmara-ai" },
  { phrase: "VativeApps", href: "/work/vative-apps" },
  { phrase: "AI chatbot development", href: "/services/ai-chatbot-development" },
  { phrase: "full-stack development", href: "/services/full-stack-development" },
  { phrase: "MVP development", href: "/services/mvp-development" },
  { phrase: "AI automation in Dubai", href: "/ai-automation-dubai" },
  { phrase: "AI automation for restaurants", href: "/ai-for/restaurants" },
  { phrase: "WhatsApp ordering bot", href: "/ai-for/restaurants" },
  { phrase: "AI automation for marketing agencies", href: "/ai-for/marketing-agencies" },
  { phrase: "white-label AI", href: "/ai-for/marketing-agencies" },
  { phrase: "WhatsApp automation for clinics", href: "/ai-for/healthcare" },
  { phrase: "AI automation for e-commerce", href: "/ai-for/ecommerce" },
  { phrase: "abandoned-cart", href: "/ai-for/ecommerce" },
  { phrase: "AI automation for logistics", href: "/ai-for/logistics" },
  { phrase: "AI features to your SaaS", href: "/ai-for/saas-startups" },
  { phrase: "AI for SaaS", href: "/ai-for/saas-startups" },
  { phrase: "AI for personal brands", href: "/ai-for/personal-brands" },
  // Longer phrase must come before the bare "n8n" rule so it wins the tie at
  // the same match index.
  { phrase: "n8n developer", href: "/services/n8n-automation" },
  { phrase: "n8n", href: "/services/ai-automation" },
];

const linkCls =
  "font-semibold text-[#7c3bed] underline decoration-[#7c3bed]/30 underline-offset-2 hover:decoration-[#7c3bed]";

/**
 * Turn a plain string into nodes with the first occurrence of each known phrase
 * wrapped in a Link. `used` is shared across a page so a target links only once.
 */
export function autoLink(text: string, used: Set<string>): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    let best: { idx: number; phrase: string; href: string } | null = null;
    for (const rule of RULES) {
      if (used.has(rule.href)) continue;
      const idx = rest.indexOf(rule.phrase);
      if (idx === -1) continue;
      if (best === null || idx < best.idx) best = { idx, phrase: rule.phrase, href: rule.href };
    }
    if (!best) {
      nodes.push(rest);
      break;
    }
    if (best.idx > 0) nodes.push(rest.slice(0, best.idx));
    used.add(best.href);
    nodes.push(
      <Link key={`al-${key++}`} href={best.href} className={linkCls}>
        {best.phrase}
      </Link>
    );
    rest = rest.slice(best.idx + best.phrase.length);
  }
  return nodes;
}
