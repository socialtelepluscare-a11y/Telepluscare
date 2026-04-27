"use client";

import { useEffect, useRef } from "react";

export default function JotFormEmbed({ formId }: { formId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      const m = e.data.match(/^setHeight:(\d+)/);
      if (m && iframeRef.current) {
        iframeRef.current.style.height = `${m[1]}px`;
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://form.jotform.com/${formId}`}
      title="Booking form"
      loading="eager"
      allow="geolocation; microphone; camera; payment"
      style={{
        width: "100%",
        minHeight: 800,
        border: 0,
        display: "block",
      }}
    />
  );
}
