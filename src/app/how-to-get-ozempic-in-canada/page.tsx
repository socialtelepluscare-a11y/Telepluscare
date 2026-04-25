import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/how-to-get-ozempic-in-canada";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/how-to-get-ozempic-in-canada/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
