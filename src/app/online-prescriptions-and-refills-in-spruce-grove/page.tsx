import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-prescriptions-and-refills-in-spruce-grove";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-prescriptions-and-refills-in-spruce-grove/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
