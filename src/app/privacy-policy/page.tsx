import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read TelePlus Care's privacy policy. Learn how we collect, use, and protect your personal health information in compliance with Canadian privacy laws.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
          Safeguarding Your Personal Information &amp; Trust
          <br />
          <span style={{ fontSize: 13, color: "#94a3b8" }}>
            Last updated: August 30, 2025
          </span>
        </p>

        <p style={paragraph}>
          TelePlus Care (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
          protecting the privacy and confidentiality of your personal
          information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our website
          (telepluscare.com) and virtual healthcare services.
        </p>

        <h2 style={sectionHeading}>1. Information We Collect</h2>
        <p style={paragraph}>
          We may collect the following types of personal information when you use
          our services:
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Personal Identification Information:</strong> Name, date of
            birth, email address, phone number, mailing address, and Alberta
            Health Care Insurance Plan (AHCIP) number.
          </li>
          <li>
            <strong>Health Information:</strong> Medical history, symptoms,
            diagnoses, treatment plans, prescriptions, lab results, and other
            clinical data shared during virtual consultations.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type,
            device information, and usage data collected automatically through
            cookies and analytics tools.
          </li>
          <li>
            <strong>Payment Information:</strong> Credit card or payment details
            for services not covered by provincial health insurance.
          </li>
        </ul>

        <h2 style={sectionHeading}>2. How We Use Your Information</h2>
        <p style={paragraph}>We use the information we collect to:</p>
        <ul style={listStyle}>
          <li>Provide virtual healthcare consultations and medical services</li>
          <li>
            Process prescriptions, referrals, and other medical documentation
          </li>
          <li>
            Communicate with you regarding appointments, follow-ups, and health
            updates
          </li>
          <li>Process payments and manage billing</li>
          <li>
            Improve our website, services, and patient experience through
            analytics
          </li>
          <li>
            Comply with legal and regulatory obligations under Canadian and
            Alberta law
          </li>
        </ul>

        <h2 style={sectionHeading}>3. Legal Basis for Processing</h2>
        <p style={paragraph}>
          We process your personal and health information in accordance with the
          Personal Information Protection Act (PIPA) of Alberta, the Health
          Information Act (HIA) of Alberta, and the Personal Information
          Protection and Electronic Documents Act (PIPEDA) where applicable. We
          collect and use your information based on your consent, our
          contractual obligations to provide healthcare services, and our legal
          obligations.
        </p>

        <h2 style={sectionHeading}>4. How We Share Your Information</h2>
        <p style={paragraph}>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Healthcare Providers:</strong> Other physicians, specialists,
            pharmacies, and laboratories involved in your care
          </li>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist us
            in delivering our services (e.g., electronic medical records
            systems, payment processors, communication platforms), all of whom
            are bound by confidentiality agreements
          </li>
          <li>
            <strong>Legal Requirements:</strong> Government authorities or law
            enforcement when required by law or to protect the safety of our
            patients and staff
          </li>
        </ul>

        <h2 style={sectionHeading}>5. Data Security</h2>
        <p style={paragraph}>
          We implement industry-standard security measures to protect your
          personal and health information, including encryption of data in
          transit and at rest, secure access controls, regular security audits,
          and staff training on privacy and confidentiality. While we strive to
          protect your information, no method of electronic transmission or
          storage is 100% secure.
        </p>

        <h2 style={sectionHeading}>6. Data Retention</h2>
        <p style={paragraph}>
          We retain your personal and health information for as long as necessary
          to fulfill the purposes for which it was collected, and in compliance
          with applicable retention requirements under Alberta&rsquo;s Health
          Information Act and other applicable legislation. Medical records are
          generally retained for a minimum of 10 years following the last date
          of service, or longer as required by law.
        </p>

        <h2 style={sectionHeading}>7. Your Rights</h2>
        <p style={paragraph}>
          Under Canadian privacy law, you have the right to:
        </p>
        <ul style={listStyle}>
          <li>
            Access your personal and health information held by TelePlus Care
          </li>
          <li>
            Request correction of inaccurate or incomplete personal information
          </li>
          <li>
            Withdraw consent for the collection, use, or disclosure of your
            information (subject to legal and contractual restrictions)
          </li>
          <li>File a complaint with the applicable privacy commissioner</li>
        </ul>

        <h2 style={sectionHeading}>8. Cookies and Tracking Technologies</h2>
        <p style={paragraph}>
          Our website uses cookies and similar tracking technologies to enhance
          your browsing experience and analyze website traffic. You can manage
          your cookie preferences through your browser settings. We use Google
          Analytics to understand how visitors interact with our website. This
          data is aggregated and anonymized.
        </p>

        <h2 style={sectionHeading}>9. Third-Party Links</h2>
        <p style={paragraph}>
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices of these external sites
          and encourage you to review their privacy policies before providing
          any personal information.
        </p>

        <h2 style={sectionHeading}>10. Children&rsquo;s Privacy</h2>
        <p style={paragraph}>
          Our services are not directed to individuals under the age of 18
          without parental or guardian consent. We do not knowingly collect
          personal information from children without appropriate consent.
        </p>

        <h2 style={sectionHeading}>11. Changes to This Privacy Policy</h2>
        <p style={paragraph}>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable law. We will notify you of any
          material changes by posting the updated policy on our website with a
          revised &ldquo;Last Updated&rdquo; date.
        </p>

        <h2 style={sectionHeading}>12. Contact Us</h2>
        <p style={paragraph}>
          If you have any questions, concerns, or requests related to this
          Privacy Policy or how we handle your personal information, please
          contact us:
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
