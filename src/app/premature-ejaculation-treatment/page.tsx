import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/premature-ejaculation-treatment";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/premature-ejaculation-treatment/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
