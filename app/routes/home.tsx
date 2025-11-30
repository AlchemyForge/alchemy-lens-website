import type { Route } from "./+types/home";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { PricingCard } from "../components/PricingCard";
import { faqItems } from "../data/faq";
import { pricingTiers } from "../data/pricing";
import directorsImage from "../assets/68ded4c98e130e416f7fb1c1_field team-p-500.jpg";
import projectManagersImage from "../assets/image-8155ba5f-d0fa-44a0-b6de-f8f987dd09dc.png";
import fieldTeamsImage from "../assets/Image-of-construction-workers-training-on-site-2-800x445.jpeg";
import step1Image from "../assets/Screenshot 2025-11-12 201406.png";
import step2Image from "../assets/Screenshot_12-11-2025_20931_localhost.jpeg";
import step3Image from "../assets/Screenshot_12-11-2025_201457_localhost.jpeg";

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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faqItems} />

      <ContactForm />

      <Footer />
    </div>
  );
}
