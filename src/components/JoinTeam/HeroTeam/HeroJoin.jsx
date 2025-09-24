import React from "react";
import "./HeroJoin.css";

const HeroTeam = () => {
  return (
    <section className="hero-team">
      <div className="heroTeam-overlay">
        <div className="heroTeam-content">
          <h1>Join NurseMe as a <span className="blue">Trusted Healthcare</span> Provider</h1>
          <p>
            Be part of a growing network of licensed nurses, midwives,
            physiotherapists, and other professionals transforming healthcare
            delivery in Kenya.
          </p>
          <a href="#register" className="heroTeam-btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroTeam;
