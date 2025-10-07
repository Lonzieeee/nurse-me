import React from 'react';
import PhysiotherapyHero from '../components/Physiotherapy/PhysiotherapyHero';
import WhatWeTreat from '../components/Physiotherapy/WhatWeTreat';
import SimpleSteps from '../components/Physiotherapy/SimpleSteps';
import WhyChooseHomePhysiotherapy from '../components/Physiotherapy/WhyChooseHomePhysiotherapy';
import FAQPhysiotherapy from '../components/Physiotherapy/FAQPhysiotherapy';
import PhysioBookingForm from '../components/Physiotherapy/PhysioBookingForm';
import SEO from '../components/SEO';

function Physiotherapy() {
  return (
    <div className="physiotherapy-page">
      <SEO 
        title="Physiotherapy at Home - Expert Physical Therapy Services"
        description="Professional physiotherapy services at your home. Expert treatment for sports injuries, post-surgery rehabilitation, chronic pain, and mobility issues. Personalized care from certified physiotherapists."
        keywords="physiotherapy at home, physical therapy, sports injury treatment, rehabilitation, post-surgery recovery, mobility therapy, home physiotherapy"
        canonical="https://nurseme.com/physiotherapy"
      />
      <PhysiotherapyHero />
      <WhatWeTreat />
      <SimpleSteps />
      <WhyChooseHomePhysiotherapy />
      <PhysioBookingForm />
      <FAQPhysiotherapy />
    </div>
  );
}

export default Physiotherapy;
