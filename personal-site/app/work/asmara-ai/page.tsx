import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("asmara-ai");

export default function AsmaraAIPage() {
  const work = works.find((w) => w.slug === "asmara-ai")!;
  return <WorkPageLayout work={work} />;
}
