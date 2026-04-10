import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/hair-loss-in-men-guide";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/hair-loss-in-men-guide/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
