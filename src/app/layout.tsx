import "./globals.css";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import StickyBottomBar from "@/components/sections/StickyBottomBar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL("https://telepluscare.com"),
  title: {
    default: "Virtual Healthcare Services in Alberta | TelePlus Care",
    template: "%s | TelePlus Care",
  },
  description:
    "TelePlus Care is a modern healthcare solution, offering convenient virtual medical care designed for everyone across Alberta.",
  openGraph: {
    siteName: "TelePlus Care",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/Group-37520.png",
        width: 1200,
        height: 630,
        alt: "TelePlus Care - Virtual Healthcare Services in Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-ca": "/",
      "x-default": "/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H8N70SYLLJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H8N70SYLLJ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "@id": "https://telepluscare.com/#organization",
              name: "TelePlus Care",
              url: "https://telepluscare.com",
              logo: {
                "@type": "ImageObject",
                "@id": "https://telepluscare.com/#logo",
                url: "https://telepluscare.com/images/logo-1.webp",
                contentUrl: "https://telepluscare.com/images/logo-1.webp",
                caption: "TelePlus Care",
              },
              image: "https://telepluscare.com/images/logo-1.webp",
              telephone: "+1-587-442-4898",
              email: "booking@telepluscare.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17803 65 St NW",
                addressLocality: "Edmonton",
                addressRegion: "AB",
                postalCode: "T5Z 3K6",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 53.59610,
                longitude: -113.40930,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Alberta",
                  addressCountry: "CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Saskatchewan",
                  addressCountry: "CA",
                },
              ],
              medicalSpecialty: [
                "https://schema.org/PrimaryCare",
                "https://schema.org/Dermatology",
                "https://schema.org/Psychiatric",
              ],
              employee: { "@id": "https://telepluscare.com/#dr-maher-jerudi" },
              sameAs: [
                "https://www.facebook.com/p/TelePlus-Care-Clinic-61565709950691/",
                "https://www.youtube.com/@telepluscare-alberta",
                "https://www.instagram.com/tele.pluscare/",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "159",
                bestRating: "5",
                worstRating: "1",
              },
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://telepluscare.janeapp.com",
                  actionPlatform:
                    "https://schema.org/DesktopWebPlatform",
                },
                result: {
                  "@type": "Reservation",
                  name: "Book Virtual Appointment",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://telepluscare.com/#website",
              name: "TelePlus Care",
              url: "https://telepluscare.com",
              publisher: {
                "@id": "https://telepluscare.com/#organization",
              },
              inLanguage: "en-CA",
            }),
          }}
        />
        {/* Lead physician — Person schema for E-E-A-T */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "@id": "https://telepluscare.com/#dr-maher-jerudi",
              name: "Dr. Maher Jerudi",
              honorificPrefix: "Dr.",
              honorificSuffix: "MD",
              jobTitle: "Lead Physician",
              image: "https://telepluscare.com/images/dr-maher-jerudi.jpg",
              worksFor: {
                "@id": "https://telepluscare.com/#organization",
              },
              medicalSpecialty: [
                "https://schema.org/InternalMedicine",
                "https://schema.org/Endocrine",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Board Certification",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "American Board of Internal Medicine",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Board Certification",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "American Board of Obesity Medicine",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Fellowship",
                  name: "Stroke and Cerebrovascular Disease",
                },
              ],
              knowsAbout: [
                "Internal Medicine",
                "Obesity Medicine",
                "Diabetes Management",
                "Stroke Prevention",
                "Cerebrovascular Disease",
                "Weight Loss",
                "Metabolic Health",
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <Header />
        <main>{children}</main>
        <MedicalDisclaimer />
        <Footer />
        <ScrollToTop />
        <StickyBottomBar />
      </body>
    </html>
  );
}
