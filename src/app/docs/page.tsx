import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Get started with Graphbit - Build powerful AI agents and multi-agent systems",
};

export default async function DocsHomePage() {
  const { content } = await getMarkdownContent("homepage");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
