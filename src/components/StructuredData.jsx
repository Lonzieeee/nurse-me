import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'organization' }) => {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "NurseMe",
    "description": "Professional healthcare services at home including nursing care, doctor house calls, medication delivery, palliative care, and physiotherapy",
    "url": "https://nurseme.com",
    "logo": "https://nurseme.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    },
    "sameAs": [
  
      // "https://www.facebook.com/nurseme",
      // "https://twitter.com/nurseme",
      // "https://www.linkedin.com/company/nurseme"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Home Nursing Services",
            "description": "Professional nursing care at your home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Doctor House Calls",
            "description": "Medical consultations at home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medication Delivery",
            "description": "Prescription medicines delivered to your doorstep"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Palliative Care",
            "description": "Compassionate end-of-life care at home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalTherapy",
            "name": "Physiotherapy",
            "description": "Professional physical therapy at home"
          }
        }
      ]
    }
  };

 
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NurseMe",
    "url": "https://nurseme.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://nurseme.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nurseme.com/home"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://nurseme.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://nurseme.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://nurseme.com/contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
