import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("selfbrand");

export default function SelfBrandPage() {
  const work = works.find((w) => w.slug === "selfbrand")!;
  return <WorkPageLayout work={work} />;
}
