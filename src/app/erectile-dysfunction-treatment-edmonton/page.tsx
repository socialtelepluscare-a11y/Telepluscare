import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/erectile-dysfunction-treatment-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/erectile-dysfunction-treatment-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
