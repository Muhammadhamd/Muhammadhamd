import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("mindkeepr");

export default function MindKeeprPage() {
  const work = works.find((w) => w.slug === "mindkeepr")!;
  return <WorkPageLayout work={work} />;
}
