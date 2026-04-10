import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import FAQAccordion from "@/components/sections/FAQAccordion";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import InstagramFeed from "@/components/sections/InstagramFeed";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import type { LandingPageData } from "@/types/landing-page";
import type { FAQItem } from "@/data/faq";

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
}: LandingPageData & { slug?: string }) {
  const ctaHref = bookingUrl || "/book-appointment-alberta";
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
      {/* ===== 1. HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "48px 0 56px",
        }}
      >
        <div className="container-main">
          {heroImage ? (
            <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
              <div style={{ flex: 1, minWidth: 300 }}>
                <span className="badge-primary">TelePlus Care</span>
                <h1 style={{ fontSize: 44, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 16 }}>
                  {title}
                </h1>
                <div className="decorative-line" />
                <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28, maxWidth: 520 }}>
                  {heroDescription}
                </p>
                <a href={ctaHref} className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
                  Book Your Appointment Now
                  <FiArrowUpRight />
                </a>
              </div>
              <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
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
              <h1 style={{ fontSize: 48, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 16 }}>
                {title}
              </h1>
              <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 32 }}>
                {heroDescription}
              </p>
              <a href={ctaHref} className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
                Book Your Appointment Now
                <FiArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ===== 2. CONTENT SECTIONS (with inline CTAs every 3 sections) ===== */}
      {sections.map((section, index) => {
        // Skip duplicate images
        const sectionImage = section.image && !usedImages.has(section.image) ? section.image : null;
        if (sectionImage) usedImages.add(sectionImage);

        const showMidCTA = index > 0 && index % 3 === 0;
        const bgColors = ["#fff", "#fef7ff", "#F0F5FA"];
        const bgColor = bgColors[index % 3];

        return (
          <div key={index}>
            {/* Mid-page CTA every 3 sections */}
            {showMidCTA && (
              <section style={{ background: "var(--primary)", padding: "48px 0", textAlign: "center" }}>
                <div className="container-main">
                  <h3 style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                    Ready to Take the Next Step?
                  </h3>
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 20, maxWidth: 500, margin: "0 auto 20px" }}>
                    Book a virtual appointment with a licensed healthcare provider today.
                  </p>
                  <a
                    href={ctaHref}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "14px 32px", background: "#fff", color: "var(--primary)",
                      fontSize: 15, fontWeight: 600, borderRadius: 119,
                      border: "2px solid #fff", textDecoration: "none", transition: "all 0.3s",
                    }}
                  >
                    Book Your Appointment Now
                  </a>
                </div>
              </section>
            )}

            {/* Content Section */}
            <section style={{ background: bgColor, padding: "80px 0" }}>
              <div className="container-main">
                {sectionImage ? (
                  <div
                    className={index % 2 === 0 ? "content-row" : "content-row content-row-reverse"}
                    style={{ display: "flex", alignItems: "center", gap: 48 }}
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
                        style={{ borderRadius: 18, width: "100%", height: "auto", maxHeight: 400, objectFit: "cover" }}
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
      <section style={{ background: "#fef7ff", padding: "64px 0" }}>
        <div className="container-main" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "var(--dark)", marginBottom: 12, lineHeight: 1.2 }}>
            Your Fast and Convenient <span style={{ color: "var(--primary)" }}>Healthcare</span> Solution
          </h2>
          <div className="decorative-line" style={{ margin: "12px auto 20px" }} />
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28 }}>
            Connect with a licensed healthcare provider from the comfort of your home.
            No referral needed — book your virtual appointment today.
          </p>
          <a href={ctaHref} className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
            Book Your Appointment Now
            <FiArrowUpRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </section>

      {/* ===== 4. RELATED SERVICES ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
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
      <section style={{ background: "var(--primary)", padding: "80px 0", textAlign: "center" }}>
        <div className="container-main">
          <h2 style={{ fontSize: 44, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Connect with a licensed healthcare provider from the comfort of your
            home. No referral needed — book your virtual appointment today.
          </p>
          <a
            href={ctaHref}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 32px", background: "#fff", color: "var(--primary)",
              fontSize: 16, fontWeight: 600, borderRadius: 119, border: "2px solid #fff",
              textDecoration: "none", transition: "all 0.3s ease",
            }}
          >
            Book Your Appointment Now
          </a>
        </div>
      </section>

      {/* ===== 9. INSTAGRAM ===== */}
      <InstagramFeed />
    </>
  );
}
