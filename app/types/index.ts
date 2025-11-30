export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

