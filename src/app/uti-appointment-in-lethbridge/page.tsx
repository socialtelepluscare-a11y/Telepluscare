import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/uti-appointment-in-lethbridge";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/uti-appointment-in-lethbridge/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
