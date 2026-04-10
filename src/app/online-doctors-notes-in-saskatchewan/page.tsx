import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctors-note-in-saskatchewan";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctors-notes-in-saskatchewan/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
