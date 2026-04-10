import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/diabetes-type-2-symptoms";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/diabetes-type-2-symptoms/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
