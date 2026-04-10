import React from "react";
import { FiShield, FiLock, FiClock, FiHeart } from "react-icons/fi";

const badges = [
  {
    icon: FiShield,
    title: "Licensed Physicians",
    subtitle: "Alberta-certified healthcare providers",
  },
  {
    icon: FiLock,
    title: "Secure & Private",
    subtitle: "PIPEDA & HIA-compliant virtual visits",
  },
  {
    icon: FiClock,
    title: "Same-Day Care",
    subtitle: "No long wait times",
  },
  {
    icon: FiHeart,
    title: "Alberta Covered",
    subtitle: "Many services covered by Alberta Health",
  },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "40px 0",
        borderTop: "1px solid #E8E8E8",
        borderBottom: "1px solid #E8E8E8",
      }}
    >
      <div className="container-main">
        <div
          className="trust-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 48,
          }}
        >
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flex: "1 1 0",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="#fff" />
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: 4,
                  }}
                >
                  {b.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#888",
                    lineHeight: 1.4,
                  }}
                >
                  {b.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
