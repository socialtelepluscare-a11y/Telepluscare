import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/metformin-online-prescription";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/metformin-online-prescription/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
