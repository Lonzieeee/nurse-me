import React, { useEffect, useRef } from 'react';
import './Specialization.css';

function Specialization() {
  const specializations = [
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/General%20Practice-min.png",
      name: "General Practice"
    },
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pediatric-min.png",
      name: "Pediatrics"
    },
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Cardiologist.png",
      name: "Cardiology Consultations"
    },
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Diabetes%20Management.png",
      name: "Diabetes Management"
    },
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Internal%20medicine.png",
      name: "Internal Medicine"
    },
    {
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/geriatric.png",
      name: "Geriatric"
    }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".specialization-card");
    if (!cards || cards.length === 0) return;

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
      { root: null, threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="specialization">
      <div className="specialization-container">
        <h2 className="specialization-title">Available <span className="highlight">Specializations</span></h2>
        <div className="specialization-grid" ref={containerRef}>
          {specializations.map((spec, index) => {
            const slideDirectionClass = index % 2 === 0 ? "left" : "right";
            return (
              <div key={index} className={`specialization-card ${slideDirectionClass}`}>
                <div className="specialization-icon">
                  <img src={spec.icon} alt={spec.name} />
                </div>
                <h3 className="specialization-name">{spec.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Specialization;
