import React, { useEffect, useRef } from 'react';
import './MedicationServices.css';

function MedicationServices() {
  const containerRef = useRef(null);

  const medicationServices = [
    {
      title: "Prescription Medication Delivery",
      desc: "Order your prescribed medicines safely and conveniently",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pmd-min.png"
    },
    {
      title: "Refill & Subscription Deliveries",
      desc: "Never miss your medication — schedule regular refills.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/r%26s-min.png"
    },
    {
      title: "Medication Counselling",
      desc: "Optional pharmacist guidance on how to take meds, avoid side effects, and manage drug interactions.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/MC-min.jpg"
    },
    {
      title: "Special Handling Medicines",
      desc: "Cold-chain storage delivery (e.g., insulin, vaccines). Shows reliability for sensitive medications.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/SHM-min.png"
    },
    {
      title: "Express Night/Emergency Delivery",
      desc: "24/7 urgent delivery for critical medicines. Premium add-on service.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/EN-min.png"
    },
    {
      title: "Over-the-Counter Medicines",
      desc: "Pain relievers, cold & flu meds, vitamins, and more.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/oc-min.jpg"
    }
  ];

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".medication-service-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("med-card-visible");
          } else {
            entry.target.classList.remove("med-card-visible");
          }
        });
      },
      { threshold: 0.2, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="medication-services">
      <div className="medication-services-container" ref={containerRef}>
        <h2 className="medication-services-title">Available <span className="medication-services-highlight">Services</span></h2>
        <div className="medication-services-grid">
          {medicationServices.map((service, index) => (
            <div
              key={index}
              className={`medication-service-card ${index % 2 === 0 ? "med-from-left" : "med-from-right"}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <img src={service.icon} alt={service.title} className="medication-service-icon" />
              <h3 className="medication-service-title">{service.title}</h3>
              <p className="medication-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicationServices;
