export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Weight Loss & Diabetes Care", href: "/diabetes-chronic-disease" },
      { label: "General Medical Care", href: "/general-health" },
      { label: "Men's Health", href: "/mens-health" },
      { label: "Women's Health", href: "/womens-health" },
      { label: "Skin Conditions", href: "/skin-conditions" },
      { label: "Aesthetic", href: "/aesthetic" },
      { label: "Mental Health", href: "/mental-health" },
      { label: "Virtual Walk-in Clinic", href: "/virtual-walk-in-clinic-edmonton" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

export const footerServices: NavItem[] = [
  { label: "Weight Loss & Diabetes Care", href: "/diabetes-chronic-disease" },
  { label: "General Medical Care", href: "/general-health" },
  { label: "Men's Health", href: "/mens-health" },
  { label: "Women's Health", href: "/womens-health" },
  { label: "Skin Conditions", href: "/skin-conditions" },
  { label: "Aesthetic", href: "/aesthetic" },
];

export const footerPages: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Location", href: "/location" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Careers", href: "/careers" },
];
