import React from "react";
import "./VisitHero.css";

export default function VisitHero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("booking-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="visit-hero">
      <div className="visit-hero-overlay"></div>
      <div className="visit-hero-content">
        <h1>
          Book a <span className="soft-blue">Home visit</span> in Minutes
        </h1>
        <p>Choose the service you need, pick a time, and let our licensed professionals come to you</p>
        <button onClick={scrollToForm} className="visit-hero-btn">
          Book Now
        </button>
      </div>
    </section>
  );
}
