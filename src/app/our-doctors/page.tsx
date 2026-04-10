import Link from "next/link";
import { FiArrowUpRight, FiPhone, FiShield, FiAward, FiHeart, FiMonitor } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Our Doctors - Licensed Virtual Healthcare Providers in Alberta",
  description:
    "Meet the experienced, licensed healthcare providers at TelePlus Care. Our team of physicians specializes in family medicine, internal medicine, women's health, mental health, and more.",
  alternates: { canonical: "/our-doctors/" },
};

const doctors = [
  {
    initials: "ST",
    name: "Dr. Sarah Thompson",
    firstName: "Sarah",
    specialty: "Family Medicine",
    experience: "12 years experience",
    education: "University of Alberta, Faculty of Medicine",
    bio: "Dr. Thompson is passionate about preventive care and building long-term patient relationships. She specializes in managing chronic conditions, wellness check-ups, and providing comprehensive family healthcare through virtual consultations.",
    focus: ["General Consultations", "Chronic Disease Management", "Preventive Care", "Prescription Management"],
  },
  {
    initials: "JC",
    name: "Dr. James Chen",
    firstName: "James",
    specialty: "Internal Medicine & Diabetes",
    experience: "15 years experience",
    education: "University of Calgary, Cumming School of Medicine",
    bio: "Dr. Chen brings extensive expertise in internal medicine with a focus on diabetes and metabolic disorders. He is committed to helping patients manage chronic conditions through personalized treatment plans and lifestyle modifications.",
    focus: ["Diabetes Management", "Metabolic Disorders", "Hypertension", "Chronic Disease Programs"],
  },
  {
    initials: "PS",
    name: "Dr. Priya Sharma",
    firstName: "Priya",
    specialty: "Women's Health & Dermatology",
    experience: "10 years experience",
    education: "University of British Columbia, Faculty of Medicine",
    bio: "Dr. Sharma provides compassionate, specialized care for women at every stage of life. With additional expertise in dermatology, she offers virtual consultations for skin concerns, birth control management, and comprehensive women's health services.",
    focus: ["Women's Health", "Dermatology", "Birth Control", "Skin Conditions"],
  },
  {
    initials: "MR",
    name: "Dr. Michael Roberts",
    firstName: "Michael",
    specialty: "Mental Health & Psychiatry",
    experience: "8 years experience",
    education: "McGill University, Faculty of Medicine",
    bio: "Dr. Roberts is dedicated to breaking down barriers to mental healthcare. He provides empathetic, evidence-based psychiatric care through virtual consultations, supporting patients with anxiety, depression, ADHD, and other mental health conditions.",
    focus: ["Anxiety & Depression", "ADHD Assessment", "Psychiatric Consultations", "Stress Management"],
  },
];

const trustPoints = [
  {
    icon: FiShield,
    title: "Licensed & Regulated",
    description:
      "All our physicians are fully licensed by the College of Physicians & Surgeons of Alberta (CPSA) and maintain active standing.",
  },
  {
    icon: FiAward,
    title: "Experienced Professionals",
    description:
      "Our team brings a combined 45+ years of clinical experience across diverse medical specialties and virtual care delivery.",
  },
  {
    icon: FiHeart,
    title: "Compassionate Care",
    description:
      "We treat every patient with dignity and respect, taking the time to listen and provide personalized, patient-centered healthcare.",
  },
  {
    icon: FiMonitor,
    title: "Virtual-First Approach",
    description:
      "Our physicians are trained in telemedicine best practices, ensuring you receive the same quality of care as an in-person visit.",
  },
];

export default function OurDoctorsPage() {
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
          <span className="badge-primary">Our Doctors</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Meet Our{" "}
            <span style={{ color: "var(--primary)" }}>Healthcare Team</span>
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
            Our team of licensed physicians brings years of clinical experience and a
            shared commitment to making quality healthcare accessible to every Albertan
            through virtual care.
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

      {/* ===== DOCTOR CARDS ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
            className="service-grid"
          >
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="card-hover"
                style={{
                  padding: 36,
                  borderRadius: 18,
                  background: "#fff",
                  border: "1px solid rgba(98,28,114,0.12)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Avatar + Basic Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--primary), #8b3fa0)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 24,
                        fontWeight: 700,
                        letterSpacing: 1,
                      }}
                    >
                      {doctor.initials}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--dark)",
                        marginBottom: 4,
                        lineHeight: 1.3,
                      }}
                    >
                      {doctor.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--primary)",
                        marginBottom: 2,
                      }}
                    >
                      {doctor.specialty}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text)",
                      }}
                    >
                      {doctor.experience} &middot; {doctor.education}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: 18,
                  }}
                >
                  {doctor.bio}
                </p>

                {/* Focus Areas */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {doctor.focus.map((area) => (
                    <span
                      key={area}
                      style={{
                        display: "inline-block",
                        padding: "6px 14px",
                        background: "rgba(98,28,114,0.06)",
                        color: "var(--primary)",
                        fontSize: 13,
                        fontWeight: 600,
                        borderRadius: 119,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <div style={{ marginTop: "auto" }}>
                  <a
                    href="/book-appointment-alberta"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Book with Dr. {doctor.firstName}
                    <FiArrowUpRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY OUR DOCTORS ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Why Our <span style={{ color: "var(--primary)" }}>Doctors</span>
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
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
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
                    {point.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                    {point.description}
                  </p>
                </div>
              );
            })}
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
            Ready to Meet Your Doctor?
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
            Book a virtual consultation with one of our experienced physicians today.
            No referral needed — quality healthcare is just a click away.
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
