import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/video-doctor-visit";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/video-doctor-visit/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
