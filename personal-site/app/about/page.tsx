import Image from "next/image";
import PageShell, { JsonLd } from "@/components/PageShell";
import { DarkCTA } from "@/components/ui";
import { DottedPattern, DoodleSquiggle, DoodlePlayfulStar } from "@/components/Doodles";
import { pageMetadata, breadcrumbLd, absUrl, PERSON_ID } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Muhammad Hamd, Agentic AI Engineer from Karachi, Pakistan",
  description:
    "The story of Muhammad Hamd (Hamd Ali): how a Node.js developer became an agentic AI engineer building production LLM systems, WatBot, selfbrand AI, and Asmara.AI from Karachi, Pakistan.",
  path: "/about",
  type: "profile",
  ogTitle: "From manual code to autonomous systems",
  ogTag: "About",
});

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: absUrl("/about"),
  name: "About Muhammad Hamd",
  mainEntity: { "@id": PERSON_ID },
};

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={aboutLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <article className="relative">
        <DottedPattern className="w-[130px] h-[130px] -right-2 -top-6 opacity-60" />
        <h1 className="relative inline-block font-display text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight text-zinc-950">
          From manual code to{" "}
          <span className="text-[#7c3bed]">autonomous systems</span>
          <DoodleSquiggle className="pointer-events-none absolute -bottom-3 left-0 h-2.5 w-48 text-[#7c3bed]/40" />
        </h1>

        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <DoodlePlayfulStar className="pointer-events-none absolute -right-3 -top-3 hidden h-6 w-6 sm:block" />
            <div className="overflow-hidden rounded-2xl border-2 border-zinc-950 shadow-[5px_5px_0px_0px_rgba(124,59,237,0.95)] w-[140px]">
              <Image
                src="/hamd.png"
                alt="Muhammad Hamd, Agentic AI Engineer"
                width={140}
                height={150}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <p className="text-[16px] leading-relaxed text-zinc-600">
            I&apos;m <strong className="text-zinc-900">Muhammad Hamd</strong>, also
            known as Hamd Ali, an agentic AI engineer and systems builder based in
            Karachi, Pakistan. I design and ship AI-native systems: autonomous
            agents, LLM integrations, and workflow automation that replace
            repetitive digital work with software that runs on its own. This is the
            longer version of how I got here and what I care about building.
          </p>
        </div>

        <div className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-zinc-700">
          <h2 className="font-display text-[22px] font-extrabold text-zinc-950 pt-2">
            It started with backend engineering
          </h2>
          <p>
            My path didn&apos;t begin with AI. It began with backend systems. As a
            Node.js developer at VativeApps (2023–2024), I built scalable Express
            REST APIs, real-time WebSocket servers, and message queues with
            RabbitMQ, and integrated third-party services like in-app billing and
            early OpenAI features into mobile products. That period taught me the
            unglamorous discipline that still defines my work: writing reliable,
            maintainable systems that hold up under real traffic, not just code that
            demos well.
          </p>

          <h2 className="font-display text-[22px] font-extrabold text-zinc-950 pt-2">
            The turn toward agentic AI
          </h2>
          <p>
            At Cubitrek I progressed from full-stack developer to agentic AI
            engineer over a single intense year. I went from building MERN
            applications with embedded machine-learning logic to designing
            autonomous agentic workflows in Python: systems that could plan,
            orchestrate multiple large language models, and execute multi-step
            business tasks without a human in the loop. I researched the Google Ads
            API for data enrichment, managed Azure infrastructure, and spent a lot
            of time on the hard part of LLM work: making non-deterministic models
            behave predictably enough to trust in production.
          </p>
          <p>
            That experience convinced me that the interesting frontier wasn&apos;t
            another chatbot. It was <em>agentic</em> systems: AI that uses tools,
            keeps memory, reasons across steps, and actually completes work. So I
            went deeper into the stack that makes it possible: RAG, vector
            embeddings, orchestration frameworks, and the engineering around them.
          </p>

          <h2 className="font-display text-[22px] font-extrabold text-zinc-950 pt-2">
            Building products, not just features
          </h2>
          <p>
            I&apos;m a builder, so I started shipping my own products. I founded{" "}
            <strong className="text-zinc-900">WatBot</strong>, a WhatsApp AI
            automation platform for customer support. Its core engine is written in
            Go using the whatsmeow library for direct WhatsApp Web integration, with
            an OpenAI-powered conversational layer and a React dashboard, distributed
            as a local-first binary. I founded{" "}
            <strong className="text-zinc-900">selfbrand AI</strong>, a SaaS that
            automates roughly 80% of personal-branding content for founders and
            professionals using LLMs. And I&apos;m building{" "}
            <strong className="text-zinc-900">Asmara.AI</strong>, an AI-native
            automation product focused on LLM orchestration for business workflows.
          </p>
          <p>
            Founding products changes how you engineer. You feel every shortcut,
            every flaky pipeline, every cost spike. It pushed me to care about
            fallbacks, monitoring, and cost control as first-class concerns, which
            are the things that separate an AI prototype from a system a business
            can actually depend on.
          </p>

          <h2 className="font-display text-[22px] font-extrabold text-zinc-950 pt-2">
            Enterprise AI at MindKeepr
          </h2>
          <p>
            Today I&apos;m a full-stack AI engineer at{" "}
            <strong className="text-zinc-900">MindKeepr</strong> in Tallinn, Estonia
            (hybrid), where I lead development of AI-powered knowledge-retention
            systems. I architect agentic AI pipelines with RAG that surface the
            right information at the right moment, reducing onboarding time and
            preventing institutional knowledge from being lost when people leave.
            Working at enterprise scale keeps me honest about reliability,
            predictability, and safety in mission-critical environments.
          </p>

          <h2 className="font-display text-[22px] font-extrabold text-zinc-950 pt-2">
            What I believe about building with AI
          </h2>
          <p>
            I have a simple philosophy: AI should remove manual work, not add
            complexity. I&apos;m not interested in hype-driven demos. I&apos;m
            interested in systems that quietly do real work, reliably, while you
            sleep. Every technical decision I make is judged against one question:
            does this deliver practical, measurable utility? Being based in Karachi
            and working with founders and teams globally, I&apos;ve learned that the
            best AI work is grounded in real problems and shipped end-to-end, from
            architecture to the unglamorous production hardening that makes it last.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <DarkCTA
            kicker="Work with me"
            title="Want to build an AI system that runs itself?"
            text="Tell me what you're trying to automate or build, and I'll tell you honestly how I'd approach it."
            primary={{ label: "Hire me", href: "/hire-me" }}
            secondary={{ label: "Email me", href: "mailto:muhammadhamdali572@gmail.com" }}
          />
        </div>
      </article>
    </PageShell>
  );
}
