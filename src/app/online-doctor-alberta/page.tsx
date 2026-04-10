import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctor-alberta";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctor-alberta/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
