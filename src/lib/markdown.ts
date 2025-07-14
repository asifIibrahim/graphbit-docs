import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { MarkdownContent } from "@/types";

const contentDirectory = path.join(process.cwd(), "src/content");

export async function getMarkdownContent(
  slug: string
): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);

    const contentHtml = processedContent.toString();

    return {
      content: contentHtml,
      data: data as MarkdownContent["data"],
    };
  } catch (error) {
    console.error(`Error reading markdown file for slug: ${slug}`, error);
    return {
      content: "<p>Content not found.</p>",
      data: {},
    };
  }
}

export function getAllMarkdownSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading content directory:", error);
    return [];
  }
}

export function getMarkdownData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error(`Error reading markdown data for slug: ${slug}`, error);
    return {};
  }
}
