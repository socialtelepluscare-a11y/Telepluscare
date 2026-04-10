import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/parking-placard-medical-assessment-in-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/parking-placard-medical-assessment-in-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
