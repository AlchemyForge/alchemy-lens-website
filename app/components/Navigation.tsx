import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logoImage from "../assets/logo.png";

interface NavigationProps {
  currentPath?: string;
}

const NAV_SECTIONS = [
  { id: "solutions", label: "Solutions" },
  { id: "how-it-works", label: "How It Works" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export function Navigation({ currentPath = "/" }: NavigationProps) {
  const isAboutPage = currentPath === "/about";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAboutPage) return;

    const handleScroll = () => {
      const midpoint = window.innerHeight / 2;
      let active: string | null = null;

      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= midpoint) {
          active = id;
        }
      }

      setActiveSection(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAboutPage]);

  useEffect(() => {
    const update = () => {
      if (!activeSection || isAboutPage) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      const itemEl = navRefs.current[activeSection];
      const containerEl = containerRef.current;
      if (!itemEl || !containerEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();
      setIndicator({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        visible: true,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeSection, isAboutPage]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-b-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-xl font-bold text-slate-600 tracking-wider transition-transform duration-200 hover:scale-105"
          >
            <img
              src={logoImage}
              alt="Alchemy Forge Logo"
              className="h-13 transition-transform duration-200"
            />
          </Link>

          {/* Desktop nav */}
          <div ref={containerRef} className="hidden md:flex items-center gap-8 self-stretch relative">
            <span
              className="pointer-events-none absolute bottom-0 h-0.5 bg-orange-500 rounded-full"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
                transition: "left 300ms ease, width 300ms ease, opacity 200ms ease",
              }}
            />
            {NAV_SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`/#${id}`}
                ref={(el) => { navRefs.current[id] = el; }}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === id && !isAboutPage
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {label}
              </a>
            ))}
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                isAboutPage ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900 font-medium"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {NAV_SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={() => setMobileOpen(false)}
              className={`font-medium py-3 border-b border-gray-100 transition-colors duration-200 ${
                activeSection === id && !isAboutPage ? "text-orange-500" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className={`font-medium py-3 transition-colors duration-200 ${
              isAboutPage ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

