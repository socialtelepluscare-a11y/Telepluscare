import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/anxiety-medication-online-calgary";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/anxiety-medication-online-calgary/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
