import { Link } from "react-router";
import logoImage from "../assets/logo.png";

interface NavigationProps {
  currentPath?: string;
}

export function Navigation({ currentPath = "/" }: NavigationProps) {
  const isAboutPage = currentPath === "/about";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold text-slate-600 transition-transform duration-200 hover:scale-105"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.05em",
              }}
            >
              <img
                src={logoImage}
                alt="Alchemy Forge Logo"
                className="h-12 w-12 transition-transform duration-200"
              />
              Alchemy Forge
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#solutions"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Solutions
              </a>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="/#faq"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Contact
              </a>
              <Link
                to="/about"
                className={`transition-colors duration-200 ${
                  isAboutPage ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 font-medium"
                }`}
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold ai-glow-hover transition-all duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

