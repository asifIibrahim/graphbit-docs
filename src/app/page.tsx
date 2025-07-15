"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import heroLottie from "./hero-lottie.json";

// Simple placeholder SVG logo for Graphbit
const GraphbitLogo = (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="16" fill="#2563EB"/>
    <circle cx="28" cy="28" r="14" fill="#fff"/>
    <circle cx="28" cy="28" r="8" fill="#2563EB"/>
    <rect x="26" y="12" width="4" height="8" rx="2" fill="#fff"/>
    <rect x="26" y="36" width="4" height="8" rx="2" fill="#fff"/>
    <rect x="12" y="26" width="8" height="4" rx="2" fill="#fff"/>
    <rect x="36" y="26" width="8" height="4" rx="2" fill="#fff"/>
  </svg>
);

// Example company SVG logos for 'Trusted by' section
const CompanyLogos = [
  // OpenAI style
  <svg key="openai" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="16" fill="#10A37F"/><circle cx="28" cy="28" r="14" fill="#fff"/><text x="28" y="34" textAnchor="middle" fontSize="16" fill="#10A37F" fontWeight="bold">AI</text></svg>,
  // Google style
  <svg key="google" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="16" fill="#4285F4"/><circle cx="28" cy="28" r="14" fill="#fff"/><text x="28" y="34" textAnchor="middle" fontSize="16" fill="#4285F4" fontWeight="bold">G</text></svg>,
  // Microsoft style
  <svg key="ms" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="16" fill="#F25022"/><circle cx="28" cy="28" r="14" fill="#fff"/><text x="28" y="34" textAnchor="middle" fontSize="16" fill="#F25022" fontWeight="bold">MS</text></svg>,
  // Anthropic style
  <svg key="anthropic" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="16" fill="#FFB300"/><circle cx="28" cy="28" r="14" fill="#fff"/><text x="28" y="34" textAnchor="middle" fontSize="16" fill="#FFB300" fontWeight="bold">A</text></svg>,
  // GitHub style
  <svg key="github" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="16" fill="#333"/><circle cx="28" cy="28" r="14" fill="#fff"/><text x="28" y="34" textAnchor="middle" fontSize="16" fill="#333" fontWeight="bold">GH</text></svg>,
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-primary-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40 flex items-center justify-center">
        {/* Animated Gradient Blob */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-primary-200 via-blue-300 to-primary-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-8">
              <span className="rounded-2xl shadow-xl">{GraphbitLogo}</span>
              <span className="text-4xl font-extrabold text-primary-700 drop-shadow-lg tracking-tight">Graphbit</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight drop-shadow-xl">
              The Modern Agentic AI Framework
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-xl font-medium">
              Build, connect, and scale powerful AI agents and multi-agent systems. Orchestrate intelligent workflows, integrate any model, and deploy with confidence.
            </p>
            <div className="flex space-x-6">
              <Link href="/docs">
                <span className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 ring-2 ring-primary-200 hover:ring-blue-300 animate-glow">Get Started</span>
              </Link>
              <a href="#features" className="inline-block px-8 py-4 bg-white/70 border border-primary-200 text-primary-700 font-bold rounded-xl shadow hover:bg-primary-50 hover:scale-105 transition-all duration-200 backdrop-blur">Learn More</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Lottie Animation */}
            <div className="w-[400px] h-[225px] rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white/40 flex items-center justify-center">
              <Lottie
                animationData={heroLottie}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 bg-white/80 border-b border-gray-100 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <span className="text-gray-500 text-base mb-4 font-medium tracking-wide">Trusted by developers worldwide</span>
          <div className="flex flex-wrap justify-center gap-10 opacity-80">
            {CompanyLogos.map((logo, i) => (
              <span
                key={i}
                className="grayscale hover:grayscale-0 transition-transform duration-200 rounded-xl shadow"
                style={{ willChange: "transform" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white/80 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-700   mb-16 tracking-tight">Why Graphbit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-blue-200 shadow-lg mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                  </span>
                ),
                title: "Build AI Agents",
                desc: "Create intelligent agents that can reason, plan, and execute complex tasks with natural language."
              },
              {
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-primary-100 shadow-lg mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
                  </span>
                ),
                title: "Connect Any Model",
                desc: "Integrate OpenAI, Anthropic, local models, or your own custom providers with ease."
              },
              {
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-blue-200 shadow-lg mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>
                  </span>
                ),
                title: "Orchestrate Workflows",
                desc: "Design multi-agent systems and complex workflows with graphs, tools, and memory."
              },
              {
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-primary-100 shadow-lg mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
                  </span>
                ),
                title: "Enterprise Ready",
                desc: "Security, observability, and deployment tools for production-grade AI systems."
              }
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-200"
                style={{ willChange: "transform" }}
              >
                {f.icon}
                <h3 className="font-semibold text-xl mb-2 tracking-tight text-gray-900">{f.title}</h3>
                <p className="text-gray-600 font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Stack Section */}
      <section className="py-24 bg-white/80">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-700 tracking-tight">The Graphbit Stack</h2>
            <ul className="space-y-4 text-gray-700 mb-8 text-lg">
              <li><b>Orchestration:</b> Build agents and workflows with Graphbit Graphs</li>
              <li><b>Integrations:</b> Connect to any model or tool</li>
              <li><b>Observability:</b> Monitor, debug, and optimize your agents</li>
              <li><b>Deployment:</b> Scale from prototype to production</li>
            </ul>
            <Link href="/docs" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-transform duration-200">Explore the Docs</Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Glassmorphism Stack Card */}
            <div
              className="w-full max-w-xs aspect-square rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white/60 flex items-center justify-center hover:scale-105 transition-transform duration-200"
              style={{ willChange: "transform" }}
            >
              <span className="text-6xl text-primary-400 font-extrabold">🧩</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50/80 to-white/80">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-700 tracking-tight">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: "🤖", title: "Copilots", desc: "Build native copilots for your apps to automate and enhance user experiences." },
              { icon: "🏢", title: "Enterprise AI", desc: "Empower your teams with secure, compliant access to AI tools and knowledge." },
              { icon: "💬", title: "Customer Support", desc: "Automate support workflows and resolve queries faster with intelligent agents." },
              { icon: "🔬", title: "Research", desc: "Synthesize data, summarize sources, and uncover insights with multi-agent systems." },
              { icon: "💻", title: "Code Generation", desc: "Accelerate software development with automated code writing and documentation." },
              { icon: "🔎", title: "AI Search", desc: "Guide users to the right information with personalized, intelligent search experiences." },
            ].map((u, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:scale-105 transition-transform duration-200"
                style={{ willChange: "transform" }}
              >
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-blue-200 shadow-lg mb-4 text-3xl">{u.icon}</span>
                <h3 className="font-semibold text-xl mb-2 tracking-tight text-gray-900">{u.title}</h3>
                <p className="text-gray-600 font-medium">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">Ready to build with Graphbit?</h2>
          <p className="text-xl text-primary-100 mb-10 font-medium">Start building powerful AI agents and multi-agent systems today.</p>
          <Link href="/docs">
            <span
              className="inline-block px-10 py-5 bg-white/90 text-primary-700 font-bold rounded-2xl shadow-xl hover:bg-primary-50 hover:scale-105 transition-transform duration-200 text-lg animate-glow"
              style={{ willChange: "transform" }}
            >
              Get Started
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
} 