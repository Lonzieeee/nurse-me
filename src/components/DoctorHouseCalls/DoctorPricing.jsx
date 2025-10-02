import React from 'react';
import './DoctorPricing.css';

function DoctorPricing() {
  const doctorPricingPlans = [
    {
      id: 1,
      name: "One-Time Consultation",
      subtitle: "Single Doctor Visit",
      price: "2,500",
      duration: "per visit",
      features: [
        "Comprehensive medical assessment",
        "Physical examination",
        "Diagnosis and treatment plan",
        "Prescription management",
        "Health recommendations",
        "Medical report documentation"
      ],
      isPopular: false,
      hasInsurance: false
    },
    {
      id: 2,
      name: "Weekly Health Check",
      subtitle: "Regular Weekly Monitoring",
      price: "8,500",
      duration: "per week",
      features: [
        "2 doctor visits per week",
        "Chronic condition monitoring",
        "Medication adjustments",
        "Health progress tracking",
        "Emergency phone consultations",
        "Specialist referrals when needed"
      ],
      isPopular: true,
      hasInsurance: true
    },
    {
      id: 3,
      name: "Monthly Medical Care",
      subtitle: "Comprehensive Monthly Healthcare",
      price: "28,000",
      duration: "per month",
      features: [
        "Weekly scheduled visits",
        "Advanced diagnostic support",
        "Chronic disease management",
        "Health screening and prevention",
        "Telemedicine consultations",
        "Priority emergency response",
        "Detailed medical reports"
      ],
      isPopular: false,
      hasInsurance: true
    },
    {
      id: 4,
      name: "Quarterly Premium",
      subtitle: "Complete Long-term Medical Care",
      price: "75,000",
      duration: "per quarter",
      features: [
        "Unlimited doctor consultations",
        "Specialist doctor network access",
        "Advanced medical testing",
        "Personalized treatment plans",
        "Family medical guidance",
        "Medical equipment provision",
        "Dedicated family physician",
        "Priority specialist appointments"
      ],
      isPopular: false,
      hasInsurance: true
    }
  ];

  return (
    <section className="doctor-pricing">
      <div className="doctor-pricing-container">
        <div className="doctor-pricing-header">
          <h2>Doctor <span className="doctor-highlight">Pricing</span> Plans</h2>
          <p>Professional medical care delivered to your home with flexible pricing options</p>
        </div>
        
        <div className="doctor-pricing-grid">
          {doctorPricingPlans.map((plan) => (
            <div key={plan.id} className={`doctor-pricing-card ${plan.isPopular ? 'doctor-popular' : ''}`}>
              {plan.isPopular && <div className="doctor-popular-badge">Most Popular</div>}
              
              <div className="doctor-plan-header">
                <h3 className="doctor-plan-name">{plan.name}</h3>
                <p className="doctor-plan-subtitle">{plan.subtitle}</p>
                <div className="doctor-plan-price">
                  <span className="doctor-currency">Ksh</span>
                  <span className="doctor-amount">{plan.price}</span>
                  <span className="doctor-duration">{plan.duration}</span>
                </div>
              </div>
              
              <div className="doctor-plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <svg className="doctor-check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="doctor-plan-footer">
                {plan.hasInsurance && (
                  <div className="doctor-insurance-badge">
                    <svg className="doctor-insurance-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Insurance Accepted
                  </div>
                )}
                <button className="doctor-get-started-btn">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorPricing;
