import React, { useEffect, useRef } from 'react';
import './ServicesIncluded.css';

function ServicesIncluded() {
  const containerRef = useRef(null);

  useEffect(() => {
    const serviceItems = containerRef.current?.querySelectorAll(".service-item");
    if (!serviceItems || serviceItems.length === 0) return;

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
      { root: null, threshold: 0.2 }
    );

    serviceItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Wound Care and Dressing Changes",
      description: "Professional wound care management including cleaning, dressing changes, and monitoring healing progress to prevent infections and promote optimal recovery.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Wound_care-removebg-preview.webp",
      position: "left"
    },
    {
      title: "Medication Administration",
      description: "Expert medication management including proper dosing, timing, and administration of prescribed medications with careful monitoring for side effects.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Medicat_administration-removebg-preview-min.png",
      position: "right"
    },
    {
      title: "Vital Signs Monitoring",
      description: "Regular monitoring and recording of vital signs including blood pressure, temperature, pulse, and respiratory rate to track health status.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/vitalsigns-removebg-preview-min.png",
      position: "left"
    },
    {
      title: "Post Surgery Care",
      description: "Comprehensive post-operative care including incision monitoring, pain management, mobility assistance, and recovery support.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/post_surgery-removebg-preview-min.png",
      position: "right"
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing management and support for chronic conditions including diabetes, hypertension, and heart disease with personalized care plans.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/chronicdisease-removebg-preview-min.png",
      position: "left"
    },
    {
      title: "Family Education and Support",
      description: "Comprehensive education for family members on care techniques, medical equipment use, and ongoing support for patient care at home.",
      image: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/familyeducation-removebg-preview-min.png",
      position: "right"
    }
  ];

  return (
    <section className="services-included">
      <div className="services-included-container">
        <h2 className="services-included-title">
          Our <span className="highlight">Services</span> Include
        </h2>
        
        <div className="services-list" ref={containerRef}>
          {services.map((service, index) => (
            <div key={index} className={`service-item ${service.position}`}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesIncluded;
