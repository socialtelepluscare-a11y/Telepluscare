import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/virtual-walk-in-clinic-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/virtual-walk-in-clinic-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
