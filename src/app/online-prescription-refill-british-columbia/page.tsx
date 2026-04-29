import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-prescription-refill-british-columbia";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-prescription-refill-british-columbia/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
