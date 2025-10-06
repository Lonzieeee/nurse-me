import React from 'react';
import PhysiotherapyHero from '../components/Physiotherapy/PhysiotherapyHero';
import WhatWeTreat from '../components/Physiotherapy/WhatWeTreat';
import SimpleSteps from '../components/Physiotherapy/SimpleSteps';
import WhyChooseHomePhysiotherapy from '../components/Physiotherapy/WhyChooseHomePhysiotherapy';
import FAQPhysiotherapy from '../components/Physiotherapy/FAQPhysiotherapy';
import PhysioBookingForm from '../components/Physiotherapy/PhysioBookingForm';

function Physiotherapy() {
  return (
    <div className="physiotherapy-page">
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
