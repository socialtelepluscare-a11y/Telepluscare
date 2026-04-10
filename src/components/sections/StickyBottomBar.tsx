"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp button — right side */}
      <div
        style={{
          position: "fixed",
          bottom: 90,
          right: 16,
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          transition: "all 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#25D366",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "transform 0.2s",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Sticky bottom bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#fff",
          borderTop: "1px solid #E8E8E8",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <a
          href="/book-appointment-alberta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "12px 32px",
            background: "var(--primary)",
            color: "#fff",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 119,
            border: "2px solid var(--primary)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            lineHeight: 1.4,
          }}
        >
          Book Your Appointment Now
        </a>
      </div>
    </>
  );
}
