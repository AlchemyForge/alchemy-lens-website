import { Link } from "react-router";
import logoImage from "../assets/logo.png";
import { LinkedInIcon } from "./icons";

export function Footer() {
  return (
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
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
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
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 Alchemy Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

