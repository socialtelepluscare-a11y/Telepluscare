import Link from "next/link";
import { FiArrowUpRight, FiPhone, FiMonitor, FiWifi, FiCreditCard, FiHome, FiClipboard, FiFileText, FiCalendar, FiLock, FiShield } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import FAQAccordion from "@/components/sections/FAQAccordion";
import type { FAQItem } from "@/data/faq";

export const metadata = {
  title: "How Telehealth Works - Virtual Healthcare Guide for Alberta",
  description:
    "Learn how virtual healthcare works at TelePlus Care. Book online, connect via secure video, receive expert care and prescriptions from licensed Alberta physicians.",
  alternates: { canonical: "/how-telehealth-works/" },
};

const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Choose a convenient time through our online booking platform at telepluscare.janeapp.com, by calling 587-442-4898, or by emailing booking@telepluscare.com. Same-day appointments are often available.",
    details: [
      "Select your preferred date and time",
      "Choose the type of consultation you need",
      "Provide basic health information",
      "Receive a confirmation email with your appointment details",
    ],
  },
  {
    number: "02",
    title: "Connect Virtually",
    description:
      "At your appointment time, join the secure video or phone consultation from any device. No app downloads required — everything works in your web browser.",
    details: [
      "Click the secure link in your confirmation email",
      "Allow camera and microphone access when prompted",
      "Wait in our virtual waiting room (typically under 5 minutes)",
      "Your provider will join and begin the consultation",
    ],
  },
  {
    number: "03",
    title: "Receive Expert Care",
    description:
      "Your licensed physician will review your concerns, provide a diagnosis, and create a personalized treatment plan — just like an in-person visit.",
    details: [
      "Discuss your symptoms and health concerns",
      "Receive a professional medical assessment",
      "Get a personalized treatment plan",
      "Ask questions and get clear answers",
    ],
  },
  {
    number: "04",
    title: "Get Your Follow-Up",
    description:
      "After your visit, prescriptions are sent directly to your pharmacy, lab requisitions are provided electronically, and follow-up appointments are scheduled as needed.",
    details: [
      "Prescriptions sent to your preferred pharmacy",
      "Lab requisitions and referral letters emailed",
      "Visit summary provided for your records",
      "Follow-up appointment scheduled if needed",
    ],
  },
];

const requirements = [
  {
    icon: FiMonitor,
    title: "A Device with Camera & Mic",
    description: "Smartphone, tablet, laptop, or desktop computer with a working camera and microphone.",
  },
  {
    icon: FiWifi,
    title: "Stable Internet Connection",
    description: "A reliable Wi-Fi or mobile data connection for smooth, uninterrupted video consultations.",
  },
  {
    icon: FiCreditCard,
    title: "Alberta Health Card",
    description: "Have your Alberta Health Care card ready for covered services. Non-AHC patients can still book.",
  },
  {
    icon: FiHome,
    title: "A Quiet, Private Space",
    description: "Find a comfortable, private area where you can speak openly about your health concerns.",
  },
];

const duringVisit = [
  {
    icon: FiClipboard,
    title: "Health History Review",
    description: "Your provider will review your medical history and any current medications before addressing your concerns.",
  },
  {
    icon: FiFileText,
    title: "Symptom Discussion",
    description: "Describe your symptoms in detail. Your doctor may ask you to show affected areas via camera if relevant.",
  },
  {
    icon: FiCalendar,
    title: "Diagnosis & Treatment Plan",
    description: "Receive a clear diagnosis with an actionable treatment plan, including prescriptions, lifestyle advice, or referrals.",
  },
];

const afterVisit = [
  {
    title: "Prescriptions",
    description: "Medications are sent electronically to your preferred pharmacy. You will receive a notification when they are ready for pickup or delivery.",
  },
  {
    title: "Referrals",
    description: "If specialist care is needed, your doctor will provide a referral. You will receive the referral details and instructions via email.",
  },
  {
    title: "Lab Requisitions",
    description: "Lab work orders are sent electronically. Visit any Alberta lab location at your convenience — no additional appointment needed.",
  },
  {
    title: "Follow-Up Care",
    description: "Your provider will schedule follow-up appointments as needed to monitor your progress and adjust your treatment plan.",
  },
];

const telehealthFAQs: FAQItem[] = [
  {
    question: "Is a virtual appointment as effective as an in-person visit?",
    answer:
      "For many conditions, yes. Virtual consultations are clinically appropriate for the majority of primary care needs, including diagnosing common conditions, managing chronic diseases, mental health support, prescription management, and providing referrals. Our physicians will let you know if an in-person visit is required.",
  },
  {
    question: "What if I have technical difficulties during my appointment?",
    answer:
      "If you experience technical issues, our support team is available to assist. You can call us at 587-442-4898 for immediate help. If the video connection fails, we can switch to a phone consultation to ensure you still receive your care.",
  },
  {
    question: "Can I have a family member join my virtual appointment?",
    answer:
      "Yes, you can have a family member or caregiver present during your virtual consultation. Simply have them sit with you during the call. For minors, a parent or guardian must be present during the appointment.",
  },
  {
    question: "How long does a typical virtual appointment take?",
    answer:
      "Most virtual consultations take 10 to 20 minutes, depending on the complexity of your health concern. Comprehensive assessments or chronic disease management consultations may take longer. We always ensure you have enough time to address all your concerns.",
  },
  {
    question: "Is my health information secure during a virtual visit?",
    answer:
      "Absolutely. We use encrypted, PIPEDA-compliant and Alberta HIA-compliant video platforms to protect your health information. All consultations and medical records are stored securely in compliance with Canadian privacy regulations. Your privacy is our top priority.",
  },
];

export default function HowTelehealthWorksPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
          padding: "60px 0 70px",
        }}
      >
        <div
          className="container-main"
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}
        >
          <span className="badge-primary">How It Works</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            How Telehealth Works at{" "}
            <span style={{ color: "var(--primary)" }}>TelePlus Care</span>
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--text)",
              marginBottom: 32,
              maxWidth: 640,
              margin: "0 auto 32px",
            }}
          >
            Getting quality healthcare from the comfort of your home is simple. Here is
            everything you need to know about your virtual appointment with TelePlus Care.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
              <FiPhone style={{ width: 16, height: 16 }} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ===== STEP BY STEP ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Your Virtual Visit,{" "}
              <span style={{ color: "var(--primary)" }}>Step by Step</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {steps.map((step) => (
              <div
                key={step.number}
                className="card-hover"
                style={{
                  display: "flex",
                  gap: 32,
                  padding: 36,
                  borderRadius: 18,
                  background: "#fff",
                  border: "1px solid rgba(98,28,114,0.12)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, var(--primary), #8b3fa0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "var(--text)",
                      marginBottom: 16,
                    }}
                  >
                    {step.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        style={{ display: "flex", alignItems: "center", gap: 10 }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "rgba(98,28,114,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <span
                            style={{
                              color: "var(--primary)",
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            {"\u2713"}
                          </span>
                        </div>
                        <span style={{ fontSize: 15, color: "var(--text)" }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU NEED ===== */}
      <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What You{" "}
              <span style={{ color: "var(--primary)" }}>Need</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 16px" }} />
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--text)",
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Getting started is easy. Here is what you need for your virtual appointment:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
            className="service-grid"
          >
            {requirements.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.title}
                  className="card-hover"
                  style={{
                    padding: 32,
                    borderRadius: 18,
                    background: "#fff",
                    border: "1px solid rgba(98,28,114,0.1)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <Icon style={{ width: 24, height: 24, color: "#fff" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 8,
                    }}
                  >
                    {req.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)" }}>
                    {req.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT DURING YOUR VISIT ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What to Expect{" "}
              <span style={{ color: "var(--primary)" }}>During Your Visit</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
            className="steps-grid"
          >
            {duringVisit.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-hover"
                  style={{
                    padding: 32,
                    borderRadius: 18,
                    background: "#fff",
                    border: "1px solid rgba(98,28,114,0.1)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(98,28,114,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <Icon style={{ width: 24, height: 24, color: "var(--primary)" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)" }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AFTER YOUR VISIT ===== */}
      <section style={{ background: "#fef7ff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              After Your{" "}
              <span style={{ color: "var(--primary)" }}>Visit</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 16px" }} />
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: "var(--text)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Your care does not end when the call is over. Here is what happens next:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="service-grid"
          >
            {afterVisit.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "24px 28px",
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid rgba(98,28,114,0.1)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{i + 1}</span>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY & PRIVACY ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Technology &{" "}
              <span style={{ color: "var(--primary)" }}>Privacy</span>
            </h2>
            <div className="decorative-line" style={{ margin: "12px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
            className="content-row"
          >
            <div
              style={{
                background: "#fef7ff",
                borderRadius: 18,
                padding: 36,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <FiLock style={{ width: 22, height: 22, color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 10,
                }}
              >
                Secure Platform
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", marginBottom: 16 }}>
                All virtual consultations are conducted through encrypted, secure video
                platforms that meet the highest standards of healthcare data protection.
              </p>
              <ul className="check-list">
                <li>End-to-end encrypted video calls</li>
                <li>No recordings without your consent</li>
                <li>Secure medical records storage</li>
              </ul>
            </div>
            <div
              style={{
                background: "#fef7ff",
                borderRadius: 18,
                padding: 36,
                borderLeft: "4px solid var(--primary)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <FiShield style={{ width: 22, height: 22, color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: 10,
                }}
              >
                Privacy Compliance
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text)", marginBottom: 16 }}>
                We comply with all Canadian healthcare privacy regulations, including
                PIPEDA and Alberta&apos;s Health Information Act (HIA).
              </p>
              <ul className="check-list">
                <li>PIPEDA and Alberta HIA compliant</li>
                <li>Strict data access controls</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQAccordion items={telehealthFAQs} title="Frequently Asked Questions" />

      {/* ===== CTA ===== */}
      <section style={{ background: "var(--primary)", padding: "80px 0", textAlign: "center" }}>
        <div className="container-main">
          <h2
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Ready to Try Virtual Healthcare?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 600,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Experience the convenience of seeing a doctor from your home. Book your first
            virtual appointment today — no referral needed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                background: "#fff",
                color: "var(--primary)",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Book Appointment
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                background: "transparent",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 119,
                border: "2px solid #fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
