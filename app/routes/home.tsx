import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import directorsImage from "../assets/68ded4c98e130e416f7fb1c1_field team-p-500.jpg";
import projectManagersImage from "../assets/image-8155ba5f-d0fa-44a0-b6de-f8f987dd09dc.png";
import fieldTeamsImage from "../assets/Image-of-construction-workers-training-on-site-2-800x445.jpeg";
import step1Image from "../assets/Screenshot 2025-11-12 201406.png";
import step2Image from "../assets/Screenshot_12-11-2025_20931_localhost.jpeg";
import step3Image from "../assets/Screenshot_12-11-2025_201457_localhost.jpeg";
import logoImage from "../assets/logo.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alchemy Forge - Reveal, Transmute, Forge results" },
    {
      name: "description",
      content:
        "Construction teams finish on time when every signal lines up. Alchemy Lens turns schedules, consents, supplier ETA's and site notes into early, explainable calls.",
    },
  ];
}

export default function Home() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqItems = [
    {
      question: "What is Alchemy Lens?",
      answer:
        "Alchemy Lens is an AI-powered construction management platform that unifies project data, schedules, financials, and communications into a single source of truth. It uses artificial intelligence to provide predictive insights, automate routine tasks, and help construction teams finish projects on time and on budget.",
    },
    {
      question: "How does the AI chat assistant work?",
      answer:
        'Our AI chat assistant uses natural language processing and semantic search to understand your questions about projects, tasks, schedules, and financials. Simply ask questions like "Show me all tasks due this week" or "What\'s the budget status of Project X?" and get instant, accurate answers. The AI uses vector embeddings to find relevant information even when you don\'t use exact keywords.',
    },
    {
      question: "Can Alchemy Lens generate project schedules automatically?",
      answer:
        "Yes! Alchemy Lens uses AI to automatically generate project schedules based on your project details, phases, and tasks. You can also adjust schedules through our chat interface by simply describing the changes you want to make. The system learns from your preferences and gets smarter over time.",
    },
    {
      question: "What financial features does Alchemy Lens include?",
      answer:
        "Alchemy Lens provides comprehensive financial management including budget creation with line items, expense tracking, invoice generation and payment tracking, estimates for sales, and financial dashboards that show real-time project profitability. All financial data is integrated with your project timeline and tasks.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        'Yes, Alchemy Lens includes a mobile app (iOS and Android) called "Digital Foreman" that allows field teams to capture photos with annotations, record voice notes, update task status, view schedules, and access project information on-site. All data syncs in real-time with the web platform.',
    },
    {
      question: "How does the automation system work?",
      answer:
        "Our automation engine allows you to create rules that trigger actions based on events. For example, you can set up a rule that automatically notifies the project manager when a task is completed, or creates a new task when an invoice is paid. Rules can trigger notifications (email, SMS, push), create tasks, update records, or execute custom workflows.",
    },
    {
      question: "Can I try Alchemy Lens before purchasing?",
      answer:
        "Yes, we offer a free trial period for all new users. You can sign up and explore all features without any credit card required. We also offer live demos where our team will walk you through the platform and show you how it can work specifically for your construction projects.",
    },
    {
      question: "How secure is my project data?",
      answer:
        "Security is our top priority. All data is encrypted in transit and at rest. We use industry-standard security practices including role-based access control, audit trails for all actions, and regular security audits. For enterprise customers, we offer on-premise deployment options for maximum data control.",
    },
    {
      question: "Does Alchemy Lens integrate with other construction software?",
      answer:
        "Alchemy Lens is designed to be a comprehensive platform that replaces the need for multiple tools. However, we do offer custom integrations for enterprise customers. Our API allows you to connect with accounting software, ERP systems, and other construction management tools as needed.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Support varies by plan. Individual plans include email support, Small Team plans get priority support, Large Team plans include 24/7 priority support, and Custom/Enterprise plans include a dedicated account manager. All plans include access to our knowledge base and video tutorials.",
    },
    {
      question: "How long does it take to set up Alchemy Lens?",
      answer:
        "Getting started is quick and easy. You can create your account and start adding projects within minutes. For teams migrating from other systems, we provide data import tools and migration assistance. Most teams are fully operational within a week, with full feature adoption typically taking 2-4 weeks.",
    },
    {
      question: "Can I customize Alchemy Lens for my company's workflow?",
      answer:
        "Yes! Alchemy Lens is highly customizable. You can create custom automation rules, configure notification preferences, set up custom report templates, and define company-specific workflows. Enterprise customers can also request custom AI training to better understand your specific terminology and processes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-3xl font-bold text-slate-600"
                style={{
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "0.05em",
                }}
              >
                <img
                  src={logoImage}
                  alt="Alchemy Forge Logo"
                  className="h-12 w-12"
                />
                Alchemy Forge
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#solutions"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Solutions
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Contact
                </a>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="/login"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold ai-glow-hover transition-all"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight">
              Reveal, Transmute, Forge results.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Construction teams finish on time when every signal lines up.
              Alchemy Lens turns schedules, consents, supplier ETA's and site
              notes into early, explainable calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg ai-glow-hover transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">
                  See Alchemy Lens in Action
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              The Problem We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construction teams capture huge amounts of data, but most of it
              goes unused and decisions arrive too late.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
              <div className="text-5xl font-bold text-red-600 mb-2">95%</div>
              <p className="text-gray-700 leading-relaxed">
                Construction data goes unused, which leaves teams reacting
                instead of preventing issues.{" "}
                <span className="text-sm text-gray-500">
                  (Source: Autodesk + FMI)
                </span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-100">
              <div className="text-5xl font-bold text-orange-600 mb-2">
                $1.85 Trillion
              </div>
              <p className="text-gray-700 leading-relaxed">
                Lost globally in 2020 due to bad data and poor data practices in
                construction.{" "}
                <span className="text-sm text-gray-500">
                  (Source: Autodesk + FMI)
                </span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-100">
              <div className="text-5xl font-bold text-amber-600 mb-2">30%</div>
              <p className="text-gray-700 leading-relaxed">
                Projects finish on time and on budget. Fewer than one third meet
                plan.{" "}
                <span className="text-sm text-gray-500">
                  (Source: KPMG Global Construction Survey 2015)
                </span>
              </p>
            </div>
          </div>

          <div className="text-center py-12">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
              We fix this by turning raw signals into explainable, early
              decisions with a clear next step.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Your Team Section */}
      <section id="solutions" className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Built for your team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered insights for directors, managers, and field teams.
              Unify data, anticipate risks, and drive execution with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={directorsImage}
                  alt="Directors reviewing construction plans on site"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Portfolio command center
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  See margin, risk, and performance across all projects in one
                  unified dashboard. Make strategic decisions with real-time
                  financial insights and 12-month trend analysis.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <ul className="text-sm text-gray-400 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Revenue, expenses, and profit tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Portfolio-wide risk visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Financial trend analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={projectManagersImage}
                  alt="Project managers collaborating on a construction site"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">
                  AI-augmented daily brief
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Get AI-powered insights on top risks and next steps. Chat with
                  your data, manage multi-project schedules, and automate
                  workflows to stay ahead of issues.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <ul className="text-sm text-gray-400 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span>AI chat assistant for instant answers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span>Multi-project Gantt chart scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span>Automated risk alerts and workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={fieldTeamsImage}
                  alt="Field team coordinating work on-site"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Digital Foreman app
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Capture progress photos with annotations, record voice notes,
                  and update tasks on-site. Everything syncs instantly for
                  seamless handovers and real-time coordination.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <ul className="text-sm text-gray-400 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>
                        Photo capture with drawing & measurement tools
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Voice notes and task status updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Real-time sync with office teams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-semibold mb-4 border border-blue-200/50">
                  Step 1
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-slate-600">Reveal</span> the same truth.
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We unify scattered signals, schedules, consents, supplier
                  ETAs, and site notes, turning them into a single source of
                  truth.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={step1Image}
                  alt="Reveal - Unified data visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={step2Image}
                    alt="Transmute - AI-powered insights"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 rounded-full font-semibold mb-4 border border-purple-200/50">
                  Step 2
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-slate-600">Transmute</span> your
                  business.
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our human-augmented AI turns that unified data into predictive
                  foresight, enabling smarter decisions with quantified
                  outcomes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full font-semibold mb-4 border border-cyan-200/50">
                  Step 3
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-slate-600">Forge</span> your legacy.
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We empower your team to act with confidence, creating an
                  audit-ready trail of every decision to forge plans that last.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={step3Image}
                  alt="Forge - Actionable decisions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section
        id="demo"
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              See Alchemy Lens in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how Alchemy Lens transforms construction project management
              with AI-powered insights and unified data visualization.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Alchemy Lens Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg ai-glow-hover transition-all"
              >
                Request a Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare Alchemy Lens with traditional construction management
              tools
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold text-lg">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-lg">
                    Alchemy Lens
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-lg">
                    Traditional Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    AI-Powered Chat Assistant
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-red-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    AI Schedule Generation
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-red-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Semantic Search (Vector Search)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-red-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Unified Project Dashboard
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Limited</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Automation Rules Engine
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-red-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Financial Management (Budgets, Invoices, Expenses)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Separate Tools</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Photo Management with Annotations
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Basic Only</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Gantt Chart Scheduling
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Mobile App (iOS & Android)
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Varies</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Automated Report Generation
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Manual</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Task Management with Comments & Attachments
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Document Management
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Contact Management
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Basic</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Real-time Notifications
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg
                      className="w-6 h-6 text-green-500 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-500">Limited</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Individual Tier */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-500 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Individual
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">1 user</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited projects</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">AI-powered insights</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Small Team Tier */}
            <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 hover:border-blue-600 transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
                Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Small Team
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$299</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Up to 3 users</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Up to 3 users</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited projects</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Advanced AI insights</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Team collaboration tools
                  </span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold ai-glow-hover transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Large Team Tier */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-500 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Large Team
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">$799</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Up to 10 users</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Up to 10 users</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Unlimited projects</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Enterprise AI features</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Custom integrations</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Custom Tier */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-8 hover:border-blue-500 transition-all flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">10+ users</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Unlimited users</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Everything in Large Team
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Custom AI training</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">SLA guarantees</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">On-premise deployment</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold ai-glow-hover transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Alchemy Lens
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openItems.has(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3
                      className="text-xl font-bold text-gray-900 pr-4"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pt-4 pb-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Forge Your next Move.
            </h2>
            <p className="text-xl text-gray-300">
              Get in touch to see how Alchemy Lens can transform your
              construction projects.
            </p>
          </div>

          <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+64 21 123 4567"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your construction project needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg ai-glow-hover transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logoImage}
                  alt="Alchemy Forge Logo"
                  className="h-6 w-6"
                />
                <h3 className="text-white font-bold text-lg">Alchemy Forge</h3>
              </div>
              <p className="text-sm">Reveal, Transmute, Forge results.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#solutions" className="hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white">
                    Product Demo
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/alchemyforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Alchemy Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
