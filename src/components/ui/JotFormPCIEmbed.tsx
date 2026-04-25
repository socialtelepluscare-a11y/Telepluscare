"use client";

import { useEffect, useRef, useState } from "react";

export default function JotFormPCIEmbed({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || injectedRef.current) return;
    injectedRef.current = true;

    // Wipe any prior content (stale StrictMode re-mount)
    container.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://pci.jotform.com/jsform/${formId}`;
    script.async = true;
    script.onload = () => setTimeout(() => setLoading(false), 1000);
    container.appendChild(script);

    const timer = setTimeout(() => setLoading(false), 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [formId]);

  return (
    <div style={{ width: "100%", minHeight: 600, position: "relative" }}>
      {loading && (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div
            style={{
              width: 40,
              height: 40,
              border: "3px solid #E8E8E8",
              borderTop: "3px solid var(--primary)",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p style={{ fontSize: 15, color: "var(--text)" }}>Loading form...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          minHeight: 500,
          overflow: "visible",
        }}
      />
      <style>{`
        .jotform-form { width: 100% !important; }
        .form-all { width: 100% !important; max-width: 100% !important; }
        iframe[id*="JotForm"] { width: 100% !important; min-height: 600px !important; }
      `}</style>
    </div>
  );
}
