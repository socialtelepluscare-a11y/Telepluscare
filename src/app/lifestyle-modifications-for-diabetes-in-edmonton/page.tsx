import type { Metadata } from "next";
import LandingPageTemplate from "@/components/sections/LandingPageTemplate";
import { pageData } from "@/data/pages/lifestyle-modifications-for-diabetes-in-edmonton";
export const metadata: Metadata = { title: pageData.metaTitle, description: pageData.metaDescription, alternates: { canonical: "/lifestyle-modifications-for-diabetes-in-edmonton/" } };
export default function Page() { return <LandingPageTemplate {...pageData} />; }
