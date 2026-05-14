import type { Metadata } from "next";
import WorkPageLayout from "@/components/WorkPageLayout";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "SelfBrand.app — Muhammad Hamd",
  description:
    "Founder of SelfBrand.app — AI personal branding SaaS for founders, service providers, and professionals.",
};

export default function SelfBrandPage() {
  const work = works.find((w) => w.slug === "selfbrand")!;
  return <WorkPageLayout work={work} />;
}
