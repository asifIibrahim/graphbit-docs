# Graphbit Docs

A modern, beautiful documentation and landing page for the **Graphbit agentic AI framework**. Built with Next.js 14, TypeScript, Tailwind CSS, and Lottie animations for a premium, professional developer experience.

[![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=nextdotjs)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

- **Stunning Landing Page**: Professional, animated hero section with Lottie and SVG, inspired by top AI SaaS sites
- **Beautiful Docs UI**: Sidebar navigation, markdown rendering, and code highlighting
- **Mobile-First & Responsive**: Fully responsive, smooth scrolling, and interactive cards
- **Lottie Animations**: Fast, local Lottie for instant hero animation
- **TypeScript & Tailwind**: Modern, maintainable stack
- **Easy Customization**: Swap logos, colors, and content in minutes

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone git@github.com:asifIibrahim/graphbit-docs.git
cd graphbit-docs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

```
src/
├── app/                # Next.js App Router (landing page, docs, layouts)
│   ├── docs/           # Documentation routes and pages
│   ├── page.tsx        # Landing page (with Lottie animation)
│   └── layout.tsx      # Root layout
├── components/         # Reusable React components (Header, Sidebar, etc.)
├── content/            # Markdown documentation files
├── lib/                # Utility functions (markdown, shiki, etc.)
├── types/              # TypeScript types
└── app/hero-lottie.json# Local Lottie animation for hero section
```

---

## 📝 Content Management

- All documentation is written in Markdown (`src/content/`).
- Each `.md` file maps to a docs page (e.g., `agents.md` → `/docs/agents`).
- Landing page content is in `src/app/page.tsx` (edit for your brand, animation, and hero text).

---

## 🎨 Customization

- **Logo & Branding**: Edit the SVG in `src/app/page.tsx` or swap in your own.
- **Colors & Styles**: Update `tailwind.config.ts` and `globals.css`.
- **Hero Animation**: Replace `src/app/hero-lottie.json` with your own Lottie file.
- **Docs Content**: Edit Markdown files in `src/content/`.

---

## 🌐 Deployment

Deploy to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any Next.js-compatible host.

```bash
npm run build
npm run start
```

---

## 📄 License

[MIT](LICENSE)

---

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [LottieFiles](https://lottiefiles.com/)
- [Shiki](https://shiki.matsu.io/)

---

> Made with ❤️ for the Graphbit community.
