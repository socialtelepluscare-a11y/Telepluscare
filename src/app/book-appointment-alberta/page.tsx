import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";
import JotFormPCIEmbed from "@/components/ui/JotFormPCIEmbed";

export const metadata = {
  title: "Book Appointment Alberta",
  description:
    "Book your virtual healthcare appointment with TelePlus Care. Licensed Alberta physicians available for same-day consultations.",
  robots: "noindex",
  alternates: { canonical: "/book-appointment-alberta/" },
};

export default function BookAppointmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #621C72 0%, #8B3A9F 50%, #621C72 100%)",
          padding: "56px 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div className="container-main" style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              padding: "6px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Book Online
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Book Your Appointment
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            Fill out the form below to book a virtual healthcare appointment with a licensed Alberta physician. Same-day appointments available.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: "#fff", padding: "20px 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { icon: <FiShield size={18} />, text: "Licensed Alberta Physicians" },
              { icon: <FiClock size={18} />, text: "Same-Day Appointments" },
              { icon: <FiCheckCircle size={18} />, text: "Alberta Health Covered" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "var(--dark)" }}>
                <span style={{ color: "var(--primary)" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="booking-form-section" style={{ background: "#fef7ff", padding: "48px 0 80px" }}>
        <div className="booking-form-wrap">
          <div className="booking-form-card">
            <JotFormPCIEmbed formId="251450924812252" />
          </div>
        </div>
      </section>
    </>
  );
}
