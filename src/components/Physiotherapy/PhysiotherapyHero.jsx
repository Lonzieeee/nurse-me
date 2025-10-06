import React from 'react';
import { Link } from 'react-router-dom';
import './PhysiotherapyHero.css';

function PhysiotherapyHero() {
  return (
    <section className="hero-physiotherapy">
      <div className="hero-overlay">
        <div className="hero-content">
      
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-services">Services</span>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-current">Physiotherapy</span>
          </nav>
          
        
          <h1 className="hero-title">Recover Better with <span className="highlight-blue">Physiotherapy</span> at Home</h1>
          
      
          <p className="hero-subtitle">
            Personalized therapy sessions from licensed physiotherapists at your convenience, in your own space.
          </p>
          
         
          <Link to="/book-visit" className="hero-cta-button">
            Book a Physiotherapist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PhysiotherapyHero;
