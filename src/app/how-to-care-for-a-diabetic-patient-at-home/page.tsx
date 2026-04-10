import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/how-to-care-for-a-diabetic-patient-at-home";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/how-to-care-for-a-diabetic-patient-at-home/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
