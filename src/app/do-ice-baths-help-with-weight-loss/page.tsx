import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/do-ice-baths-help-with-weight-loss";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/do-ice-baths-help-with-weight-loss/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
