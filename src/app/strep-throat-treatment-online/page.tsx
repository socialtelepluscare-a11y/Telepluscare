import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/strep-throat-treatment-online";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/strep-throat-treatment-online/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
