import { FiShield, FiStar, FiCheckCircle } from "react-icons/fi";
import JotFormEmbed from "@/components/ui/JotFormEmbed";

export const metadata = {
  title: "Book Aesthetic Services - Botox, Fillers & More",
  description:
    "Book your aesthetic consultation with TelePlus Care. Botox, dermal fillers, PRP, microneedling, and more.",
  robots: "noindex",
  alternates: { canonical: "/book-aesthetic/" },
};

export default function BookAestheticPage() {
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
            Aesthetic Services
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Book Your Aesthetic Consultation
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            Botox, dermal fillers, PRP, microneedling, and more. Fill out the form below to get started with certified practitioners.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: "#fff", padding: "20px 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { icon: <FiShield size={18} />, text: "Certified Practitioners" },
              { icon: <FiStar size={18} />, text: "Natural-Looking Results" },
              { icon: <FiCheckCircle size={18} />, text: "Virtual Consultation First" },
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
            <JotFormEmbed formId="260934537048058" />
          </div>
        </div>
      </section>
    </>
  );
}
