import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review TelePlus Care's terms of service. Understand your rights and responsibilities when using our virtual healthcare platform in Alberta.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsOfServicePage() {
  const sectionHeading: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 700,
    color: "#1E293B",
    marginTop: 40,
    marginBottom: 12,
    lineHeight: 1.3,
  };

  const paragraph: React.CSSProperties = {
    fontSize: 16,
    color: "#4A4A4A",
    lineHeight: 1.8,
    marginBottom: 16,
  };

  const listStyle: React.CSSProperties = {
    fontSize: 16,
    color: "#4A4A4A",
    lineHeight: 1.8,
    marginBottom: 16,
    paddingLeft: 24,
  };

  return (
    <section
      style={{
        background: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#621C72",
            marginBottom: 8,
            lineHeight: 1.25,
          }}
        >
          Terms of Service
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#4A4A4A",
            marginBottom: 40,
            borderBottom: "1px solid #E8E8E8",
            paddingBottom: 20,
          }}
        >
          Understand Your Rights &amp; Responsibilities
          <br />
          <span style={{ fontSize: 13, color: "#94a3b8" }}>
            Last updated: August 30, 2025
          </span>
        </p>

        <p style={paragraph}>
          Welcome to TelePlus Care. These Terms of Service (&ldquo;Terms&rdquo;) govern
          your use of our website (telepluscare.com) and virtual healthcare
          services. By accessing or using our services, you agree to be bound by
          these Terms. If you do not agree, please do not use our services.
        </p>

        <h2 style={sectionHeading}>1. About Our Services</h2>
        <p style={paragraph}>
          TelePlus Care provides virtual healthcare services to residents of
          Alberta, Canada. Our services include virtual medical consultations,
          prescription management, mental health support, chronic disease
          management, aesthetic consultations, and other telemedicine services.
          Our platform connects you with licensed healthcare providers who
          deliver care remotely through video, phone, or secure messaging.
        </p>

        <h2 style={sectionHeading}>2. Eligibility</h2>
        <p style={paragraph}>To use our services, you must:</p>
        <ul style={listStyle}>
          <li>Be at least 18 years of age, or have parental/guardian consent</li>
          <li>
            Be a resident of Alberta or be physically located in Alberta at the
            time of your consultation
          </li>
          <li>
            Provide accurate and complete personal and health information
          </li>
          <li>Have a valid Alberta Health Care Insurance Plan (AHCIP) number for insured services</li>
        </ul>

        <h2 style={sectionHeading}>3. Not Emergency Services</h2>
        <p style={paragraph}>
          <strong>
            TelePlus Care does NOT provide emergency medical services.
          </strong>{" "}
          If you are experiencing a medical emergency, call 911 or go to your
          nearest emergency department immediately. Our virtual healthcare
          services are intended for non-emergency medical concerns only.
        </p>

        <h2 style={sectionHeading}>4. User Account and Responsibilities</h2>
        <p style={paragraph}>
          When using our services, you are responsible for:
        </p>
        <ul style={listStyle}>
          <li>
            Providing truthful, accurate, and complete information about your
            identity, medical history, and current symptoms
          </li>
          <li>
            Maintaining the confidentiality of your account credentials
          </li>
          <li>
            Using our services only for lawful purposes and in accordance with
            these Terms
          </li>
          <li>
            Following the medical advice and treatment plans provided by our
            healthcare professionals
          </li>
          <li>
            Notifying us promptly if you believe your account has been
            compromised
          </li>
        </ul>

        <h2 style={sectionHeading}>5. Medical Disclaimer</h2>
        <p style={paragraph}>
          The information and services provided through TelePlus Care are
          intended for general healthcare purposes and should not replace
          in-person medical evaluations when necessary. Our healthcare providers
          will use their professional judgment to determine if your condition
          can be appropriately managed through virtual care or if an in-person
          visit is recommended.
        </p>
        <p style={paragraph}>
          Virtual consultations have inherent limitations. Certain conditions
          may require physical examinations, diagnostic imaging, or laboratory
          testing that cannot be performed remotely. Our providers will advise
          you if in-person care is needed.
        </p>

        <h2 style={sectionHeading}>6. Prescriptions and Medications</h2>
        <p style={paragraph}>
          Our healthcare providers may prescribe medications based on their
          clinical assessment during virtual consultations. Prescriptions are
          subject to the provider&rsquo;s professional discretion and applicable
          regulations. We do not guarantee that a prescription will be issued
          for every consultation. Controlled substances and certain medications
          may have additional restrictions.
        </p>

        <h2 style={sectionHeading}>7. Fees and Payment</h2>
        <p style={paragraph}>
          Many of our services are covered by the Alberta Health Care Insurance
          Plan (AHCIP). Services not covered by provincial insurance, including
          certain aesthetic services, medical documentation, and uninsured
          consultations, will be billed directly to you. Fees will be
          communicated to you before the service is provided. Payment is due at
          the time of service unless otherwise arranged.
        </p>

        <h2 style={sectionHeading}>8. Cancellation and Refund Policy</h2>
        <p style={paragraph}>
          We ask that you provide at least 24 hours&rsquo; notice if you need to
          cancel or reschedule an appointment. Late cancellations or
          no-shows may be subject to a fee. Refund requests are handled on a
          case-by-case basis and are subject to our discretion.
        </p>

        <h2 style={sectionHeading}>9. Intellectual Property</h2>
        <p style={paragraph}>
          All content on our website, including text, graphics, logos, images,
          and software, is the property of TelePlus Care or its licensors and
          is protected by Canadian and international copyright and trademark
          laws. You may not reproduce, distribute, modify, or create derivative
          works from our content without our express written permission.
        </p>

        <h2 style={sectionHeading}>10. Privacy</h2>
        <p style={paragraph}>
          Your use of our services is also governed by our{" "}
          <a href="/privacy-policy" style={{ color: "#046BD2" }}>
            Privacy Policy
          </a>
          , which describes how we collect, use, and protect your personal and
          health information. By using our services, you consent to the
          practices described in our Privacy Policy.
        </p>

        <h2 style={sectionHeading}>11. Limitation of Liability</h2>
        <p style={paragraph}>
          To the fullest extent permitted by law, TelePlus Care and its
          officers, directors, employees, and agents shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of or inability to use our services. Our total
          liability for any claim arising from these Terms or our services shall
          not exceed the amount you paid for the specific service giving rise to
          the claim.
        </p>

        <h2 style={sectionHeading}>12. Indemnification</h2>
        <p style={paragraph}>
          You agree to indemnify and hold harmless TelePlus Care and its
          affiliates from any claims, damages, losses, or expenses (including
          legal fees) arising from your breach of these Terms, your misuse of
          our services, or your violation of any applicable law.
        </p>

        <h2 style={sectionHeading}>13. Governing Law</h2>
        <p style={paragraph}>
          These Terms are governed by and construed in accordance with the laws
          of the Province of Alberta and the federal laws of Canada applicable
          therein. Any disputes arising from these Terms or our services shall
          be subject to the exclusive jurisdiction of the courts of Alberta.
        </p>

        <h2 style={sectionHeading}>14. Changes to These Terms</h2>
        <p style={paragraph}>
          We reserve the right to modify these Terms at any time. We will notify
          you of material changes by posting the updated Terms on our website
          with a revised &ldquo;Last Updated&rdquo; date. Your continued use of our
          services after any changes constitutes acceptance of the revised
          Terms.
        </p>

        <h2 style={sectionHeading}>15. Contact Us</h2>
        <p style={paragraph}>
          If you have any questions about these Terms of Service, please contact
          us:
        </p>
        <div
          style={{
            background: "#FCFAFD",
            borderRadius: 18,
            padding: 28,
            border: "1px solid rgba(98,28,114,0.12)",
          }}
        >
          <p style={{ ...paragraph, marginBottom: 4 }}>
            <strong>TelePlus Care</strong>
          </p>
          <p style={{ ...paragraph, marginBottom: 4 }}>
            Email:{" "}
            <a
              href="mailto:info@telepluscare.com"
              style={{ color: "#046BD2" }}
            >
              info@telepluscare.com
            </a>
          </p>
          <p style={{ ...paragraph, marginBottom: 0 }}>
            Phone:{" "}
            <a href="tel:587-442-4898" style={{ color: "#046BD2" }}>
              587-442-4898
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
