import React from 'react';
import PhysiotherapyHero from '../components/Physiotherapy/PhysiotherapyHero';
import WhatWeTreat from '../components/Physiotherapy/WhatWeTreat';
import SimpleSteps from '../components/Physiotherapy/SimpleSteps';

function Physiotherapy() {
  return (
    <div className="physiotherapy-page">
      <PhysiotherapyHero />
      <WhatWeTreat />
      <SimpleSteps />
    </div>
  );
}

export default Physiotherapy;
