import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #fef7ff 0%, #F0F5FA 100%)", padding: "70px 0" }}>
      <div className="container-main">
        <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1, minWidth: 300, borderLeft: "4px solid var(--primary)", paddingLeft: 28 }}>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: "var(--dark)", marginBottom: 16, lineHeight: 1.2 }}>
              Start Your <span style={{ fontWeight: 800 }}>Virtual Health</span> Journey Today !
            </h2>
            <div className="decorative-line" />
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28 }}>
              With TelePlus Care, virtual healthcare is just a click away. Our innovative and
              convenient platform empowers you to prioritize your health on your terms. No matter
              where you are in Alberta, we&apos;re here to support your journey with accessible,
              expert care.
            </p>
            <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Book Your Appointment Now
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
          <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/Group-1.png"
              alt="Start Your Virtual Health Journey"
              width={825}
              height={535}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
