import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/disability-parking-permit-in-lethbridge";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/disability-parking-permit-in-lethbridge/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
