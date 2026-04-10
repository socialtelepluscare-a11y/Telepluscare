import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctors-note-in-okotoks";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctors-note-in-okotoks/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
