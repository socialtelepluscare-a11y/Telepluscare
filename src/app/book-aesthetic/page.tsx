import JotFormEmbed from "@/components/ui/JotFormEmbed";

export const metadata = {
  title: "Book Aesthetic Services - Botox, Fillers & More",
  description: "Book your aesthetic consultation with TelePlus Care. Botox, dermal fillers, PRP, microneedling, and more.",
  robots: "noindex",
  alternates: { canonical: "/book-aesthetic/" },
};

export default function BookAestheticPage() {
  return (
    <>
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "48px 0",
          textAlign: "center",
        }}
      >
        <div className="container-main" style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="badge-primary">Aesthetic Services</span>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 12 }}>
            Book Your <span style={{ color: "var(--primary)" }}>Aesthetic</span> Consultation
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 20px" }} />
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)" }}>
            Botox, dermal fillers, PRP, microneedling, and more. Fill out the form below to get started.
          </p>
        </div>
      </section>

      <section style={{ background: "#fef7ff", padding: "40px 0 80px" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <JotFormEmbed formId="260934537048058" />
        </div>
      </section>
    </>
  );
}
