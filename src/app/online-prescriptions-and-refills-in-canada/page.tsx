import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-prescriptions-and-refills-in-canada";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-prescriptions-and-refills-in-canada/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
