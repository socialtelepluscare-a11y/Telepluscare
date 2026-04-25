import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiPhone, FiHeart, FiUsers, FiShield, FiMonitor } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "About Us - Virtual Healthcare Services in Alberta",
  description:
    "Learn about TelePlus Care's mission to deliver accessible, high-quality virtual healthcare across Alberta. Meet our team of licensed healthcare providers.",
  alternates: { canonical: "/about/" },
};

const values = [
  {
    icon: FiHeart,
    title: "Patient-Centered Care",
    description:
      "Every decision we make is guided by what is best for our patients. We listen, we understand, and we deliver care that is personalized to your unique health needs.",
  },
  {
    icon: FiMonitor,
    title: "Innovation & Technology",
    description:
      "We leverage cutting-edge telemedicine technology to make healthcare accessible from anywhere in Alberta. Our secure platform brings quality care directly to your home.",
  },
  {
    icon: FiShield,
    title: "Privacy & Security",
    description:
      "Your health information is protected by strict privacy regulations including PIPEDA and Alberta's HIA. We use encrypted platforms for all consultations and records.",
  },
  {
    icon: FiUsers,
    title: "Inclusive Access",
    description:
      "Healthcare should be available to everyone, regardless of location. We serve patients across Alberta, from major cities to rural communities, with the same standard of care.",
  },
];

const stats = [
  { number: "10,000+", label: "Patients Served" },
  { number: "50+", label: "Healthcare Providers" },
  { number: "100+", label: "Communities Reached" },
  { number: "4.8/5", label: "Patient Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "60px 0 70px",
        }}
      >
        <div className="container-main">
          <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <span className="badge-primary">About Us</span>
              <h1
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--dark)",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Redefining{" "}
                <span style={{ color: "var(--primary)" }}>Virtual Healthcare</span> in Alberta
              </h1>
              <div className="decorative-line" />
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "var(--text)",
                  marginBottom: 28,
                  maxWidth: 520,
                }}
              >
                TelePlus Care is a modern healthcare solution, offering convenient virtual medical
                care designed for everyone across Alberta. We combine licensed healthcare providers
                with innovative telemedicine technology to bring quality care directly to you.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
            <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/Group-1.png"
                alt="TelePlus Care Virtual Healthcare Team"
                width={560}
                height={420}
                style={{ borderRadius: 18, maxWidth: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
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
                background: "#fef7ff",
                borderRadius: 18,
                padding: 40,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 12,
                }}
              >
                Our Mission
              </h2>
              <div className="decorative-line" />
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)" }}>
                To make high-quality healthcare accessible, convenient, and affordable for every
                Albertan. We believe that no one should have to choose between their health and their
                daily responsibilities. Through our secure virtual platform, we bring licensed
                healthcare providers directly to our patients — eliminating long wait times, travel
                barriers, and geographic limitations.
              </p>
            </div>
            <div
              style={{
                background: "#fef7ff",
                borderRadius: 18,
                padding: 40,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 12,
                }}
              >
                Our Vision
              </h2>
              <div className="decorative-line" />
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)" }}>
                To become Alberta&apos;s most trusted virtual healthcare provider, setting the
                standard for accessible, patient-centered telemedicine. We envision a future where
                every person in the province can access expert medical care within minutes, from
                anywhere — whether they live in downtown Edmonton, rural Alberta, or anywhere in
                between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ background: "var(--primary)", padding: "60px 0" }}>
        <div className="container-main">
          <div
            className="stats-row"
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                    marginBottom: 4,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Our Core <span style={{ color: "var(--primary)" }}>Values</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
            className="service-grid"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-hover"
                  style={{
                    padding: 32,
                    borderRadius: 18,
                    background: "#fff",
                    border: "1px solid rgba(98,28,114,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon style={{ width: 24, height: 24, color: "#fff" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 10,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
          <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <h2 className="section-title">
                Meet Our <span style={{ color: "var(--primary)" }}>Healthcare Team</span>
              </h2>
              <div className="decorative-line" />
              <p className="body-text" style={{ marginBottom: 16 }}>
                Our team consists of licensed physicians, nurse practitioners, and healthcare
                professionals who are passionate about making healthcare more accessible. Each
                member of our team brings years of clinical experience combined with a commitment
                to compassionate, patient-centered virtual care.
              </p>
              <p className="body-text" style={{ marginBottom: 24 }}>
                Every provider at TelePlus Care is fully licensed to practice in Alberta and
                undergoes continuous training in telemedicine best practices. We take pride in
                building long-term relationships with our patients and providing care that goes
                beyond just treating symptoms.
              </p>
              <ul className="check-list">
                <li>Licensed physicians and nurse practitioners</li>
                <li>Specialists in chronic disease management</li>
                <li>Experienced in virtual care delivery</li>
                <li>Multilingual providers available</li>
                <li>Committed to ongoing professional development</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
              <Image
                src="/images/about-health-wellness.png"
                alt="TelePlus Care Healthcare and Wellness"
                width={560}
                height={620}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED DOCTOR ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge-primary">Meet Our Lead Physician</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: 12 }}>
              Led by <span style={{ color: "var(--primary)" }}>Dr. Maher Jerudi, MD</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48, maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
              <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 32px rgba(98,28,114,0.15)", maxWidth: 460 }}>
                <Image
                  src="/images/dr-maher-jerudi.jpg"
                  alt="Dr. Maher Jerudi, MD - American Board Certified Internal Medicine & Obesity Medicine"
                  width={460}
                  height={620}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: "var(--dark)", marginBottom: 12 }}>
                Dr. Maher Jerudi, MD
              </h3>
              <ul className="check-list" style={{ marginBottom: 24 }}>
                <li>American Board Certified Internal Medicine</li>
                <li>American Board Certified Obesity Medicine</li>
                <li>Fellowship in Stroke &amp; Cerebrovascular Disease</li>
                <li>Decades of clinical experience in primary and chronic care</li>
                <li>Specializing in metabolic health, weight management, and preventive medicine</li>
              </ul>
              <p className="body-text" style={{ marginBottom: 24 }}>
                Dr. Jerudi leads our medical team with a patient-first approach, combining evidence-based medicine with personalized virtual care. His expertise spans internal medicine, obesity medicine, and stroke prevention &mdash; bringing world-class care directly to patients across Alberta.
              </p>
              <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Why Choose <span style={{ color: "var(--primary)" }}>TelePlus Care</span>?
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="content-row">
            {[
              "No referral needed for most services",
              "Same-day virtual appointments available",
              "Prescriptions sent directly to your pharmacy",
              "Secure, PIPEDA-compliant platform",
              "Serving all communities across Alberta",
              "Extended hours including weekends",
              "Chronic disease management programs",
              "Affordable and transparent pricing",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 20px",
                  background: "#fff",
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
                  <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{"\u2713"}</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 500, color: "var(--dark)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Ready to Experience Better Healthcare?
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
            Join thousands of Albertans who trust TelePlus Care for convenient, expert virtual
            healthcare. No referral needed — book your appointment today.
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
