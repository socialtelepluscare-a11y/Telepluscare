"use client";

import { FiCalendar, FiVideo, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const steps = [
  {
    icon: FiCalendar,
    number: "01",
    title: "Book Online",
    description: "Schedule your virtual appointment in under 2 minutes. Choose your service and preferred time.",
    color: "#621C72",
  },
  {
    icon: FiVideo,
    number: "02",
    title: "Meet Your Doctor",
    description: "Connect with a licensed Alberta physician via secure video call from any device.",
    color: "#046BD2",
  },
  {
    icon: FiCheckCircle,
    number: "03",
    title: "Get Treatment",
    description: "Receive your prescription, referral, or treatment plan — sent directly to your pharmacy.",
    color: "#059669",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ background: "#F0F5FA", padding: "80px 0" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="badge-primary">Simple Process</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2 }}>
            How It Works
          </h2>
          <div className="decorative-line" style={{ margin: "12px auto 0" }} />
        </div>

        <div style={{ display: "flex", gap: 0, alignItems: "stretch", justifyContent: "center", flexWrap: "wrap", maxWidth: 1000, margin: "0 auto" }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} style={{ flex: 1, minWidth: 280, position: "relative" }}>
                {index < steps.length - 1 && (
                  <div className="step-connector" style={{ position: "absolute", top: 48, right: 0, width: "50%", height: 2, background: `linear-gradient(to right, ${step.color}, ${steps[index + 1].color})`, zIndex: 1 }} />
                )}
                {index > 0 && (
                  <div className="step-connector" style={{ position: "absolute", top: 48, left: 0, width: "50%", height: 2, background: `linear-gradient(to right, ${steps[index - 1].color}, ${step.color})`, zIndex: 1 }} />
                )}

                <div style={{ textAlign: "center", padding: "0 20px", position: "relative", zIndex: 2 }}>
                  <div style={{ width: 96, height: 96, borderRadius: "50%", background: step.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: `0 8px 24px ${step.color}33`, position: "relative" }}>
                    <Icon style={{ width: 36, height: 36, color: "#fff" }} />
                    <div style={{ position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: "50%", background: "#fff", border: `2px solid ${step.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: step.color }}>
                      {step.number}
                    </div>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--dark)", marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", maxWidth: 260, margin: "0 auto" }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 17, padding: "16px 36px" }}>
            Book Your Appointment Now
            <FiArrowUpRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
