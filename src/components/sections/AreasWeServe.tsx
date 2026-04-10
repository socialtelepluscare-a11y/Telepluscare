import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function AreasWeServe() {
  return (
    <section style={{ background: "#fff", padding: "70px 0" }}>
      <div className="container-main">
        <div className="content-row" style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--dark)", marginBottom: 16, lineHeight: 1.2 }}>
              Areas <span style={{ fontWeight: 800 }}>We Serve</span> Across Alberta
            </h2>
            <div className="decorative-line" />
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", marginBottom: 28 }}>
              TelePlus Care provides virtual healthcare services across Alberta, Canada. The
              company&apos;s network enables residents in various Alberta locations to access quality
              healthcare services conveniently online, regardless of where they are located. So,
              wherever you reside in Alberta, TelePlus Care is committed to making high-quality
              healthcare accessible, efficient, and easy to navigate.
            </p>
            <a href="/book-appointment-alberta" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Book Your Appointment Now
              <FiArrowUpRight style={{ width: 16, height: 16 }} />
            </a>
          </div>
          <div style={{ flex: 1, minWidth: 300, display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/GPT_Image_1_A_beautifully_mundane_scene_unfolds_in_a_cozy_home_2.webp"
              alt="Areas We Serve Across Alberta"
              width={600}
              height={600}
              style={{ borderRadius: 18, maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
