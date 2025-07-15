import type { Metadata } from "next";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Model Providers",
  description:
    "Learn about supported model providers and how to configure them in Graphbit",
};

export default async function ModelProvidersPage() {
  const { content } = await getMarkdownContent("model-providers");

  return (
    <article className="prose prose-gray max-w-none">
      <MarkdownContent content={content} />
    </article>
  );
}
