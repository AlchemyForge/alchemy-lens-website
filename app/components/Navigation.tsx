import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAboutPage) return;

    const intersecting = new Set<string>();
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) intersecting.add(id);
            else intersecting.delete(id);
          }
          const active = NAV_SECTIONS.map((s) => s.id).find((s) => intersecting.has(s)) ?? null;
          setActiveSection(active);
        },
        { rootMargin: "-64px 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
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
        </div>
      </div>
    </nav>
  );
}

