import type { Route } from "./+types/about";
import logoImage from "../assets/logo.png";
import joshImage from "../assets/josh.jpg";
import domImage from "../assets/dom.jpg";
import michaelImage from "../assets/michael.jpg";
import danielImage from "../assets/daniel.jpg";
import insightsImage from "../assets/insights.jpg";
import strategyImage from "../assets/strategy.jpg";

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a
                href="/"
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
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="/#solutions"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Solutions
                </a>
                <a
                  href="/#pricing"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Pricing
                </a>
                <a
                  href="/#faq"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  FAQ
                </a>
                <a
                  href="/#contact"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Contact
                </a>
                <a
                  href="/alchemy-lens-website/about"
                  className="text-gray-900 font-semibold"
                >
                  About
                </a>
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
              The foresight to forge what lasts.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
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
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Our team's experience spans industries driven by data, including
                technology, corporate, start-up, finance, and energy. Across all
                of them, we saw the same pattern of waste. Not just wasted money
                or time, but the wasted potential of people and projects. We saw
                leaders making critical decisions with incomplete information and
                teams frustrated by manual processes and communication gaps,
                resulting in a constant cycle of rework and delay.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At the same time, we saw the immense power of AI being used for
                trivial things: memes, deepfakes, and parlour tricks. The
                technology that could solve our hardest problems was being used to
                amuse us instead. We knew there was a better way, a way to apply
                its power to real-world challenges and build something meaningful.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              What we do
            </h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transform Data Into Predictive Insight
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We build decision-making software for teams who need to move with
                  clarity and confidence. Our platform pulls in raw data,
                  synthesises it into a single source of truth, and provides a
                  clear path forward, complete with the evidence to back it up.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={insightsImage}
                  alt="Transform Data Into Predictive Insight"
                  className="w-full h-auto object-cover"
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
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Bridge Strategy and Execution
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We chose to tackle construction first because it's a complex,
                  real-world domain where decisions have tangible impacts and the
                  cost of bad data is immense. This isn't just a business strategy;
                  it's a design philosophy. By proving our platform's value in a
                  tough, data-rich environment, we force our product to be
                  practical, fast, and safe. This ensures the engine we've built
                  can solve hard problems, no matter the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Method Section */}
      <section className="relative py-32 md:py-40 lg:py-48 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
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
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Our Principles
            </h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Guiding Philosophy Principles */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Augment, Don't Automate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build tools that empower human judgment, not replace it. Our
                platform is a strategic co-pilot, designed to augment
                decision-making with AI-driven foresight.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Evidence Over Hype
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our product is grounded in delivering measurable, real-world
                value. We believe in explainable AI and audit-ready decisions,
                ensuring every insight is backed by evidence.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Forge What Lasts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are focused on creating long-term, resilient outcomes. This
                applies to our software—which we are forcing to be practical,
                fast, and safe by testing it in tough environments.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Pragmatism by Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our design philosophy comes from tackling complex, real-world
                domains first. This forces us to be relentlessly practical and
                focused on what actually works on the ground.
              </p>
            </div>

            {/* Responsible AI Principles */}
            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">05</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                People Stay in Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Humans set goals, approve important actions, and can override
                the system at any time.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">06</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Explainable by Default
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every recommendation shows the inputs, the reasoning summary,
                and links to evidence.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">07</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Safe Failure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If data are missing or confidence is low, we degrade safely,
                flag uncertainty, and ask for help.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">08</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Provenance and Audit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We record sources, versions, prompts and who approved what, so
                decisions stand up to review.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">09</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Data Minimisation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ingest only what we need, keep it only as long as needed,
                and delete it on request.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">10</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                No Cross-Customer Training Without Consent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data are not used to train models for others unless you
                agree in writing.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">11</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Test Before Trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Features run in offline tests, shadow mode and limited pilots
                before wider release.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">12</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Clear Ownership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each model has an owner, on-call path and rollback plan.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">13</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We iterate, learn, and evolve. Our platform improves through
                real-world use, user feedback, and our commitment to building
                what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
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
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
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
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
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
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Daniel Peek
              </h3>
              <p className="text-gray-600">Head of Development & Co-Founder</p>
            </div>
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
                  <a href="/#solutions" className="hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="hover:text-white">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="/#demo" className="hover:text-white">
                    Product Demo
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white">
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/alchemy-lens-website/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white">
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

