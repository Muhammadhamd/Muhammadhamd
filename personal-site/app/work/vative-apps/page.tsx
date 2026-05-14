import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "VativeApps — Muhammad Hamd",
  description:
    "Node.js Developer at VativeApps — building Express APIs, WebSockets, RabbitMQ queuing, and OpenAI integrations.",
};

export default function VativeAppsPage() {
  const work = works.find((w) => w.slug === "vative-apps")!;
  return <WorkPageLayout work={work} />;
}
