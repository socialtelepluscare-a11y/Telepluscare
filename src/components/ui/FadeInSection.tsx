"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only add the fade animation after hydration
    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const className = [
    "fade-in-section",
    ready ? "fade-ready" : "",
    visible ? "is-visible" : "",
  ].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
