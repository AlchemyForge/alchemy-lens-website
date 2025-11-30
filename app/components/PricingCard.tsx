import type { PricingTier } from "../types";
import { CheckIcon } from "./icons";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const isCustom = tier.name === "Custom";
  const isPopular = tier.popular;

  return (
    <div
      className={`${
        isCustom
          ? "bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700"
          : "bg-white border-2"
      } ${
        isPopular ? "border-blue-500" : "border-gray-200"
      } rounded-2xl p-8 hover:border-blue-500 transition-all relative flex flex-col`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
          Popular
        </div>
      )}
      <div className="mb-6">
        <h3
          className={`text-2xl font-bold mb-2 ${
            isCustom ? "text-white" : "text-gray-900"
          }`}
        >
          {tier.name}
        </h3>
        <div className="flex items-baseline">
          <span
            className={`text-4xl font-bold ${
              isCustom ? "text-white" : "text-gray-900"
            }`}
          >
            {tier.price}
          </span>
          {tier.price !== "Custom" && (
            <span className={`ml-2 ${isCustom ? "text-gray-400" : "text-gray-600"}`}>
              /month
            </span>
          )}
        </div>
        {tier.description && (
          <p className={`text-sm mt-1 ${isCustom ? "text-gray-400" : "text-gray-500"}`}>
            {tier.description}
          </p>
        )}
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon
              className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                isCustom ? "text-green-400" : "text-green-500"
              }`}
            />
            <span className={isCustom ? "text-gray-300" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={tier.ctaHref}
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
          isPopular || isCustom
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white ai-glow-hover"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        {tier.ctaText}
      </a>
    </div>
  );
}

