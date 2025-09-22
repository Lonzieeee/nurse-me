import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <h2 className="section-title">Vision · Mission · Core Values</h2>

      <div className="mission-circles">
        <div className="ring ring-vision">
          <div className="ring-label">VISION</div>
          <div className="ring-content">
            To be the benchmark for home-based healthcare, recognized for the integrity of our people, our ethics, and the quality of care.
          </div>
        </div>

        <div className="ring ring-mission">
          <div className="ring-label">MISSION</div>
          <div className="ring-content">
            Build lasting relationships by delivering compassionate, affordable, and reliable care at home in an environment of trust and respect.
          </div>
        </div>

        <div className="ring ring-values">
          <div className="ring-label">CORE VALUES</div>
          <div className="ring-content">
            Integrity · Quality · Reliability · Teamwork · Trust.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
