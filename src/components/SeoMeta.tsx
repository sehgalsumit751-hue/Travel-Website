import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoMetaProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SeoMeta: React.FC<SeoMetaProps> = ({ 
  title = "Best Taxi Service in Amritsar | Premium Cab Rental | Sehgal Travels", 
  description = "Book premium, reliable, and affordable taxi services in Amritsar with Sehgal Travels. Serving Wagah Border, outstation trips, and local city tours.",
  path = "/"
}) => {
  const siteUrl = "https://sehgaltravels.com"; // Replace with your actual domain
  const canonicalUrl = `${siteUrl}${path}`;

  // Structured Data (JSON-LD) for LocalBusiness/TaxiService
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Sehgal Travels",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/assets/sehgal-logo.png`,
    "priceRange": "₹₹",
    "telephone": "+91XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.6340",
      "longitude": "74.8723"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "31.6340",
        "longitude": "74.8723"
      },
      "geoRadius": "500000" // 500km radius for outstation cabs
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sehgal Travels" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};