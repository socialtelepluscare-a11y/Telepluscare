export default function MedicalDisclaimer() {
  return (
    <div
      style={{
        background: "#f8f4fa",
        borderTop: "1px solid rgba(98,28,114,0.1)",
        padding: "16px 20px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, maxWidth: 900, margin: "0 auto" }}>
        <strong>Medical Disclaimer:</strong> The information on this website is for general informational
        purposes only and does not constitute medical advice. Always consult with a qualified healthcare
        provider before making any health-related decisions. If you are experiencing a medical emergency,
        call 911 immediately.
      </p>
    </div>
  );
}
