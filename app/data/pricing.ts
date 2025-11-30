import type { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Individual",
    price: "$99",
    features: [
      "1 user",
      "Unlimited projects",
      "AI-powered insights",
      "Email support",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Small Team",
    price: "$299",
    description: "Up to 3 users",
    popular: true,
    features: [
      "Up to 3 users",
      "Unlimited projects",
      "Advanced AI insights",
      "Priority support",
      "Team collaboration tools",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Large Team",
    price: "$799",
    description: "Up to 10 users",
    features: [
      "Up to 10 users",
      "Unlimited projects",
      "Enterprise AI features",
      "24/7 priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Custom",
    price: "Custom",
    description: "10+ users",
    features: [
      "Unlimited users",
      "Everything in Large Team",
      "Dedicated account manager",
      "Custom AI training",
      "SLA guarantees",
      "On-premise deployment",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#contact",
  },
];

