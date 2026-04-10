import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/sexually-transmitted-infections-sti";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/sexually-transmitted-infections-sti/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
