import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/rosacea-treatment-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/rosacea-treatment-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
