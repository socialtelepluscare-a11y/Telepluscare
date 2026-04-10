import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/prescription-refill";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/prescription-refill/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
