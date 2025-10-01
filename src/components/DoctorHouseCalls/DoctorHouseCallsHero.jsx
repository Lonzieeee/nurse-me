import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorHouseCallsHero.css';

function DoctorHouseCallsHero() {
  return (
    <section className="hero-doctor-house-calls">
      <div className="hero-overlay">
        <div className="hero-content">
       
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-services">Services</span>
            <span className="breadcrumb-separator">{'>'}</span>
            <span className="breadcrumb-current">Doctor House Calls</span>
          </nav>
          
          
          <h1 className="hero-title">Medical <span className="highlight">Care at</span> Home</h1>
          
        
          <p className="hero-subtitle">
            Skip the waiting room, get expert medical care at home
          </p>
        </div>
      </div>
    </section>
  );
}

export default DoctorHouseCallsHero;
