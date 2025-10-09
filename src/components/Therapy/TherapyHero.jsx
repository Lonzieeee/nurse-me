import React from 'react';
import { Link } from 'react-router-dom';
import './TherapyHero.css';

function TherapyHero() {
  return (
    <section className="therapy-hero">
      <div className="therapy-hero-overlay">
        <div className="therapy-hero-content">
          <nav className="therapy-breadcrumb">
            <Link to="/" className="therapy-breadcrumb-link">Home</Link>
            <span className="therapy-breadcrumb-separator">/</span>
            <span className="therapy-breadcrumb-services">Services</span>
            <span className="therapy-breadcrumb-separator">/</span>
            <span className="therapy-breadcrumb-current">Mental Health Therapy</span>
          </nav>
          <h1 className="therapy-hero-title">
            Professional Mental Health Support, <span className="therapy-highlight-blue">Wherever You Are</span>
          </h1>
          <p className="therapy-hero-subtitle">
            Licensed therapists and counselors offering confidential care from the comfort of your home.
          </p>
          <div className="therapy-hero-actions">
            <Link to="/services/book" className="therapy-cta-btn">
              Book a Therapist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TherapyHero;
