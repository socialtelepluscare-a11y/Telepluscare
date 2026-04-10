import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/insomnia-treatment-online";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/insomnia-treatment-online/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
