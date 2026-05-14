import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "MindKeepr — Muhammad Hamd",
  description:
    "Full-stack AI Engineer at MindKeepr — The Knowledge Retention Company. Building agentic AI systems in Tallinn, Estonia.",
};

export default function MindKeeprPage() {
  const work = works.find((w) => w.slug === "mindkeepr")!;
  return <WorkPageLayout work={work} />;
}
