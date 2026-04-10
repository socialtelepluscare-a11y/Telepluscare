interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbItems = [
    { name: "Home", href: "https://telepluscare.com" },
    ...items,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(item.href ? { item: item.href } : {}),
          })),
        }),
      }}
    />
  );
}
