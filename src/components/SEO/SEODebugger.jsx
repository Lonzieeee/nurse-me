import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOData } from '../../utils/seoConfig';

const SEODebugger = () => {
  const location = useLocation();
  const [seoData, setSeoData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const data = getSEOData(location.pathname);
    setSeoData(data);
  }, [location.pathname]);

  // Only show in development mode
  useEffect(() => {
    setIsVisible(import.meta.env.DEV);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#1f2937',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: '300px',
      zIndex: 9999,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>SEO Debug Info</h4>
      <div style={{ marginBottom: '8px' }}>
        <strong>Page:</strong> {location.pathname}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <strong>Title:</strong> {seoData.title?.substring(0, 50)}...
      </div>
      <div style={{ marginBottom: '8px' }}>
        <strong>Description:</strong> {seoData.description?.substring(0, 80)}...
      </div>
      <div style={{ marginBottom: '8px' }}>
        <strong>Keywords:</strong> {seoData.keywords?.split(',').slice(0, 3).join(', ')}...
      </div>
      <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '10px' }}>
        SEO data loaded ✓
      </div>
    </div>
  );
};

export default SEODebugger;
