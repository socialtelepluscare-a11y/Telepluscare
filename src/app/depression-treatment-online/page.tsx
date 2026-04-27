import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/depression-treatment-online";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/depression-treatment-online/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
