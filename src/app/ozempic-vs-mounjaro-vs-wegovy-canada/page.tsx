import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/ozempic-vs-mounjaro-vs-wegovy-canada";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/ozempic-vs-mounjaro-vs-wegovy-canada/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
