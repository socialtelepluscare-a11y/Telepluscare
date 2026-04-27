import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/family-doctor-wait-times-canada-2026";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/family-doctor-wait-times-canada-2026/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
