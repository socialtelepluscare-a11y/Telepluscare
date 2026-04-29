import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/birth-control-pills-online-in-surrey";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/birth-control-pills-online-in-surrey/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
