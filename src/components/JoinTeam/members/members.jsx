import React, { useEffect, useRef } from "react";
import "./members.css";

const Members = () => {
  const roles = [
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/doctor.png", title: "Doctors" },
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pharmacisit.png", title: "Pharmacists" },
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physiotherapy.png", title: "Physiotherapists" },
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nutritionist.png", title: "Nutritionists" },
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/midwife.png", title: "Midwives" },
    { iconUrl: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Therapist.png", title: "Therapists" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".member-card");
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
    <section className="members">
      <div className="members-container">
        <h2>Who We’re Looking For</h2>
        <p className="subtitle">
          Join our network of healthcare professionals making home-based care accessible.
        </p>
        <div className="members-grid" ref={containerRef}>
          {roles.map((role, index) => {
            const slideDirectionClass = index % 2 === 0 ? "left" : "right";
            return (
              <div key={index} className={`member-card ${slideDirectionClass}`}>
                <div className="icon">
                  <img src={role.iconUrl} alt={role.title} loading="lazy" />
                </div>
                <h3>{role.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
