import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles from TelePlus Care on health, wellness, and virtual healthcare in Alberta. Expert insights on botox, winter health tips, weight loss, and more.",
  alternates: { canonical: "/blog/" },
};

const blogPosts = [
  {
    title: "Best Botox Treatment in Edmonton",
    description:
      "Discover why TelePlus Care offers the best botox treatments in Edmonton. Learn about our approach, what to expect during your appointment, and how to achieve natural-looking results.",
    image: "/images/image-3.jpg",
    href: "/best-botox-treatment-in-edmonton",
    date: "March 2025",
    category: "Aesthetic",
  },
  {
    title: "10 Tips to Stay Healthy During Winter",
    description:
      "Winter in Alberta can be tough on your health. From boosting your immune system to staying active, here are ten practical tips to keep you feeling your best through the cold months.",
    image: "/images/image-5.png",
    href: "/ten-ways-to-stay-healthy-during-winter",
    date: "February 2025",
    category: "Wellness",
  },
  {
    title: "Do Ice Baths Help with Weight Loss?",
    description:
      "Cold water immersion has gained popularity as a weight loss strategy. We break down the science behind ice baths, their potential benefits, and what the research actually says.",
    image: "/images/image-7.png",
    href: "/do-ice-baths-help-with-weight-loss",
    date: "January 2025",
    category: "Weight Loss",
  },
];

export default function BlogPage() {
  return (
    <section
      style={{
        background: "#FCFAFD",
        fontFamily: "'DM Sans', sans-serif",
        padding: "80px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#1E293B",
              marginBottom: 16,
              lineHeight: 1.25,
            }}
          >
            Our <span style={{ color: "#621C72" }}>Blog</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#4A4A4A",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Expert health insights, tips, and guides from the TelePlus Care
            team to help you live your healthiest life.
          </p>
        </div>

        {/* Blog Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 32,
          }}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(98,28,114,0.12)",
                  transition: "box-shadow 0.35s ease, transform 0.35s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 220,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: 24,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Category & Date */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#621C72",
                        background: "rgba(98,28,114,0.08)",
                        padding: "4px 12px",
                        borderRadius: 119,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#94a3b8",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#1E293B",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#4A4A4A",
                      marginBottom: 20,
                      flex: 1,
                    }}
                  >
                    {post.description}
                  </p>
                  <div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#621C72",
                      }}
                    >
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
