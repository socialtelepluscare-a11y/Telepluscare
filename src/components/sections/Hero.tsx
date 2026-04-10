import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section
      style={{
        background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
        padding: "48px 0 0",
      }}
    >
      <div className="container-main">
        {/* Centered badge + title */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="badge-primary">TelePlus Care</span>
          <h1 style={{ fontSize: 60, fontWeight: 700, color: "var(--dark)", lineHeight: 1.2, maxWidth: 700, margin: "0 auto" }}>
            Virtual Healthcare Services in Alberta
          </h1>
        </div>

        {/* Two column layout */}
        <div className="hero-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ marginBottom: 16 }}>
              <Image src="/images/Group-37520-1.jpg" alt="Trusted Partners" width={320} height={60} style={{ height: "auto", maxWidth: 320 }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <Image src="/images/image.png" alt="159+ Happy Patients" width={260} height={80} style={{ height: "auto", maxWidth: 260 }} />
            </div>

            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--text)", marginBottom: 28, maxWidth: 500 }}>
              <strong>TelePlus</strong> Care is a modern healthcare solution,
              offering convenient virtual medical care designed for everyone
              across Alberta.
            </p>

            <a
              href="/book-appointment-alberta"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 17, padding: "16px 36px" }}
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
        <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: 64, paddingTop: 48, paddingBottom: 32 }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "var(--primary)" }}>3-4</span>
            <p style={{ fontSize: 14, color: "var(--text)", marginTop: 4 }}>Minute Wait Time</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <AnimatedCounter end={10} suffix="K+" />
            <p style={{ fontSize: 14, color: "var(--text)", marginTop: 4 }}>Patients Served</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: "var(--primary)" }}>4.9&#9733;</span>
            <p style={{ fontSize: 14, color: "var(--text)", marginTop: 4 }}>Patient Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
