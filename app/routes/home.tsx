import type { Route } from "./+types/home";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { PricingCard } from "../components/PricingCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { faqItems } from "../data/faq";
import { pricingTiers } from "../data/pricing";
import { Hero } from "../components/Hero";
import { SolutionsSection } from "../components/SolutionsSection";
import { ProblemStatement } from "~/components/ProblemStatement";
import { HowItWorks } from "../components/HowItWorks";
import { FeaturesComparison } from "../components/FeaturesComparison";

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


      <Hero />
      <ProblemStatement />
      <SolutionsSection />



      <HowItWorks />


      {/* Product Demo Section */}
      {/* <section
        id="demo"
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-stone-50 via-orange-50/40 to-teal-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="type-section font-bold text-gray-900 mb-4">
              See Alchemy Lens in Action
            </h2>
            <p className="type-lead text-gray-600 max-w-3xl mx-auto">
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
                className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold ai-glow-hover transition-all"
              >
                Request a Live Demo
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature Comparison Section */}
      <FeaturesComparison />

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="type-section font-bold text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="type-lead text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </section> */}

      <FAQAccordion items={faqItems} />

      <ContactForm />

      <Footer />
    </div>
  );
}
