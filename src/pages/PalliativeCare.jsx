import React from 'react';
import PalliativeHero from '../components/PalliativeCare/PalliativeHero';
import KeyServices from '../components/PalliativeCare/KeyServices';
import WhoNeedsPalliative from '../components/PalliativeCare/WhoNeedsPalliative';
import BookingFormPalliative from '../components/PalliativeCare/BookingFormPalliative';
import FAQPalliative from '../components/PalliativeCare/FAQPalliative';
import SEO from '../components/SEO';

function PalliativeCare() {
  return (
    <div style={{ paddingTop: '0px' }}>
      <SEO 
        title="Palliative Care - Comfort and Support at Home"
        description="Compassionate palliative care services at home. Expert pain management, symptom relief, and emotional support for patients with serious illnesses. Quality end-of-life care."
        keywords="palliative care, end-of-life care, hospice care at home, pain management, comfort care, terminal illness care, compassionate healthcare"
        canonical="https://nurseme.com/palliative-care"
      />
      <PalliativeHero />
      <KeyServices />
      <WhoNeedsPalliative />
      <BookingFormPalliative />
      <FAQPalliative />
    </div>
  );
}

export default PalliativeCare;
