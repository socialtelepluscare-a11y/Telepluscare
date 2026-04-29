import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FAQAccordion from "@/components/sections/FAQAccordion";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import InstagramFeed from "@/components/sections/InstagramFeed";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import AEOSummary from "@/components/ui/AEOSummary";
import type { LandingPageData, ContentSection } from "@/types/landing-page";
import type { FAQItem } from "@/data/faq";

// Detect "How It Works" section and extract steps for HowTo schema
function buildHowToSchema(sections: ContentSection[], title: string) {
  const howToSection = sections.find((s) =>
    /how (it|does) (it )?works?|how to|step.by.step|booking process/i.test(s.title)
  );
  if (!howToSection || !howToSection.bullets || howToSection.bullets.length < 2)
    return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to access ${title} at TelePlus Care`,
    description: howToSection.content,
    step: howToSection.bullets.map((b, i) => {
      // bullets often formatted as "Title — description" or "Title -- description"
      const m = b.match(/^([^—–\-:]{3,80})[—–\-:](.+)$/);
      const stepName = m ? m[1].trim() : `Step ${i + 1}`;
      const stepText = m ? m[2].trim() : b;
      return {
        "@type": "HowToStep",
        position: i + 1,
        name: stepName,
        text: stepText,
      };
    }),
  };
}

const relatedServices = [
  { title: "Weight Loss & Diabetes", href: "/diabetes-chronic-disease", image: "/images/image-2.png" },
  { title: "General Medical Care", href: "/general-health", image: "/images/image.jpg" },
  { title: "Women\u2019s Health", href: "/womens-health", image: "/images/image-1.jpg" },
  { title: "Skin Conditions", href: "/skin-conditions", image: "/images/image-3.png" },
  { title: "Men\u2019s Health", href: "/mens-health", image: "/images/image-2.jpg" },
  { title: "Aesthetic Services", href: "/aesthetic", image: "/images/image-3.jpg" },
];

export default function LandingPageTemplate({
  title,
  heroDescription,
  heroImage,
  heroImageAlt,
  sections,
  faqs,
  locations,
  bookingUrl,
  slug,
  summary,
  keyFacts,
  lastReviewed,
  reviewedBy,
  conditionType,
}: LandingPageData & { slug?: string }) {
  const ctaHref = bookingUrl || "/book-appointment-alberta";
  const howToSchema = buildHowToSchema(sections, title);
  // Track used images to avoid duplicates
  const usedImages = new Set<string>();
  if (heroImage) usedImages.add(heroImage);

  return (
    <>
      {slug && (
        <BreadcrumbSchema
          items={[
            { name: "Services", href: "https://telepluscare.com/services/" },
            { name: title },
          ]}
        />
      )}
      {slug && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              name: title,
              description: heroDescription,
              url: `https://telepluscare.com/${slug}/`,
              isPartOf: {
                "@id": "https://telepluscare.com/#website",
              },
              about: {
                "@type": "Service",
                name: title,
                provider: {
                  "@id": "https://telepluscare.com/#organization",
                },
                serviceType: "Virtual Healthcare",
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "Alberta",
                  addressCountry: "CA",
                },
              },
            }),
          }}
        />
      )}

      {/* HowTo schema (auto-detected from sections) */}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* MedicalCondition schema (when conditionType set) */}
      {conditionType && slug && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalCondition",
              name: conditionType,
              description: heroDescription,
              url: `https://telepluscare.com/${slug}/`,
              possibleTreatment: {
                "@type": "MedicalTherapy",
                name: title,
                provider: { "@id": "https://telepluscare.com/#organization" },
              },
            }),
          }}
        />
      )}

      {/* ===== 1. HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "clamp(28px, 5vw, 48px) 0 clamp(32px, 5vw, 56px)",
        }}
      >
        <div className="container-main">
          {heroImage ? (
            <div className="content-row" style={{ display: "flex", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <span className="badge-primary">TelePlus Care</span>
                <h1 style={{ fontSize: "clamp(26px, 5.5vw, 44px)", fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 16 }}>
                  {title}
                </h1>
                <div className="decorative-line" />
                <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, color: "var(--text)", marginBottom: 28, maxWidth: 520 }}>
                  {heroDescription}
                </p>
                <a href={ctaHref} className="btn-primary" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", padding: "clamp(12px, 1.4vw, 16px) clamp(22px, 3vw, 36px)" }}>
                  Book Your Appointment Now
                  <FiArrowUpRight />
                </a>
              </div>
              <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
                <Image
                  src={heroImage}
                  alt={heroImageAlt || title}
                  width={560}
                  height={420}
                  style={{ borderRadius: 18, maxWidth: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
              <span className="badge-primary">TelePlus Care</span>
              <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 16 }}>
                {title}
              </h1>
              <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
              <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, color: "var(--text)", marginBottom: 32 }}>
                {heroDescription}
              </p>
              <a href={ctaHref} className="btn-primary" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", padding: "clamp(12px, 1.4vw, 16px) clamp(22px, 3vw, 36px)" }}>
                Book Your Appointment Now
                <FiArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ===== Quick Facts / Trust Strip ===== */}
      <section style={{ background: "#fff", borderTop: "1px solid #f0e6f3", borderBottom: "1px solid #f0e6f3", padding: "clamp(14px, 2vw, 18px) 0" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(12px, 2.5vw, 36px)", flexWrap: "wrap" }}>
            {[
              { emoji: "⏱️", label: "Same-Day Appointment" },
              { emoji: "👨‍⚕️", label: "Licensed Canadian Physicians" },
              { emoji: "🔒", label: "PIPEDA Secure & Private" },
              { emoji: "✓", label: "Trusted by 500+ Patients" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "clamp(12px, 1.3vw, 14px)",
                  fontWeight: 600,
                  color: "var(--dark)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "var(--primary)" }}>{item.emoji}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AEO Summary Block (TL;DR for AI engines) ===== */}
      {summary && (
        <AEOSummary
          title={title}
          summary={summary}
          keyFacts={keyFacts}
          lastReviewed={lastReviewed}
          reviewedBy={reviewedBy}
        />
      )}

      {/* ===== 2. CONTENT SECTIONS (with inline CTAs every 3 sections) ===== */}
      {sections.map((section, index) => {
        // Skip duplicate images
        const sectionImage = section.image && !usedImages.has(section.image) ? section.image : null;
        if (sectionImage) usedImages.add(sectionImage);

        const showMidCTA = index > 0 && index % 3 === 0;
        const bgColors = ["#fff", "#fef7ff"];
        const bgColor = bgColors[index % 2];

        return (
          <div key={index}>
            {/* Mid-page CTA every 3 sections */}
            {showMidCTA && (
              <section style={{ background: "linear-gradient(135deg, #621C72 0%, #8B3A9F 50%, #621C72 100%)", padding: "clamp(36px, 5.5vw, 56px) 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
                {/* Decorative circles */}
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
                <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>
                    Ready to Take the Next Step?
                  </h3>
                  <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "rgba(255,255,255,0.85)", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7 }}>
                    Book a virtual appointment with a licensed healthcare provider today.
                  </p>
                  <a
                    href={ctaHref}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "clamp(12px, 1.4vw, 16px) clamp(24px, 3.5vw, 40px)", background: "#fff", color: "#621C72",
                      fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, borderRadius: 119,
                      border: "none", textDecoration: "none", transition: "all 0.3s",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    }}
                  >
                    Book Your Appointment Now
                    <FiArrowUpRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </section>
            )}

            {/* Content Section */}
            <section style={{ background: bgColor, padding: "clamp(40px, 8vw, 80px) 0" }}>
              <div className="container-main">
                {sectionImage ? (
                  <div
                    className={index % 2 === 0 ? "content-row" : "content-row content-row-reverse"}
                    style={{ display: "flex", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}
                  >
                    <div style={{ flex: 1, minWidth: 300 }}>
                      <h2 className="section-title">{section.title}</h2>
                      <div className="decorative-line" />
                      {section.content.split("\n\n").map((p, i) => (
                        <p key={i} className="body-text" style={{ marginBottom: 16 }}>{p}</p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="check-list" style={{ marginTop: 20 }}>
                          {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                      {/* Inline CTA on sections with images */}
                      <div style={{ marginTop: 28 }}>
                        <a href={ctaHref} className="btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>
                          Book Your Appointment Now
                          <FiArrowUpRight style={{ width: 14, height: 14 }} />
                        </a>
                      </div>
                    </div>
                    <div style={{ flex: "0 0 45%", minWidth: 300 }}>
                      <Image
                        src={sectionImage}
                        alt={section.imageAlt || section.title}
                        width={560}
                        height={400}
                        style={{ borderRadius: 18, width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div style={{ maxWidth: 900 }}>
                    <h2 className="section-title">{section.title}</h2>
                    <div className="decorative-line" />
                    {section.content.split("\n\n").map((p, i) => (
                      <p key={i} className="body-text" style={{ marginBottom: 16 }}>{p}</p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="check-list" style={{ marginTop: 20 }}>
                        {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </section>
          </div>
        );
      })}

      {/* ===== 3. MID-PAGE CTA ===== */}
      <section style={{ background: "#fff", padding: "clamp(36px, 6vw, 64px) 0" }}>
        <div className="container-main" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #fef7ff 0%, #F0F5FA 100%)", borderRadius: 24, padding: "clamp(28px, 4.5vw, 48px) clamp(20px, 4vw, 40px)", textAlign: "center", border: "1px solid rgba(98,28,114,0.08)" }}>
            <h2 style={{ fontSize: "clamp(24px, 4.5vw, 36px)", fontWeight: 700, color: "var(--dark)", marginBottom: 12, lineHeight: 1.2 }}>
              Your Fast and Convenient <span style={{ color: "var(--primary)" }}>Healthcare</span> Solution
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 20px" }} />
            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, color: "var(--text)", marginBottom: 28 }}>
              Connect with a licensed healthcare provider from the comfort of your home.
              No referral needed — book your virtual appointment today.
            </p>
            <a href={ctaHref} className="btn-primary" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", padding: "clamp(11px, 1.3vw, 14px) clamp(22px, 3vw, 32px)" }}>
              Book Your Appointment Now
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== 4. RELATED SERVICES ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Explore Our <span style={{ color: "var(--primary)" }}>Services</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="service-grid">
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="service-card"
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "#fff", borderRadius: 14, padding: 16,
                  border: "1px solid rgba(98,28,114,0.1)", borderLeft: "4px solid var(--primary)",
                  textDecoration: "none", transition: "all 0.3s ease",
                }}
              >
                <div style={{ position: "relative", width: 64, height: 64, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                  <Image src={svc.image} alt={svc.title} fill sizes="64px" style={{ objectFit: "cover" }} />
                </div>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--dark)", lineHeight: 1.3 }}>
                  {svc.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. LOCATIONS ===== */}
      {locations && (
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div className="container-main">
            <h2 className="section-title">
              Serving Communities Across <span style={{ color: "var(--primary)" }}>Alberta</span>
            </h2>
            <div className="decorative-line" />
            <p className="body-text" style={{ maxWidth: 800 }}>{locations}</p>
            <div style={{ marginTop: 24 }}>
              <Link href="/location" className="btn-outline" style={{ fontSize: 15, padding: "12px 28px" }}>
                View All Locations
                <FiArrowUpRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== 6. EMERGENCY BANNER ===== */}
      <EmergencyBanner />

      {/* ===== 7. FAQ ===== */}
      {faqs.length > 0 && (
        <FAQAccordion items={faqs as FAQItem[]} title="Frequently Asked Questions" />
      )}

      {/* ===== 8. BOTTOM CTA ===== */}
      <section style={{ background: "linear-gradient(135deg, #621C72 0%, #8B3A9F 50%, #621C72 100%)", padding: "80px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff", padding: "6px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 20 }}>
            Get Started Today
          </span>
          <h2 style={{ fontSize: 44, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Connect with a licensed healthcare provider from the comfort of your home. No referral needed.
          </p>
          <a
            href={ctaHref}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "18px 44px", background: "#fff", color: "#621C72",
              fontSize: 17, fontWeight: 700, borderRadius: 119, border: "none",
              textDecoration: "none", transition: "all 0.3s ease",
              boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
            }}
          >
            Book Your Appointment Now
            <FiArrowUpRight style={{ width: 18, height: 18 }} />
          </a>
        </div>
      </section>

      {/* ===== 9. INSTAGRAM ===== */}
      <InstagramFeed />
    </>
  );
}
