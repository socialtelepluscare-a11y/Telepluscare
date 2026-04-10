import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const serviceCardsData = [
  {
    title: "Weight Loss & Diabetes Management",
    description:
      "Managing weight and diabetes can be challenging without guidance. TelePlus Care offers digital health solutions in Alberta through virtual programs focused on sustainable lifestyle changes. Our virtual doctor consultations provide dietary advice, exercise plans, and ongoing monitoring to support your journey to better health.",
    image: "/images/image-2.png",
    href: "/diabetes-chronic-disease",
  },
  {
    title: "General Medical Care",
    description:
      "TelePlus Care addresses a wide range of health concerns, from infections and allergies to chronic illnesses. Our Canadian telemedicine services include diagnostic evaluations, preventive care strategies, and treatment plans, all accessible through online doctor consultations in Alberta.",
    image: "/images/image.jpg",
    href: "/general-health",
  },
  {
    title: "Women\u2019s Health",
    description:
      "Women\u2019s health requires specialized attention, and TelePlus Care offers services tailored to women\u2019s wellness needs, including virtual primary care in Alberta for reproductive health, hormone management, and routine check-ups.",
    image: "/images/image-1.jpg",
    href: "/womens-health",
  },
  {
    title: "Skin Conditions",
    description:
      "TelePlus Care also provides virtual support for skin conditions, including acne, eczema, and psoriasis. With digital doctor visits across Alberta, our providers offer personalized treatment plans through a Alberta telemedicine network designed to help you maintain healthy skin.",
    image: "/images/image-3.png",
    href: "/skin-conditions",
  },
  {
    title: "Men\u2019s Health",
    description:
      "Men\u2019s health requires specialized attention, and TelePlus Care offers services tailored to men\u2019s wellness needs, including virtual primary care in Alberta for prostate health, hormone management, and routine check-ups. Access remote medical services in Alberta designed to prioritize men\u2019s health in a convenient, confidential setting.",
    image: "/images/image-2.jpg",
    href: "/mens-health",
  },
  {
    title: "Aesthetic Services",
    description:
      "Our aesthetic services allow Canadians to explore skin rejuvenation, anti-aging, and hair restoration solutions through safe, virtual consultations. These virtual health services in Alberta bring convenience and expertise right to your device.",
    image: "/images/image-3.jpg",
    href: "/aesthetic",
  },
  {
    title: "Mental Health",
    description:
      "TelePlus Care offers compassionate mental health support through virtual consultations. Our licensed professionals provide therapy, counselling, and treatment for anxiety, depression, stress, ADHD, and other mental health concerns from the comfort of your home.",
    image: "/images/image-8.png",
    href: "/mental-health",
  },
  {
    title: "Virtual Walk-in Clinic",
    description:
      "Skip the waiting room. TelePlus Care\u2019s virtual walk-in clinic provides same-day appointments for non-emergency health concerns. See a licensed healthcare provider from anywhere in Alberta without leaving your home.",
    image: "/images/image-9.png",
    href: "/virtual-walk-in-clinic-edmonton",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Our chronic disease management program helps patients with diabetes, hypertension, and other ongoing conditions. Through regular virtual check-ins, medication management, and lifestyle guidance, we help you stay on top of your health.",
    image: "/images/image-4.png",
    href: "/diabetes-chronic-disease",
  },
  {
    title: "Weight Loss Program",
    description:
      "Achieve your weight loss goals with personalized virtual programs. Our healthcare providers offer dietary counselling, exercise plans, GLP-1 medication guidance, and ongoing monitoring to support sustainable weight management.",
    image: "/images/image-7.png",
    href: "/weight-loss",
  },
];

export default function ServiceCards() {
  return (
    <section style={{ background: "#FCFAFD", padding: "80px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}
        >
          {serviceCardsData.map((service) => (
            <div
              key={service.title}
              className="service-card"
              style={{
                display: "flex",
                flexDirection: "row",
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(98,28,114,0.12)",
                borderLeft: "4px solid var(--primary)",
                transition: "all 0.35s ease",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: 200,
                  minHeight: 240,
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="200px"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="service-card-img"
                />
              </div>

              {/* Text */}
              <div
                style={{
                  padding: 24,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text)",
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
                    style={{ fontSize: 14, padding: "10px 24px" }}
                  >
                    Book now
                    <FiArrowUpRight style={{ width: 14, height: 14 }} />
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
