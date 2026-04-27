import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/how-much-does-botox-cost-edmonton-2026";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/how-much-does-botox-cost-edmonton-2026/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
