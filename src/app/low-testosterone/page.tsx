import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/low-testosterone";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/low-testosterone/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
