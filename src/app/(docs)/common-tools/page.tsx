import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Common Tools",
  description:
    "Explore common tools and utilities available in Graphbit for building AI agents",
};

export default async function CommonToolsPage() {
  const { content } = await getMarkdownContent("common-tools");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
