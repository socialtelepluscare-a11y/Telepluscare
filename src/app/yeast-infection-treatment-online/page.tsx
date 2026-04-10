import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/yeast-infection-treatment-online";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/yeast-infection-treatment-online/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
