"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function YouTubeEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = siteConfig.youtubeEmbedId;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Watch Our YouTube for More Informative Content
          </h2>
          <div className="decorative-line" style={{ margin: "12px auto 0" }} />
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              cursor: isLoaded ? "default" : "pointer",
            }}
            onClick={() => !isLoaded && setIsLoaded(true)}
          >
            {isLoaded ? (
              <iframe
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                title="TelePlus Care - Virtual Healthcare Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src={thumbnailUrl}
                  alt="TelePlus Care - Virtual Healthcare Services"
                  fill
                  sizes="(max-width: 960px) 100vw, 960px"
                  style={{ objectFit: "cover" }}
                />
                {/* Play button overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.15)",
                    transition: "background 0.3s",
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                      <path d="M28 16L0 32V0L28 16Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
