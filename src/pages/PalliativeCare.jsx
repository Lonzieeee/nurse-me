import React from 'react';
import PalliativeHero from '../components/PalliativeCare/PalliativeHero';
import KeyServices from '../components/PalliativeCare/KeyServices';
import WhoNeedsPalliative from '../components/PalliativeCare/WhoNeedsPalliative';
import BookingFormPalliative from '../components/PalliativeCare/BookingFormPalliative';
import FAQPalliative from '../components/PalliativeCare/FAQPalliative';

function PalliativeCare() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <PalliativeHero />
      <KeyServices />
      <WhoNeedsPalliative />
   
      <BookingFormPalliative />
         <FAQPalliative />
    </div>
  );
}

export default PalliativeCare;
