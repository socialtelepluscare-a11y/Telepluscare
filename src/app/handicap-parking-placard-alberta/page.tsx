import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/handicap-parking-placard-alberta";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/handicap-parking-placard-alberta/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
