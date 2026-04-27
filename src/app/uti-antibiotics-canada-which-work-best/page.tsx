import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/uti-antibiotics-canada-which-work-best";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/uti-antibiotics-canada-which-work-best/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
