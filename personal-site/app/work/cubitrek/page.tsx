import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";
import { workMetadata } from "@/lib/seo";

export const metadata = workMetadata("cubitrek");

export default function CubitrekPage() {
  const work = works.find((w) => w.slug === "cubitrek")!;
  return <WorkPageLayout work={work} />;
}
