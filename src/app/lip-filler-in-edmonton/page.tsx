import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/lip-filler-in-edmonton";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/lip-filler-in-edmonton/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
