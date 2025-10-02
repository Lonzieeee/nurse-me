import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
          <span className="back-to-top-text">Back to Top</span>
        </button>
      )}
    </>
  );
}

export default BackToTop;
