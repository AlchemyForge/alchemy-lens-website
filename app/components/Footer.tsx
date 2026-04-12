import { Link } from "react-router";
import logoImage from "../assets/logo.webp";
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
                className="h-12"
                width={180}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm">Reveal, Transmute, Forge results.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
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
            <h3 className="text-white font-semibold mb-4">Company</h3>
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
            <h3 className="text-white font-semibold mb-4">Connect</h3>
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

