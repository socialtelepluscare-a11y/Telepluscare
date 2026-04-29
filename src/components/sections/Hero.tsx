import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section
      style={{
        background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
        padding: "clamp(28px, 5vw, 48px) 0 0",
      }}
    >
      <div className="container-main">
        {/* Centered badge + title */}
        <div style={{ textAlign: "center", marginBottom: "clamp(24px, 4vw, 40px)" }}>
          <span className="badge-primary">TelePlus Care</span>
          <h1 style={{ fontSize: "clamp(30px, 6.5vw, 60px)", fontWeight: 700, color: "var(--dark)", lineHeight: 1.15, maxWidth: 700, margin: "0 auto" }}>
            Virtual Healthcare Services in Alberta
          </h1>
        </div>

        {/* Two column layout */}
        <div className="hero-row" style={{ display: "flex", alignItems: "center", gap: "clamp(24px, 4vw, 48px)" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ marginBottom: 16 }}>
              <Image src="/images/Group-37520-1.jpg" alt="Trusted Partners" width={320} height={60} style={{ height: "auto", maxWidth: 320, width: "100%" }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <Image src="/images/image.png" alt="159+ Happy Patients" width={260} height={80} style={{ height: "auto", maxWidth: 260, width: "100%" }} />
            </div>

            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.7, color: "var(--text)", marginBottom: 28, maxWidth: 500 }}>
              <strong>TelePlus</strong> Care is a modern healthcare solution,
              offering convenient virtual medical care designed for everyone
              across Alberta.
            </p>

            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)", padding: "clamp(12px, 1.4vw, 16px) clamp(22px, 3vw, 36px)" }}
            >
              Book Your Appointment Now
              <FiArrowUpRight style={{ width: 18, height: 18 }} />
            </a>
          </div>

          <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
            <Image src="/images/Group-37520.png" alt="Virtual Healthcare Professional" width={600} height={570} sizes="(max-width: 768px) 100vw, 50vw" style={{ maxWidth: "100%", height: "auto" }} priority />
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: "clamp(28px, 5vw, 64px)", paddingTop: "clamp(28px, 5vw, 48px)", paddingBottom: "clamp(20px, 3vw, 32px)", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "var(--primary)" }}>3-4</span>
            <p style={{ fontSize: "clamp(13px, 1.3vw, 14px)", color: "var(--text)", marginTop: 4 }}>Minute Wait Time</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <AnimatedCounter end={10} suffix="K+" />
            <p style={{ fontSize: "clamp(13px, 1.3vw, 14px)", color: "var(--text)", marginTop: 4 }}>Patients Served</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "var(--primary)" }}>4.9&#9733;</span>
            <p style={{ fontSize: "clamp(13px, 1.3vw, 14px)", color: "var(--text)", marginTop: 4 }}>Patient Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
