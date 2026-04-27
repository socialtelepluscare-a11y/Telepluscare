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
    title: "Ozempic Side Effects: A 2026 Canadian Patient Guide",
    description:
      "Complete guide to Ozempic side effects in Canada — common GI symptoms, gallbladder risks, pancreatitis warnings, mood changes, and how to manage them.",
    image: "/images/weight-loss/image-40.png",
    href: "/ozempic-side-effects-canadian-guide",
    date: "April 2026",
    category: "Weight Loss",
  },
  {
    title: "What AHCIP Covers for Virtual Doctor Visits in Alberta",
    description:
      "What Alberta Health Care does and does not cover for virtual doctor visits — billing codes, sick notes, third-party fees, and out-of-province pricing.",
    image: "/images/Group-37520.png",
    href: "/what-ahcip-covers-virtual-doctor-visits",
    date: "April 2026",
    category: "Pricing",
  },
  {
    title: "Family Doctor Wait Times in Canada (2026 Guide)",
    description:
      "Province-by-province guide to family doctor wait times in Canada in 2026 — orphaned-patient stats, provincial registries, and faster alternatives.",
    image: "/images/online-doctors-notes-in-edmonton/section-1.webp",
    href: "/family-doctor-wait-times-canada-2026",
    date: "April 2026",
    category: "Healthcare",
  },
  {
    title: "UTI Antibiotics in Canada: Which Work Best?",
    description:
      "First-line UTI antibiotics in Canada — Macrobid, Monurol, Bactrim — when each is preferred, resistance patterns, pregnancy considerations, and red flags.",
    image: "/images/urinary-tract-infection-treatments.jpg",
    href: "/uti-antibiotics-canada-which-work-best",
    date: "April 2026",
    category: "Conditions",
  },
  {
    title: "How Much Does Botox Cost in Edmonton (2026)?",
    description:
      "Complete 2026 Botox pricing guide for Edmonton — per-unit and per-area cost ranges, brand comparison, lip filler pricing, and what insurance covers.",
    image: "/images/best-botox-treatment-in-edmonton/section-1.jpg",
    href: "/how-much-does-botox-cost-edmonton-2026",
    date: "April 2026",
    category: "Aesthetic",
  },
  {
    title: "How to Get Ozempic in Canada (2026 Guide & Cost)",
    description:
      "Step-by-step guide to getting Ozempic legally in Canada in 2026 — eligibility, prescription paths, costs ($300-450/mo), insurance, and same-day virtual options.",
    image: "/images/weight-loss/image-39.png",
    href: "/how-to-get-ozempic-in-canada",
    date: "April 2026",
    category: "Weight Loss",
  },
  {
    title: "Are Online Doctor's Notes Legal in Canada?",
    description:
      "A 2026 legal guide to online doctor's notes across Canada — when they're valid, who issues them, what employers and schools must accept, province by province.",
    image: "/images/online-doctors-notes-in-edmonton/hero.jpg",
    href: "/are-online-doctor-notes-legal-in-canada",
    date: "April 2026",
    category: "Legal",
  },
  {
    title: "Cost of a Virtual Doctor Visit in Alberta (2026)",
    description:
      "Complete breakdown of virtual doctor visit costs in Alberta — what AHCIP covers, out-of-pocket fees, and how to save on telehealth in 2026.",
    image: "/images/Rectangle-1090-3.png",
    href: "/cost-of-virtual-doctor-visit-in-alberta",
    date: "April 2026",
    category: "Pricing",
  },
  {
    title: "Ozempic vs Mounjaro vs Wegovy: Canadian Guide",
    description:
      "Compare Ozempic, Mounjaro, and Wegovy for weight loss in Canada — efficacy, side effects, costs, availability, and which one is right for you.",
    image: "/images/weight-loss/image-41.png",
    href: "/ozempic-vs-mounjaro-vs-wegovy-canada",
    date: "April 2026",
    category: "Weight Loss",
  },
  {
    title: "How to Save Money on Prescriptions in Canada",
    description:
      "10 proven ways Canadians save money on prescription medications — generics, drug coverage programs, online pharmacies, and provincial benefits explained.",
    image: "/images/prescription-refill/13-819x1024.jpeg",
    href: "/how-to-save-money-on-prescriptions-canada",
    date: "April 2026",
    category: "Prescriptions",
  },
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
