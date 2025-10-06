import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking component
const Analytics = () => {
  const location = useLocation();

  const trackPageView = (path) => {
    // Custom page view tracking
    const pageData = {
      page: path,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    // You can send this data to your analytics service
    console.log('Page view tracked:', pageData);
    
    // Healthcare-specific tracking
    trackHealthcareEvents(path);
  };

  const trackHealthcareEvents = (path) => {
    const healthcarePages = {
      '/home-nursing': 'Home Nursing Service View',
      '/doctor-house-calls': 'Doctor House Calls View',
      '/medication-delivery': 'Medication Delivery View',
      '/palliative-care': 'Palliative Care View',
      '/physiotherapy': 'Physiotherapy Service View',
      '/services/book': 'Booking Page View',
      '/services/join': 'Career Page View'
    };

    if (healthcarePages[path]) {
      // Track healthcare-specific events
      console.log('Healthcare event:', healthcarePages[path]);
      
      // Custom event tracking (replace with your analytics service)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          event_category: 'Healthcare Services',
          event_label: healthcarePages[path],
          value: 1
        });
      }
    }
  };

  useEffect(() => {
    // Google Analytics pageview tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }

    // Custom analytics tracking for healthcare-specific events
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default Analytics;
