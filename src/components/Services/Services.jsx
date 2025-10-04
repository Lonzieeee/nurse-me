import { Link } from "react-router-dom";
import "./Services.css";
import { useEffect, useRef } from "react";

function Services() {
  const containerRef = useRef(null);

  const services = [
    { 
      title: "Home Nursing Care", 
      desc: "Professional nurses provide medical support, medication management, and recovery assistance in the comfort of your home.", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/nursing-home-min.png",
      link: "/home-nursing"
    },
    { 
      title: "Doctor House Calls", 
      desc: "Experienced doctors visit your home to offer personalized check-ups, treatment, and ongoing medical guidance.", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/doctor%20house%20calls.png",
      link: "/doctor-house-calls"
    },
    { 
      title: "Physiotherapy at Home", 
      desc: "Licensed physiotherapists deliver tailored exercises and therapy to improve mobility, strength, and independence", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/physical-therapy-min.png",
      link: "/services"
    },
    { 
      title: "Medication Delivery", 
      desc: "Timely and reliable delivery of prescribed medicines to your doorstep, ensuring convenience and continuity of care.", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/medication%20delivery.png",
      link: "/medication-delivery"
    },
    { 
      title: "Chronic Disease Management", 
      desc: "Comprehensive support for conditions like diabetes, hypertension, and heart disease through regular monitoring, medication management, and personalized care plans.", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/chronic-disease-min.png",
      link: "/services"
    },
    { 
      title: "Palliative Care", 
      desc: "Compassionate care focused on relieving pain, managing symptoms, and enhancing comfort for patients with serious illnesses, while supporting their families.", 
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/palliative-min.png",
      link: "/palliative-care"
    },
  ];

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".service-card"));
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
      { threshold: 0.2, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services">
      <div className="services-container" ref={containerRef}>
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${index % 2 === 0 ? "from-left" : "from-right"}`}
              style={{ transitionDelay: `${index * 0.14}s` }}
            >
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={service.link} className="learn-more-btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Services;
