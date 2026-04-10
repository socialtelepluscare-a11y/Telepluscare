import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctors-note-in-beaumont";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctors-note-in-beaumont/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
