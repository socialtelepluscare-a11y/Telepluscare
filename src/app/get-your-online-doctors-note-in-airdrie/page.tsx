import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/get-your-online-doctors-note-in-airdrie";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/get-your-online-doctors-note-in-airdrie/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
