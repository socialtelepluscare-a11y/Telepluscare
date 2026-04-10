import React from "react";

const testimonials = [
  {
    quote:
      "TelePlus Care made it so easy to get my prescription refilled. The virtual visit took less than 15 minutes and the doctor was very thorough.",
    name: "Sarah M.",
    initials: "SM",
  },
  {
    quote:
      "I was skeptical about virtual healthcare but TelePlus Care changed my mind. Got my sick note the same day without leaving home.",
    name: "James K.",
    initials: "JK",
  },
  {
    quote:
      "The best experience I've had with any healthcare provider. Professional, convenient, and affordable. Highly recommend for anyone in Alberta.",
    name: "Priya S.",
    initials: "PS",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#621C72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: "#fef7ff",
        padding: "80px 0",
      }}
    >
      <div className="container-main" style={{ textAlign: "center" }}>
        <h2 className="section-title">What Our Patients Say</h2>
        <div
          className="decorative-line"
          style={{ margin: "12px auto 48px" }}
        />

        <div
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 8,
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "min(360px, 85vw)",
                background: "#fff",
                borderRadius: 18,
                padding: 32,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                textAlign: "left",
                scrollSnapAlign: "start",
              }}
            >
              <Stars />
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "var(--text)",
                  marginBottom: 24,
                  minHeight: 80,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--dark)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#888",
                    }}
                  >
                    Verified Patient
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
