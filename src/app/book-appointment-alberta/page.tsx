import JotFormPCIEmbed from "@/components/ui/JotFormPCIEmbed";

export const metadata = {
  title: "Book Appointment Alberta",
  description: "Book your virtual healthcare appointment with TelePlus Care. Licensed Alberta physicians available for same-day consultations.",
  robots: "noindex",
  alternates: { canonical: "/book-appointment-alberta/" },
};

export default function BookAppointmentPage() {
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
          <span className="badge-primary">TelePlus Care</span>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, marginBottom: 12 }}>
            Book Your <span style={{ color: "var(--primary)" }}>Appointment</span>
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 20px" }} />
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)" }}>
            Fill out the form below to book a virtual healthcare appointment with a licensed Alberta physician.
          </p>
        </div>
      </section>

      <section style={{ background: "#fef7ff", padding: "40px 0 80px" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <JotFormPCIEmbed formId="251450924812252" />
        </div>
      </section>
    </>
  );
}
