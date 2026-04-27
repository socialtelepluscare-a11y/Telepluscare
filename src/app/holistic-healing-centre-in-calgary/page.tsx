import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/holistic-healing-centre-in-calgary";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/holistic-healing-centre-in-calgary/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
