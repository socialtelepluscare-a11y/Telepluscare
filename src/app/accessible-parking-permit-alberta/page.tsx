import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/accessible-parking-permit-alberta";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/accessible-parking-permit-alberta/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
