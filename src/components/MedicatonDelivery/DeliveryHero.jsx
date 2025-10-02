import React from 'react';
import { Link } from 'react-router-dom';
import './DeliveryHero.css';

function DeliveryHero() {
  const scrollToOrderForm = (orderType) => {
    const orderSection = document.querySelector('.medication-order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        const radioButton = document.querySelector(`input[value="${orderType}"]`);
        if (radioButton) {
          radioButton.click();
        }
      }, 500);
    }
  };

  return (
    <section className="delivery-hero">
      <div className="delivery-hero-overlay">
        <div className="delivery-hero-content">
        
          <nav className="delivery-breadcrumb">
            <Link to="/" className="delivery-breadcrumb-link">Home</Link>
            <span className="delivery-breadcrumb-separator">{'>'}</span>
            <span className="delivery-breadcrumb-services">Services</span>
            <span className="delivery-breadcrumb-separator">{'>'}</span>
            <span className="delivery-breadcrumb-current">Medication Delivery</span>
          </nav>
          
        
          <h1 className="delivery-hero-title">
            Fast & Reliable <span className="delivery-highlight">Medication Delivery</span> to Your Doorstep
          </h1>
          
          
          <p className="delivery-hero-subtitle">
            Get prescribed medicines delivered safely and conveniently.
          </p>

          
          <div className="delivery-hero-buttons">
            <button 
              className="delivery-cta-btn delivery-primary"
              onClick={() => scrollToOrderForm('order-now')}
            >
              Order Now
            </button>
            <button 
              className="delivery-cta-btn delivery-secondary"
              onClick={() => scrollToOrderForm('book-delivery')}
            >
              Book Delivery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryHero;
