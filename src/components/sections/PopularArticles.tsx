import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const articles = [
  {
    title: "Best Botox in Edmonton - 2026",
    excerpt: "Discover the top-rated Botox treatments available in Edmonton with certified practitioners and natural-looking results.",
    href: "/best-botox-treatment-in-edmonton",
    image: "/images/best-botox-treatment-in-edmonton/hero.jpg",
    category: "Aesthetic",
  },
  {
    title: "10 Tips for Staying Healthy and Active During Winter",
    excerpt: "Stay fit and healthy throughout Alberta's cold winter months with these practical tips from our healthcare providers.",
    href: "/ten-ways-to-stay-healthy-during-winter",
    image: "/images/10-Tips-for-Staying-Healthy-and-Active-During-Winter.webp",
    category: "Wellness",
  },
  {
    title: "Do Ice Baths Help With Weight Loss",
    excerpt: "Explore the science behind cold therapy and whether ice baths can actually support your weight loss journey.",
    href: "/do-ice-baths-help-with-weight-loss",
    image: "/images/do-ice-baths-help-with-weight-loss.webp",
    category: "Weight Loss",
  },
];

export default function PopularArticles() {
  return (
    <section style={{ background: "#fef7ff", padding: "80px 0" }}>
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="badge-primary" style={{ marginBottom: 12 }}>Our Blog</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: "var(--dark)" }}>
            Popular Articles
          </h2>
          <div className="decorative-line" style={{ margin: "12px auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="service-grid"
        >
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.35s ease",
                border: "none",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {article.image && (
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="service-card-img"
                    style={{ objectFit: "cover", objectPosition: "center top", transition: "transform 0.5s" }}
                  />
                  {/* Category Badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "var(--primary)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 14px",
                      borderRadius: 100,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              )}
              <div style={{ padding: 28, flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: 10,
                    lineHeight: 1.4,
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text)", marginBottom: 20, flex: 1 }}>
                  {article.excerpt}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--primary)",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  READ MORE
                  <FiArrowUpRight style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
