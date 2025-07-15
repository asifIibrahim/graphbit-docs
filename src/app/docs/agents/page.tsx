import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Learn about Graphbit agents - the core building blocks of AI systems",
};

export default async function AgentsPage() {
  const { content } = await getMarkdownContent("agents");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
