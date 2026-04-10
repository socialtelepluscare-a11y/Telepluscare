import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/skin-conditions";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/skin-conditions/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
