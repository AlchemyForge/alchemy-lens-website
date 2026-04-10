import { AnimatedSection } from "./AnimatedSection";
import directorsImage from "../assets/68ded4c98e130e416f7fb1c1_field team-p-500.webp";

export function SolutionsSection() {
  return (
    <AnimatedSection id="solutions" className="py-24 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="type-section font-bold tracking-tight mb-4 leading-tight text-white">
              Built for your team,{" "}
              <br />
              <span className="text-teal-400">Engineered for precision.</span>
            </h2>
          </div>
          <p className="text-gray-400 type-lead">
            A unified ecosystem that bridges the gap between field and office.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 — Portfolio command center */}
          <div className="md:col-span-2 relative h-[450px] bg-gray-800 overflow-hidden group stagger-1">
            <div className="absolute inset-0 z-0">
              <img
                src={directorsImage}
                alt="Overview of multiple construction sites with data overlays"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                width={500}
                height={450}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 p-6 sm:p-10 h-full flex flex-col justify-end bg-gradient-to-t from-gray-900/90 to-transparent">
              <svg
                className="w-10 h-10 text-teal-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 3h7v7H3V3zM3 14h7v7H3v-7zM14 3h7v7h-7V3zM14 14h7v7h-7v-7z" />
              </svg>
              <h3 className="type-sub font-bold mb-2 text-white">
                Portfolio command center
              </h3>
              <p className="text-gray-400 max-w-md type-lead">
                Aggregate every project metric into a single source of truth.
                Detect risks across the entire enterprise before they occur.
              </p>
            </div>
          </div>

          {/* Feature 2 — AI-augmented daily brief */}
          <div className="bg-gray-800 p-6 sm:p-10 flex flex-col border border-gray-700/10 stagger-2">
            <div className="mb-auto">
              <svg
                className="w-10 h-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <h3 className="type-card font-bold mb-4 text-white">
              AI-augmented daily brief
            </h3>
            <p className="text-gray-400 mb-6 type-lead">
              Wake up to a predictive summary of yesterday's progress and
              today's critical bottlenecks, delivered automatically.
            </p>
            <div className="p-4 bg-gray-900/50 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">
                  Live Insight
                </span>
              </div>
              <p className="text-sm text-gray-300 italic">
                "Steel delivery delayed. Re-sequencing floor 4 slab pour to
                maintain timeline."
              </p>
            </div>
          </div>

          {/* Feature 3 — Digital Foreman app */}
          <div className="bg-gray-800 p-6 sm:p-10 flex flex-col border border-gray-700/10 stagger-3">
            <div className="mb-auto">
              <svg
                className="w-10 h-10 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <h3 className="type-card font-bold mb-4 text-white">
              Digital Foreman app
            </h3>
            <p className="text-gray-400 type-lead">
              Real-time collaboration for the boots on the ground.
              Offline-first capture of site conditions and safety audits.
            </p>
          </div>

          {/* Feature 4 — Real-time Transmutation */}
          <div className="md:col-span-2 relative h-[300px] bg-teal-900/20 overflow-hidden border border-teal-500/20 stagger-4">
            <div className="p-6 sm:p-10 flex items-center h-full gap-8">
              <div className="hidden lg:block w-1/3 flex-shrink-0">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-teal-500/20" />
                  <div className="h-16 bg-teal-500/10" />
                  <div className="h-16 bg-teal-500/10" />
                  <div className="h-16 bg-teal-500/40" />
                </div>
              </div>
              <div>
                <h3 className="type-card font-bold mb-2 text-white">
                  Real-time Transmutation
                </h3>
                <p className="text-gray-400 type-lead">
                  Instantly convert raw site data into actionable insights. No manual data entry required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
