import React, { useEffect, useRef, useState } from "react";
import "./Impact.css";
import { FaCheckCircle } from "react-icons/fa";

const Impact = () => {
  const sdgRef = useRef(null);
  const localRef = useRef(null);
  const sectionRef = useRef(null);
  const [sdgVisible, setSdgVisible] = useState(false);
  const [localVisible, setLocalVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current && entry.isIntersecting) {
            setSdgVisible(true);
            setLocalVisible(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="impact-section">
      <h2 className="impact-title">Our Impact: Healing at Home, <span className="supporting-goals-highlight">Supporting Global Goals</span></h2>
      <p className="impact-description">
      Our mission at Nurseme aligns with the United Nations Sustainable Development Goals, creating better health outcomes in Kenya and beyond..
      </p>

      <div className="impact-grid">
      
        <div
          ref={sdgRef}
          className={`sdg-cards ${sdgVisible ? "is-visible" : ""}`}
        >
          <div className="sdg-card">
            <img
              className="sdg-icon"
              src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/sdg-3.jpg"
              alt="SDG 3 icon"
            />
            <h3>SDG 3.8</h3>
            <h4>Universal Health Coverage</h4>
            <p>
              We make quality care accessible and affordable by bringing it
              directly to your home.
            </p>
          </div>

          <div className="sdg-card">
            <img
              className="sdg-icon"
              src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/sdg-3.jpg"
              alt="SDG 3 icon"
            />
            <h3>SDG 3.4</h3>
            <h4>Fight Chronic Diseases</h4>
            <p>
              We help manage conditions like diabetes & hypertension to prevent
              early death.
            </p>
          </div>
        </div>

        
        <div
          ref={localRef}
          className={`local-impact ${localVisible ? "is-visible" : ""}`}
        >
          <h3>Our Local Impact in Kenya</h3>
          <ul>
            <li>
              <FaCheckCircle className="check-icon" /> Empowering Community
              Health Volunteers (CHVs) with new tools and referrals.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Providing compassionate
              care for the elderly and people with disabilities.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Reducing the burden on
              overcrowded public hospitals.
            </li>
          </ul>
        </div>
      </div>

     
      <div className="impact-cta">
        <a className="cta-btn" href="/services/join">Join Us in Making a Difference</a>
      </div>
    </section>
  );
};

export default Impact;
