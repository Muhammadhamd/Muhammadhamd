import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/BlogPostView";
import { getAllPostSummaries, getPostBySlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

// Posts come from code plus the CMS. Prerender everything known at build time;
// articles published later render on demand and refresh at most every 5 min.
export const revalidate = 300;

export async function generateStaticParams() {
  return (await getAllPostSummaries()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    type: "article",
    ogTitle: post.title,
    ogTag: post.cluster,
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostView post={post} />;
}
