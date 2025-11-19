import Script from 'next/script';

export default function BreadcrumbJsonLD({ breadcrumbs }) {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Script type="application/ld+json" id="breadcrumbs">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      })}
    </Script>
  );
}
