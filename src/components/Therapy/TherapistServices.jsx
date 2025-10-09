import React, { useEffect, useRef } from 'react';
import './TherapistServices.css';

const TherapistServices = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Individual person Therapy",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">I</span>ndividual <span className="therapist-blue-accent">T</span>herapy
        </>
      ),
      description: "One-on-one sessions with licensed therapists for stress, anxiety, depression, and personal growth.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/individual-min.png" 
    },
    {
      title: "Couple Therapy",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">C</span>ouple <span className="therapist-blue-accent">T</span>herapy
        </>
      ),
      description: "Professional guidance to improve communication, resolve conflicts, and strengthen relationships.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/coupletherapy-min.png" 
    },
    {
      title: "Family Therapy",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">F</span>amily <span className="therapist-blue-accent">T</span>herapy
        </>
      ),
      description: "Family counseling to strengthen relationships, improve communication, and resolve conflicts together.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/familytherapy-min.png" 
    },
    {
      title: "Adolescent & Teen Counseling",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">A</span>dolescent & <span className="therapist-blue-accent">T</span>een <span className="therapist-blue-accent">C</span>ounseling
        </>
      ),
      description: "Specialized support for teenagers dealing with school stress, identity issues, and emotional challenges.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/teentherapy.png"
    },
    {
      title: "Trauma & Grief Counseling",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">T</span>rauma & <span className="therapist-blue-accent">G</span>rief <span className="therapist-blue-accent">C</span>ounseling
        </>
      ),
      description: "Compassionate therapy for processing traumatic experiences and navigating the grieving process.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/funeral.png" 
    },
    {
      title: "Depression & Anxiety Management",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">D</span>epression & <span className="therapist-blue-accent">A</span>nxiety <span className="therapist-blue-accent">M</span>anagement
        </>
      ),
      description: "Evidence-based therapy using CBT and mindfulness to manage symptoms and improve wellbeing.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/anxietyanddepressionmanagement-min.png" 
    },
    {
      title: "Stress & Burnout Recovery",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">S</span>tress & <span className="therapist-blue-accent">B</span>urnout <span className="therapist-blue-accent">R</span>ecovery
        </>
      ),
      description: "Learn healthy coping strategies, stress management, and work-life balance techniques.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/stressandburnout.png" 
    },
    {
      title: "Virtual Therapy Sessions",
      titleWithSpan: (
        <>
          <span className="therapist-blue-accent">V</span>irtual <span className="therapist-blue-accent">T</span>herapy <span className="therapist-blue-accent">S</span>essions
        </>
      ),
      description: "Secure online therapy sessions from home with flexible scheduling and complete privacy.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/virtual-meeting-min.png" 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cards = containerRef.current?.querySelectorAll('.therapist-benefit-card');
          if (cards) {
            if (entry.isIntersecting) {
             
              cards.forEach((card) => {
                card.classList.remove('in-view');
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
              });
              
          
              cards.forEach((card, cardIndex) => {
                setTimeout(() => {
                  card.classList.add('in-view');
                }, cardIndex * 150);
              });
            } else {
          
              cards.forEach((card) => {
                card.classList.remove('in-view');
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
              });
            }
          }
        });
      },
      { 
        threshold: window.innerWidth <= 768 ? 0.1 : 0.6,
        rootMargin: '50px'
      }
    );

    
    const mobileTimeout = setTimeout(() => {
      if (window.innerWidth <= 768) {
        const cards = containerRef.current?.querySelectorAll('.therapist-benefit-card');
        if (cards) {
          cards.forEach((card, cardIndex) => {
            if (!card.classList.contains('in-view')) {
              setTimeout(() => {
                card.classList.add('in-view');
              }, cardIndex * 150);
            }
          });
        }
      }
    }, 1000);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(mobileTimeout);
    };
    
  }, []);

  return (
    <section className="therapist-service-desc">
      <div className="therapist-service-desc-container" ref={containerRef}>
        <h2 className="therapist-service-desc-title">
          Our <span className="therapist-highlight">Services</span>
        </h2>
        
        <div className="therapist-benefits-grid">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`therapist-benefit-card ${isLeft ? 'left' : 'right'}`}
              >
                <div className="therapist-benefit-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="therapist-benefit-title">{service.titleWithSpan}</h3>
                <p className="therapist-benefit-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TherapistServices;
