import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Graphbit - Agentic AI Framework",
    template: "%s | Graphbit",
  },
  description:
    "Build powerful AI agents and multi-agent systems with Graphbit - the modern agentic AI framework for developers.",
  keywords: [
    "AI",
    "agents",
    "multi-agent",
    "artificial intelligence",
    "framework",
    "graphbit",
  ],
  authors: [{ name: "Graphbit Team" }],
  creator: "Graphbit Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://graphbit.dev",
    title: "Graphbit - Agentic AI Framework",
    description:
      "Build powerful AI agents and multi-agent systems with Graphbit",
    siteName: "Graphbit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphbit - Agentic AI Framework",
    description:
      "Build powerful AI agents and multi-agent systems with Graphbit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
