import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/what-ahcip-covers-virtual-doctor-visits";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/what-ahcip-covers-virtual-doctor-visits/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
