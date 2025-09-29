import React from "react";
import { Star } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about-hero">
      <div className="overlay">
        <div className="about-content">
          <h6 className="about-tagline">YOUR TRUSTED PARTNER</h6>
          <h1 className="about-title">Impacting Lives, One Home at a Time</h1>
          <p className="about-subtext">
            Where compassion meets convenience, bringing world-class healthcare 
            directly to your doorstep with trusted professionals you can rely on.
          </p>

          <div className="rating-section">
            <div className="stars">
              <Star className="star filled" size={16} />
              <Star className="star filled" size={16} />
              <Star className="star filled" size={16} />
              <Star className="star filled" size={16} />
              <Star className="star half" size={16} />
            </div>
            <span className="rating-text">Rated 4.5/5 by 2,000+ happy customers</span>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Care Sessions Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Patient Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Always Available</span>
            </div>
          </div>

          <a className="about-btn" href="#about-story">Discover Our Story</a>
        </div>
      </div>
    </section>
  );
};

export default About;
