import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryView from "@/components/IndustryView";
import { industries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const ind = industries.find((i) => i.slug === industry);
  if (!ind) return {};
  return pageMetadata({
    title: ind.metaTitle,
    description: ind.metaDescription,
    path: `/ai-for/${industry}`,
    ogTitle: ind.h1,
    ogTag: "AI Automation",
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const ind = industries.find((i) => i.slug === industry);
  if (!ind) notFound();
  return <IndustryView industry={ind} />;
}
