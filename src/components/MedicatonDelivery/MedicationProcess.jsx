import React, { useEffect, useRef } from 'react';
import './MedicationProcess.css';

function MedicationProcess() {
  const containerRef = useRef(null);

  const scrollToOrderForm = () => {
    const orderSection = document.querySelector('.medication-order');
    if (orderSection) {
      orderSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const processSteps = [
    {
      id: 1,
      title: "Upload Prescription",
      description: "Upload a clear photo of your doctor's prescription through our secure platform. Our system accepts all standard prescription formats.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/medical-prescription.png"
    },
    {
      id: 2,
      title: "Pharmacy Verification",
      description: "Our licensed pharmacists verify your prescription for accuracy, authenticity, and drug interactions to ensure your safety.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pharmacyverification.png"
    },
    {
      id: 3,
      title: "Medication Counselling",
      description: "If needed, our pharmacists provide personalized counseling about your medication, dosage instructions, and potential side effects.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/counselling.png"
    },
    {
      id: 4,
      title: "Home Delivery",
      description: "Your medications are carefully packaged and delivered directly to your doorstep by our trained delivery personnel.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/delivery.png"
    },
    {
      id: 5,
      title: "Payment",
      description: "Complete your payment securely online or pay cash on delivery. We accept insurance and offer flexible payment options.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/payment.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('delivery-step-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const steps = containerRef.current?.querySelectorAll('.delivery-step');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="medication-delivery-process">
      <div className="medication-delivery-container">
        <img
          className="delivery-top-right-img"
          src="https://pub-eb8df8ce05ba4243b626e4a16b3fd69b.r2.dev/pills-removebg-preview.png"
          alt="Pills illustration"
          loading="lazy"
        />
        
        <div className="delivery-process-header">
          <h2 className="delivery-process-title">Medication <span className="delivery-process-highlight">Delivery Process</span></h2>
          <p className="delivery-process-subtitle">
            Simple steps to get your medications delivered safely to your home
          </p>
        </div>

        <div className="delivery-steps-container" ref={containerRef}>
          {processSteps.map((step, index) => (
            <div key={step.id} className="delivery-step" style={{'--step-delay': `${index * 0.8}s`}}>
              <div className="delivery-step-number">{step.id}</div>
              <div className="delivery-step-icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="delivery-step-content">
                <h3 className="delivery-step-title">{step.title}</h3>
                <p className="delivery-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="delivery-process-cta">
          <button className="delivery-start-btn" onClick={scrollToOrderForm}>
            Start Your Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default MedicationProcess;
