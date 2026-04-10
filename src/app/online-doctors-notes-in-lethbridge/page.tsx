import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/online-doctors-notes-in-lethbridge";

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/online-doctors-notes-in-lethbridge/" },
};

export default function Page() {
  return <LandingPageTemplate {...pageData} />;
}
