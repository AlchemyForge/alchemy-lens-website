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
import { Subscribe } from "~/components/Subscibe";

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

const PRINCIPLES = [
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

const PRINCIPLE_COLORS = [
  { border: "hover:border-orange-300", gradient: "from-orange-500 to-orange-600", hover: "group-hover:text-orange-600" },
  { border: "hover:border-slate-300",  gradient: "from-slate-500 to-slate-600",   hover: "group-hover:text-slate-600" },
  { border: "hover:border-teal-300",   gradient: "from-teal-500 to-teal-600",     hover: "group-hover:text-teal-600" },
];

const TEAM = [
  { name: "Josh Mackenzie",      role: "CEO & Founder",                   img: joshImage,    alt: "Josh Mackenzie" },
  { name: "Dominique Mackenzie", role: "CFO & Founder",                   img: domImage,     alt: "Dominique Mackenzie" },
  { name: "Michael Hoole",       role: "CTO & Co-Founder",                img: michaelImage, alt: "Michael Hoole" },
  { name: "Daniel Peek",         role: "Head of Development & Co-Founder",img: danielImage,  alt: "Daniel Peek" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="relative min-h-[520px] flex flex-col justify-end px-8 md:px-16 pb-16 overflow-hidden border-b border-gray-100 pt-16">
        <img
          src={insightsImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-6 flex items-center gap-4 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-10 h-px bg-orange-500" />
            <span>Alchemy Forge · Company</span>
          </div>
          <h1 className="type-display font-bold text-white uppercase tracking-tight mb-4">
            The foresight to forge <span className="text-orange-400">what lasts.</span>
          </h1>
          <p className="type-lead text-white/70 max-w-2xl">
            We exist to close the gap between what's possible and what's being done.
          </p>
        </div>
        <div className="absolute right-8 top-20 hidden lg:block select-none pointer-events-none">
          <div className="text-white/10 font-bold text-[140px] leading-none tracking-tighter">AF</div>
        </div>
      </header>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Editorial label col */}
            <div className="md:w-1/3 md:sticky md:top-28">
              <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                <span className="w-8 h-px bg-orange-500" />
                <span>Our Origin</span>
              </div>
              <h2 className="type-section font-bold text-gray-900 uppercase tracking-tight mb-4">
                Our Story.
              </h2>
              <div className="h-1 w-12 bg-orange-500 mb-6" />
              <p className="type-small text-gray-400 leading-relaxed">
                How frustration across five industries became a platform.
              </p>
            </div>
            {/* Content col */}
            <div className="md:w-2/3">
              <p className="type-lead text-gray-600 leading-relaxed mb-6">
                Our team's experience spans industries driven by data, including
                technology, corporate, start-up, finance, and energy. Across all
                of them, we saw the same pattern of waste. Not just wasted money
                or time, but the wasted potential of people and projects. We saw
                leaders making critical decisions with incomplete information
                and teams frustrated by manual processes and communication gaps,
                resulting in a constant cycle of rework and delay.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 my-8">
                <p className="type-lead font-bold text-gray-900 leading-snug">
                  "The technology that could solve our hardest problems was being used to amuse us instead."
                </p>
              </blockquote>
              <p className="type-lead text-gray-600 leading-relaxed mb-6">
                At the same time, we saw the immense power of AI being used for
                trivial things: memes, deepfakes, and parlour tricks.
                We knew there was a better way — a way to apply its power to
                real-world challenges and build something meaningful.
              </p>
              <p className="type-lead text-gray-600 leading-relaxed">
                Alchemy Forge is our answer to that frustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-orange-500" />
            <span>Our Platform</span>
          </div>
          <h2 className="type-section font-bold text-gray-900 uppercase tracking-tight mb-2">
            What we do.
          </h2>
          <div className="h-1 w-12 bg-orange-500 mb-16" />

          <div className="space-y-24">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="type-sub font-bold text-gray-900 uppercase tracking-tight mb-6">
                  Transform Data Into Predictive Insight
                </h3>
                <p className="type-lead text-gray-600 leading-relaxed">
                  We build decision-making software for teams who need to move
                  with clarity and confidence. Our platform pulls in raw data,
                  synthesises it into a single source of truth, and provides a
                  clear path forward, complete with the evidence to back it up.
                </p>
              </div>
              <div className="relative group">
                <div className="hidden md:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-orange-200/60" />
                <div className="hidden md:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-orange-200/60" />
                <div className="overflow-hidden">
                  <img
                    src={insightsImage}
                    alt="Transform Data Into Predictive Insight"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative group">
                <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-200/60" />
                <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-200/60" />
                <div className="overflow-hidden">
                  <img
                    src={strategyImage}
                    alt="Bridge Strategy and Execution"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="type-sub font-bold text-gray-900 uppercase tracking-tight mb-6">
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

      {/* ── Our Method ────────────────────────────────────────── */}
      <section className="bg-gray-900 py-24 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="absolute right-8 bottom-8 hidden lg:block select-none pointer-events-none">
          <div className="text-white/5 font-bold text-[180px] leading-none tracking-tighter">RTF</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-12">
            <span className="w-8 h-px bg-orange-500" />
            <span>Our Method</span>
          </div>
          <div className="grid md:grid-cols-3 border-t border-white/10">
            <div className="py-12 md:pr-12 border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">01 / Reveal</div>
              <h3 className="type-sub font-bold text-white uppercase tracking-tight mb-4">Reveal.</h3>
              <p className="text-gray-400 leading-relaxed">
                We pull every project signal into a single source of truth — schedules,
                consents, supplier ETAs, financials, site notes — so nothing critical
                is invisible or siloed.
              </p>
            </div>
            <div className="py-12 md:px-12 border-b md:border-b-0 md:border-r border-white/10">
              <div className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">02 / Transmute</div>
              <h3 className="type-sub font-bold text-white uppercase tracking-tight mb-4">Transmute.</h3>
              <p className="text-gray-400 leading-relaxed">
                Our AI engine turns unified data into predictive foresight — early,
                explainable risk calls with quantified outcomes, not black-box scores.
              </p>
            </div>
            <div className="py-12 md:pl-12">
              <div className="text-orange-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">03 / Forge</div>
              <h3 className="type-sub font-bold text-white uppercase tracking-tight mb-4">Forge.</h3>
              <p className="text-gray-400 leading-relaxed">
                Teams act with confidence, every decision is audit-ready, and the
                patterns learned on each project compound into institutional knowledge
                that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Principles ────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-orange-500" />
            <span>How We Build</span>
          </div>
          <h2 className="type-section font-bold text-gray-900 uppercase tracking-tight mb-2">
            Our Principles.
          </h2>
          <div className="h-1 w-12 bg-orange-500 mb-16" />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PRINCIPLES.map((p, i) => {
              const c = PRINCIPLE_COLORS[i % 3];
              return (
                <div
                  key={p.num}
                  className={`group bg-white p-6 border-2 border-gray-100 ${c.border} hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1`}
                >
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
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-orange-500" />
            <span>The People</span>
          </div>
          <h2 className="type-section font-bold text-gray-900 uppercase tracking-tight mb-2">
            Our Team.
          </h2>
          <div className="h-1 w-12 bg-orange-500 mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="overflow-hidden mb-5 relative aspect-square bg-gray-200">
                  <img
                    src={member.img}
                    alt={member.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/15 transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                  <span className="w-4 h-px bg-orange-500" />
                  <span>{member.role}</span>
                </div>
                <h3 className="type-card font-bold text-gray-900">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

        <Subscribe />
      <ContactForm />

      <Footer />
    </div>
  );
}
