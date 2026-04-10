import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/birth-control-consultation-online-in-calgary";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/birth-control-consultation-online-in-calgary/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
