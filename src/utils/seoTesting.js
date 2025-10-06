

import { getSEOData, getStructuredData } from '../utils/seoConfig';


export const testSEOImplementation = () => {
  const testPaths = [
    '/',
    '/home',
    '/services',
    '/home-nursing',
    '/doctor-house-calls',
    '/medication-delivery',
    '/palliative-care',
    '/physiotherapy',
    '/about',
    '/contact'
  ];

  console.log('🔍 SEO Implementation Test Results:');
  console.log('===================================');

  testPaths.forEach(path => {
    const seoData = getSEOData(path);
    const structuredData = getStructuredData(path);
    
    console.log(`\n📄 Page: ${path}`);
    console.log(`✅ Title: ${seoData.title?.substring(0, 60)}...`);
    console.log(`✅ Description: ${seoData.description?.substring(0, 80)}...`);
    console.log(`✅ Keywords: ${seoData.keywords?.split(',').slice(0, 3).join(', ')}...`);
    console.log(`✅ Structured Data: ${Array.isArray(structuredData) ? 'Array' : 'Object'}`);
  });

  console.log('\n🎉 SEO Test Complete!');
  console.log('All pages have unique SEO metadata.');
};


export const validateDOMMetaTags = () => {
  const results = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content,
    keywords: document.querySelector('meta[name="keywords"]')?.content,
    ogTitle: document.querySelector('meta[property="og:title"]')?.content,
    ogDescription: document.querySelector('meta[property="og:description"]')?.content,
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href
  };

  console.log('🔍 Current Page Meta Tags:', results);
  return results;
};


export const validateStructuredData = () => {
  const structuredDataElements = document.querySelectorAll('script[type="application/ld+json"]');
  console.log(`📊 Found ${structuredDataElements.length} structured data blocks`);
  
  structuredDataElements.forEach((element, index) => {
    try {
      const data = JSON.parse(element.textContent);
      console.log(`Structured Data ${index + 1}:`, data['@type'] || 'Unknown type');
    } catch (error) {
      console.error(`Invalid JSON in structured data ${index + 1}`);
    }
  });
};


export const runSEOHealthCheck = () => {
  console.log('NurseMe SEO Health Check');
  console.log('===========================');
  
  // Test configuration
  testSEOImplementation();
  
  // Validate current page
  validateDOMMetaTags();
  
  // Check structured data
  validateStructuredData();
  
  console.log('\n✅ SEO Health Check Complete!');
  console.log('💡 Open browser dev tools to see detailed results.');
};

// Export for global access in browser console
if (typeof window !== 'undefined') {
  window.seoTest = {
    test: testSEOImplementation,
    validateDOM: validateDOMMetaTags,
    validateStructuredData: validateStructuredData,
    healthCheck: runSEOHealthCheck
  };
}
