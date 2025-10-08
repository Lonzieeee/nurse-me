import React, { useEffect, useRef } from 'react';
import './KenyaStats.css';
import { TrendingUp, Users, MapPin, Activity } from 'lucide-react';

const KenyaStats = () => {
  const statsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate');
                }, index * 200); 
              }
            });
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="kenya-stats-section" ref={statsRef}>
      <div className="kenya-stats-wrapper">
        <div className="kenya-stats-header">
          {/* <Activity className="kenya-stats-icon" /> */}
          <h3>Healthcare in Kenya: The <span className="challenge-highlight">Challenge We Address</span></h3>
          <p className="kenya-stats-intro">
            Understanding the healthcare landscape that drives our mission to bring care home.
          </p>
        </div>
        
        <div className="kenya-stats-grid">
          <div 
            className="kenya-stat-card slide-in-left" 
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="kenya-stat-icon-wrapper">
              <Users className="kenya-stat-card-icon" />
            </div>
            <div className="kenya-stat-number">1:16,000</div>
            <div className="kenya-stat-label">Doctor to Patient Ratio</div>
            <div className="kenya-stat-context">WHO recommends 1:1,000</div>
          </div>
          
          <div 
            className="kenya-stat-card slide-in-left" 
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="kenya-stat-icon-wrapper">
              <MapPin className="kenya-stat-card-icon" />
            </div>
            <div className="kenya-stat-number">70%</div>
            <div className="kenya-stat-label">Live in Rural Areas</div>
            <div className="kenya-stat-context">Limited healthcare access</div>
          </div>
          
          <div 
            className="kenya-stat-card slide-in-right" 
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="kenya-stat-icon-wrapper">
              <TrendingUp className="kenya-stat-card-icon" />
            </div>
            <div className="kenya-stat-number">25%</div>
            <div className="kenya-stat-label">Healthcare Spending</div>
            <div className="kenya-stat-context">Out-of-pocket expenses</div>
          </div>
          
          <div 
            className="kenya-stat-card slide-in-right" 
            ref={(el) => (cardsRef.current[3] = el)}
          >
            <div className="kenya-stat-icon-wrapper">
              <Activity className="kenya-stat-card-icon" />
            </div>
            <div className="kenya-stat-number">45M</div>
            <div className="kenya-stat-label">Mobile Users</div>
            <div className="kenya-stat-context">Digital health opportunity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenyaStats;
