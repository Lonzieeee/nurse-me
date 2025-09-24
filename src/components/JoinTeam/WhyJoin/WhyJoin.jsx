import React from "react";
import { DollarSign, Calendar, UserCheck, Shield } from "lucide-react";
import "./WhyJoin.css";

const WhyJoin = () => {
  const benefits = [
    {
      icon: <DollarSign />,
      title: "Earn Income",
      desc: "Flexible jobs with competitive pay tailored to your professional skills.",
      color: "blue"
    },
    {
      icon: <Calendar />,
      title: "Flexibility", 
      desc: "Choose when and where to work — enjoy full control of your schedule.",
      color: "purple"
    },
    {
      icon: <UserCheck />,
      title: "Trusted Platform",
      desc: "We connect you with verified patients who need your care services.",
      color: "red"
    },
    {
      icon: <Shield />,
      title: "Safe & Secure",
      desc: "All professionals are vetted and licensed to ensure safe, reliable care.",
      color: "green"
    },
  ];

  return (
    <section className="why-join-modern">
      <div className="why-container-modern">
      
        <div className="header-section">
          <h2 className="main-title">
            Why <span className="title-accent">Choose Us?</span>
          </h2>
          <div className="title-underline"></div>
        </div>

     
        <div className="content-grid">
         
          <div className="benefits-container">
            {benefits.map((item, index) => (
              <div 
                key={index}
                className={`benefit-card-modern benefit-${item.color}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="benefit-content">
              
                  <div className={`icon-container icon-${item.color}`}>
                    {item.icon}
                  </div>
                  
                 
                  <div className="text-content">
                    <h3 className="benefit-title">{item.title}</h3>
                    <p className="benefit-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
          <div className="image-section">
            <div className="image-container">
              
              <div className="decoration-top"></div>
              <div className="decoration-bottom"></div>
              
             
              <div className="main-image-wrapper">
                <img
                  src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/WhyJoinOurTeam-min.jpg"
                  alt="Healthcare professionals collaborating"
                  className="main-image"
                />
                
               
                <div className="floating-badge">
                  <div className="badge-content">
                    <div className="status-dot"></div>
                    <span className="badge-text">Join Our Team</span>
                  </div>
                </div>
              </div>
            </div>
            
         
            <div className="decoration-corner-1"></div>
            <div className="decoration-corner-2"></div>
          </div>
        </div>

       
     
      </div>
    </section>
  );
};

export default WhyJoin;