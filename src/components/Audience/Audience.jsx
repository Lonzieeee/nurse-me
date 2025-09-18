import React, { useEffect, useRef } from "react";
import "./Audience.css";

const Audience = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardsRef.current;
            const totalCards = cards.length;
            const cardsPerRow = window.innerWidth >= 1400 ? 4 : 
                               window.innerWidth >= 768 ? Math.floor(totalCards / 2) : 1;
            
            
            for (let i = 0; i < Math.min(cardsPerRow, totalCards); i++) {
              if (cards[i]) {
                setTimeout(() => {
                  cards[i].classList.add('animate-in');
                }, i * 400); 
              }
            }
            
            
            const firstRowDelay = Math.min(cardsPerRow, totalCards) * 400 + 600; 
            for (let i = cardsPerRow; i < totalCards; i++) {
              if (cards[i]) {
                setTimeout(() => {
                  cards[i].classList.add('animate-in');
                }, firstRowDelay + (i - cardsPerRow) * 400);
              }
            }
            
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const audienceData = [
    {
      title: "Elderly People",
      text: "We support seniors with personalized home-based care that promotes independence, dignity, and comfort. Our team assists with daily needs, health monitoring, and companionship to enhance quality of life in a familiar environment.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/elderly.png",
    },
    {
      title: "People with Disabilities",
      text: "We provide specialized care and support for individuals with physical or intellectual disabilities. Our services focus on improving daily living, ensuring accessibility, and offering personalized health and rehabilitation care at home.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/assistant.png",
    },
    {
      title: "Individuals with Chronic Illnesses",
      text: "We offer continuous care and monitoring for people managing long-term conditions such as diabetes, hypertension, cancer, or respiratory diseases. Our goal is to improve health outcomes, prevent complications, and provide consistent support at home.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/chronic-disease.png",
    },
    {
      title: "Post-Surgery Recovery",
      text: "Professional care to aid We assist patients in their recovery journey after surgery by providing wound care, pain management, mobility support, and regular health monitoring. Our home-based services help promote faster healing and reduce the risk of hospital readmission.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/surgery.png",
    },
    {
      title: "Children with Chronic Illness",
      text: "We provide compassionate care for children living with long-term conditions such as asthma, epilepsy, or congenital disorders. Our services support their health needs while giving families peace of mind through professional, home-based care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pediatrics.png",
    },
    {
      title: "Mental Health Support",
      text: "We offer personalized care for individuals experiencing mental health challenges such as stress, anxiety, or depression. Our approach combines professional support and compassionate guidance to promote emotional well-being in a safe home environment.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/depressed.png",
    },
    {
      title: "Midwife Services",
      text: "We provide professional midwifery care for expectant and new mothers, including prenatal checkups, safe delivery support, and postnatal care. Our services ensure both mother and baby receive attentive, compassionate care at home.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/midwife.png",
    },
    {
      title: "Palliative Care",
      text: "We deliver compassionate support for individuals with serious or life-limiting illnesses. Our focus is on relieving pain, managing symptoms, and enhancing comfort and dignity for both patients and their families at home.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/palliative.png",
    },
  ];

  return (
    <section className="audience-section">
      <h2 className="audience-title">Who We Care For</h2>
      <div className="audience-grid" ref={gridRef}>
        {audienceData.map((item, index) => (
          <div 
            className="audience-card" 
            key={index}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="audience-icon">
              <img src={item.icon} alt={item.title} width={40} height={40} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Audience;
