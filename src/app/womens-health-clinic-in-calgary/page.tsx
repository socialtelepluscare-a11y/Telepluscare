import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/womens-health-clinic-in-calgary";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/womens-health-clinic-in-calgary/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
