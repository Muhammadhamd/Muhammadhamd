import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("vative-apps");

export default function VativeAppsPage() {
  const work = works.find((w) => w.slug === "vative-apps")!;
  return <WorkPageLayout work={work} />;
}
