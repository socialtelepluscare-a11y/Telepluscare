import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/disability-parking-permit-in-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/disability-parking-permit-in-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
