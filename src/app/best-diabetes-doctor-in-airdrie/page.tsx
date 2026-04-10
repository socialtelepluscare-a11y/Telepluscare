import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/best-diabetes-doctor-in-airdrie";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/best-diabetes-doctor-in-airdrie/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
