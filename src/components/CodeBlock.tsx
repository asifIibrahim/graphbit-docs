"use client";

import { useEffect, useState } from "react";
import { CodeBlockProps } from "@/types";
import { highlightCode } from "@/lib/shiki";

export default function CodeBlock({
  children,
  language = "typescript",
  filename,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlight = async () => {
      try {
        const html = await highlightCode(children, language);
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre><code>${children}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    };

    highlight();
  }, [children, language]);

  if (isLoading) {
    return (
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      {filename && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm font-mono">
          {filename}
        </div>
      )}
      <div
        className={`overflow-x-auto ${
          filename ? "rounded-b-lg" : "rounded-lg"
        }`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
