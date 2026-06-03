import { agenticPosts } from "@/lib/posts/agentic";
import { llmPosts } from "@/lib/posts/llm";
import { automationPosts } from "@/lib/posts/automation";
import { hiringPosts } from "@/lib/posts/hiring";
import { pakistanPosts } from "@/lib/posts/pakistan";

export { author } from "@/lib/blog-types";
export type { Post, Block } from "@/lib/blog-types";

/** All posts, newest first. */
export const posts = [
  ...agenticPosts,
  ...llmPosts,
  ...automationPosts,
  ...hiringPosts,
  ...pakistanPosts,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
