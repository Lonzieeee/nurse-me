import React, { useEffect, useRef } from 'react';
import './SimpleSteps.css';

function SimpleSteps() {
  const containerRef = useRef(null);

  const scrollToBooking = () => {
    const bookingSection = document.querySelector('.hero-cta-button');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const physiotherapySteps = [
    {
      id: 1,
      title: "Book a physiotherapist online",
      description: "Schedule your appointment through our user-friendly platform. Choose your preferred time and specify your treatment needs.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physiocalendar.png"
    },
    {
      id: 2,
      title: "Initial assessment & personalized plan",
      description: "Our licensed physiotherapist conducts a thorough assessment and creates a customized treatment plan tailored to your specific condition.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physiochecklist.png"
    },
    {
      id: 3,
      title: "Home visit sessions begin",
      description: "Professional physiotherapy sessions start in the comfort of your home with all necessary equipment brought by our therapist.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/firstaider.png"
    },
    {
      id: 4,
      title: "Progress tracking & ongoing guidance",
      description: "Regular monitoring of your progress with adjustments to your treatment plan and continued guidance for optimal recovery.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/success.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('physio-step-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const steps = containerRef.current?.querySelectorAll('.physio-step');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="physiotherapy-simple-steps">
      <div className="physiotherapy-steps-container">
        <div className="physio-steps-header">
          <h2 className="physio-steps-title">How It Works <span className="physio-steps-highlight">(Simple Steps)</span></h2>
          <p className="physio-steps-subtitle">
            Easy steps to get professional physiotherapy treatment at your home
          </p>
        </div>

        <div className="physio-steps-list" ref={containerRef}>
          {physiotherapySteps.map((step, index) => (
            <div key={step.id} className="physio-step" style={{'--step-delay': `${index * 0.8}s`}}>
              <div className="physio-step-number">{step.id}</div>
              <div className="physio-step-icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="physio-step-content">
                <h3 className="physio-step-title">{step.title}</h3>
                <p className="physio-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="physio-steps-cta">
          <button className="physio-start-btn" onClick={scrollToBooking}>
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}

export default SimpleSteps;
