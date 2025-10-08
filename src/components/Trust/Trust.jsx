import React, { useEffect, useRef, useState } from "react";
import "./Trust.css";
import { Clock, DollarSign, ShieldCheck, BadgeCheck } from "lucide-react";

const trustPoints = [
  {
    icon: <Clock />,
    title: "Available 24/7",
    desc: "Round-the-clock care whenever you need us."
  },
  {
    icon: <DollarSign />,
    title: "Affordable Rates",
    desc: "Quality healthcare at fair and transparent prices."
  },
  {
    icon: <ShieldCheck />,
    title: "Secure & Confidential",
    desc: "Your health information is always protected."
  },
  {
    icon: <BadgeCheck />,
    title: "Licensed Professionals",
    desc: "Trusted, certified, and experienced caregivers."
  }
];

export default function Trust() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, 
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="trust" ref={sectionRef}>
      <div className="trust-container">
        <h2 className="trust-title"><span className="trust-highlight">WHY TRUST</span> Nurse Me?</h2>
        <div className="trust-timeline">
          {trustPoints.map((point, index) => (
            <div 
              className={`trust-step ${isVisible ? 'trust-step-visible' : ''}`} 
              key={index}
              style={{ 
                animationDelay: `${index * 0.6}s` 
              }}
            >
              <div className="trust-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
