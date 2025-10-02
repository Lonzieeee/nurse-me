import React, { useEffect, useRef, useState } from 'react';
import './Whentobook.css';

function Whentobook() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  const whenToBookReasons = [
    {
      title: "Non-emergency medical consultations",
      subtitle: "Common illnesses like flu, fever, stomach upsets.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/first-aid.png"
    },
    {
      title: "Follow-up appointments",
      subtitle: "Continued care after a hospital or prior doctor visit.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/calendar.png"
    },
    {
      title: "Health checkups & screenings",
      subtitle: "Routine wellness checks, blood pressure, sugar monitoring.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/clipboard.png"
    },
    {
      title: "Chronic condition management",
      subtitle: "Support for diabetes, hypertension, asthma, arthritis.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/rate.png"
    },
    {
      title: "Pediatric care at home",
      subtitle: "Child checkups, vaccinations, sudden illnesses.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/mother.png"
    },
    {
      title: "Elderly care support",
      subtitle: "At-home medical care for seniors and mobility limited patients.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/couple.png"
    },
    {
      title: "Post-hospital recovery",
      subtitle: "Wound dressing, stitches removal, monitoring after surgery.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/bed.png"
    },
    {
      title: "Second medical opinions",
      subtitle: "Professional reassurance and alternative perspectives.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/bubble-chat.png"
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
    <section className="whentobook" ref={sectionRef}>
      <div className="whentobook-container">
        <h2 className="whentobook-title">When to <span className="highlight">Book</span> a Doctor House Call</h2>
        <div className={`whentobook-grid ${isVisible ? 'cards-unstacked' : 'cards-stacked'}`}>
          {whenToBookReasons.map((reason, index) => {
            
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
                className={`whentobook-card ${isVisible ? 'card-visible' : 'card-stacked'}`}
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
                <div className="card-icon">
                  <img src={reason.icon} alt={reason.title} />
                </div>
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-subtitle">{reason.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Whentobook;
