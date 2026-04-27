import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-mens-health-and-wellness-services-in-calgary";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-mens-health-and-wellness-services-in-calgary/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
