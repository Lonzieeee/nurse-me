import React from "react";
import "./Providers.css";

const providers = [
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nurse.png", 
    title: "Nurses", 
    desc: "Skilled nurses providing quality home-based care.", 
    x: 110, 
    y: 100 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/doctor.png", 
    title: "Doctors", 
    desc: "Expert medical guidance and check-ups at home.", 
    x: 120, 
    y: 100 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/pharmacisit.png", 
    title: "Pharmacists", 
    desc: "Reliable medication delivery and advice.", 
    x: 30, 
    y: 70 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physiotherapy.png", 
    title: "Physiotherapists", 
    desc: "Rehabilitation and mobility support services.", 
    x: 120, 
    y: 30 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nutritionist.png", 
    title: "Nutritionists", 
    desc: "Personalized diet and nutrition care plans.", 
    x: 110, 
    y: 45 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/midwife.png", 
    title: "Midwives", 
    desc: "Safe maternal care for mothers and newborns.", 
    x: 100, 
    y: 4 
  },
  { 
    icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Therapist.png", 
    title: "Therapists", 
    desc: "Mental health and rehabilitation support.", 
    x: 90, 
    y: 105
  },
];

export default function Providers() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const getMobilePosition = (index) => {
    const spacing = 85; 
    const startY = 8; 
    return {
      x: 50, 
      y: startY + (index * spacing)
    };
  };

  return (
    <section className="providers-section">
      <h2 className="providers-title">Our Service Providers</h2>
      <p className="providers-intro">
        Nurse Me partners with trusted healthcare professionals to deliver quality home-based care. Join our team of heroes:
      </p>

      <div className="providers-flow">
        <div className="providers-path">
         
          {!isMobile && (
            <svg className="providers-svg" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" opacity="0.6" />
                </marker>
              </defs>
              <path
                className="providers-line"
                d="M120 120 C 300 120, 520 120, 700 120 S 910 210, 890 300 C 870 410, 630 420, 480 420 H 260 C 170 420, 140 400, 120 360"
                markerStart=""
                markerEnd="url(#arrow)"
              />
            </svg>
          )}
          {providers.map((provider, index) => {
            const position = isMobile ? getMobilePosition(index) : { x: provider.x, y: provider.y };
            
            return (
              <div
                className={`providers-step ${index === 5 ? "highlight" : ""}`}
                key={index}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
              >
                <div className="step-circle">
                  <div className="step-icon">
                    <img 
                      src={provider.icon} 
                      alt={provider.title}
                      className="provider-image"
                    />
                  </div>
                  <div className="step-tooltip">
                    <h3>{provider.title}</h3>
                    <p>{provider.desc}</p>
                  </div>
                </div>
                <span className="step-label">{provider.title}</span>
                {index < providers.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="providers-button-container">
        <a href="/login" className="btn service">
          Join as a Healthcare Provider
        </a>
      </div>
    </section>
  );
}
