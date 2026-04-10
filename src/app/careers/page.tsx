import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the TelePlus Care team. Explore career opportunities in virtual healthcare across Alberta — flexible hours, remote work, and meaningful impact.",
  alternates: { canonical: "/careers/" },
};

const benefits = [
  {
    icon: "\uD83C\uDFE0",
    title: "Virtual Work Environment",
    description:
      "Work from anywhere in Alberta. Our fully virtual model means you can deliver quality healthcare from the comfort of your home.",
  },
  {
    icon: "\u23F0",
    title: "Flexible Hours",
    description:
      "We understand the importance of work-life balance. Choose schedules that fit your lifestyle while making a difference in patients\u2019 lives.",
  },
  {
    icon: "\u2764\uFE0F",
    title: "Healthcare Impact",
    description:
      "Be part of a team that is transforming how Albertans access healthcare. Every consultation you provide improves someone\u2019s quality of life.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Professional Growth",
    description:
      "Access continuing education opportunities and stay at the forefront of telehealth innovation in Canada.",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Collaborative Team",
    description:
      "Join a supportive, multidisciplinary team of physicians, nurse practitioners, and allied health professionals dedicated to patient care.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Comprehensive Support",
    description:
      "We provide the technology, administrative support, and resources you need so you can focus on what matters most — your patients.",
  },
];

export default function CareersPage() {
  return (
    <section
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #621C72 0%, #4e1659 100%)",
          padding: "100px 20px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Join Our Team
        </h1>
        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Help us reshape the future of healthcare in Alberta. At TelePlus Care,
          we believe that quality medical care should be accessible to everyone,
          everywhere.
        </p>
      </div>

      {/* About Working Here */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#1E293B",
              marginBottom: 20,
            }}
          >
            Why Work at <span style={{ color: "#621C72" }}>TelePlus Care</span>?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#4A4A4A",
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            TelePlus Care is a leading virtual healthcare provider in Alberta,
            offering convenient, high-quality medical services to patients across
            the province. We are always looking for passionate healthcare
            professionals who share our vision of making healthcare more
            accessible through technology.
          </p>
          <p
            style={{
              fontSize: 17,
              color: "#4A4A4A",
              lineHeight: 1.8,
            }}
          >
            Whether you are a physician, nurse practitioner, mental health
            professional, or administrative specialist, TelePlus Care offers a
            dynamic and supportive environment where your skills can make a real
            difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 28,
            marginTop: 60,
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                background: "#FCFAFD",
                borderRadius: 18,
                padding: 32,
                border: "1px solid rgba(98,28,114,0.12)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#621C72",
                  marginBottom: 10,
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#4A4A4A",
                  lineHeight: 1.7,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: 80,
            background: "linear-gradient(135deg, #621C72 0%, #4e1659 100%)",
            borderRadius: 18,
            padding: "60px 40px",
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Ready to Make a Difference?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              margin: "0 auto 30px",
              lineHeight: 1.7,
            }}
          >
            We would love to hear from you. Send us your resume and a brief
            introduction about yourself. Let us know how you can contribute to
            our mission of accessible healthcare.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="mailto:careers@telepluscare.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: "#fff",
                color: "#621C72",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              careers@telepluscare.com
            </Link>
            <Link
              href="mailto:info@telepluscare.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                background: "transparent",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              info@telepluscare.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
