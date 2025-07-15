import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Explore Graphbit examples and learn from real-world implementations",
};

export default async function ExamplesPage() {
  const { content } = await getMarkdownContent("examples");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
