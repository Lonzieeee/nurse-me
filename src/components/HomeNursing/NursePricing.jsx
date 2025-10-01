import React from 'react';
import './NursePricing.css';

function NursePricing() {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      subtitle: "Single Visit Care",
      price: "1,000",
      duration: "per visit",
      features: [
        "Professional nursing assessment",
        "Basic wound care",
        "Vital signs monitoring",
        "Medication administration",
        "Health status documentation"
      ],
      isPopular: false,
      hasInsurance: false
    },
    {
      id: 2,
      name: "Weekly Wellness",
      subtitle: "Continuous Weekly Care",
      price: "6,500",
      duration: "per week",
      features: [
        "2-3 visits per week",
        "Comprehensive health monitoring",
        "Medication management",
        "Recovery progress tracking",
        "Family health education",
        "24/7 phone consultation"
      ],
      isPopular: true,
      hasInsurance: true
    },
    {
      id: 3,
      name: "Monthly Care Plus",
      subtitle: "Complete Monthly Healthcare",
      price: "24,000",
      duration: "per month",
      features: [
        "Daily visit options available",
        "Advanced wound care",
        "Chronic disease management",
        "Physiotherapy coordination",
        "Nutritional guidance",
        "Emergency response priority",
        "Detailed health reports"
      ],
      isPopular: false,
      hasInsurance: true
    },
    {
      id: 4,
      name: "Quarterly Premium",
      subtitle: "Comprehensive Long-term Care",
      price: "65,000",
      duration: "per quarter",
      features: [
        "Unlimited nursing visits",
        "Specialist consultations",
        "Advanced medical equipment",
        "Care plan customization",
        "Family caregiver training",
        "Health monitoring devices",
        "Dedicated care coordinator",
        "Priority emergency response"
      ],
      isPopular: false,
      hasInsurance: true
    }
  ];

  return (
    <section className="nurse-pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Choose Your Plan</h2>
          <p>Select the perfect care package that meets your healthcare needs</p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <div className="plan-price">
                  <span className="currency">Ksh</span>
                  <span className="amount">{plan.price}</span>
                  <span className="duration">{plan.duration}</span>
                </div>
              </div>
              
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="plan-footer">
                {plan.hasInsurance && (
                  <div className="insurance-badge">
                    <svg className="insurance-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Insurance Accepted
                  </div>
                )}
                <button className="get-started-btn">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NursePricing;
