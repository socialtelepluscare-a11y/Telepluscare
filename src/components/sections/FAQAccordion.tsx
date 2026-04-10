"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  showLine?: boolean;
}

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  showLine = true,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <div className="container-main" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>{title}</h2>
          {showLine && <div className="decorative-line" style={{ margin: "12px auto 0" }} />}
        </div>

        <div>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #E8E8E8",
                  borderLeft: isOpen ? "3px solid var(--primary)" : "3px solid transparent",
                  paddingLeft: isOpen ? 16 : 16,
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
