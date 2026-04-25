import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/are-online-doctor-notes-legal-in-canada";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/are-online-doctor-notes-legal-in-canada/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
