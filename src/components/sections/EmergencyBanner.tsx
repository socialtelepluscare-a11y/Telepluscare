export default function EmergencyBanner() {
  return (
    <section style={{ background: "var(--primary)", padding: "32px 0" }}>
      <div className="container-main" style={{ textAlign: "center" }}>
        <p style={{ color: "#fff", fontSize: 18, fontWeight: 500, lineHeight: 1.7 }}>
          Teleplus care clinic is not an urgent care clinic. If you have an emergency please call{" "}
          <span style={{ color: "#fbbf24", fontWeight: 700 }}>911</span> or go to the nearest urgent care facility.
        </p>
      </div>
    </section>
  );
}
