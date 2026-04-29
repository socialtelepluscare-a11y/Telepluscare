"use client";

import { useEffect, useRef } from "react";

export default function JotFormEmbed({ formId }: { formId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      const m = e.data.match(/^setHeight:(\d+)/);
      if (m && iframeRef.current) {
        const newHeight = parseInt(m[1], 10);
        if (newHeight > 0) {
          iframeRef.current.style.height = `${newHeight}px`;
        }
      }
    };
    window.addEventListener("message", handler);

    // Fallback if setHeight message never arrives (ad-blocker, network)
    const fallback = setTimeout(() => {
      if (iframeRef.current) {
        const current = parseInt(iframeRef.current.style.height || "0", 10);
        if (!current || current <= 1500) {
          iframeRef.current.style.height = "3200px";
        }
      }
    }, 8000);

    return () => {
      window.removeEventListener("message", handler);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://form.jotform.com/${formId}`}
      title="Booking form"
      loading="eager"
      scrolling="no"
      allow="geolocation; microphone; camera; payment"
      style={{
        width: "100%",
        height: "1500px",
        minHeight: "1500px",
        border: 0,
        display: "block",
        touchAction: "manipulation",
      }}
    />
  );
}
