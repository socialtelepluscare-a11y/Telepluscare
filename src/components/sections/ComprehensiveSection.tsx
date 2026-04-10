import { FiArrowUpRight } from "react-icons/fi";

export default function ComprehensiveSection() {
  return (
    <section style={{ background: "#fef7ff", padding: "80px 0" }}>
      <div className="container-main" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--dark)", marginBottom: 16, lineHeight: 1.2 }}>
          Comprehensive <span style={{ color: "var(--primary)" }}>Virtual Healthcare</span> Services in Alberta
        </h2>
        <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28 }}>
          TelePlus Care offers a diverse range of telemedicine services in Alberta to meet the
          health needs of every Canadian. From primary care to specialized mental health and
          aesthetic services, our virtual healthcare in Alberta platform is designed to deliver
          quality care through online medical consultations and secure telehealth solutions.
        </p>
        <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
          Book Your Appointment Now
          <FiArrowUpRight style={{ width: 16, height: 16 }} />
        </a>
      </div>
    </section>
  );
}
