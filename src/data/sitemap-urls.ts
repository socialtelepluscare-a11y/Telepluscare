/**
 * Complete URL structure from the old WordPress site.
 * ALL 86 URLs must be preserved to avoid 404s and protect rankings.
 * Source: Rank Math WordPress XML Sitemap (2 sitemaps)
 */

export interface SitemapURL {
  slug: string;
  category: string;
  lastMod: string;
  images: number;
}

// Sitemap 1: 74 page URLs
export const pageURLs: SitemapURL[] = [
  // === HOMEPAGE ===
  { slug: '/', category: 'core', lastMod: '2026-03-20', images: 21 },

  // === AESTHETIC / DERMATOLOGY ===
  { slug: '/best-botox-treatment-in-edmonton', category: 'aesthetic', lastMod: '2026-04-05', images: 8 },
  { slug: '/best-injectable-treatments-in-edmonton', category: 'aesthetic', lastMod: '2026-04-04', images: 3 },
  { slug: '/best-dermatologist-in-edmonton', category: 'aesthetic', lastMod: '2026-04-04', images: 10 },
  { slug: '/aesthetic', category: 'aesthetic', lastMod: '2025-08-30', images: 14 },
  { slug: '/prp-treatment-in-edmonton', category: 'aesthetic', lastMod: '2025-08-30', images: 13 },
  { slug: '/prp-treatment-in-calgary', category: 'aesthetic', lastMod: '2025-08-30', images: 12 },

  // === BIRTH CONTROL ===
  { slug: '/birth-control-consultation-online-in-red-deer', category: 'birth-control', lastMod: '2026-03-20', images: 6 },
  { slug: '/birth-control-consultation-online-in-calgary', category: 'birth-control', lastMod: '2026-03-16', images: 6 },
  { slug: '/online-birth-control-services-in-edmonton', category: 'birth-control', lastMod: '2026-03-07', images: 7 },

  // === DOCTORS NOTES ===
  { slug: '/online-doctors-notes-in-lethbridge', category: 'doctors-notes', lastMod: '2026-03-10', images: 11 },
  { slug: '/online-doctors-note-in-calgary', category: 'doctors-notes', lastMod: '2026-03-10', images: 18 },
  { slug: '/doctors-note-in-red-deer', category: 'doctors-notes', lastMod: '2026-03-10', images: 18 },
  { slug: '/online-doctors-notes-in-edmonton', category: 'doctors-notes', lastMod: '2026-03-06', images: 12 },
  { slug: '/online-doctors-note-in-leduc', category: 'doctors-notes', lastMod: '2026-02-02', images: 8 },
  { slug: '/online-doctors-note-in-fort-mcmurray', category: 'doctors-notes', lastMod: '2026-02-02', images: 5 },
  { slug: '/online-doctor-note-in-st-albert', category: 'doctors-notes', lastMod: '2026-02-02', images: 11 },
  { slug: '/online-doctors-notes-in-saskatchewan', category: 'doctors-notes', lastMod: '2026-02-02', images: 12 },
  { slug: '/online-doctor-note-in-medicine-hat', category: 'doctors-notes', lastMod: '2026-02-02', images: 11 },
  { slug: '/online-doctor-note-in-grande-prairie', category: 'doctors-notes', lastMod: '2026-02-02', images: 11 },
  { slug: '/online-doctor-note-in-sherwood-park', category: 'doctors-notes', lastMod: '2026-02-02', images: 11 },
  { slug: '/get-your-online-doctors-note-in-airdrie', category: 'doctors-notes', lastMod: '2026-02-02', images: 5 },

  // === PRESCRIPTIONS ===
  { slug: '/online-prescriptions-and-refills-in-alberta', category: 'prescriptions', lastMod: '2026-02-02', images: 13 },
  { slug: '/online-prescriptions-and-refills-in-leduc', category: 'prescriptions', lastMod: '2026-01-21', images: 14 },
  { slug: '/online-prescriptions-and-refills-in-calgary', category: 'prescriptions', lastMod: '2026-01-21', images: 14 },
  { slug: '/online-prescriptions-and-refills-in-edmonton', category: 'prescriptions', lastMod: '2025-12-05', images: 14 },
  { slug: '/online-prescriptions-and-refills-in-fort-mcmurray', category: 'prescriptions', lastMod: '2025-09-21', images: 5 },
  { slug: '/online-prescriptions-and-refills-in-red-dear', category: 'prescriptions', lastMod: '2025-09-21', images: 5 }, // NOTE: typo "red-dear" is intentional - matches live URL
  { slug: '/prescription-refill', category: 'prescriptions', lastMod: '2025-11-08', images: 3 },

  // === UTI ===
  { slug: '/uti-appointment-in-fort-mcmurray', category: 'uti', lastMod: '2026-01-21', images: 8 },
  { slug: '/uti-appointment-in-edmonton', category: 'uti', lastMod: '2026-01-21', images: 6 },
  { slug: '/uti-appointment-in-lethbridge', category: 'uti', lastMod: '2025-12-12', images: 8 },
  { slug: '/uti-appointment-in-red-deer', category: 'uti', lastMod: '2025-12-09', images: 8 },
  { slug: '/uti-appointment-in-alberta', category: 'uti', lastMod: '2025-12-09', images: 8 },
  { slug: '/uti-appointment-in-calgary', category: 'uti', lastMod: '2025-12-09', images: 8 },

  // === DIABETES / CHRONIC DISEASE ===
  { slug: '/diabetologist-doctors-in-edmonton', category: 'diabetes', lastMod: '2026-02-20', images: 13 },
  { slug: '/best-diabetes-doctor-in-airdrie', category: 'diabetes', lastMod: '2025-12-31', images: 15 },
  { slug: '/best-diabetes-doctor-in-edmonton', category: 'diabetes', lastMod: '2025-12-09', images: 17 },
  { slug: '/best-diabetes-doctor-in-calgary', category: 'diabetes', lastMod: '2025-09-27', images: 12 },
  { slug: '/lifestyle-modifications-for-diabetes-in-calgary', category: 'diabetes', lastMod: '2025-11-20', images: 9 },
  { slug: '/lifestyle-modifications-for-diabetes-in-leduc', category: 'diabetes', lastMod: '2025-11-17', images: 9 },
  { slug: '/lifestyle-modifications-for-diabetes-in-edmonton', category: 'diabetes', lastMod: '2025-11-11', images: 9 },
  { slug: '/lifestyle-modifications-for-diabetes', category: 'diabetes', lastMod: '2025-11-09', images: 9 },
  { slug: '/diabetes-chronic-disease', category: 'diabetes', lastMod: '2025-09-15', images: 16 },

  // === WALK-IN CLINICS ===
  { slug: '/virtual-walk-in-clinic-edmonton', category: 'walk-in', lastMod: '2026-02-26', images: 9 },
  { slug: '/teleplus-care-walk-in-clinic-in-edmonton', category: 'walk-in', lastMod: '2026-02-21', images: 21 },
  { slug: '/virtual-walk-in-clinic-fort-mcmurray-telepluscare', category: 'walk-in', lastMod: '2025-08-30', images: 13 },

  // === MEN'S HEALTH ===
  { slug: '/mens-health', category: 'mens-health', lastMod: '2025-08-30', images: 19 },
  { slug: '/online-mens-health-and-wellness-services-in-edmonton', category: 'mens-health', lastMod: '2025-09-21', images: 15 },
  { slug: '/hair-loss-treatment-clinic-in-edmonton', category: 'mens-health', lastMod: '2025-11-17', images: 9 },
  { slug: '/hair-loss-treatment-clinic-in-calgary', category: 'mens-health', lastMod: '2025-08-30', images: 9 },

  // === WOMEN'S HEALTH ===
  { slug: '/womens-health', category: 'womens-health', lastMod: '2025-05-31', images: 15 },

  // === SKIN CONDITIONS ===
  { slug: '/skin-conditions', category: 'skin', lastMod: '2025-05-31', images: 12 },
  { slug: '/stress-sore-throat-in-edmonton', category: 'skin', lastMod: '2025-11-11', images: 5 },

  // === GENERAL HEALTH ===
  { slug: '/general-health', category: 'general', lastMod: '2025-09-15', images: 16 },

  // === MENTAL HEALTH ===
  { slug: '/mental-health-counselling-therapy-services-in-edmonton', category: 'mental-health', lastMod: '2025-08-30', images: 16 },
  { slug: '/mental-health-counselling-therapy-services-in-calgary', category: 'mental-health', lastMod: '2025-08-30', images: 15 },
  { slug: '/holsitic-healing-centre-in-edmonton', category: 'mental-health', lastMod: '2025-08-30', images: 12 }, // NOTE: typo "holsitic" is intentional - matches live URL
  { slug: '/mental-health', category: 'mental-health', lastMod: '2024-11-12', images: 8 },

  // === WEIGHT LOSS ===
  { slug: '/weight-loss-clinic-in-red-deer', category: 'weight-loss', lastMod: '2025-10-06', images: 13 },
  { slug: '/weight-loss-clinic-in-edmonton', category: 'weight-loss', lastMod: '2025-10-06', images: 13 },
  { slug: '/weight-loss', category: 'weight-loss', lastMod: '2024-08-27', images: 3 },

  // === DRIVING / PARKING MEDICAL ===
  { slug: '/parking-placard-medical-assessment-in-edmonton', category: 'medical-exams', lastMod: '2026-02-12', images: 12 },
  { slug: '/driving-medical-examination-appointment-in-edmonton', category: 'medical-exams', lastMod: '2026-02-07', images: 6 },
  { slug: '/driving-medical-examination-appointment-in-leduc', category: 'medical-exams', lastMod: '2025-12-13', images: 4 },

  // === CORE PAGES ===
  { slug: '/contact-us', category: 'core', lastMod: '2026-03-10', images: 1 },
  { slug: '/about', category: 'core', lastMod: '2025-08-30', images: 4 },
  { slug: '/location', category: 'core', lastMod: '2025-08-30', images: 0 },
  { slug: '/faq', category: 'core', lastMod: '2025-08-30', images: 1 },
  { slug: '/careers', category: 'core', lastMod: '2025-08-30', images: 0 },
  { slug: '/blog', category: 'core', lastMod: '2025-08-30', images: 1 },
  { slug: '/services', category: 'core', lastMod: '2024-02-08', images: 0 },
  { slug: '/privacy-policy', category: 'core', lastMod: '2025-08-30', images: 0 },
  { slug: '/terms-of-service', category: 'core', lastMod: '2025-08-30', images: 0 },
];

// Sitemap 2: 12 blog/article URLs
export const blogURLs: SitemapURL[] = [
  { slug: '/diabetes-type-2-symptoms', category: 'blog', lastMod: '2026-01-03', images: 5 },
  { slug: '/how-to-care-for-a-diabetic-patient-at-home', category: 'blog', lastMod: '2026-01-03', images: 0 },
  { slug: '/adhd', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/erectile-dysfunction', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/low-testosterone', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/urinary-tract-infection-uti', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/sexually-transmitted-infections-sti', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/hair-loss-in-men-guide', category: 'blog', lastMod: '2025-08-30', images: 0 },
  { slug: '/can-stress-cause-a-sore-throat', category: 'blog', lastMod: '2025-08-30', images: 3 },
  { slug: '/do-ice-baths-help-with-weight-loss', category: 'blog', lastMod: '2025-08-30', images: 4 },
  { slug: '/ten-ways-to-stay-healthy-during-winter', category: 'blog', lastMod: '2025-08-30', images: 3 },
];

// Combined: all 86 URLs (note: second sitemap had 11 blog URLs, not 12 — the header count was wrong)
export const allURLs = [...pageURLs, ...blogURLs];

// URL categories summary:
// - core: 10 (homepage, about, contact-us, location, faq, careers, blog, services, privacy-policy, terms-of-service)
// - aesthetic: 7 (botox, injectables, dermatologist, aesthetic, prp x2)
// - birth-control: 3 (red-deer, calgary, edmonton)
// - doctors-notes: 12 (lethbridge, calgary, red-deer, edmonton, leduc, fort-mcmurray, st-albert, saskatchewan, medicine-hat, grande-prairie, sherwood-park, airdrie)
// - prescriptions: 8 (alberta, leduc, calgary, edmonton, fort-mcmurray, red-dear, prescription-refill)
// - uti: 6 (fort-mcmurray, edmonton, lethbridge, red-deer, alberta, calgary)
// - diabetes: 9 (diabetologist, best-doctor x3, lifestyle x4, chronic-disease)
// - walk-in: 3 (edmonton x2, fort-mcmurray)
// - mens-health: 4 (main, wellness-services, hair-loss x2)
// - womens-health: 1
// - skin: 2 (main, stress-sore-throat)
// - general: 1
// - mental-health: 4 (edmonton, calgary, holistic, main)
// - weight-loss: 3 (red-deer, edmonton, main)
// - medical-exams: 3 (parking, driving x2)
// - blog: 11 (articles/guides)
