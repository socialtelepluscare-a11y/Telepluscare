import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/can-stress-cause-a-sore-throat";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/can-stress-cause-a-sore-throat/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
