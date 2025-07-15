import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Multi-Agent Systems",
  description: "Learn how to build complex multi-agent systems with Graphbit",
};

export default async function MultiAgentPage() {
  const { content } = await getMarkdownContent("multi-agent");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
