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

export interface BlogAuthor {
  name: string;
  bio?: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  metaDescription?: string;
  publishDate: string;
  author: BlogAuthor;
  tagIds: string[];
  tagNames: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  htmlBody: string;
}

export interface BlogListResponse {
  posts: BlogPost[];
  nextCursor?: string;
  total: number;
}

