"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaRegLightbulb, FaLayerGroup, FaRobot } from "react-icons/fa6";
import { Sparkle, Blob, Triangle, Dot } from "@/components/Doodles";

type Step = {
  n: string;
  title: string;
  desc: string;
  bubble: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "About",
    desc: "A technology entrepreneur and AI systems builder focused on automation, AI infrastructure, and scalable software products.",
    bubble: "Practical AI systems, built for the real world.",
    Icon: FaRegLightbulb,
  },
  {
    n: "02",
    title: "What I Work On",
    desc: "AI systems for automation, content generation, conversational workflows, and backend infrastructure — complete systems, not isolated tools.",
    bubble: "Complete systems — not isolated tools.",
    Icon: FaLayerGroup,
  },
  {
    n: "03",
    title: "AI Systems & Automation",
    desc: "Replacing repetitive workflows with AI-driven systems that automate execution and communication — built for scalability and reliability.",
    bubble: "Automating the work people shouldn't have to do.",
    Icon: FaRobot,
  },
];

export default function JourneyScroll() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh; // pinned scroll distance
        let p = 0;
        if (total > 0) p = -rect.top / total;
        p = Math.min(1, Math.max(0, p));
        const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
        setActive(idx);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" className="relative mx-auto max-w-[1120px] px-5">
      {/* Tall spacer = the scroll-hijack runway (desktop). Mobile falls back to normal flow. */}
      <div ref={wrapRef} className="relative h-auto py-16 lg:h-[280vh] lg:py-0">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* LEFT — steps */}
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                The process
              </span>
              <h2 className="mt-4 font-display text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-[32px]">
                From idea to autonomous system
              </h2>

              <div className="mt-8 flex flex-col gap-3">
                {STEPS.map((s, i) => {
                  const on = active === i;
                  return (
                    <div
                      key={s.n}
                      className={`flex items-start gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                        on
                          ? "border-coral/50 bg-card card-soft"
                          : "border-transparent lg:opacity-45"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                          on ? "bg-coral text-white" : "bg-cream-2 text-muted"
                        }`}
                      >
                        <s.Icon size={18} />
                      </span>
                      <div>
                        <h3
                          className={`font-display text-[19px] font-extrabold tracking-tight transition-colors duration-300 ${
                            on ? "text-coral" : "text-ink"
                          }`}
                        >
                          {s.title}
                        </h3>
                        <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* progress dots */}
              <div className="mt-7 flex items-center gap-2">
                {STEPS.map((s, i) => (
                  <span
                    key={s.n}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? "w-7 bg-coral" : "w-1.5 bg-line"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — pinned illustrator */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[360px]">
                {/* speech bubble (updates per step) */}
                <div className="absolute -top-4 left-0 z-10 max-w-[210px] sm:-left-6">
                  <div className="card-soft rounded-2xl rounded-bl-sm border border-line bg-coral px-4 py-3 text-[13.5px] font-semibold leading-snug text-white">
                    {STEPS[active].bubble}
                    <span className="absolute -bottom-1.5 left-5 h-3 w-3 rotate-45 bg-coral" />
                  </div>
                </div>

                <Blob className="anim-float-slow absolute inset-0 -z-10 scale-110" color="var(--cream-2)" />
                <Sparkle className="anim-float pointer-events-none absolute -right-3 top-6 h-7 w-7" color="var(--coral)" />
                <Triangle className="pointer-events-none absolute -bottom-1 left-10 h-4 w-4" color="var(--amber)" />

                <div className="card-soft relative overflow-hidden rounded-[32px] border border-line bg-white">
                  <Image
                    src="/illustrator.png"
                    alt="Illustration of Muhammad Hamd"
                    width={420}
                    height={460}
                    className="h-auto w-full object-cover object-top"
                  />
                </div>

                {/* active step chip */}
                <div className="card-soft absolute -bottom-5 left-1/2 flex min-w-[180px] -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-[13px] font-bold text-white">
                    {STEPS[active].n}
                  </span>
                  <p className="font-display text-[15px] font-bold text-ink">
                    {STEPS[active].title}
                  </p>
                  <Dot className="ml-auto h-2.5 w-2.5" color="var(--sky)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
