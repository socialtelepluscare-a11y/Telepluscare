"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

export default function StickyButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-4 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* WhatsApp */}
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FiPhone className="text-2xl" />
      </a>
    </div>
  );
}
