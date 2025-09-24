import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-wrapper">
      
        <h2 className="mission-title">
          Vision · Mission · Core Values
        </h2>
        
    
        <div className="circles-container">
          
          <div className="circle-wrapper vision-wrapper">
            <div className="circle-relative">
              
              <div className="ring vision-ring">
                
                <div className="inner-circle">
                  <div className="circle-content">
                    <div className="circle-label">VISION</div>
                    <div className="circle-text">
                    To transform healthcare in Kenya (and Africa) by making home-based care accessible, affordable, and technology-enabled for all.
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="arrow vision-arrow"></div>
            </div>
          </div>
          
          
          <div className="circle-wrapper mission-wrapper">
            <div className="circle-relative">
              
              <div className="ring mission-ring">
                
                <div className="inner-circle">
                  <div className="circle-content">
                    <div className="circle-label">MISSION</div>
                    <div className="circle-text">
                     Deliver compassionate and quality healthcare to homes, reducing the burden on hospitals and minimizing exposure to infections to the vulnerable population.
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="arrow mission-arrow"></div>
            </div>
          </div>
          
          
          <div className="circle-wrapper values-wrapper">
            <div className="circle-relative">
              
              <div className="ring values-ring">
                
                <div className="inner-circle">
                  <div className="circle-content">
                    <div className="circle-label">CORE VALUES</div>
                    <div className="circle-text">
                      <br />Compassion & Dignity
                      <br />Accessibility & Affordability
                      <br /> Professionalism & Trust;
                      <br /> Innovation in Healthcare.
                    </div>
                  </div>
                </div>
              </div>
              
            
              <div className="arrow values-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;