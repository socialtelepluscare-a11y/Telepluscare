import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/anxiety-medication-online-alberta";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/anxiety-medication-online-alberta/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
