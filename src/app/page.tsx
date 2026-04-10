import FadeInSection from "@/components/ui/FadeInSection";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ServiceCards from "@/components/sections/ServiceCards";
import PremierSection from "@/components/sections/PremierSection";
import ComprehensiveSection from "@/components/sections/ComprehensiveSection";
import Testimonials from "@/components/sections/Testimonials";
import YouTubeEmbed from "@/components/sections/YouTubeEmbed";
import HowItWorks from "@/components/sections/HowItWorks";
import AreasWeServe from "@/components/sections/AreasWeServe";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import PopularArticles from "@/components/sections/PopularArticles";
import InstagramFeed from "@/components/sections/InstagramFeed";
import StickyBottomBar from "@/components/sections/StickyBottomBar";
import { homepageFAQs } from "@/data/faq";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Hero />
      <FadeInSection><TrustBadges /></FadeInSection>
      <FadeInSection><ServiceCards /></FadeInSection>
      <FadeInSection><PremierSection /></FadeInSection>
      <FadeInSection><ComprehensiveSection /></FadeInSection>
      <FadeInSection><Testimonials /></FadeInSection>
      <FadeInSection><YouTubeEmbed /></FadeInSection>
      <FadeInSection><HowItWorks /></FadeInSection>
      <FadeInSection><AreasWeServe /></FadeInSection>
      <FadeInSection><EmergencyBanner /></FadeInSection>
      <FadeInSection><FAQAccordion items={homepageFAQs} title="Frequently Asked Questions" /></FadeInSection>
      <FadeInSection><CTASection /></FadeInSection>
      <FadeInSection><PopularArticles /></FadeInSection>
      <FadeInSection><InstagramFeed /></FadeInSection>
      <StickyBottomBar />
    </>
  );
}
