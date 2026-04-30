import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Open Positions",
  description:
    "Join the TelePlus Care team. Open roles for pharmacist assistants, administrators, medical office coordinators, and other healthcare support staff across Alberta.",
  alternates: { canonical: "/careers/" },
};

const benefits = [
  {
    icon: "🏠",
    title: "Virtual Work Environment",
    description:
      "Work from anywhere in Alberta. Our fully virtual model means you can deliver quality healthcare from the comfort of your home.",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description:
      "We understand the importance of work-life balance. Choose schedules that fit your lifestyle while making a difference in patients’ lives.",
  },
  {
    icon: "❤️",
    title: "Healthcare Impact",
    description:
      "Be part of a team that is transforming how Albertans access healthcare. Every consultation you provide improves someone’s quality of life.",
  },
  {
    icon: "📈",
    title: "Professional Growth",
    description:
      "Access continuing education opportunities and stay at the forefront of telehealth innovation in Canada.",
  },
  {
    icon: "🤝",
    title: "Collaborative Team",
    description:
      "Join a supportive, multidisciplinary team of physicians, nurse practitioners, and allied health professionals dedicated to patient care.",
  },
  {
    icon: "🛡️",
    title: "Comprehensive Support",
    description:
      "We provide the technology, administrative support, and resources you need so you can focus on what matters most — your patients.",
  },
];

const openPositions = [
  {
    title: "Pharmacist Assistant",
    type: "Full-time / Part-time",
    location: "Remote — Alberta",
    description:
      "Support our virtual pharmacy operations by helping patients understand prescriptions, coordinating refills, and liaising with community pharmacies. Pharmacy technician training or relevant experience preferred.",
    responsibilities: [
      "Assist patients with prescription questions and refill coordination",
      "Verify prescription details and patient information",
      "Liaise with community pharmacies across Alberta",
      "Document patient interactions in our secure platform",
    ],
    subject: "Application — Pharmacist Assistant Role",
  },
  {
    title: "Healthcare Administrator",
    type: "Full-time",
    location: "Remote — Alberta",
    description:
      "Oversee daily virtual clinic operations, scheduling, billing workflows, and team coordination. Ideal for someone with healthcare administration or operations management experience.",
    responsibilities: [
      "Manage daily clinic operations and scheduling",
      "Oversee billing workflows and AHCIP claim processing",
      "Coordinate team workflows across physicians and support staff",
      "Implement process improvements for patient experience",
    ],
    subject: "Application — Healthcare Administrator Role",
  },
  {
    title: "Medical Office Coordinator",
    type: "Full-time / Part-time",
    location: "Remote — Alberta",
    description:
      "Be the first point of contact for patients booking virtual appointments. Manage intake forms, follow-up reminders, and patient communication across our service lines.",
    responsibilities: [
      "Handle patient intake and appointment scheduling",
      "Manage email and phone inquiries with empathy and accuracy",
      "Send appointment reminders and follow-up communications",
      "Maintain patient records confidentially",
    ],
    subject: "Application — Medical Office Coordinator Role",
  },
  {
    title: "Patient Care Coordinator",
    type: "Full-time / Part-time",
    location: "Remote — Alberta",
    description:
      "Guide patients through their virtual healthcare journey from booking to follow-up. Strong communication skills and a passion for patient-centred care required.",
    responsibilities: [
      "Triage incoming patient inquiries and route to appropriate provider",
      "Follow up with patients after consultations",
      "Coordinate referrals to specialists or in-person clinics",
      "Track patient outcomes and satisfaction",
    ],
    subject: "Application — Patient Care Coordinator Role",
  },
  {
    title: "Virtual Receptionist",
    type: "Part-time",
    location: "Remote — Alberta",
    description:
      "Friendly, organized professional to manage front-desk operations virtually. Answer calls, respond to chat, and ensure patients are supported from the moment they reach out.",
    responsibilities: [
      "Answer patient calls, emails, and live chat inquiries",
      "Schedule appointments and manage calendars",
      "Provide accurate service information and pricing",
      "Maintain a warm, professional first impression",
    ],
    subject: "Application — Virtual Receptionist Role",
  },
  {
    title: "Marketing & Content Specialist",
    type: "Full-time / Contract",
    location: "Remote — Alberta",
    description:
      "Help us grow our reach across Canada with content marketing, social media, and SEO. Experience in healthcare or wellness brands is a plus.",
    responsibilities: [
      "Create educational content for blog, email, and social channels",
      "Manage SEO optimization across our service pages",
      "Run paid social and search campaigns",
      "Track engagement metrics and iterate on content strategy",
    ],
    subject: "Application — Marketing & Content Specialist Role",
  },
];

function applyMailto(subject: string) {
  return `mailto:info@telepluscare.com?subject=${encodeURIComponent(subject)}`;
}

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
          padding: "clamp(56px, 9vw, 100px) clamp(16px, 4vw, 20px) clamp(48px, 7vw, 80px)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 5.5vw, 48px)",
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
            fontSize: "clamp(15px, 1.8vw, 20px)",
            color: "rgba(255,255,255,0.9)",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Help us reshape the future of healthcare in Alberta. At TelePlus Care,
          we believe quality medical care should be accessible to everyone,
          everywhere.
        </p>
      </div>

      {/* About Working Here */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(48px, 7vw, 80px) clamp(16px, 4vw, 20px)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#1E293B",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Why Work at <span style={{ color: "#621C72" }}>TelePlus Care</span>?
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "#4A4A4A",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            TelePlus Care is a leading virtual healthcare provider in Alberta,
            offering convenient, high-quality medical services to patients across
            the province. We are always looking for passionate professionals who
            share our vision of making healthcare more accessible through
            technology.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "#4A4A4A",
              lineHeight: 1.7,
            }}
          >
            Whether you are a pharmacist assistant, administrator, patient care
            coordinator, or marketing professional, TelePlus Care offers a
            dynamic and supportive environment where your skills can make a real
            difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 28,
            marginTop: "clamp(40px, 6vw, 60px)",
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                background: "#FCFAFD",
                borderRadius: 18,
                padding: "clamp(20px, 3vw, 32px)",
                border: "1px solid rgba(98,28,114,0.12)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: "clamp(17px, 1.8vw, 20px)",
                  fontWeight: 700,
                  color: "#621C72",
                  marginBottom: 10,
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: "clamp(14px, 1.4vw, 15px)",
                  color: "#4A4A4A",
                  lineHeight: 1.7,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== OPEN POSITIONS ===== */}
        <div style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(98,28,114,0.08)",
                color: "#621C72",
                padding: "6px 18px",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Open Positions
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 4.5vw, 36px)",
                fontWeight: 700,
                color: "#1E293B",
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              Current <span style={{ color: "#621C72" }}>Job Openings</span>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 17px)",
                color: "#4A4A4A",
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Apply via email — send your resume and a brief cover letter to{" "}
              <strong style={{ color: "#621C72" }}>info@telepluscare.com</strong>{" "}
              with the role title in the subject line.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {openPositions.map((job) => (
              <div
                key={job.title}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "clamp(20px, 3vw, 32px)",
                  border: "1px solid rgba(98,28,114,0.15)",
                  borderLeft: "4px solid #621C72",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxShadow: "0 2px 12px rgba(98,28,114,0.04)",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(18px, 1.9vw, 22px)",
                    fontWeight: 700,
                    color: "#1E293B",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {job.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#621C72",
                      background: "rgba(98,28,114,0.08)",
                      padding: "4px 12px",
                      borderRadius: 100,
                    }}
                  >
                    {job.type}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#5e7a90",
                      background: "rgba(94,122,144,0.08)",
                      padding: "4px 12px",
                      borderRadius: 100,
                    }}
                  >
                    {job.location}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "clamp(14px, 1.4vw, 15px)",
                    color: "#4A4A4A",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {job.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {job.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "clamp(13px, 1.3vw, 14px)",
                        color: "#4A4A4A",
                        paddingLeft: 18,
                        position: "relative",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#621C72",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
                <a
                  href={applyMailto(job.subject)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: "auto",
                    padding: "12px 24px",
                    background: "#621C72",
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 600,
                    borderRadius: 100,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(56px, 8vw, 80px)",
            background: "linear-gradient(135deg, #621C72 0%, #4e1659 100%)",
            borderRadius: 18,
            padding: "clamp(36px, 6vw, 60px) clamp(20px, 4vw, 40px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Don&apos;t See Your Role?
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              margin: "0 auto 30px",
              lineHeight: 1.7,
            }}
          >
            We&apos;re always open to hearing from talented healthcare and
            operations professionals. Send us your resume and tell us how you
            can contribute to our mission of accessible healthcare.
          </p>
          <Link
            href="mailto:info@telepluscare.com?subject=General%20Application"
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
            info@telepluscare.com
          </Link>
        </div>
      </div>
    </section>
  );
}
