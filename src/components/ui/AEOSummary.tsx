import { FiClock, FiCheckCircle, FiUser } from "react-icons/fi";

interface AEOSummaryProps {
  title: string;
  summary: string; // 40-60 word factual paragraph (AI extracts this)
  keyFacts?: string[]; // bullet list of factual statements
  lastReviewed?: string; // ISO date e.g. "2026-04-25"
  reviewedBy?: string; // physician name
}

/**
 * Answer Engine Optimization summary block.
 * - Displays TL;DR summary AI engines lift verbatim
 * - Marks region as speakable (voice assistants)
 * - Shows last reviewed date + reviewer (E-E-A-T)
 */
export default function AEOSummary({
  title,
  summary,
  keyFacts,
  lastReviewed,
  reviewedBy,
}: AEOSummaryProps) {
  return (
    <section
      data-speakable="true"
      style={{ background: "#fff", padding: "32px 0 0" }}
    >
      <div className="container-main" style={{ maxWidth: 900 }}>
        <div
          style={{
            background: "linear-gradient(135deg, #fef7ff 0%, #F0F5FA 100%)",
            border: "1px solid rgba(98,28,114,0.1)",
            borderLeft: "4px solid var(--primary)",
            borderRadius: 14,
            padding: "24px 28px",
          }}
        >
          {/* TL;DR badge */}
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Quick Answer
          </div>

          {/* Summary — primary AI extraction target */}
          <p
            itemProp="abstract"
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--dark)",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {summary}
          </p>

          {/* Key facts */}
          {keyFacts && keyFacts.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 10,
              }}
            >
              {keyFacts.map((fact, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--text)",
                  }}
                >
                  <FiCheckCircle
                    style={{
                      color: "var(--primary)",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                    size={14}
                  />
                  {fact}
                </li>
              ))}
            </ul>
          )}

          {/* Trust footer */}
          {(lastReviewed || reviewedBy) && (
            <div
              style={{
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid rgba(98,28,114,0.1)",
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
                fontSize: 13,
                color: "var(--text)",
              }}
            >
              {reviewedBy && (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FiUser size={14} style={{ color: "var(--primary)" }} />
                  <span>
                    Medically reviewed by <strong>{reviewedBy}</strong>
                  </span>
                </div>
              )}
              {lastReviewed && (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FiClock size={14} style={{ color: "var(--primary)" }} />
                  <span>
                    Last reviewed:{" "}
                    <time dateTime={lastReviewed} itemProp="dateModified">
                      {new Date(lastReviewed).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
