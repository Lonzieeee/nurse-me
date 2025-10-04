import React, { useEffect, useRef } from 'react';
import './KeyServices.css';

const KeyServices = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Pain & Symptom Management",
      titleWithSpan: (
        <>
          <span className="blue-accent">P</span>ain & <span className="blue-accent">S</span>ymptom <span className="blue-accent">M</span>anagement
        </>
      ),
      description: "Expert pain relief and symptom control using advanced medical techniques, ensuring comfort and dignity throughout your care journey.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pain_symptoms-removebg-preview.png"
    },
    {
      title: "Emotional & Psychological Support",
      titleWithSpan: (
        <>
          <span className="blue-accent">E</span>motional & <span className="blue-accent">P</span>sychological <span className="blue-accent">S</span>upport
        </>
      ),
      description: "Compassionate counseling and emotional guidance for patients and families, helping navigate the complex feelings during difficult times.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/emotional%26psychological.png"
    },
    {
      title: "Family & Caregiver Guidance",
      titleWithSpan: (
        <>
          <span className="blue-accent">F</span>amily & <span className="blue-accent">C</span>aregiver <span className="blue-accent">G</span>uidance
        </>
      ),
      description: "Comprehensive education and support for family members and caregivers, empowering them with knowledge and confidence in care provision.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/familyguidance.png"
    },
    {
      title: "Nutritional & Wellness Support",
      titleWithSpan: (
        <>
          <span className="blue-accent">N</span>utritional & <span className="blue-accent">W</span>ellness <span className="blue-accent">S</span>upport
        </>
      ),
      description: "Specialized dietary planning and wellness programs designed to maintain strength, comfort, and quality of life throughout treatment.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nutitionandwellness.png"
    },
    {
      title: "Medication & Treatment Coordination",
      titleWithSpan: (
        <>
          <span className="blue-accent">M</span>edication & <span className="blue-accent">T</span>reatment <span className="blue-accent">C</span>oordination
        </>
      ),
      description: "Seamless coordination of all medications and treatments, ensuring optimal care management and preventing complications.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/medication%26treatment.png"
    },
    {
      title: "Dignity & Comfort Care",
      titleWithSpan: (
        <>
          <span className="blue-accent">D</span>ignity & <span className="blue-accent">C</span>omfort <span className="blue-accent">C</span>are
        </>
      ),
      description: "Dignified, peaceful end-of-life care focused on comfort, respect, and honoring personal wishes in familiar surroundings.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/dignity%26comfort.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cards = containerRef.current?.querySelectorAll('.palliative-benefit-card');
            if (cards) {
              cards.forEach((card, cardIndex) => {
                setTimeout(() => {
                  card.classList.add('in-view');
                }, cardIndex * 150);
              });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="palliative-service-desc">
      <div className="palliative-service-desc-container" ref={containerRef}>
        <h2 className="palliative-service-desc-title">
          Key <span className="highlight">Services</span>
        </h2>
        
        <div className="palliative-benefits-grid">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`palliative-benefit-card ${isLeft ? 'left' : 'right'}`}
              >
                <div className="palliative-benefit-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="palliative-benefit-title">{service.titleWithSpan}</h3>
                <p className="palliative-benefit-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
