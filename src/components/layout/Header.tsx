"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiX } from "react-icons/fi";
import { mainNav } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={scrolled ? "header-scrolled" : ""}
      style={{
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "clamp(6px, 1vw, 10px) 0",
        transition: "padding 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        className="header-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 clamp(16px, 3vw, 48px)",
          gap: 12,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo-150x150.webp"
            alt="TelePlus Care"
            width={100}
            height={100}
            className="site-logo"
            style={{ height: "auto", width: "clamp(56px, 8vw, 100px)", borderRadius: "50%" }}
            priority
          />
        </Link>

        {/* Desktop Nav — purple pill */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            background: "rgba(98, 28, 114, 0.06)",
            borderRadius: 119,
            padding: "20px 52px",
          }}
        >
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#1E293B",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {item.label}
                  <FiChevronDown
                    style={{
                      width: 16,
                      height: 16,
                      transition: "transform 0.3s",
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "100%", left: -20, paddingTop: 8, width: 280, zIndex: 50 }}>
                    <div
                      style={{
                        background: "#fff",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                        borderRadius: 14,
                        padding: "10px 0",
                        border: "1px solid #E8E8E8",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "12px 24px",
                            fontSize: 15,
                            fontWeight: 500,
                            color: "#334155",
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1E293B",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Single CTA Button */}
        <a
          href="/book-appointment-alberta"
          className="btn-primary desktop-nav"
          style={{ fontSize: 16, padding: "14px 32px", flexShrink: 0, textDecoration: "none" }}
        >
          Book Your Appointment Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", width: 32, height: 32, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}
        >
          <span style={{ display: "block", width: 24, height: 2, background: "#1E293B", transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1E293B", transition: "all 0.3s", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1E293B", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#fff", zIndex: 200, overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #E8E8E8" }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo-150x150.webp" alt="TelePlus Care" width={56} height={56} style={{ height: 56, width: 56, borderRadius: "50%" }} />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ background: "none", border: "none", cursor: "pointer" }}>
              <FiX style={{ width: 24, height: 24, color: "#1E293B" }} />
            </button>
          </div>
          <nav style={{ padding: "24px 20px" }}>
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 0", fontSize: 18, fontWeight: 600, color: "#1E293B", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {item.label}
                    <FiChevronDown style={{ width: 20, height: 20, transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }} />
                  </button>
                  {mobileServicesOpen && (
                    <div style={{ paddingLeft: 16 }}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} style={{ display: "block", padding: "10px 0", fontSize: 16, color: "#4A4A4A", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href!} style={{ display: "block", padding: "14px 0", fontSize: 18, fontWeight: 600, color: "#1E293B", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
            <a
              href="/book-appointment-alberta"
              className="btn-primary"
              style={{ display: "flex", justifyContent: "center", marginTop: 24, width: "100%", textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              Book Your Appointment Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
