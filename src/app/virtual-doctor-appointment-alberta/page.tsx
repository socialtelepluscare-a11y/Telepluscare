import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/virtual-doctor-appointment-alberta";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/virtual-doctor-appointment-alberta/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
