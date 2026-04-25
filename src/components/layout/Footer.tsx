import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaMapMarkerAlt, FaStar, FaPhoneAlt } from "react-icons/fa";
import { footerServices, footerPages } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <>
      {/* Location + Map Section — Redesigned */}
      <section style={{ background: "#F0F5FA", padding: "60px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>
              Visit Our <span style={{ color: "var(--primary)" }}>Clinic</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text)" }}>Find us in Edmonton, Alberta</p>
          </div>
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 32,
              alignItems: "stretch",
            }}
          >
            {/* Location Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: 32,
                border: "1px solid rgba(98,28,114,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <Image
                  src="/images/logo-150x150.webp"
                  alt="TelePlus Care"
                  width={52}
                  height={52}
                  style={{ borderRadius: "50%", border: "2px solid var(--primary)" }}
                />
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", margin: 0, lineHeight: 1.3 }}>
                    TelePlus Care
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                    <FaStar size={14} style={{ color: "#fbbf24" }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>4.9</span>
                    <span style={{ fontSize: 13, color: "var(--text)" }}>&middot; Medical Clinic</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
                <FaMapMarkerAlt size={16} style={{ color: "var(--primary)", marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: "var(--text)", margin: 0, lineHeight: 1.5 }}>
                  17803 65 St NW, Edmonton, AB T5Z 3K6
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <FaPhoneAlt size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <a href={`tel:${siteConfig.phoneRaw}`} style={{ fontSize: 15, fontWeight: 600, color: "var(--primary)", textDecoration: "none" }}>
                  {siteConfig.phone}
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=17803+65+St+NW+Edmonton+AB+T5Z+3K6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: 14, padding: "12px 28px", textAlign: "center" }}
              >
                Get Directions
              </a>
            </div>

            {/* Google Maps */}
            <div style={{ borderRadius: 18, overflow: "hidden", minHeight: 300, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.5!2d-113.4!3d53.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM2JzAwLjAiTiAxMTPCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TelePlus Care Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#F0F5FA", padding: "64px 0 32px" }}>
        <div className="container-main">
          <div
            className="footer-grid"
            style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: 48 }}
          >
            {/* Column 1 */}
            <div>
              <Image
                src="/images/logo-1.webp"
                alt="TelePlus Care"
                width={140}
                height={48}
                style={{ marginBottom: 20, height: 48, width: "auto" }}
              />
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text)", marginBottom: 24, fontWeight: 300 }}>
                TelePlus Care is a Convenient Virtual Medical Care &amp; a Modern
                Healthcare Solution that is suitable for a wide range of
                individuals, offering convenience, accessibility, and flexibility.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <FaFacebookF size={14} />, href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: <FaYoutube size={14} />, href: siteConfig.social.youtube, label: "YouTube" },
                  { icon: <FaInstagram size={14} />, href: siteConfig.social.instagram, label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(98,28,114,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      transition: "all 0.3s",
                      textDecoration: "none",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--dark)", marginBottom: 24 }}>Services</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {footerServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300, transition: "color 0.3s" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Pages */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--dark)", marginBottom: 24 }}>Pages</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {footerPages.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300, transition: "color 0.3s" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--dark)", marginBottom: 24 }}>Support</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li>
                  <a href={`tel:${siteConfig.phoneRaw}`} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300 }}>
                    {siteConfig.phone} (Alberta, Canada)
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneSecondaryRaw}`} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300 }}>
                    {siteConfig.phoneSecondary} (Outside Alberta)
                  </a>
                </li>
                <li style={{ fontSize: 15, color: "var(--text)", fontWeight: 300 }}>
                  Fax: {siteConfig.fax}
                </li>
                <li>
                  <a href={`mailto:${siteConfig.emailBooking}`} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300 }}>
                    {siteConfig.emailBooking}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.emailInfo}`} style={{ fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 300 }}>
                    {siteConfig.emailInfo}
                  </a>
                </li>
                <li style={{ marginTop: 16 }}>
                  <p style={{ fontWeight: 600, color: "var(--dark)", marginBottom: 6, fontSize: 15 }}>Clinic Hours</p>
                  <p style={{ fontSize: 14, color: "var(--text)", fontWeight: 300, lineHeight: 1.6 }}>
                    {siteConfig.hours.weekday}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--text)", fontWeight: 300, lineHeight: 1.6 }}>
                    {siteConfig.hours.weekend}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(98,28,114,0.15)", marginTop: 48, paddingTop: 24, textAlign: "center", fontSize: 14, color: "var(--text)", fontWeight: 300 }}>
            &copy; Telepluscare 2026, All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
