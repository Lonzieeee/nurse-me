import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 70, 
        behavior: 'smooth'
      });
    }, 100); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; 
}

export default ScrollToTop;
