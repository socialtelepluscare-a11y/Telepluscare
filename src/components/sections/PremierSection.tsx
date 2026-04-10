import { FiArrowUpRight } from "react-icons/fi";

export default function PremierSection() {
  return (
    <section style={{ background: "#fef7ff", padding: "80px 0" }}>
      <div className="container-main">
        <p style={{ color: "var(--primary)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
          Your Fast and Convenient HealthCare Solution
        </p>
        <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--dark)", marginBottom: 16, lineHeight: 1.2 }}>
          Premier <span style={{ fontWeight: 800 }}>Telemedicine</span> Service in Alberta
        </h2>
        <div className="decorative-line" />
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28 }}>
          TelePlus Care brings accessible, top-tier virtual healthcare to Alberta, supporting
          every aspect of your health journey. From chronic condition management like diabetes
          and hypertension to preventive care, our licensed providers deliver expert,
          compassionate care tailored to your needs. For busy professionals, remote residents,
          or those seeking convenient non-urgent care for minor health concerns, TelePlus Care
          offers seamless, flexible appointments. Experience affordable, personalized healthcare
          from the comfort of your home, with user-friendly booking and reminders to keep you on
          track toward a healthier future.
        </p>
        <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
          Book Your Appointment Now
          <FiArrowUpRight style={{ width: 16, height: 16 }} />
        </a>
      </div>
    </section>
  );
}
