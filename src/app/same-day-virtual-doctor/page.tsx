import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/same-day-virtual-doctor";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/same-day-virtual-doctor/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
