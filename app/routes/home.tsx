import type { Route } from "./+types/home";
import { lazy, Suspense } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { faqItems } from "../data/faq";

// Lazy-load all below-fold components to defer JS execution until after initial hydration
const Footer = lazy(() => import("../components/Footer").then(m => ({ default: m.Footer })));
const ProblemStatement = lazy(() => import("../components/ProblemStatement").then(m => ({ default: m.ProblemStatement })));
const SolutionsSection = lazy(() => import("../components/SolutionsSection").then(m => ({ default: m.SolutionsSection })));
const HowItWorks = lazy(() => import("../components/HowItWorks").then(m => ({ default: m.HowItWorks })));
const FeaturesComparison = lazy(() => import("../components/FeaturesComparison").then(m => ({ default: m.FeaturesComparison })));
const FAQAccordion = lazy(() => import("../components/FAQAccordion").then(m => ({ default: m.FAQAccordion })));
const ContactForm = lazy(() => import("../components/ContactForm").then(m => ({ default: m.ContactForm })));

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
      <Suspense fallback={null}>
        <ProblemStatement />
      </Suspense>
      <Suspense fallback={null}>
        <SolutionsSection />
      </Suspense>
      <Suspense fallback={null}>
        <HowItWorks />
      </Suspense>


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
            <div className="relative aspect-video overflow-hidden">
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
                className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold ai-glow-hover transition-all"
              >
                Request a Live Demo
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature Comparison Section */}
      <Suspense fallback={null}>
        <FeaturesComparison />
      </Suspense>

      {/* Pricing Section */}
      {/* <section id="pricing" ... /> */}

      <Suspense fallback={null}>
        <FAQAccordion items={faqItems} />
      </Suspense>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
