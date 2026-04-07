import type { Route } from "./+types/about";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import joshImage from "../assets/josh.webp";
import domImage from "../assets/dom.webp";
import michaelImage from "../assets/michael.webp";
import danielImage from "../assets/daniel.webp";
import insightsImage from "../assets/insights.webp";
import strategyImage from "../assets/strategy.webp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Alchemy Forge" },
    {
      name: "description",
      content:
        "The foresight to forge what lasts. We exist to close the gap between what's possible and what's being done.",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPath="/about" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-orange-50/40 to-teal-50/30 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-teal-600/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="type-display font-bold mb-6 text-gray-900 leading-tight">
              The foresight to forge what lasts.
            </h1>
            <p className="type-lead text-gray-600 mb-8 leading-relaxed">
              We exist to close the gap between what's possible and what's being
              done.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="type-section font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="type-lead text-gray-600 leading-relaxed mb-6">
                Our team's experience spans industries driven by data, including
                technology, corporate, start-up, finance, and energy. Across all
                of them, we saw the same pattern of waste. Not just wasted money
                or time, but the wasted potential of people and projects. We saw
                leaders making critical decisions with incomplete information
                and teams frustrated by manual processes and communication gaps,
                resulting in a constant cycle of rework and delay.
              </p>
              <p className="type-lead text-gray-600 leading-relaxed mb-6">
                At the same time, we saw the immense power of AI being used for
                trivial things: memes, deepfakes, and parlour tricks. The
                technology that could solve our hardest problems was being used
                to amuse us instead. We knew there was a better way, a way to
                apply its power to real-world challenges and build something
                meaningful.
              </p>
              <p className="type-lead text-gray-600 leading-relaxed">
                Alchemy Forge is our answer to that frustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="type-section font-bold text-gray-900 mb-4">
              What we do
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="type-sub font-bold text-gray-900 mb-6">
                  Transform Data Into Predictive Insight
                </h3>
                <p className="type-lead text-gray-600 leading-relaxed">
                  We build decision-making software for teams who need to move
                  with clarity and confidence. Our platform pulls in raw data,
                  synthesises it into a single source of truth, and provides a
                  clear path forward, complete with the evidence to back it up.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={insightsImage}
                  alt="Transform Data Into Predictive Insight"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={strategyImage}
                    alt="Bridge Strategy and Execution"
                    className="w-full h-auto object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="type-sub font-bold text-gray-900 mb-6">
                  Bridge Strategy and Execution
                </h3>
                <p className="type-lead text-gray-600 leading-relaxed">
                  We chose to tackle construction first because it's a complex,
                  real-world domain where decisions have tangible impacts and
                  the cost of bad data is immense. This isn't just a business
                  strategy; it's a design philosophy. By proving our platform's
                  value in a tough, data-rich environment, we force our product
                  to be practical, fast, and safe. This ensures the engine we've
                  built can solve hard problems, no matter the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Method Section */}
      <section className="relative py-32 md:py-40 lg:py-48 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-orange-50/40 to-teal-50/30 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-teal-600/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-orange-500 font-semibold text-sm md:text-base mb-2 uppercase tracking-wide">
                Our method is simple:
              </p>
              <h3 className="type-display font-bold text-gray-900 leading-tight">
                Reveal. Transmute. Forge.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="type-section font-bold text-gray-900 mb-4">
              Our Principles
            </h2>
          </div>

          {(() => {
            const principles = [
              { num: "01", title: "Augment, Don't Automate", desc: "We build tools that empower human judgment, not replace it. Our platform is a strategic co-pilot, designed to augment decision-making with AI-driven foresight." },
              { num: "02", title: "Evidence Over Hype", desc: "Our product is grounded in delivering measurable, real-world value. We believe in explainable AI and audit-ready decisions, ensuring every insight is backed by evidence." },
              { num: "03", title: "Forge What Lasts", desc: "We are focused on creating long-term, resilient outcomes. This applies to our software—which we are forcing to be practical, fast, and safe by testing it in tough environments." },
              { num: "04", title: "Pragmatism by Design", desc: "Our design philosophy comes from tackling complex, real-world domains first. This forces us to be relentlessly practical and focused on what actually works on the ground." },
              { num: "05", title: "People Stay in Control", desc: "Humans set goals, approve important actions, and can override the system at any time." },
              { num: "06", title: "Explainable by Default", desc: "Every recommendation shows the inputs, the reasoning summary, and links to evidence." },
              { num: "07", title: "Safe Failure", desc: "If data are missing or confidence is low, we degrade safely, flag uncertainty, and ask for help." },
              { num: "08", title: "Provenance and Audit", desc: "We record sources, versions, prompts and who approved what, so decisions stand up to review." },
              { num: "09", title: "Data Minimisation", desc: "We ingest only what we need, keep it only as long as needed, and delete it on request." },
              { num: "10", title: "No Cross-Customer Training Without Consent", desc: "Your data are not used to train models for others unless you agree in writing." },
              { num: "11", title: "Test Before Trust", desc: "Features run in offline tests, shadow mode and limited pilots before wider release." },
              { num: "12", title: "Clear Ownership", desc: "Each model has an owner, on-call path and rollback plan." },
              { num: "13", title: "Continuous Improvement", desc: "We iterate, learn, and evolve. Our platform improves through real-world use, user feedback, and our commitment to building what actually works." },
            ];
            const colors = [
              { border: "hover:border-orange-300", gradient: "from-orange-500 to-orange-600", hover: "group-hover:text-orange-600" },
              { border: "hover:border-slate-300",  gradient: "from-slate-500 to-slate-600",  hover: "group-hover:text-slate-600" },
              { border: "hover:border-teal-300",   gradient: "from-teal-500 to-teal-600",    hover: "group-hover:text-teal-600" },
            ];
            return (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {principles.map((p, i) => {
                  const c = colors[i % 3];
                  return (
                    <div key={p.num} className={`group bg-white rounded-2xl p-6 border-2 border-gray-100 ${c.border} hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1`}>
                      <div className={`type-sub font-bold bg-gradient-to-br ${c.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {p.num}
                      </div>
                      <h3 className={`type-card font-bold text-gray-900 mb-3 ${c.hover} transition-colors`}>
                        {p.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="type-section font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="type-lead text-gray-600 max-w-3xl mx-auto">
              The minds behind the mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-56 h-56 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={joshImage}
                  alt="Josh Mackenzie"
                  className="w-full h-full object-cover"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="type-card font-bold text-gray-900 mb-1">
                Josh Mackenzie
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="text-center">
              <div className="w-56 h-56 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={domImage}
                  alt="Dominique Mackenzie"
                  className="w-full h-full object-cover"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="type-card font-bold text-gray-900 mb-1">
                Dominique Mackenzie
              </h3>
              <p className="text-gray-600">CFO & Founder</p>
            </div>

            <div className="text-center">
              <div className="w-56 h-56 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={michaelImage}
                  alt="Michael Hoole"
                  className="w-full h-full object-cover"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="type-card font-bold text-gray-900 mb-1">
                Michael Hoole
              </h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>

            <div className="text-center">
              <div className="w-56 h-56 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={danielImage}
                  alt="Daniel Peek"
                  className="w-full h-full object-cover"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="type-card font-bold text-gray-900 mb-1">
                Daniel Peek
              </h3>
              <p className="text-gray-600">Head of Development & Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
