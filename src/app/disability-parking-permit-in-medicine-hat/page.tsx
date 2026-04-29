import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/disability-parking-permit-in-medicine-hat";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/disability-parking-permit-in-medicine-hat/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
