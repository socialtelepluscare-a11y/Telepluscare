import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/mounjaro-in-calgary";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/mounjaro-in-calgary/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
