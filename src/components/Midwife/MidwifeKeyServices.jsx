import React, { useEffect, useRef } from 'react';
import './MidwifeKeyServices.css';

const MidwifeKeyServices = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Antenatal Checkups",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">A</span>ntenatal <span className="midwife-blue-accent">C</span>heckups
        </>
      ),
      description: "Regular pregnancy monitoring and wellness advice to ensure the health and well-being of both mother and baby.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pregnant-woman.png"
    },
    {
      title: "Home Birth Support",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">H</span>ome <span className="midwife-blue-accent">B</span>irth <span className="midwife-blue-accent">S</span>upport
        </>
      ),
      description: "Professional guidance and safe delivery at home for low-risk pregnancies with comprehensive care and monitoring.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/homebirth.png"
    },
    {
      title: "Postnatal Care",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">P</span>ostnatal <span className="midwife-blue-accent">C</span>are
        </>
      ),
      description: "Comprehensive monitoring of mother and baby after delivery, ensuring healthy recovery and adjustment.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/postnatalcare.png"
    },
    {
      title: "Newborn Care & Education",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">N</span>ewborn <span className="midwife-blue-accent">C</span>are & <span className="midwife-blue-accent">E</span>ducation
        </>
      ),
      description: "Teaching parents essential skills including feeding, bathing, and infant care for confident parenting.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/newborncare.png"
    },
    {
      title: "Breastfeeding Support",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">B</span>reastfeeding <span className="midwife-blue-accent">S</span>upport
        </>
      ),
      description: "Expert help with latching, milk supply management, and comfort to ensure successful breastfeeding experience.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/breastfeeding.png"
    },
    {
      title: "Maternal Nutrition Guidance",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">M</span>aternal <span className="midwife-blue-accent">N</span>utrition <span className="midwife-blue-accent">G</span>uidance
        </>
      ),
      description: "Balanced diet planning during and after pregnancy to support optimal health for mother and baby.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/maternalnutrition-removebg-preview-min.png"
    },
    {
      title: "Emergency Referral Coordination",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">E</span>mergency <span className="midwife-blue-accent">R</span>eferral <span className="midwife-blue-accent">C</span>oordination
        </>
      ),
      description: "Safe, fast referrals to hospital care when necessary, ensuring seamless transition and continuity of care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/prenatal-care.png"
    },
    {
      title: "Emotional & Family Support",
      titleWithSpan: (
        <>
          <span className="midwife-blue-accent">E</span>motional & <span className="midwife-blue-accent">F</span>amily <span className="midwife-blue-accent">S</span>upport
        </>
      ),
      description: "Compassionate care and emotional support for the whole family throughout the maternity journey.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/social.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const cards = containerRef.current?.querySelectorAll('.midwife-benefit-card');
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
    <section className="midwife-service-desc">
      <div className="midwife-service-desc-container" ref={containerRef}>
        <h2 className="midwife-service-desc-title">
          Our <span className="midwife-highlight">Services</span>
        </h2>
        
        <div className="midwife-benefits-grid">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`midwife-benefit-card ${isLeft ? 'left' : 'right'}`}
              >
                <div className="midwife-benefit-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="midwife-benefit-title">{service.titleWithSpan}</h3>
                <p className="midwife-benefit-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MidwifeKeyServices;
