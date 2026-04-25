"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

// Route resolver — picks correct booking URL based on current page
function resolveBookingUrl(pathname: string): { href: string; label: string } {
  // Aesthetic pages → aesthetic booking form
  const aestheticSlugs = [
    "/aesthetic",
    "/best-botox-treatment-in-edmonton",
    "/best-injectable-treatments-in-edmonton",
    "/best-dermatologist-in-edmonton",
    "/prp-treatment-in-edmonton",
    "/prp-treatment-in-calgary",
    "/hair-loss-treatment-clinic-in-edmonton",
    "/hair-loss-treatment-clinic-in-calgary",
    "/book-aesthetic",
  ];
  if (aestheticSlugs.some((s) => pathname.startsWith(s))) {
    return { href: "/book-aesthetic", label: "Book Aesthetic Consultation" };
  }

  // Out-of-province doctor note pages → paid doctor note form
  const outsideAlbertaCities = [
    // Ontario
    "toronto", "ottawa", "mississauga", "brampton", "hamilton",
    "london", "markham", "vaughan", "kitchener", "windsor",
    "oshawa", "burlington",
    // BC
    "vancouver", "surrey", "burnaby", "richmond", "victoria",
    "kelowna", "abbotsford", "coquitlam", "langley",
    // Saskatchewan
    "saskatoon", "regina", "prince-albert", "moose-jaw",
  ];
  for (const city of outsideAlbertaCities) {
    if (pathname.startsWith(`/online-doctors-note-in-${city}`)) {
      return { href: "/book-doctors-note", label: "Book Doctor's Note" };
    }
  }
  if (pathname.startsWith("/book-doctors-note")) {
    return { href: "/book-doctors-note", label: "Book Doctor's Note" };
  }

  // Default — Alberta booking
  return { href: "/book-appointment-alberta", label: "Book Your Appointment Now" };
}

export default function StickyBottomBar() {
  const pathname = usePathname() || "/";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide sticky bar on booking pages themselves (form already on page)
  const isBookingPage =
    pathname.startsWith("/book-appointment-alberta") ||
    pathname.startsWith("/book-aesthetic") ||
    pathname.startsWith("/book-doctors-note");

  if (isBookingPage) return null;

  const { href, label } = resolveBookingUrl(pathname);

  return (
    <>
      {/* Floating WhatsApp */}
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
          href={href}
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
          {label}
        </a>
      </div>
    </>
  );
}
