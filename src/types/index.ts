export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

export interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export interface MarkdownContentProps {
  content: string;
  className?: string;
}
