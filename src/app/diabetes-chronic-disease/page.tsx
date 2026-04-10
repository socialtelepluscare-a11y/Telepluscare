import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/diabetes-chronic-disease";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/diabetes-chronic-disease/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
