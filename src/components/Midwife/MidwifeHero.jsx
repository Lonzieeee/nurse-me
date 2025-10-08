import React from 'react';
import { Link } from 'react-router-dom';
import './MidwifeHero.css';

function MidwifeHero() {
  const scrollToBookingForm = (e) => {
    e.preventDefault();
    const bookingSection = document.querySelector('.midwife-booking-form-page');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="midwife-hero">
      <div className="midwife-hero-overlay">
        <div className="midwife-hero-content">
        
          <nav className="midwife-hero-breadcrumb">
            <Link to="/" className="midwife-hero-breadcrumb-link">Home</Link>
            <span className="midwife-hero-breadcrumb-separator">{'>'}</span>
            <span className="midwife-hero-breadcrumb-services">Services</span>
            <span className="midwife-hero-breadcrumb-separator">{'>'}</span>
            <span className="midwife-hero-breadcrumb-current">Midwife Services</span>
          </nav>
          
      
          <h1 className="midwife-hero-title">
            Professional <span className="midwife-hero-highlight-blue">Midwifery Care</span> in the Comfort of <span className="midwife-hero-highlight-blue">Your Home</span>
          </h1>
          
       
          <p className="midwife-hero-subtitle">
            Personal, gentle, and trusted maternity care from pregnancy to postnatal recovery.
          </p>
          
         
          <button 
            onClick={scrollToBookingForm} 
            className="midwife-hero-cta-button"
          >
            Book a Midwife
          </button>
        </div>
      </div>
    </section>
  );
}

export default MidwifeHero;
