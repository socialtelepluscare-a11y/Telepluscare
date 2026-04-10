import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/finasteride-online-prescription";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/finasteride-online-prescription/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
