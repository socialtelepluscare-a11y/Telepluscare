import Link from "next/link";
import { FiArrowUpRight, FiPhone, FiCheck } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import FAQAccordion from "@/components/sections/FAQAccordion";
import type { FAQItem } from "@/data/faq";

export const metadata = {
  title: "Pricing - Transparent Virtual Healthcare Costs in Alberta",
  description:
    "View TelePlus Care's transparent pricing. Most consultations are covered by Alberta Health Care. Non-AHC consultations from $80. Sick notes, aesthetic services, and weight loss programs available.",
  alternates: { canonical: "/pricing/" },
};

const pricingCards = [
  {
    title: "Alberta Health Card Holders",
    price: "$0",
    unit: "per visit",
    highlight: true,
    description: "Most general consultations are fully covered by Alberta Health Care Insurance Plan (AHCIP).",
    features: [
      "General medical consultations",
      "Prescription renewals & management",
      "Chronic disease follow-ups",
      "Mental health consultations",
      "Referrals to specialists",
    ],
  },
  {
    title: "Non-Alberta Residents",
    price: "$80",
    unit: "per 15-min consultation",
    highlight: false,
    description: "For patients outside Alberta or without valid Alberta Health Care coverage.",
    features: [
      "General medical consultations",
      "Prescription management",
      "Sick notes & medical certificates",
      "Follow-up appointments",
      "Specialist referrals",
    ],
  },
];

const additionalServices = [
  { service: "Prescription Refills", ahcPrice: "Covered", nonAhcPrice: "$40" },
  { service: "Sick Notes / Medical Certificates", ahcPrice: "$40 – $60", nonAhcPrice: "$40 – $60" },
  { service: "Aesthetic Consultations", ahcPrice: "Starting at $150", nonAhcPrice: "Starting at $150" },
  { service: "Weight Loss Programs", ahcPrice: "Starting at $200/month", nonAhcPrice: "Starting at $200/month" },
  { service: "Driving Medical Exams", ahcPrice: "$150 – $200", nonAhcPrice: "$150 – $200" },
];

const coveredByAH = [
  "General physician consultations and follow-ups",
  "Chronic disease management (diabetes, hypertension, etc.)",
  "Mental health assessments and psychiatric consultations",
  "Prescription management and medication reviews",
  "Referrals to specialists and lab requisitions",
  "Preventive health check-ups and wellness consultations",
  "Women's health consultations (birth control, UTI treatment)",
  "Men's health consultations",
];

const pricingFAQs: FAQItem[] = [
  {
    question: "Is virtual healthcare really free with my Alberta Health Card?",
    answer:
      "Yes, most general medical consultations with our physicians are fully covered by the Alberta Health Care Insurance Plan (AHCIP). You will not receive a bill for covered services. Some specialized services like sick notes, aesthetic consultations, and driving medicals have separate fees.",
  },
  {
    question: "What if I do not have an Alberta Health Card?",
    answer:
      "We welcome all patients. If you do not have a valid Alberta Health Card, our consultation fee is $80 for a 15-minute virtual appointment. Payment is collected at the time of booking via credit card or debit.",
  },
  {
    question: "Do you accept private insurance?",
    answer:
      "We provide detailed receipts for all paid services that you can submit to your private insurance provider for reimbursement. Many employer-sponsored health plans cover telemedicine consultations. We recommend checking with your insurer about your specific coverage.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. We believe in transparent pricing. All fees are communicated upfront before your appointment. Alberta Health covered services have no patient cost. Additional services are clearly priced on this page and confirmed at the time of booking.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, debit cards, and e-transfer payments. For Alberta Health covered services, no payment is required from the patient. For paid services, payment is processed securely through our booking platform.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "60px 0 70px",
        }}
      >
        <div
          className="container-main"
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}
        >
          <span className="badge-primary">Pricing</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Transparent{" "}
            <span style={{ color: "var(--primary)" }}>Pricing</span>
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--text)",
              marginBottom: 32,
              maxWidth: 640,
              margin: "0 auto 32px",
            }}
          >
            Quality virtual healthcare should be accessible and affordable. Most consultations
            are covered by Alberta Health Care — and for those that are not, our pricing is
            clear, fair, and communicated upfront.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
              <FiPhone style={{ width: 16, height: 16 }} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
            className="content-row"
          >
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className="card-hover"
                style={{
                  padding: 40,
                  borderRadius: 18,
                  background: card.highlight ? "#fef7ff" : "#fff",
                  border: card.highlight
                    ? "2px solid var(--primary)"
                    : "1px solid rgba(98,28,114,0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {card.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: -30,
                      background: "var(--primary)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "6px 40px",
                      transform: "rotate(45deg)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: 16,
                  }}
                >
                  {card.title}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span
                    style={{
                      fontSize: 52,
                      fontWeight: 700,
                      color: "var(--primary)",
                      lineHeight: 1,
                    }}
                  >
                    {card.price}
                  </span>
                  <span style={{ fontSize: 16, color: "var(--text)" }}>{card.unit}</span>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 24,
                  }}
                >
                  {card.description}
                </p>
                <div style={{ borderTop: "1px solid rgba(98,28,114,0.1)", paddingTop: 20, marginBottom: 28 }}>
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "var(--primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <FiCheck style={{ width: 13, height: 13, color: "#fff", strokeWidth: 3 }} />
                      </div>
                      <span style={{ fontSize: 15, color: "var(--text)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/book-appointment-alberta"
                  rel="noopener noreferrer"
                  className={card.highlight ? "btn-primary" : "btn-outline"}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Book Appointment
                  <FiArrowUpRight style={{ width: 16, height: 16 }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL SERVICES TABLE ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Additional{" "}
              <span style={{ color: "var(--primary)" }}>Services & Fees</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1px solid rgba(98,28,114,0.12)",
              overflow: "hidden",
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "16px 24px",
                background: "var(--primary)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              <span>Service</span>
              <span style={{ textAlign: "center" }}>AHC Holders</span>
              <span style={{ textAlign: "center" }}>Non-AHC</span>
            </div>
            {/* Table Rows */}
            {additionalServices.map((row, i) => (
              <div
                key={row.service}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "16px 24px",
                  borderBottom:
                    i < additionalServices.length - 1
                      ? "1px solid rgba(98,28,114,0.08)"
                      : "none",
                  background: i % 2 === 0 ? "#fff" : "#fef7ff",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--dark)" }}>
                  {row.service}
                </span>
                <span style={{ fontSize: 15, color: "var(--text)", textAlign: "center" }}>
                  {row.ahcPrice}
                </span>
                <span style={{ fontSize: 15, color: "var(--text)", textAlign: "center" }}>
                  {row.nonAhcPrice}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S COVERED ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What&apos;s Covered by{" "}
              <span style={{ color: "var(--primary)" }}>Alberta Health</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 16px" }} />
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--text)",
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              With a valid Alberta Health Care card, the following services are provided at no
              cost to you:
            </p>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            className="content-row"
          >
            {coveredByAH.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 20px",
                  background: "#fef7ff",
                  borderRadius: 12,
                  border: "1px solid rgba(98,28,114,0.1)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FiCheck style={{ width: 14, height: 14, color: "#fff", strokeWidth: 3 }} />
                </div>
                <span style={{ fontSize: 15, fontWeight: 500, color: "var(--dark)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE & PAYMENT ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
            className="content-row"
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 36,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 12,
                }}
              >
                Insurance Coverage
              </h2>
              <div className="decorative-line" />
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", marginBottom: 16 }}>
                Many private insurance and employer health benefit plans cover telemedicine
                consultations. We provide detailed receipts for all paid services that you
                can submit for reimbursement.
              </p>
              <ul className="check-list">
                <li>Detailed receipts provided for all paid services</li>
                <li>Most employer plans cover virtual care</li>
                <li>Direct billing for Alberta Health covered services</li>
              </ul>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 36,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 12,
                }}
              >
                Payment Methods
              </h2>
              <div className="decorative-line" />
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", marginBottom: 16 }}>
                We make payment simple and secure. For Alberta Health covered services,
                no payment is needed from the patient.
              </p>
              <ul className="check-list">
                <li>Visa, Mastercard, American Express</li>
                <li>Debit cards</li>
                <li>E-transfer payments</li>
                <li>Secure online payment at time of booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQAccordion items={pricingFAQs} title="Pricing FAQ" />

      {/* ===== CTA ===== */}
      <section style={{ background: "var(--primary)", padding: "80px 0", textAlign: "center" }}>
        <div className="container-main">
          <h2
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Get the Care You Deserve
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Most consultations are covered by Alberta Health Care. Book your virtual
            appointment today and experience affordable, accessible healthcare.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                background: "#fff",
                color: "var(--primary)",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Book Appointment
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                background: "transparent",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
