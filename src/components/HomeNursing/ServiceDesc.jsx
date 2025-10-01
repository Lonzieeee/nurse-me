import React, { useEffect, useRef } from 'react';
import './ServiceDesc.css';

function ServiceDesc() {
  const containerRef = useRef(null);

  const benefits = [
    {
      title: "Comfort & Familiarity",
      titleWithSpan: (
        <>
          <span className="green-accent">C</span>omfort & <span className="green-accent">F</span>amiliarity
        </>
      ),
      description: "Experience the comfort and familiarity of being at home while receiving professional medical care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Comfort.png"
    },
    {
      title: "Reduced Infection Risk",
      titleWithSpan: (
        <>
          <span className="green-accent">R</span>educed <span className="green-accent">I</span>nfection <span className="green-accent">R</span>isk
        </>
      ),
      description: "Significantly reduced risk of hospital-acquired infections in your clean, personal environment.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/ReducedRisk.png"
    },
    {
      title: "Personalized Care",
      titleWithSpan: (
        <>
          <span className="green-accent">P</span>ersonalized <span className="green-accent">C</span>are
        </>
      ),
      description: "Receive personalized, one-on-one care tailored specifically to your individual needs and preferences.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/one-on-one.png"
    },
    {
      title: "Emotional Support",
      titleWithSpan: (
        <>
          <span className="green-accent">E</span>motional <span className="green-accent">S</span>upport
        </>
      ),
      description: "Benefit from emotional support and comfort provided by the presence of family members and loved ones.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/EmotionalSupport.png"
    },
    {
      title: "Flexible Care Solutions",
      titleWithSpan: (
        <>
          <span className="green-accent">F</span>lexible <span className="green-accent">C</span>are <span className="green-accent">S</span>olutions
        </>
      ),
      description: "Enjoy flexible care that is perfectly tailored to your individual needs, schedule, and lifestyle.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/FlexibleCare.png"
    },
    {
      title: "Cost-Effective",
      titleWithSpan: (
        <>
          <span className="green-accent">C</span>ost-<span className="green-accent">E</span>ffective
        </>
      ),
      description: "Cost-effective alternative compared to prolonged hospital stays while maintaining high-quality care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/costeffective.png"
    }
  ];

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".benefit-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-desc" ref={containerRef}>
      <div className="service-desc-container">
        <h2 className="service-desc-title">
          Why <span className="highlight">Home Nursing?</span>
        </h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card ${index % 2 === 0 ? "left" : "right"}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h3 className="benefit-title">{benefit.titleWithSpan}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceDesc;
