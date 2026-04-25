import { FiShield, FiClock, FiCheckCircle } from "react-icons/fi";
import JotFormEmbed from "@/components/ui/JotFormEmbed";

export const metadata = {
  title: "Book Doctor's Note Online",
  description:
    "Get a legal online doctor's note. Licensed Canadian physicians. Same-day turnaround. Serving Ontario, British Columbia, and Saskatchewan.",
  robots: "noindex",
  alternates: { canonical: "/book-doctors-note/" },
};

export default function BookDoctorsNotePage() {
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
            Doctor&apos;s Note Service
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Book Your Doctor&apos;s Note
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto" }}>
            Legal online doctor&apos;s note from licensed Canadian physicians. Available for Ontario, British Columbia, Saskatchewan. Same-day turnaround.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: "#fff", padding: "20px 0", borderBottom: "1px solid #E8E8E8" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { icon: <FiShield size={18} />, text: "Licensed Canadian Physicians" },
              { icon: <FiClock size={18} />, text: "Same-Day Delivery" },
              { icon: <FiCheckCircle size={18} />, text: "Legally Accepted" },
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
      <section style={{ background: "#fef7ff", padding: "48px 0 80px" }}>
        <div className="container-main" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "40px 32px",
              boxShadow: "0 4px 24px rgba(98,28,114,0.08)",
              border: "1px solid rgba(98,28,114,0.06)",
            }}
          >
            <JotFormEmbed formId="261078513903052" />
          </div>
        </div>
      </section>
    </>
  );
}
