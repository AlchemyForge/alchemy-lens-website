import type { FAQItem } from "../types";
import { useFAQAccordion } from "../hooks/useFAQAccordion";
import { ChevronDownIcon } from "./icons";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Alchemy Lens",
}: FAQAccordionProps) {
  const { toggleItem, isOpen } = useFAQAccordion();

  return (
    <section id="faq" className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const open = isOpen(index);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-200"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className="text-xl font-bold text-gray-900 pr-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ease-in-out ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pt-4 pb-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

