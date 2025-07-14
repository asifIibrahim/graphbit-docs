"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "@/types";

const navigation: NavigationItem[] = [
  {
    title: "Getting Started",
    href: "/",
  },
  {
    title: "Core Concepts",
    children: [
      { title: "Agents", href: "/agents" },
      { title: "Graphs", href: "/graphs" },
      { title: "Model Providers", href: "/model-providers" },
      { title: "Model Context", href: "/model-context" },
    ],
  },
  {
    title: "Advanced Topics",
    children: [
      { title: "Multi-Agent Systems", href: "/multi-agent" },
      { title: "Common Tools", href: "/common-tools" },
    ],
  },
  {
    title: "Examples",
    href: "/examples",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-6">
      <nav className="space-y-6">
        {navigation.map((item) => (
          <div key={item.href || item.title}>
            {item.href ? (
              <Link
                href={item.href}
                className={`block text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.title}
              </Link>
            ) : (
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <ul className="space-y-1">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block text-sm transition-colors pl-4 ${
                          isActive(child.href)
                            ? "text-primary-600"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
