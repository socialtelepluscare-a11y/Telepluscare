import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/skin-booster-in-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/skin-booster-in-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
