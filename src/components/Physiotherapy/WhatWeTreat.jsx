import React, { useEffect, useRef } from "react";
import "./WhatWeTreat.css";

const WhatWeTreat = () => {
  const treatments = [
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/spine.png", 
      title: "Back and neck pain",
     
    },
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/bandage.png", 
      title: "Post-surgery rehabilitation"
    },
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/injury.png", 
      title: "Sports injuries"
    },
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/artificial-intelligence.png", 
      title: "Stroke and neurological recovery"
    },
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/joint.png", 
      title: "Arthritis and joint stiffness"
    },
    { 
      iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/oldcane.png", 
      title: "Elderly mobility support"
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".treatment-card");
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-we-treat">
      <div className="treatment-container">
        <h2>What We Treat</h2>
        <div className="treatment-grid" ref={containerRef}>
          {treatments.map((treatment, index) => {
            const slideDirectionClass = index % 2 === 0 ? "slide-left" : "slide-right";
            return (
              <div key={index} className={`treatment-card ${slideDirectionClass}`}>
                <div className="treatment-icon">
                  <img src={treatment.iconUrl} alt={treatment.title} loading="lazy" />
                </div>
                <h3>
                  {treatment.title} {treatment.emoji && <span className="emoji">{treatment.emoji}</span>}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeTreat;
