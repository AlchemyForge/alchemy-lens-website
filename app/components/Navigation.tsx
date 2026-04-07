import { Link } from "react-router";
import logoImage from "../assets/logo.png";

interface NavigationProps {
  currentPath?: string;
}

export function Navigation({ currentPath = "/" }: NavigationProps) {
  const isAboutPage = currentPath === "/about";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-b-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-slate-600 tracking-wider transition-transform duration-200 hover:scale-105"
          >
            <img
              src={logoImage}
              alt="Alchemy Forge Logo"
              className="h-13 transition-transform duration-200"
            />
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
              className={`transition-colors duration-200 ${isAboutPage ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 font-medium"
                }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

