import Link from "next/link";
import JotFormPCIEmbed from "@/components/ui/JotFormPCIEmbed";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiClock,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us - Virtual Healthcare Support & Inquiries",
  description:
    "Get in touch with TelePlus Care for telemedicine support, appointment bookings, and healthcare inquiries. Call 587-442-4898 or email booking@telepluscare.com.",
  alternates: { canonical: "/contact-us/" },
};

const contactCards = [
  {
    icon: FiPhone,
    title: "Phone (Alberta)",
    detail: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    subDetail: null,
  },
  {
    icon: FiPhone,
    title: "Toll-Free (Outside Alberta)",
    detail: siteConfig.phoneSecondary,
    href: `tel:${siteConfig.phoneSecondaryRaw}`,
    subDetail: null,
  },
  {
    icon: FiMail,
    title: "Booking Email",
    detail: siteConfig.emailBooking,
    href: `mailto:${siteConfig.emailBooking}`,
    subDetail: null,
  },
  {
    icon: FiMail,
    title: "General Inquiries",
    detail: siteConfig.emailInfo,
    href: `mailto:${siteConfig.emailInfo}`,
    subDetail: null,
  },
  {
    icon: FiPrinter,
    title: "Fax",
    detail: siteConfig.fax,
    href: null,
    subDetail: null,
  },
  {
    icon: FiClock,
    title: "Clinic Hours",
    detail: siteConfig.hours.weekday,
    href: null,
    subDetail: siteConfig.hours.weekend,
  },
];

export default function ContactUsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "60px 0 70px",
        }}
      >
        <div className="container-main" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <span className="badge-primary">Contact Us</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Get in Touch with{" "}
            <span style={{ color: "var(--primary)" }}>TelePlus Care</span>
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
            Have questions about our virtual healthcare services? Need to book an appointment or
            request information? Our team is here to help. Reach out to us through any of the
            channels below.
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

      {/* ===== CONTACT CARDS ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              How to <span style={{ color: "var(--primary)" }}>Reach Us</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="service-grid"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div
                  className="card-hover"
                  style={{
                    padding: 28,
                    borderRadius: 18,
                    background: "#fff",
                    border: "1px solid rgba(98,28,114,0.1)",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "block",
                    height: "100%",
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
                      margin: "0 auto 16px",
                    }}
                  >
                    <Icon style={{ width: 24, height: 24, color: "#fff" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: card.href ? "var(--primary)" : "var(--dark)",
                      lineHeight: 1.5,
                      marginBottom: card.subDetail ? 4 : 0,
                    }}
                  >
                    {card.detail}
                  </p>
                  {card.subDetail && (
                    <p
                      style={{
                        fontSize: 15,
                        color: "var(--text)",
                        lineHeight: 1.5,
                      }}
                    >
                      {card.subDetail}
                    </p>
                  )}
                </div>
              );

              if (card.href) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {inner}
                  </a>
                );
              }
              return <div key={card.title}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ===== ADDRESS & MAP ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main">
          <div className="content-row" style={{ display: "flex", alignItems: "flex-start", gap: 48 }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <h2 className="section-title">
                Our <span style={{ color: "var(--primary)" }}>Location</span>
              </h2>
              <div className="decorative-line" />
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
                  <FiMapPin
                    style={{
                      width: 22,
                      height: 22,
                      color: "var(--primary)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "var(--dark)",
                        marginBottom: 4,
                      }}
                    >
                      TelePlus Care Clinic
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                      17803 65 St NW, Edmonton, AB T5Z 3K6, Canada
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
                  <FiClock
                    style={{
                      width: 22,
                      height: 22,
                      color: "var(--primary)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "var(--dark)",
                        marginBottom: 4,
                      }}
                    >
                      Clinic Hours
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                      {siteConfig.hours.weekday}
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                      {siteConfig.hours.weekend}
                    </p>
                    <p style={{ fontSize: 14, color: "var(--text)", marginTop: 4, fontStyle: "italic" }}>
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <FiPhone
                    style={{
                      width: 22,
                      height: 22,
                      color: "var(--primary)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "var(--dark)",
                        marginBottom: 4,
                      }}
                    >
                      Virtual Appointments
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                      Available province-wide across Alberta. Book online or call us to schedule
                      your virtual consultation from anywhere.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/book-appointment-alberta"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: 8 }}
              >
                Book Appointment
                <FiArrowUpRight style={{ width: 16, height: 16 }} />
              </a>
            </div>

            <div style={{ flex: 1, minWidth: 300 }}>
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(98,28,114,0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.123!2d-113.4909!3d53.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEdmonton%2C+AB!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TelePlus Care Location - Edmonton, Alberta"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM - Alberta ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Book an <span style={{ color: "var(--primary)" }}>Appointment</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
            <p style={{ fontSize: 16, color: "var(--text)", marginTop: 16 }}>
              Fill out the form below to request a virtual appointment with our healthcare team.
            </p>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "40px 32px",
                boxShadow: "0 4px 24px rgba(98,28,114,0.08)",
                border: "1px solid rgba(98,28,114,0.06)",
              }}
            >
              <JotFormPCIEmbed formId="251450924812252" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Quick <span style={{ color: "var(--primary)" }}>Links</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="service-grid"
          >
            {[
              {
                title: "Book an Appointment",
                description: "Schedule your virtual consultation with a licensed healthcare provider.",
                href: "/book-appointment-alberta",
                external: true,
              },
              {
                title: "Our Services",
                description: "Explore our comprehensive range of virtual healthcare services.",
                href: "/services/general-health",
                external: false,
              },
              {
                title: "FAQs",
                description: "Find answers to commonly asked questions about our telehealth services.",
                href: "/faq",
                external: false,
              },
              {
                title: "About Us",
                description: "Learn about our mission, vision, and healthcare team.",
                href: "/about",
                external: false,
              },
              {
                title: "Locations We Serve",
                description: "See all the Alberta communities we serve virtually.",
                href: "/location",
                external: false,
              },
              {
                title: "WhatsApp",
                description: "Message us on WhatsApp for quick inquiries and support.",
                href: siteConfig.whatsapp,
                external: true,
              },
            ].map((link) => {
              const Tag = link.external ? "a" : Link;
              const extraProps = link.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={link.title}
                  href={link.href}
                  {...extraProps}
                  className="service-card"
                  style={{
                    display: "block",
                    background: "#fff",
                    borderRadius: 14,
                    padding: 24,
                    border: "1px solid rgba(98,28,114,0.1)",
                    borderLeft: "4px solid var(--primary)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 8,
                    }}
                  >
                    {link.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text)" }}>
                    {link.description}
                  </p>
                </Tag>
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
            Need Healthcare Support?
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
            Our team is ready to assist you. Book a virtual appointment or call us today for
            convenient, expert healthcare from the comfort of your home.
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
