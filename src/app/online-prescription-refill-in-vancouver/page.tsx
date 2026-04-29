import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-prescription-refill-in-vancouver";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-prescription-refill-in-vancouver/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
