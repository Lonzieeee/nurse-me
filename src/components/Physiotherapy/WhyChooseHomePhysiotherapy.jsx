import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseHomePhysiotherapy.css';

function WhyChooseHomePhysiotherapy() {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const sectionRef = useRef(null);

  const whyChooseReasons = [
    {
      title: "Comfort & Privacy at Home",
      subtitle: "Heal in your own familiar environment. Relaxed, safe, and stress-free.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/house.png"
    },
    {
      title: "Flexible Scheduling That Fits You",
      subtitle: "Set appointment times that work best for your daily routine.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/calendarclock.png"
    },
    {
      title: "Personalized, One-on-One Care",
      subtitle: "Enjoy focused sessions designed specifically for your condition and pace.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physical-therapy.png"
    },
    {
      title: "No Travel or Long Clinic Queues",
      subtitle: "Your physiotherapist comes to you , saving energy and avoiding traffic.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/no%20queue.webp"
    },
    {
      title: "Faster, Consistent Recovery",
      subtitle: "Regular sessions and personal monitoring help you recover faster.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/recovery.png"
    },
    {
      title: "Family Involvement & Encouragement",
      subtitle: "Loved ones can join in and learn supportive exercises for your continued care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/foster.png"
    },
    {
      title: "Professional Equipment, Brought to You",
      subtitle: "Our physiotherapists bring the right tools and materials needed for your sessions.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/first-aid.png"
    },
    {
      title: "Safe, Trusted & Licensed Experts",
      subtitle: "Get care from certified physiotherapists who follow strict health and safety standards.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/certificate.png"
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
    <section className="why-choose-physio" ref={sectionRef}>
      <div className="why-choose-physio-container">
        <h2 className="why-choose-physio-title">Why Choose <span className="physio-highlight">Home Physiotherapy</span></h2>
        <div className={`why-choose-physio-grid ${isVisible ? 'physio-cards-unstacked' : 'physio-cards-stacked'}`}>
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
                className={`why-choose-physio-card ${isVisible ? 'physio-card-visible' : 'physio-card-stacked'}`}
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
                <div className="physio-card-icon">
                  <img src={reason.icon} alt={reason.title} />
                </div>
                <h3 className="physio-card-title">{reason.title}</h3>
                <p className="physio-card-subtitle">{reason.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseHomePhysiotherapy;
