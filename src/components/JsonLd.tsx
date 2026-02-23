import React from 'react';

export const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Pillar Point Homes",
    "image": "https://res.cloudinary.com/djfqa4llc/image/upload/v1771626333/imgi_2_336815376_603226418328153_6483497326909802276_n_yhrqcy.jpg",
    "@id": "https://pillarpointhomes.com",
    "url": "https://pillarpointhomes.com",
    "telephone": "+2349041110004",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beechwood Estate, Plot 25B Kiyawa Close, Off College Cres, Ibeju Lekki",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "postalCode": "101245",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.428,
      "longitude": 3.8242
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/pillarpointhomes/",
      "https://web.facebook.com/people/Pillar-Point-Homes/",
      "https://www.linkedin.com/company/pillar-point-homes/",
      "https://www.youtube.com/@pillarpointhomes"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
