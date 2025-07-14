# Graphbit Documentation

A modern documentation website for the Graphbit agentic AI framework, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Server-Side Rendering**: Optimized for SEO with full SSR
- **Markdown Support**: Content written in Markdown with syntax highlighting
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **TypeScript**: Fully typed codebase
- **Modern UI**: Clean, professional design inspired by modern documentation sites

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd graphbit-docs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (docs)/            # Documentation routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
├── content/              # Markdown documentation
├── lib/                  # Utility functions
└── types/               # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Content Management

Documentation content is stored in Markdown files in the `src/content/` directory. Each file corresponds to a documentation page.

## Customization

- **Styling**: Modify `tailwind.config.ts` and `src/app/globals.css`
- **Components**: Edit components in `src/components/`
- **Content**: Update Markdown files in `src/content/`

## Deployment

The project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

## License

MIT License
