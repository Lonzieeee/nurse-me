import React, { useEffect, useRef, useState } from 'react';
import './WhyOurTherapists.css';

function WhyOurTherapists() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  const whyTherapistReasons = [
    {
      title: "Licensed & verified mental health professionals",
      subtitle: "All our therapists are fully licensed and verified professionals.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/licensed.png" 
    },
    {
      title: "100% confidential and judgment-free sessions",
      subtitle: "Complete privacy and a safe space without any judgment.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/confidential-min.png" 
    },
    {
      title: "Flexible scheduling ; in-person or virtual",
      subtitle: "Choose the format and timing that works best for you.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/flexiblesheduling-min.jpg"
    },
    {
      title: "Therapists matched to your specific needs",
      subtitle: "Carefully matched professionals based on your unique requirements.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/personalization-min.jpg"
    },
    {
      title: "Safe space to talk, reflect, and heal",
      subtitle: "A supportive environment designed for healing and growth.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/safespace-min.png" 
    },
    {
      title: "Proven techniques like CBT, mindfulness & talk therapy",
      subtitle: "Evidence-based therapeutic approaches for effective treatment.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/proventechniques-min.png" 
    }
  ];

  const getGridConfig = () => {
    if (typeof window === 'undefined') return { columns: 3 };
    
    const width = window.innerWidth;
    if (width <= 480) {
      return { columns: 2 }; 
    } else if (width <= 768) {
      return { columns: 2 }; 
    } else if (width <= 1024) {
      return { columns: 3 };
    }
    return { columns: 3 };
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize('mobile'); 
      } else if (width <= 768) {
        setScreenSize('tablet'); 
      } else if (width <= 1024) {
        setScreenSize('small-desktop');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px 0px'
      }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="why-our-therapists" ref={sectionRef}>
      <div className="why-our-therapists-container">
        <h2 className="why-our-therapists-title">
          Why Our <span className="why-therapists-highlight">Therapists</span>
        </h2>
        <div className={`why-our-therapists-grid ${isVisible ? 'why-therapists-cards-unstacked' : 'why-therapists-cards-stacked'}`}>
          {whyTherapistReasons.map((reason, index) => {
            const getColumns = () => {
              if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                if (width <= 480) return 2; 
                if (width <= 768) return 2;
                if (width <= 1024) return 3; 
              }
              return 3; 
            };
            
            const columns = getColumns();
            const row = Math.floor(index / columns);
            const positionInRow = index % columns;
            
            return (
              <div 
                key={index} 
                className={`why-our-therapists-card ${isVisible ? 'why-therapists-card-visible' : 'why-therapists-card-stacked'}`}
                style={{
                  '--card-index': index,
                  '--row': row,
                  '--position-in-row': positionInRow,
                  '--columns': columns,
                  '--delay': `${positionInRow * 0.1}s`, 
                  gridColumn: positionInRow + 1,
                  gridRow: row + 1
                }}
              >
                <div className="why-therapists-card-icon">
                  {reason.imageIcon ? (
                    <img 
                      src={reason.imageIcon} 
                      alt={reason.title}
                      className="why-therapists-image-icon"
                    />
                  ) : (
                    <div className="why-therapists-placeholder-icon"></div>
                  )}
                </div>
                <h3 className="why-therapists-card-title">{reason.title}</h3>
                <p className="why-therapists-card-subtitle">{reason.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyOurTherapists;
