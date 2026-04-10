import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/ten-ways-to-stay-healthy-during-winter";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/ten-ways-to-stay-healthy-during-winter/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
