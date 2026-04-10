import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full range of virtual healthcare services offered by TelePlus Care across Alberta — from general medical care to mental health, weight loss, and aesthetic treatments.",
  alternates: { canonical: "/services/" },
};

const services = [
  {
    title: "Weight Loss & Diabetes Management",
    description:
      "Managing weight and diabetes can be challenging without guidance. TelePlus Care offers digital health solutions in Alberta through virtual programs focused on sustainable lifestyle changes, dietary advice, exercise plans, and ongoing monitoring.",
    image: "/images/image-2.png",
    href: "/diabetes-chronic-disease",
  },
  {
    title: "General Medical Care",
    description:
      "TelePlus Care addresses a wide range of health concerns, from infections and allergies to chronic illnesses. Our Canadian telemedicine services include diagnostic evaluations, preventive care strategies, and treatment plans.",
    image: "/images/image.jpg",
    href: "/general-health",
  },
  {
    title: "Women\u2019s Health",
    description:
      "Women\u2019s health requires specialized attention. TelePlus Care offers services tailored to women\u2019s wellness needs, including virtual primary care for reproductive health, hormone management, and routine check-ups.",
    image: "/images/image-1.jpg",
    href: "/womens-health",
  },
  {
    title: "Skin Conditions",
    description:
      "TelePlus Care provides virtual support for skin conditions, including acne, eczema, and psoriasis. Our providers offer personalized treatment plans through our Alberta telemedicine network.",
    image: "/images/image-3.png",
    href: "/skin-conditions",
  },
  {
    title: "Men\u2019s Health",
    description:
      "TelePlus Care offers services tailored to men\u2019s wellness needs, including virtual primary care for prostate health, hormone management, and routine check-ups in a convenient, confidential setting.",
    image: "/images/image-2.jpg",
    href: "/mens-health",
  },
  {
    title: "Aesthetic Services",
    description:
      "Explore skin rejuvenation, anti-aging, and hair restoration solutions through safe, virtual consultations. Our aesthetic services bring convenience and expertise right to your device.",
    image: "/images/image-3.jpg",
    href: "/aesthetic",
  },
  {
    title: "Mental Health",
    description:
      "TelePlus Care offers compassionate mental health support through virtual consultations. Our licensed professionals provide therapy, counselling, and treatment for anxiety, depression, stress, ADHD, and more.",
    image: "/images/image-8.png",
    href: "/mental-health",
  },
  {
    title: "Virtual Walk-in Clinic",
    description:
      "Skip the waiting room. TelePlus Care\u2019s virtual walk-in clinic provides same-day appointments for non-emergency health concerns. See a licensed healthcare provider from anywhere in Alberta.",
    image: "/images/image-9.png",
    href: "/virtual-walk-in-clinic-edmonton",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Our chronic disease management program helps patients with diabetes, hypertension, and other ongoing conditions through regular virtual check-ins, medication management, and lifestyle guidance.",
    image: "/images/image-4.png",
    href: "/diabetes-chronic-disease",
  },
  {
    title: "Weight Loss Program",
    description:
      "Achieve your weight loss goals with personalized virtual programs. Our healthcare providers offer dietary counselling, exercise plans, GLP-1 medication guidance, and ongoing monitoring.",
    image: "/images/image-7.png",
    href: "/weight-loss",
  },
];

export default function ServicesPage() {
  return (
    <section
      style={{
        background: "#FCFAFD",
        padding: "80px 0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Hero */}
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
            Our <span style={{ color: "#621C72" }}>Services</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#4A4A4A",
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            TelePlus Care offers a comprehensive range of virtual healthcare
            services across Alberta. From general medical care to specialized
            treatments, our licensed providers are here for you.
          </p>
        </div>

        {/* Service Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 32,
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(98,28,114,0.12)",
                borderTop: "4px solid #621C72",
                transition: "box-shadow 0.35s ease, transform 0.35s ease",
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
                  src={service.image}
                  alt={service.title}
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
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#621C72",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
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
                  {service.description}
                </p>
                <div>
                  <Link
                    href={service.href}
                    className="btn-primary"
                    style={{
                      fontSize: 14,
                      padding: "10px 24px",
                      borderRadius: 119,
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
