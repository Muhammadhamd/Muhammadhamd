import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cubitrek — Muhammad Hamd",
  description:
    "Agentic AI Engineer and Full-stack Developer at Cubitrek — building ML-driven business solutions and autonomous AI workflows.",
};

export default function CubitrekPage() {
  const work = works.find((w) => w.slug === "cubitrek")!;
  return <WorkPageLayout work={work} />;
}
