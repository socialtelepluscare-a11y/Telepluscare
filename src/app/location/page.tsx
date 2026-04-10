import Link from "next/link";
import { FiArrowUpRight, FiPhone, FiMapPin } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Service Areas - Virtual Healthcare Across Alberta",
  description:
    "TelePlus Care provides virtual healthcare services across Alberta including Edmonton, Calgary, Red Deer, Lethbridge, Fort McMurray, Airdrie, and more. Book today!",
  alternates: { canonical: "/location/" },
};

interface CityInfo {
  name: string;
  slug: string;
  serviceLinks: { label: string; href: string }[];
}

const cities: CityInfo[] = [
  {
    name: "Edmonton",
    slug: "edmonton",
    serviceLinks: [
      { label: "Virtual Walk-in Clinic", href: "/virtual-walk-in-clinic-edmonton" },
      { label: "Diabetes Doctor", href: "/best-diabetes-doctor-in-edmonton" },
      { label: "Doctor's Notes", href: "/online-doctors-notes-in-edmonton" },
      { label: "Prescriptions & Refills", href: "/online-prescriptions-and-refills-in-edmonton" },
      { label: "UTI Appointment", href: "/uti-appointment-in-edmonton" },
      { label: "Birth Control Services", href: "/online-birth-control-services-in-edmonton" },
      { label: "Dermatologist", href: "/best-dermatologist-in-edmonton" },
      { label: "Driving Medical Exam", href: "/driving-medical-examination-appointment-in-edmonton" },
      { label: "Botox Treatment", href: "/best-botox-treatment-in-edmonton" },
      { label: "Injectable Treatments", href: "/best-injectable-treatments-in-edmonton" },
      { label: "Weight Loss Clinic", href: "/weight-loss-clinic-in-edmonton" },
      { label: "Mental Health Services", href: "/mental-health-counselling-therapy-services-in-edmonton" },
    ],
  },
  {
    name: "Calgary",
    slug: "calgary",
    serviceLinks: [
      { label: "Diabetes Doctor", href: "/best-diabetes-doctor-in-calgary" },
      { label: "Doctor's Note", href: "/online-doctors-note-in-calgary" },
      { label: "Prescriptions & Refills", href: "/online-prescriptions-and-refills-in-calgary" },
      { label: "UTI Appointment", href: "/uti-appointment-in-calgary" },
      { label: "Birth Control Consultation", href: "/birth-control-consultation-online-in-calgary" },
      { label: "Mental Health Services", href: "/mental-health-counselling-therapy-services-in-calgary" },
      { label: "Lifestyle Modifications for Diabetes", href: "/lifestyle-modifications-for-diabetes-in-calgary" },
      { label: "Hair Loss Treatment", href: "/hair-loss-treatment-clinic-in-calgary" },
      { label: "PRP Treatment", href: "/prp-treatment-in-calgary" },
    ],
  },
  {
    name: "Red Deer",
    slug: "red-deer",
    serviceLinks: [
      { label: "Birth Control Consultation", href: "/birth-control-consultation-online-in-red-deer" },
      { label: "UTI Appointment", href: "/uti-appointment-in-red-deer" },
      { label: "Doctor's Note", href: "/doctors-note-in-red-deer" },
      { label: "Prescriptions & Refills", href: "/online-prescriptions-and-refills-in-red-dear" },
      { label: "Weight Loss Clinic", href: "/weight-loss-clinic-in-red-deer" },
    ],
  },
  {
    name: "Lethbridge",
    slug: "lethbridge",
    serviceLinks: [
      { label: "UTI Appointment", href: "/uti-appointment-in-lethbridge" },
      { label: "Doctor's Notes", href: "/online-doctors-notes-in-lethbridge" },
    ],
  },
  {
    name: "Fort McMurray",
    slug: "fort-mcmurray",
    serviceLinks: [
      { label: "Virtual Walk-in Clinic", href: "/virtual-walk-in-clinic-fort-mcmurray-telepluscare" },
      { label: "UTI Appointment", href: "/uti-appointment-in-fort-mcmurray" },
      { label: "Doctor's Note", href: "/online-doctors-note-in-fort-mcmurray" },
      { label: "Prescriptions & Refills", href: "/online-prescriptions-and-refills-in-fort-mcmurray" },
    ],
  },
  {
    name: "Airdrie",
    slug: "airdrie",
    serviceLinks: [
      { label: "Diabetes Doctor", href: "/best-diabetes-doctor-in-airdrie" },
      { label: "Doctor's Note", href: "/get-your-online-doctors-note-in-airdrie" },
    ],
  },
  {
    name: "St. Albert",
    slug: "st-albert",
    serviceLinks: [
      { label: "Doctor's Note", href: "/online-doctor-note-in-st-albert" },
    ],
  },
  {
    name: "Sherwood Park",
    slug: "sherwood-park",
    serviceLinks: [
      { label: "Doctor's Note", href: "/online-doctor-note-in-sherwood-park" },
    ],
  },
  {
    name: "Medicine Hat",
    slug: "medicine-hat",
    serviceLinks: [
      { label: "Doctor's Note", href: "/online-doctor-note-in-medicine-hat" },
    ],
  },
  {
    name: "Grande Prairie",
    slug: "grande-prairie",
    serviceLinks: [
      { label: "Doctor's Note", href: "/online-doctor-note-in-grande-prairie" },
    ],
  },
  {
    name: "Leduc",
    slug: "leduc",
    serviceLinks: [
      { label: "Doctor's Note", href: "/online-doctors-note-in-leduc" },
      { label: "Prescriptions & Refills", href: "/online-prescriptions-and-refills-in-leduc" },
      { label: "Driving Medical Exam", href: "/driving-medical-examination-appointment-in-leduc" },
      { label: "Lifestyle Modifications for Diabetes", href: "/lifestyle-modifications-for-diabetes-in-leduc" },
    ],
  },
  {
    name: "Spruce Grove",
    slug: "spruce-grove",
    serviceLinks: [],
  },
];

const provinceWideServices = [
  { label: "General Health", href: "/general-health" },
  { label: "Diabetes & Chronic Disease", href: "/diabetes-chronic-disease" },
  { label: "Women's Health", href: "/womens-health" },
  { label: "Men's Health", href: "/mens-health" },
  { label: "Skin Conditions", href: "/skin-conditions" },
  { label: "Aesthetic Services", href: "/aesthetic" },
  { label: "Prescription Refills", href: "/prescription-refill" },
  { label: "Weight Loss Programs", href: "/weight-loss" },
  { label: "Mental Health", href: "/mental-health" },
  { label: "Prescriptions in Alberta", href: "/online-prescriptions-and-refills-in-alberta" },
  { label: "UTI Treatment in Alberta", href: "/uti-appointment-in-alberta" },
];

export default function LocationPage() {
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
          style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}
        >
          <span className="badge-primary">Our Service Areas</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Virtual Healthcare Across{" "}
            <span style={{ color: "var(--primary)" }}>Alberta</span>
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--text)",
              marginBottom: 32,
            }}
          >
            TelePlus Care provides convenient, accessible virtual healthcare to patients across
            Alberta. Whether you live in a major city or a rural community, our licensed healthcare
            providers are just a click away. No travel, no waiting rooms — quality care from
            wherever you are.
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

      {/* ===== MAP ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Communities We <span style={{ color: "var(--primary)" }}>Serve</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
            <p
              className="body-text"
              style={{ maxWidth: 700, margin: "16px auto 0", textAlign: "center" }}
            >
              Our telemedicine platform connects you with healthcare providers from anywhere in
              Alberta. Click on a city below to see available services.
            </p>
          </div>
          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(98,28,114,0.1)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              marginBottom: 48,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4800000!2d-115.0!3d53.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5309b282a82419b5%3A0xb0a9479a409b8e!2sAlberta%2C+Canada!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TelePlus Care Service Areas in Alberta"
            />
          </div>

          {/* City quick-links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`#${city.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  background: "#fef7ff",
                  borderRadius: 119,
                  border: "1px solid rgba(98,28,114,0.15)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--primary)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <FiMapPin style={{ width: 14, height: 14 }} />
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CITY SECTIONS ===== */}
      {cities.map((city, index) => (
        <section
          key={city.slug}
          id={city.slug}
          style={{
            background: index % 2 === 0 ? "#fef7ff" : "#fff",
            padding: "64px 0",
          }}
        >
          <div className="container-main">
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FiMapPin style={{ width: 20, height: 20, color: "#fff" }} />
              </div>
              <div>
                <h2
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "var(--dark)",
                    lineHeight: 1.2,
                  }}
                >
                  {city.name}
                </h2>
                <p style={{ fontSize: 15, color: "var(--text)", marginTop: 4 }}>
                  Virtual Healthcare Services
                </p>
              </div>
            </div>
            <div className="decorative-line" />

            {city.serviceLinks.length > 0 ? (
              <>
                <p className="body-text" style={{ marginBottom: 20 }}>
                  TelePlus Care serves patients in {city.name} with the following virtual
                  healthcare services:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 12,
                  }}
                  className="service-grid"
                >
                  {city.serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="service-card"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: index % 2 === 0 ? "#fff" : "#fef7ff",
                        borderRadius: 12,
                        padding: "14px 18px",
                        border: "1px solid rgba(98,28,114,0.1)",
                        borderLeft: "3px solid var(--primary)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--dark)",
                      }}
                    >
                      <FiArrowUpRight
                        style={{
                          width: 16,
                          height: 16,
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <p className="body-text">
                TelePlus Care serves patients in {city.name} with all of our province-wide virtual
                healthcare services. Book an appointment to connect with a licensed provider today.
              </p>
            )}
          </div>
        </section>
      ))}

      {/* ===== PROVINCE-WIDE SERVICES ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Province-Wide{" "}
              <span style={{ color: "var(--primary)" }}>Services</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
            <p
              className="body-text"
              style={{ maxWidth: 700, margin: "16px auto 0", textAlign: "center" }}
            >
              These services are available to all Albertans, regardless of where you live in the
              province.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
            className="service-grid"
          >
            {provinceWideServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="service-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "16px 20px",
                  border: "1px solid rgba(98,28,114,0.1)",
                  borderLeft: "4px solid var(--primary)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <FiArrowUpRight
                  style={{
                    width: 16,
                    height: 16,
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--dark)" }}>
                  {svc.label}
                </span>
              </Link>
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
            Healthcare Without Boundaries
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
            No matter where you are in Alberta, TelePlus Care brings licensed healthcare providers
            to you. Book your virtual appointment today — no referral needed.
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
