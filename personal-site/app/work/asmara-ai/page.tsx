import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asmara.AI — Muhammad Hamd",
  description:
    "Founder and builder of Asmara.AI — an AI-native product focused on intelligent automation and workflows.",
};

export default function AsmaraAIPage() {
  const work = works.find((w) => w.slug === "asmara-ai")!;
  return <WorkPageLayout work={work} />;
}
