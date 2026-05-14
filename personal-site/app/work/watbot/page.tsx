import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "WatBot — Muhammad Hamd",
  description:
    "Founder & Software Engineer at WatBot — WhatsApp AI customer support platform built in Go with OpenAI.",
};

export default function WatBotPage() {
  const work = works.find((w) => w.slug === "watbot")!;
  return <WorkPageLayout work={work} />;
}
