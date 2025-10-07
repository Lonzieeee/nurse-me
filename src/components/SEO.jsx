import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription,
  canonical,
  type = 'website'
}) => {
  const siteTitle = "NurseMe";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const ogTitleFull = ogTitle || fullTitle;
  const ogDescriptionFull = ogDescription || description;
  const alternateUrl = canonical?.replace('https://nurseme.com', 'https://nurseme.magical.africa');

  return (
    <Helmet>
     
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
     
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitleFull} />
      <meta property="og:description" content={ogDescriptionFull} />
      <meta property="og:site_name" content={siteTitle} />
      
   
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitleFull} />
      <meta name="twitter:description" content={ogDescriptionFull} />
      
  
      {canonical && <link rel="canonical" href={canonical} />}
      {alternateUrl && <link rel="alternate" href={alternateUrl} />}
    </Helmet>
  );
};

export default SEO;
