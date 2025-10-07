import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOData, getStructuredData } from '../../utils/seoConfig';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author,
  noindex = false,
  canonical 
}) => {
  const location = useLocation();
  const seoData = getSEOData(location.pathname);
  

  const metaTitle = title || seoData.title;
  const metaDescription = description || seoData.description;
  const metaKeywords = keywords || seoData.keywords;
  const metaImage = image || seoData.image;
  const metaUrl = url || seoData.url;
  const metaAuthor = author || seoData.author;
  const canonicalUrl = canonical || metaUrl;
  
  const structuredData = getStructuredData(location.pathname);

  return (
    <Helmet>
     
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={metaAuthor} />
      <link rel="canonical" href={canonicalUrl} />
      
     
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      
  
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NurseMe" />
      <meta property="og:locale" content="en_US" />
      
   
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:site" content="@NurseMe" />
      <meta name="twitter:creator" content="@NurseMe" />
      
    
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      
    
      <meta name="medical-disclaimer" content="This website provides general healthcare information and should not replace professional medical advice." />
      <meta name="healthcare-category" content="Home Healthcare Services" />
      
    
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      
      <link rel="preconnect" href="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    </Helmet>
  );
};

export default SEO;
