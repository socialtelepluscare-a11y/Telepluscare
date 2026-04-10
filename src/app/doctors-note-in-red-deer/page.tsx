import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/doctors-note-in-red-deer";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/doctors-note-in-red-deer/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
