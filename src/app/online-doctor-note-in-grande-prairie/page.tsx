import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctor-note-in-grande-prairie";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctor-note-in-grande-prairie/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
