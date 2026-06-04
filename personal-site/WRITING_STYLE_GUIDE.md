# Writing Style Guide — Muhammad Hamd

This guide captures the exact voice, tone, and structure used across the blog
(`lib/posts/*`) and the page copy (`lib/services.ts`, `lib/locations.ts`,
`app/about`, `app/hire-me`). Every new article or page must follow it so the
site reads as one consistent person who actually builds things.

The one-line rule: **write like a senior engineer explaining real work to a
smart founder over coffee — plain, honest, specific, and a little warm.**

---

## 1. Voice & tone

- **First person, always.** "I build…", "I'm Muhammad Hamd…", "At Cubitrek I…".
  The author is a real person, not a brand or a "we".
- **Practitioner, not pundit.** Every claim is grounded in something actually
  shipped. Authority comes from experience, not adjectives.
- **Anti-hype and honest.** Name the limits. Say when a tool is the wrong
  choice. Phrases like "this guide skips the hype", "the honest answer", "I'll
  tell you honestly" are core to the voice.
- **Confident but humble.** Direct and sure, never boastful. No "world-class",
  "cutting-edge", "revolutionary", "passionate about leveraging".
- **Warm and plain.** Friendly, calm, and clear. Talks _to_ the reader using
  "you" and "your team".
- **Calm authority.** Short, declarative sentences carry the weight. No
  exclamation marks, no hype punctuation.

## 2. Point of view

- The writer is **"I" (Muhammad Hamd)**; the reader is **"you"**.
- Speak directly to a founder, CTO, or hiring manager who has a real problem.
- It is fine to reference real projects by name as proof:
  **VativeApps, Cubitrek, MindKeepr, WatBot, selfbrand AI, Asmara.AI**.

## 3. Punctuation & sentence rules (strict)

- **No em dashes (—). Ever.** This is the hardest rule. Where you would reach
  for a dash, do one of:
  - join the clauses with a conjunction: `because`, `so`, `and`, `but`, `which`,
    `rather than`, `including`, `such as`, `whether`;
  - or split into two clean sentences.
  - Example: not "recover from errors — built with LangChain", but
    "recover from errors. I build them with LangChain…".
- **No comma splices.** A comma cannot join two independent clauses. Use a
  conjunction or a period.
- **Ranges read as words:** "$50 to $120 per hour", not "$50–120".
- **Lists use real connectors**, not punctuation dumps. Prefer "such as" or
  "including" to introduce examples.
- **One idea per sentence**, mostly. Vary length: a few short sentences, then a
  longer one that explains. Avoid long run-ons.
- **No exclamation marks** in articles and page prose. (The playful AI-chat
  microcopy is the only exception.)
- **Oxford comma** on lists of three or more.
- American spelling.

## 4. What to always include in a blog post

Follow the `Block[]` format in `lib/blog-types.ts` (`p`, `h2`, `h3`, `ul`, `ol`,
`code`, `quote`). A strong post has:

1. **A hook intro (1 `p`)** that names the real problem and what the reader will
   get, and signals the practitioner angle. No throat-clearing.
   - e.g. "Almost anyone can wire an LLM into an app and get an impressive demo
     in an afternoon. Keeping it fast, accurate, and affordable is a different
     job."
2. **A plain definition** early if the topic is a concept ("The simple
   definition").
3. **`h2` sections** that each answer one real question a buyer would type.
4. **At least one concrete example from real work** (name the project).
5. **A "when NOT to use this" / honesty section** for credibility.
6. **A soft CTA close (1 `p`)** that connects to working together, phrased as a
   genuine offer, never a hard sell.
   - Pattern: "If you have a [specific situation], that is exactly the kind of
     problem I [solve]. Tell me [the thing] and I'll tell you honestly how I'd
     approach it."
7. **An FAQ** of 4 question/answer pairs (`faqs`), each answer 2–4 sentences,
   directly useful, reusing the post's key phrases (this also feeds SEO and AI
   citations).
8. **3–4 internal `related` links** to a service page, sibling posts, and
   `/hire-me`.

## 5. Structure of page copy (services / locations / hire-me)

- **Intro paragraph mentions name + title + location in the first ~100 words**
  ("I'm Muhammad Hamd, an agentic AI engineer based in Karachi, Pakistan…").
- "What this solves" → reader-pain bullets.
- "What I build" → concrete capabilities, each with the real stack named.
- A short FAQ (4 Q&A) in the same voice.
- A soft CTA at the end.

## 6. Vocabulary

**Use (on-brand):** production-ready, ship / shipped, real systems, reliable,
practical, end to end, guardrails, grounded, honest, actually, repetitive
digital work, runs on its own, founders and teams, in production not demos.

**Avoid (off-brand):** leverage, synergy, cutting-edge, world-class,
revolutionary, game-changer, seamless (overused), unlock, supercharge, robust
(unless literal), passionate, "in today's fast-paced world", "the power of AI",
empty superlatives, and any buzzword used in place of a concrete noun.

## 7. Good vs weak (real examples)

- Weak: "I leverage cutting-edge AI to deliver world-class, seamless automation
  solutions that supercharge your business."
- On-brand: "I replace repetitive digital work with AI-driven pipelines that are
  reliable, observable, and built to keep running while you sleep."

- Weak (dash + splice): "Agents plan and act — they're built with LangChain, it
  depends on the job."
- On-brand: "Agents that plan a goal, choose the right tools, and recover from
  errors. I build them with LangChain, LangGraph, CrewAI, or AutoGen, depending
  on what the job needs."

## 8. SEO / metadata conventions (per post or page)

- `title` (H1): natural, human, contains the keyword once, no stuffing.
- `metaTitle`: one clear focus + " | Muhammad Hamd". Under ~60 chars. Never two
  keyword phrases jammed with a comma.
- `metaDescription`: ~150–160 chars, plain sentence(s), keyword woven in once.
- `excerpt`: one or two sentences, the promise of the piece, in voice.
- One keyword per page; place it in the H1, first paragraph, and an FAQ.

## 9. Final checklist before publishing

- [ ] Written in first person, grounded in at least one real project.
- [ ] **Zero em dashes**; clauses joined with conjunctions or split.
- [ ] No comma splices; ranges written as "X to Y".
- [ ] No buzzwords from the avoid list; concrete nouns instead.
- [ ] Hook intro, clear H2s answering real questions, one honesty section.
- [ ] Soft-CTA close in the offer pattern.
- [ ] 4-question FAQ in voice.
- [ ] 3+ internal links (service + sibling post + /hire-me).
- [ ] Keyword in H1, first paragraph, and one FAQ; natural titles.
- [ ] Reads aloud smoothly, one idea per sentence, varied length.
