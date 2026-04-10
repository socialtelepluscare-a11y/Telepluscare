"use client";

import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const instagramImages = [
  "/images/tele.pluscare_1768584434_3811484943969961791_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1762275770_3758564036423165455_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1758418399_3726206066255053737_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1757889326_3721767882780192626_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1756142137_3707111393683734268_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1755477383_3701535036169072784_74096322945-819x1024.jpg",
  "/images/tele.pluscare_1751769511_3670431153648904558_74096322945-819x1024.jpg",
];

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section style={{ background: "#fff", padding: "60px 0" }}>
      <div className="container-main">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaInstagram size={28} style={{ color: "var(--primary)" }} />
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: "var(--dark)", margin: 0, lineHeight: 1.2 }}>
                Follow Us on Instagram
              </h2>
              <a
                href="https://www.instagram.com/tele.pluscare/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "var(--primary)", fontWeight: 500, textDecoration: "none" }}
              >
                @tele.pluscare
              </a>
            </div>
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
            >
              <FiChevronLeft size={20} style={{ color: "var(--dark)" }} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid var(--primary)",
                background: "var(--primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
            >
              <FiChevronRight size={20} style={{ color: "#fff" }} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 8,
          }}
        >
          {instagramImages.map((img, index) => (
            <a
              key={index}
              href="https://www.instagram.com/tele.pluscare/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexShrink: 0,
                width: 240,
                height: 240,
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                scrollSnapAlign: "start",
              }}
            >
              <Image
                src={img}
                alt={`Instagram post ${index + 1}`}
                fill
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                sizes="240px"
                className="service-card-img"
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(98,28,114,0.0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s",
                }}
                className="insta-overlay"
              >
                <FaInstagram size={32} style={{ color: "#fff", opacity: 0, transition: "opacity 0.3s" }} className="insta-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
