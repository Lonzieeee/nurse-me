import React from 'react';
import './PalliativeHero.css';

function PalliativeHero() {
  const scrollToBooking = () => {
    const bookingSection = document.querySelector('.palliative-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="palliative-hero">
      <div className="palliative-hero-overlay">
        <div className="palliative-hero-content">
          <h1 className="palliative-hero-title">
            Compassionate Palliative <span className="compassionate-highlight">Care</span> at Home
          </h1>
          <p className="palliative-hero-subtitle">
            Dignity, comfort, and support for patients and families
          </p>
          <button 
            className="palliative-cta-btn"
            onClick={scrollToBooking}
          >
            Book a visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default PalliativeHero;
