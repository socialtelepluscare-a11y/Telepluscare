import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";
import JotFormPCIEmbed from "@/components/ui/JotFormPCIEmbed";

export const metadata = {
  title: "Book Prescription Refill — Outside Alberta",
  description:
    "Get a prescription refill from a licensed Canadian physician. Available for residents of Ontario, British Columbia, Saskatchewan, and other provinces.",
  robots: "noindex",
  alternates: { canonical: "/book-prescription-refill/" },
};

export default function BookPrescriptionRefillPage() {
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
            Prescription Refill — Outside Alberta
          </span>
          <h1 style={{ fontSize: "clamp(28px, 5.5vw, 44px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Book Your Prescription Refill
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            Prescription refills from licensed Canadian physicians. Available for Ontario, British Columbia, Saskatchewan, and other provinces. Same-day turnaround.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: "#fff", padding: "20px 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { icon: <FiShield size={18} />, text: "Licensed Canadian Physicians" },
              { icon: <FiClock size={18} />, text: "Same-Day Turnaround" },
              { icon: <FiCheckCircle size={18} />, text: "Fill at Any Pharmacy" },
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
            <JotFormPCIEmbed formId="261184818159263" />
          </div>
        </div>
      </section>
    </>
  );
}
