import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <section
      style={{
        background: "#fff url('/images/Vector.webp') center center / cover no-repeat",
        padding: "120px 0",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-main" style={{ maxWidth: 600, margin: "0 auto" }}>
        <span
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "var(--primary)",
            lineHeight: 1,
            display: "block",
            marginBottom: 16,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "var(--dark)",
            marginBottom: 16,
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--text)",
            marginBottom: 32,
          }}
        >
          The page you are looking for may have been moved or no longer exists.
          Let us help you find what you need.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Go to Homepage
            <FiArrowUpRight style={{ width: 16, height: 16 }} />
          </Link>
          <Link href="/services" className="btn-outline">
            View Services
          </Link>
          <Link href="/contact-us" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
