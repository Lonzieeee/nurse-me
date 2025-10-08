import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseHomeMidwifery.css';

function WhyChooseHomeMidwifery() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  const whyChooseReasons = [
    {
      title: "Comfort and privacy of your own home",
      subtitle: "Experience the birthing process in familiar, comfortable surroundings.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/comforthome-removebg-preview-min.png"
    },
    {
      title: "Personalized, one-on-one attention",
      subtitle: "Dedicated care focused entirely on your individual needs and preferences.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/oneonone-removebg-preview.webp"
    },
    {
      title: "Family involvement in the birthing process",
      subtitle: "Include loved ones in this special moment without hospital restrictions.",
      imageIcon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/familyinvolement.png"


    },
    {
      title: "Flexible scheduling and on-call support",
      subtitle: "24/7 availability with personalized scheduling to suit your needs.",
      imageIcon:"https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/appointment.png"
    },
    {
      title: "Calmer, more natural birth environment",
      subtitle: "Peaceful atmosphere that promotes relaxation and natural birthing.",
      imageIcon:"https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/homebirth.png"
    },
    {
      title: "Licensed and experienced midwives you can trust",
      subtitle: "Qualified professionals with extensive training and experience.",
      imageIcon:"https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/licensedmidwife.png"
    },
    {
      title: "Smooth coordination if hospital transfer is ever needed",
      subtitle: "Seamless transition to hospital care when medically necessary.",
      imageIcon:"https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/emergency.webp"
    },
    {
      title: "Emotional reassurance through every stage",
      subtitle: "Continuous emotional support throughout your entire journey.",
      imageIcon:"https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/emotionalmother.png"
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
    <section className="why-choose-midwifery" ref={sectionRef}>
      <div className="why-choose-midwifery-container">
        <h2 className="why-choose-midwifery-title">
          Why Choose <span className="why-choose-highlight">Home Midwifery</span>
        </h2>
        <div className={`why-choose-midwifery-grid ${isVisible ? 'why-choose-cards-unstacked' : 'why-choose-cards-stacked'}`}>
          {whyChooseReasons.map((reason, index) => {
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
                className={`why-choose-midwifery-card ${isVisible ? 'why-choose-card-visible' : 'why-choose-card-stacked'}`}
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
                <div className="why-choose-card-icon">
                  {reason.imageIcon ? (
                    <img 
                      src={reason.imageIcon} 
                      alt={reason.title}
                      className="why-choose-image-icon"
                    />
                  ) : (
                    <div className="why-choose-placeholder-icon"></div>
                  )}
                </div>
                <h3 className="why-choose-card-title">{reason.title}</h3>
                <p className="why-choose-card-subtitle">{reason.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseHomeMidwifery;
