import React, { useEffect, useRef, useState } from 'react';
import './WhoNeedsPalliative.css';

function WhoNeedsPalliative() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  const whoNeedsReasons = [
    {
      title: "Patients with Advanced Illnesses",
      subtitle: "Such as cancer, heart failure, kidney disease, or chronic respiratory conditions.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/first-aid.png"
    },
    {
      title: "Elderly Individuals with Frailty",
      subtitle: "Seniors with reduced mobility, frequent hospital admissions, or age-related complications.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/couple.png"
    },
    {
      title: "People with Chronic Pain or Symptoms",
      subtitle: "Those experiencing ongoing pain, breathlessness, fatigue, or nausea.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/rate.png"
    },
    {
      title: "Patients with Neurological Conditions",
      subtitle: "Including dementia, Parkinson's, multiple sclerosis, or stroke-related challenges.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/clipboard.png"
    },
    {
      title: "Those Requiring Long-Term Home Care",
      subtitle: "Patients who cannot frequently travel to hospitals but need regular medical attention.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/bed.png"
    },
    {
      title: "Families Needing Caregiver Support",
      subtitle: "Loved ones caring for a sick family member who need guidance, counseling, or respite.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/bubble-chat.png"
    },
    {
      title: "Children with Chronic Conditions",
      subtitle: "Pediatric patients who require ongoing care and comfort at home.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/mother.png"
    },
    {
      title: "Individuals in Final Stages of Life",
      subtitle: "Those seeking dignity, peace, and comfort in their own homes during end-of-life care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/calendar.png"
    }
  ];

  const getGridConfig = () => {
    if (typeof window === 'undefined') return { columns: 4 };
    
    const width = window.innerWidth;
    if (width <= 480) {
      return { columns: 2 }; 
    } else if (width <= 768) {
      return { columns: 3 }; 
    } else if (width <= 1024) {
      return { columns: 3 };
    }
    return { columns: 4 };
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
    <section className="palliative-needs" ref={sectionRef}>
      <div className="palliative-needs-container">
        <h2 className="palliative-needs-title">Who Needs <span className="palliative-highlight">Palliative Care?</span></h2>
        <div className={`palliative-needs-grid ${isVisible ? 'palliative-cards-unstacked' : 'palliative-cards-stacked'}`}>
          {whoNeedsReasons.map((reason, index) => {
            
            const getColumns = () => {
              if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                if (width <= 480) return 2; 
                if (width <= 768) return 3;
                if (width <= 1024) return 3; 
              }
              return 4; 
            };
            
            const columns = getColumns();
            const row = Math.floor(index / columns);
            const positionInRow = index % columns;
            
            return (
              <div 
                key={index} 
                className={`palliative-needs-card ${isVisible ? 'palliative-card-visible' : 'palliative-card-stacked'}`}
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
                <div className="palliative-card-icon">
                  <img src={reason.icon} alt={reason.title} />
                </div>
                <h3 className="palliative-card-title">{reason.title}</h3>
                <p className="palliative-card-subtitle">{reason.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoNeedsPalliative;
