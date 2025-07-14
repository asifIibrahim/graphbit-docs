import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Graphs",
  description:
    "Learn about Graphbit graphs - connecting agents and building complex workflows",
};

export default async function GraphsPage() {
  const { content } = await getMarkdownContent("graphs");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
