import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/urinary-tract-infection-uti";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/urinary-tract-infection-uti/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
