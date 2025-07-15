import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Model Context",
  description: "Learn about model context management in Graphbit",
};

export default async function ModelContextPage() {
  const { content } = await getMarkdownContent("model-context");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
