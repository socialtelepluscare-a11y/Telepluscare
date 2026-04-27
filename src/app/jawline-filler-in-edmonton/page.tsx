import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/jawline-filler-in-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/jawline-filler-in-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
