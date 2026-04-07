import { Link } from "react-router";
import type { Route } from "./+types/$";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Page Not Found | Alchemy Lens" },
    {
      name: "description",
      content: "Oops! The page you're looking for doesn't exist.",
    },
  ];
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-orange-50/40 to-teal-50/30 tech-grid flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Fun Message */}
        <div className="mb-8">
          <h2 className="type-section font-bold text-gray-900 mb-4">
            Oops! Something went{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">
              alchemy
            </span>
          </h2>
          <p className="type-lead text-gray-600 mb-6">
            Looks like this page got transmuted into something else! 🔮
          </p>
          <p className="type-lead text-gray-500">
            The page you're looking for doesn't exist, or it's been moved to a
            different location.
          </p>
        </div>

        {/* Fun Construction-themed Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-200">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Construction Site Notice:</span>
          </p>
          <p className="text-gray-600">
            This page is currently under construction. Our digital foreman is
            working on it! 🚧
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold ai-glow-hover transition-all hover:scale-105"
          >
            Return to Home
          </Link>
          <Link
            to="/#contact"
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to="/#solutions"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              Solutions
            </Link>
            <Link
              to="/#pricing"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              Pricing
            </Link>
            <Link
              to="/#faq"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              FAQ
            </Link>
            <Link
              to="/#contact"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

