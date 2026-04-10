export interface ContentSection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

export interface LandingPageData {
  metaTitle: string;
  metaDescription: string;
  title: string;
  heroDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  locations?: string;
  bookingUrl?: string;
}
