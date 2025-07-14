import { getHighlighter } from "shiki";

let highlighter: any = null;

export async function getHighlighterInstance() {
  if (!highlighter) {
    highlighter = await getHighlighter({
      theme: "github-dark",
      langs: [
        "javascript",
        "typescript",
        "python",
        "json",
        "bash",
        "yaml",
        "markdown",
      ],
    });
  }
  return highlighter;
}

export async function highlightCode(
  code: string,
  language: string = "typescript"
) {
  const highlighter = await getHighlighterInstance();

  try {
    return highlighter.codeToHtml(code, { lang: language });
  } catch (error) {
    // Fallback to plain text if language is not supported
    return `<pre><code>${code}</code></pre>`;
  }
}
