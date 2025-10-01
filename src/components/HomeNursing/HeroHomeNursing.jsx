import React from 'react';
import { Link } from 'react-router-dom';
import './HeroHomeNursing.css';

function HeroHomeNursing() {
  return (
    <section className="hero-home-nursing">
      <div className="hero-overlay">
        <div className="hero-content">
       
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-services">Services</span>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-current">Home Nursing</span>
          </nav>
          
       
          <h1 className="hero-title">Home Nursing</h1>
          
       
          <p className="hero-subtitle">
            Professional nursing care in the comfort of your home
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroHomeNursing;
