import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/saxenda-prescription-online";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/saxenda-prescription-online/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
