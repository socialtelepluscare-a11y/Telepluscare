import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/driving-medical-examination-appointment-in-leduc";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/driving-medical-examination-appointment-in-leduc/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
