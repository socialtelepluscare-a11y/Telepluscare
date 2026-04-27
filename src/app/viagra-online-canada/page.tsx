import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/viagra-online-canada";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/viagra-online-canada/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
