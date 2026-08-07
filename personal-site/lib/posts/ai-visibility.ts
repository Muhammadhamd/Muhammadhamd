import type { Post } from "@/lib/blog-types";

export const aiVisibilityPosts: Post[] = [
  {
    slug: "is-my-product-visible-on-ai-platforms",
    title: "Is Your Product Visible on AI Platforms?",
    metaTitle: "Is Your Product Visible on AI Platforms? | Muhammad Hamd",
    metaDescription:
      "Ranking on Google is not the same as being cited by ChatGPT or Perplexity. Here is how to test your AI visibility, find the real causes, and fix them.",
    excerpt:
      "You can rank on Google and still be invisible to ChatGPT, Perplexity, and Claude. Here is how to test that, why it happens, and exactly what to fix.",
    keyword: "is my product visible on AI platforms",
    cluster: "AI Visibility",
    date: "2026-08-08",
    readMinutes: 13,
    clusterSlugs: ["ai-visibility-by-region"],
    body: [
      {
        t: "p",
        text: "You rank on Google. Maybe not number one, but you show up on page one for the terms that matter, and you have stopped worrying about search. Then someone asks ChatGPT to recommend a product like yours, and your name never comes up. You ask Perplexity the same question. Nothing. You ask Claude. Nothing. The site that ranks fine on Google is invisible in the exact place a growing share of your next customers now start looking.",
      },
      {
        t: "p",
        text: "I ran into this on my own site. I build AI systems for a living, so when I ran an AI visibility audit on hamdali.com using AI-assisted tooling, I expected the report to be mostly clean. It was not. The site scored well on a traditional technical SEO pass, but a page-by-page check of what AI platforms would actually read told a different story, and the gap between the two numbers is the whole subject of this article.",
      },
      { t: "h2", text: "The short version" },
      {
        t: "ul",
        items: [
          "Search ranking and AI citation are graded by two different systems reading two different signals.",
          "AI platforms lean on structured data and resolvable entities, not keyword density.",
          "Structured data that looks correct in your code can still resolve as empty on the actual page, because most schema tools validate the file, not the rendered page.",
          "Content that only appears after client-side JavaScript runs is often invisible to AI crawlers, even though it looks fine in your browser.",
          "None of this is unfixable. It is mostly plumbing, and it is the kind of plumbing most sites have never had checked.",
        ],
      },
      {
        t: "figure",
        diagram: "ranking-vs-citation-gap",
        caption: "The same product, two different scoreboards. Search ranking measures one thing. AI citation measures another.",
        alt: "A bar chart comparing a filled bar labeled Search Ranking at number 3 on Google against a nearly empty bar labeled AI Citations at zero out of five, showing that ranking well on Google does not mean an AI platform will cite the product.",
      },
      { t: "h2", text: "The gap between ranking and being cited" },
      {
        t: "p",
        text: "Search engines and AI answer engines are not doing the same job. A search engine returns a ranked list of pages and lets you decide which one to open. An AI platform reads across many pages, decides what is true, and hands you one synthesized answer, usually with one or two sources attached. Ranking third on Google means a crawler indexed your page and Google's algorithm judged it relevant. Being cited by ChatGPT means a completely separate system decided your page was trustworthy enough, clear enough, and structured enough to quote from directly.",
      },
      {
        t: "p",
        text: "Those are different bars to clear. A page can clear the first one and fail the second, and most products that have never been checked are doing exactly that without knowing it.",
      },
      { t: "h2", text: "What AI platforms actually read" },
      {
        t: "p",
        text: "Old-school SEO rewarded keyword density and backlinks. AI platforms weigh those less and lean much harder on two things: entities and structured data. An entity is a defined thing, a person, a product, a company, that the model can attach facts to and reuse consistently. Structured data, usually JSON-LD following schema.org, is how you hand the model those facts directly instead of hoping it infers them correctly from paragraphs of marketing copy.",
      },
      {
        t: "p",
        text: "This is the same principle behind RAG systems, which I build for a living. A model answers better when it retrieves grounded facts instead of guessing from general training. Your structured data is doing the same job for the crawlers reading your site. It is the difference between a model guessing what your product does from ad copy and a model reading a Product node that states your name, category, and description in a format built for machines, not readers.",
      },
      {
        t: "figure",
        diagram: "schema-to-ai-retrieval",
        caption: "The path from your page to a cited answer runs through structured data, not through prose alone.",
        alt: "A four-step flow diagram: Page HTML that is server-rendered, then Structured Data in JSON-LD format, then an AI Crawler such as GPTBot or ClaudeBot, then a Cited Answer that appears inside a chat response.",
      },
      {
        t: "p",
        text: "If that middle step is broken or missing, the chain stops there. The crawler can still read your prose, but prose is expensive for a model to parse reliably at scale. Structured data is cheap and unambiguous, so when it is present and correct, it tends to carry more weight than a well-written paragraph saying the same thing.",
      },
      { t: "h2", text: "How to actually test it" },
      {
        t: "p",
        text: "You do not need a paid tool to find out where you stand. You need fifteen minutes and a short checklist.",
      },
      {
        t: "ol",
        items: [
          "Write down the exact question a real buyer would type, not your brand name. Something like \"who builds custom AI chatbots\" or \"best tool for X,\" phrased the way a stranger would ask it.",
          "Run that same question in ChatGPT, Perplexity, and Claude, in separate sessions with no prior context. Note whether your product appears at all.",
          "If it appears, check whether the facts are correct. A model that names you but gets your category or pricing wrong is pulling from a stale or unreliable source, which is its own problem.",
          "Search site:yourdomain.com in Google and count how many pages actually come back. This tells you how much of your site is indexed at all, which is the floor everything else sits on.",
          "Open your key pages in a tool that shows raw HTML with no JavaScript executed, or just view source. If your main content or your schema is missing from that raw response, a crawler that does not run your JavaScript never sees it either.",
        ],
      },
      {
        t: "p",
        text: "When I ran step four on my own site, only about one of forty-five pages in the sitemap was showing up as indexed. Not one of forty-five pages was broken. One of forty-five was visible at all. That number is what got me to open the schema and rendering up properly, and it is usually the first sign that the problem is structural, not cosmetic.",
      },
      { t: "h2", text: "Where most products fail first" },
      {
        t: "p",
        text: "Two failures show up more than anything else, and both are invisible if you are only looking at the page in a browser.",
      },
      {
        t: "p",
        text: "The first is a dangling reference in your structured data. This is exactly what I found on hamdali.com. My homepage defined a full Person entity, my name, job title, and links to my profiles, inside one JSON-LD block. Every other page on the site, my service pages, my blog posts, my case studies, referenced that same person by ID only, something like provider pointing at an at-id with no other data attached. That pattern works fine for a human, because a browser never needs it and a reader never sees it. It fails for a machine, because AI platforms and search engines validate structured data per page, not across your whole site. On every page except the homepage, that reference resolved to nothing. No name, no title, no link. A dangling pointer to an entity that, as far as that page was concerned, did not exist.",
      },
      {
        t: "figure",
        diagram: "before-after-schema-fix",
        caption: "The fix was not new content. It was making every page carry its own complete entity data instead of a bare reference.",
        alt: "A before and after comparison. Before shows a red broken-link icon next to a code snippet that only references an at-id for a person with no other data, labeled dangling reference, no name. After shows a green checkmark next to a code snippet with a full name, job title, and url, labeled resolves on every page.",
      },
      {
        t: "code",
        code: `// Before: resolves to nothing on any page but the homepage
provider: { "@id": "https://example.com/#person" }

// After: a self-contained node every page can resolve on its own
provider: {
  "@type": "Person",
  "@id": "https://example.com/#person",
  name: "Jane Doe",
  jobTitle: "Founder",
  url: "https://example.com"
}`,
      },
      {
        t: "p",
        text: "The second failure is client-side rendering. Plenty of modern frameworks load a page's real content after the initial HTML arrives, using JavaScript that runs in the browser. Your browser handles that invisibly, so the page looks complete. Some AI crawlers do not execute JavaScript the way a browser does, so anything that only appears after hydration might as well not exist to them. I confirmed my own fix by fetching my pages with a plain request that runs no JavaScript at all and checking that the content and the schema were both already there in the raw response. If you cannot do that on your own site right now, that is the single fastest thing to check.",
      },
      { t: "h2", text: "Fixing it, in order" },
      {
        t: "p",
        text: "I did not learn this from a blog post. I found it building production systems such as WatBot and MindKeepr, where a piece of data that looks fine in isolation but fails to resolve correctly downstream is a bug, not a style choice, and then again auditing my own site the same way. Once you know where you stand, the fix list is short and mostly mechanical. Work through it in this order, because later steps depend on earlier ones actually being true.",
      },
      {
        t: "ol",
        items: [
          "Confirm your key content and your schema are both present in the raw server response, not only after client-side JavaScript runs. If your framework supports server rendering, use it for anything you want AI platforms to read.",
          "Give every page its own complete entity data instead of a bare id reference. If five pages all describe the same person or organization, that data can be defined once in code and reused, but it needs to render fully on each page, not point elsewhere.",
          "Check robots.txt and make sure GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are not blocked. Plenty of sites disallow crawlers by default and never revisit the file once traffic starts arriving.",
          "Add an llms.txt file at your root domain that maps your key pages in plain language. It costs almost nothing to build and gives AI systems a clean index instead of making them guess your site structure.",
          "Write your FAQ answers so each one stands alone. A model pulling one answer out of context should not need the rest of the page to make sense of it.",
          "Get the pages properly indexed in the first place. Submit your sitemap in Search Console, request indexing on your key pages, and build a handful of real backlinks. AI platforms lean on much of the same crawl and link data search engines already built, so an unindexed page rarely gets picked up regardless of how clean its schema is.",
        ],
      },
      { t: "h2", text: "What this does not fix" },
      {
        t: "p",
        text: "Fixing structured data and rendering makes you eligible to be found and cited. It does not guarantee it. AI platforms also weigh authority, how recently your content was updated, and how many independent sources describe you the same way. A brand-new site with perfect schema and zero backlinks will still struggle against an established competitor, the same way it would in traditional search. This work removes the technical reasons you are invisible. It does not replace the slower work of building real authority on top of that.",
      },
      { t: "h2", text: "What changes once you are visible" },
      {
        t: "p",
        text: "Here is the part most people miss once they fix the basics. Visibility is not one score you either have or do not have. Once a product clears the technical bar, it tends to show up unevenly, cited confidently in one market's AI answers and never mentioned in another, often for the same product with the same schema. I have watched this happen with my own client work across Pakistan, the Gulf, the UK, and the US, and the causes behind AI visibility by region are different enough from what is covered here that they deserve their own explanation.",
      },
      {
        t: "quote",
        text: "Being indexed and being cited are two different systems evaluating two different signals. Fixing one does not automatically fix the other.",
      },
      {
        t: "p",
        text: "If you are not sure whether your product is actually reachable by AI platforms right now, that is exactly the kind of problem I dig into. Send me your domain and the question a buyer would actually ask, and I will tell you honestly what a model sees when it looks at your site.",
      },
    ],
    faqs: [
      {
        q: "Why does my product rank on Google but not show up in ChatGPT?",
        a: "Search ranking and AI citation are graded by different systems. Google indexes and ranks pages. AI platforms read entities and structured data to decide what to cite. A page can satisfy the first system and still be missing the structured data, server-side rendering, or crawler access the second one depends on.",
      },
      {
        q: "What is an AI visibility audit?",
        a: "It is a check of whether AI platforms such as ChatGPT, Perplexity, and Claude can actually read and cite your product, covering structured data resolution, server-side rendering, crawler access, and how consistently your brand is described across the web. Most sites have only ever had a traditional SEO audit, which checks a different set of signals.",
      },
      {
        q: "Can I test my own AI visibility without a paid tool?",
        a: "Yes. Ask the exact question a buyer would type across ChatGPT, Perplexity, and Claude in fresh sessions, check how many of your pages are actually indexed with a site search on Google, and view your page's raw HTML with no JavaScript executed to confirm your content and schema are really there.",
      },
      {
        q: "How long does it take to fix AI visibility issues?",
        a: "Structured data and rendering fixes are usually fast, often days once the issues are identified, because they rarely require new content, only correcting how existing content and data are delivered. Getting fully indexed and building the authority signals AI platforms also weigh takes longer and compounds over weeks and months.",
      },
    ],
    related: [
      { label: "Why AI Visibility Differs by Region", href: "/blog/ai-visibility-by-region" },
      { label: "AI Visibility Audit service", href: "/services/ai-visibility" },
      { label: "Hire me", href: "/hire-me" },
    ],
  },
  {
    slug: "ai-visibility-by-region",
    title: "Why Your Product Is Visible in One Market's AI Answers and Invisible in Another",
    metaTitle: "Why AI Visibility Differs by Region | Muhammad Hamd",
    metaDescription:
      "Why ChatGPT cites the same product in one country and ignores it in another, and how to test, diagnose, and fix regional gaps in your AI visibility.",
    excerpt:
      "Getting cited by AI platforms once is not the finish line. Visibility is graded per market, and most products never check whether they hold up outside their home country.",
    keyword: "AI visibility by region",
    cluster: "AI Visibility",
    date: "2026-08-08",
    readMinutes: 9,
    pillarSlug: "is-my-product-visible-on-ai-platforms",
    body: [
      {
        t: "p",
        text: "If you have confirmed that ChatGPT or Perplexity can find and cite your product, it is tempting to file that under solved and move on. The assumption is that visibility is one property of your site, present or absent everywhere at once. The real behavior is different. I have built and tested AI-facing pages for the same business across Pakistan, the Gulf, the UK, and the US, and the same product with the same core content can be cited confidently in one market's AI answers and never come up in another.",
      },
      {
        t: "p",
        text: "This is a real gap, and it is one almost nobody is writing about correctly. Most of what exists on regional AI visibility treats it as an enterprise problem, a chain with a hundred store locations tracking citation consistency across cities. If you run one product or one consultancy, that framing does not fit you, and the fixes it recommends will not either. This is the version for a single product with a global audience.",
      },
      { t: "h2", text: "The short version" },
      {
        t: "ul",
        items: [
          "AI models are trained on data that skews heavily toward certain regions and languages, usually the US and UK, which shapes what they already know before your site enters the picture.",
          "The same brand can fragment into several inconsistent entities if your regional pages describe you slightly differently on each one.",
          "Retrieval and citation behavior genuinely differs by where a query is asked from and what language it is asked in, not only by what your site says.",
          "One baseline test in one country tells you almost nothing about how you perform in the markets you actually sell into.",
        ],
      },
      { t: "h2", text: "Visibility isn't one score, it's per market" },
      {
        t: "p",
        text: "The method I use to check whether your product is visible on AI platforms starts with one question asked in one place, and that is the right starting point, but it is not the finish line. A model's answer to the same question can change based on the region it infers you are asking from, the language you ask in, and which regional sources it leans on for that topic. A product that clears the bar in the US test can fail the same test phrased for a buyer in the UAE, using the exact same underlying site.",
      },
      {
        t: "figure",
        diagram: "regional-visibility-map",
        caption: "The same product, tested the same way, scored differently by region. This is the normal case, not the exception.",
        alt: "Four region cards showing an illustrative AI visibility score out of 100 for the same product: Pakistan and Gulf at 74, United Kingdom at 41, United States at 28, and elsewhere at 12, showing that visibility is not one number but varies sharply by market.",
      },
      { t: "h2", text: "Why the gap exists" },
      {
        t: "p",
        text: "Three separate mechanisms cause this, and they need different fixes.",
      },
      {
        t: "ul",
        items: [
          "Training data skew. Large language models learn disproportionately from English-language, US and UK-heavy sources. A product that is well covered in Pakistani or Gulf publications may be almost absent from the sources a model leaned on most heavily during training, even if your own site is technically flawless.",
          "Entity fragmentation. If your Dubai page, your UK page, and your US page each describe your business slightly differently, in name, description, or positioning, a model may treat them as three loosely related entities instead of one consistent one, and cite none of them with full confidence.",
          "Regional retrieval and citation differences. Some AI platforms weight local sources and local language more heavily for queries that look regional, and some maintain separate indexes or citation behavior by market. A source that is a strong citation candidate for a US query may not surface at all for the same query asked with Gulf context.",
        ],
      },
      { t: "h2", text: "How to test it" },
      {
        t: "p",
        text: "A single baseline check misses this entirely. Testing regional visibility properly means repeating the same diagnostic with the region deliberately varied.",
      },
      {
        t: "ol",
        items: [
          "Ask the same buyer question multiple times, once with no location context, then again with an explicit regional frame, such as adding \"in the UAE\" or \"for a UK company\" to the prompt.",
          "Ask in the local language where relevant, not only in English. A product invisible to an English query can still surface in a query asked in Arabic or another local language, and the reverse is just as common.",
          "Compare what each answer cites. If the same question surfaces different competitors depending on the region named, that tells you which markets the models trust other sources over yours in.",
          "Check whether your regional pages, if you have them, actually say the same thing about who you are. Read your Dubai page, your UK page, and your homepage back to back and see if a stranger would conclude they describe the same business.",
        ],
      },
      { t: "h2", text: "What breaks it, in practice" },
      {
        t: "p",
        text: "Building AI automation in Dubai as a distinct page for hamdali.com, alongside separate pages for Qatar, Saudi Arabia, the UK, and the US, surfaced the actual failure pattern, and it is not what most guides describe. It is not usually that a regional page is missing. It is that the regional page exists but was built as a template swap, the same paragraph with the city name changed, and nothing else. That pattern is a known problem for search engines too, sometimes called a doorway page, and AI platforms are at least as good at recognizing it. Each of my own regional pages carries something the others do not, a real timezone comparison, a currency-anchored rate, a locally relevant proof point, specifically so none of them read as filler to a search crawler or a language model.",
      },
      {
        t: "p",
        text: "The second common break is schema that never got localized. If every regional page emits identical Service schema with the same areaServed value, or no areaServed value at all, you have handed every crawler the same undifferentiated signal for four different markets. The fix a lot of sites reach for, adding more regional pages, actually makes this worse if the underlying schema and content pattern is not fixed first, because it multiplies the same weak signal instead of correcting it. I hold this to the same standard I would apply to any production system, the discipline I bring to client work like WatBot and MindKeepr, where a value that is technically present but not actually correct is still a bug.",
      },
      { t: "h2", text: "Fixing regional AI visibility" },
      {
        t: "ol",
        items: [
          "Give every regional page its own areaServed value in its schema, matching the actual market it targets, not a copy of the global default.",
          "Keep your name, description, and core positioning identical everywhere, homepage, regional pages, LinkedIn, directories, so models have one consistent entity to converge on instead of several fragmented ones.",
          "Put one real, region-specific fact on every regional page: a local case, a timezone detail that is actually true for that market, a currency comparison, something a template swap could not produce.",
          "Test with regional and language variation, not one baseline question, and track results per market instead of treating one good answer as proof the whole site is visible.",
          "Expect the fix to compound slowly. Entity consistency and citation behavior build up the same way backlinks and authority do in traditional search, not overnight.",
        ],
      },
      {
        t: "p",
        text: "If you already know your product performs well in one market's AI answers and you are not sure why it disappears in another, that is exactly what an AI visibility audit is built to answer. Send me the two markets and the question you are testing with, and I will tell you honestly what is actually different between them.",
      },
    ],
    faqs: [
      {
        q: "Why does ChatGPT recommend my product in one country but not another?",
        a: "The most common causes are training data that skews toward certain regions and languages, inconsistent descriptions of your brand across regional pages that fragment your entity, and retrieval behavior that genuinely differs by the region and language a query is asked in. It is rarely one single cause.",
      },
      {
        q: "Do I need separate AI visibility fixes for each country I sell into?",
        a: "You need each regional page to carry its own accurate schema and at least one real, region-specific fact, but your core entity data, your name, description, and positioning, should stay consistent everywhere. Fragmenting your identity across regions usually hurts more than it helps.",
      },
      {
        q: "How do I test AI visibility for a specific region?",
        a: "Ask the same buyer question with an explicit regional frame added, such as naming the country, and again in the local language if relevant. Compare what gets cited in each version. A single test with no location context will not reveal regional gaps.",
      },
      {
        q: "Is regional AI visibility only a problem for large multi-location businesses?",
        a: "No. It shows up just as clearly for a single product or a solo consultancy selling into multiple markets, which is a case most existing guidance skips because it is written for enterprise chains tracking dozens of physical locations.",
      },
    ],
    related: [
      { label: "Is Your Product Visible on AI Platforms?", href: "/blog/is-my-product-visible-on-ai-platforms" },
      { label: "AI Automation Consultant for the UK", href: "/ai-automation-consultant-uk" },
      { label: "AI Automation Consultant for the US", href: "/ai-automation-consultant-usa" },
    ],
  },
];
