import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "telepluscare.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://form.jotform.com https://pci.jotform.com https://cdn.jotfor.ms https://www.youtube.com https://www.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://form.jotform.com https://pci.jotform.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://form.jotform.com https://pci.jotform.com https://api.jotform.com; frame-src https://www.youtube.com https://www.google.com https://form.jotform.com https://pci.jotform.com; object-src 'none'; base-uri 'self';",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/online-prescriptions-and-refills-in-red-dear/",
        destination: "/online-prescriptions-and-refills-in-red-deer/",
        permanent: true,
      },
      {
        source: "/holsitic-healing-centre-in-edmonton/",
        destination: "/holistic-healing-centre-in-edmonton/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
