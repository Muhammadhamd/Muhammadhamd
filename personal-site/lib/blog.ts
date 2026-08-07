import { agenticPosts } from "@/lib/posts/agentic";
import { llmPosts } from "@/lib/posts/llm";
import { automationPosts } from "@/lib/posts/automation";
import { hiringPosts } from "@/lib/posts/hiring";
import { pakistanPosts } from "@/lib/posts/pakistan";
import { fullstackPosts } from "@/lib/posts/fullstack";
import { chatbotPosts } from "@/lib/posts/chatbots";
import { regionPosts } from "@/lib/posts/regions";
import { aiVisibilityPosts } from "@/lib/posts/ai-visibility";

export { author } from "@/lib/blog-types";
export type { Post, Block } from "@/lib/blog-types";

/** All posts, newest first. */
export const posts = [
  ...agenticPosts,
  ...llmPosts,
  ...automationPosts,
  ...hiringPosts,
  ...pakistanPosts,
  ...fullstackPosts,
  ...chatbotPosts,
  ...regionPosts,
  ...aiVisibilityPosts,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
