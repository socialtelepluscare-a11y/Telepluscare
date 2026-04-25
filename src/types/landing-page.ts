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
  // AEO fields
  summary?: string; // 40-60 word factual TL;DR — AI engines lift verbatim
  keyFacts?: string[]; // citation-friendly statistics/facts
  lastReviewed?: string; // ISO date "2026-04-25"
  reviewedBy?: string; // physician (E-E-A-T)
  conditionType?: string; // for MedicalCondition schema (e.g. "Diabetes", "Anxiety", "UTI")
}
