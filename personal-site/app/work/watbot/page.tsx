import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("watbot");

export default function WatBotPage() {
  const work = works.find((w) => w.slug === "watbot")!;
  return <WorkPageLayout work={work} />;
}
