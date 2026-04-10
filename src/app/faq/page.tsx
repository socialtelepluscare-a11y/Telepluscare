"use client";

import { useState } from "react";
import { FiChevronDown, FiArrowUpRight, FiPhone } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import { homepageFAQs } from "@/data/faq";
import type { FAQItem } from "@/data/faq";

const generalFAQs: FAQItem[] = [
  {
    question: "What is TelePlus Care?",
    answer:
      "TelePlus Care is a modern virtual healthcare clinic serving patients across Alberta. We connect you with licensed physicians and nurse practitioners through secure video and phone consultations, so you can receive expert medical care from the comfort of your home.",
  },
  {
    question: "How do I book a virtual appointment?",
    answer:
      "You can book a virtual appointment through our online booking platform at telepluscare.janeapp.com, by calling us at 587-442-4898, or by emailing booking@telepluscare.com. Same-day appointments are often available.",
  },
  {
    question: "What services does TelePlus Care offer?",
    answer:
      "We offer a wide range of virtual healthcare services including general medical consultations, chronic disease management (diabetes, hypertension), weight loss programs, women's health (birth control, UTI treatment), men's health, skin conditions, mental health support, prescription management, doctor's notes, driving medical exams, and aesthetic consultations.",
  },
  {
    question: "Do I need a referral to see a TelePlus Care provider?",
    answer:
      "No, you do not need a referral for most of our services. You can book directly with us for virtual consultations. If you require a specialist referral, our providers can arrange that during your appointment.",
  },
  {
    question: "What areas does TelePlus Care serve?",
    answer:
      "TelePlus Care serves patients across Alberta, including Edmonton, Calgary, Red Deer, Lethbridge, Fort McMurray, Airdrie, St. Albert, Sherwood Park, Medicine Hat, Grande Prairie, Leduc, Spruce Grove, and all other communities in the province.",
  },
  {
    question: "Is virtual healthcare covered by Alberta Health Care?",
    answer:
      "Many of our virtual consultations are covered by Alberta Health Care Insurance Plan (AHCIP) when provided by a physician. Some services may have additional fees. We recommend checking with us directly to understand coverage for your specific needs.",
  },
  {
    question: "What technology do I need for a virtual appointment?",
    answer:
      "You need a device with a camera and microphone (smartphone, tablet, or computer) and a stable internet connection. We use a secure, easy-to-use platform that works in your web browser — no special software download required.",
  },
  {
    question: "Can I get prescriptions through a virtual visit?",
    answer:
      "Yes, our licensed healthcare providers can prescribe medications during your virtual consultation. Prescriptions are sent electronically to your preferred pharmacy for convenient pickup or delivery.",
  },
];

const billingFAQs: FAQItem[] = [
  {
    question: "How much does a virtual consultation cost?",
    answer:
      "Pricing varies depending on the type of consultation. Many physician consultations are covered by Alberta Health Care. For specific pricing on services not covered by AHCIP, please contact our booking team at 587-442-4898 or email booking@telepluscare.com.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and e-transfer payments. Some services may be eligible for direct billing through Alberta Health Care. We also accept most private insurance plans.",
  },
  {
    question: "Can I use my private insurance?",
    answer:
      "Many private insurance plans cover telemedicine consultations. We provide detailed receipts that you can submit to your insurance provider for reimbursement. We recommend checking with your insurance company about your specific coverage.",
  },
];

const appointmentFAQs: FAQItem[] = [
  {
    question: "What happens during a virtual consultation?",
    answer:
      "During your virtual consultation, you will connect with a licensed healthcare provider via secure video or phone call. The provider will review your medical history, discuss your symptoms or concerns, provide a diagnosis, and recommend a treatment plan — which may include prescriptions, lab requisitions, referrals, or follow-up appointments.",
  },
  {
    question: "How long does a virtual appointment take?",
    answer:
      "Most virtual consultations take between 10 to 20 minutes, depending on the complexity of your health concern. Some appointments, such as comprehensive assessments or chronic disease management consultations, may take longer.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule your appointment through our online booking system or by contacting us at least 24 hours in advance. Late cancellations or no-shows may be subject to a cancellation fee.",
  },
  {
    question: "Do you offer same-day appointments?",
    answer:
      "Yes, we often have same-day virtual appointment availability. You can check our online booking system for available time slots or call us at 587-442-4898 to request a same-day appointment.",
  },
];

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  { title: "General Questions", items: [...generalFAQs, ...homepageFAQs] },
  { title: "Appointments & Visits", items: appointmentFAQs },
  { title: "Billing & Insurance", items: billingFAQs },
];

function AccordionSection({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ marginBottom: 56 }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "var(--dark)",
          marginBottom: 8,
        }}
      >
        {category.title}
      </h2>
      <div className="decorative-line" style={{ marginBottom: 24 }} />
      <div>
        {category.items.map((item, index) => {
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #E8E8E8",
                borderLeft: isOpen ? "3px solid var(--primary)" : "3px solid transparent",
                paddingLeft: 16,
                transition: "border-left-color 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-expanded={isOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "20px 0",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: isHovered ? "var(--primary)" : "var(--dark)",
                    paddingRight: 16,
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.question}
                </span>
                <FiChevronDown
                  style={{
                    width: 20,
                    height: 20,
                    color: "var(--primary)",
                    flexShrink: 0,
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? 500 : 0,
                  transition: "max-height 0.3s ease",
                  paddingBottom: isOpen ? 20 : 0,
                }}
              >
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)" }}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FAQPage() {
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
          <span className="badge-primary">FAQ</span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "var(--dark)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "var(--primary)" }}>Questions</span>
          </h1>
          <div className="decorative-line" style={{ margin: "12px auto 24px" }} />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--text)",
              marginBottom: 32,
            }}
          >
            Find answers to common questions about TelePlus Care&apos;s virtual healthcare
            services, appointments, billing, and more. Can&apos;t find what you&apos;re looking for?
            Contact us directly.
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

      {/* ===== FAQ CATEGORIES ===== */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 850, margin: "0 auto" }}>
          {faqCategories.map((category) => (
            <AccordionSection key={category.title} category={category} />
          ))}
        </div>
      </section>

      {/* ===== STILL HAVE QUESTIONS ===== */}
      <section style={{ background: "#fef7ff", padding: "64px 0" }}>
        <div
          className="container-main"
          style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "var(--dark)",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Still Have <span style={{ color: "var(--primary)" }}>Questions</span>?
          </h2>
          <div className="decorative-line" style={{ margin: "12px auto 20px" }} />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--text)",
              marginBottom: 28,
            }}
          >
            Our team is happy to help with any questions you may have. Reach out to us by phone,
            email, or book a consultation to speak with a healthcare provider directly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-primary"
              style={{ fontSize: 16 }}
            >
              <FiPhone style={{ width: 16, height: 16 }} />
              Call {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.emailInfo}`}
              className="btn-outline"
              style={{ fontSize: 16 }}
            >
              Email Us
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>
      </section>

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
            Ready to Get Started?
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
            Connect with a licensed healthcare provider from the comfort of your home.
            No referral needed — book your virtual appointment today.
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
