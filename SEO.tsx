const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Akmens Burtininkas - Stone Masonry & Tiling",
    "image": "https://your-domain.com/logo.png",
    "description": "Expert stone masonry and tiling services with 25+ years of experience",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "telephone": "(555) 123-4567",
    "email": "info@stonecraft.com",
    "priceRange": "$$$",
    "areaServed": ["Metro Area"],
    "sameAs": [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SEO;