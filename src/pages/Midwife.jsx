import React from 'react';
import MidwifeHero from '../components/Midwife/MidwifeHero';
import MidwifeKeyServices from '../components/Midwife/MidwifeKeyServices';
import SEO from '../components/SEO';

function Midwife() {
  return (
    <div className="midwife-page" style={{ paddingTop: '70px' }}>
      <SEO 
        title="Midwife Services - Professional Maternity Care at Home"
        description="Professional midwifery care supporting expectant mothers throughout pregnancy, childbirth, and postpartum recovery in the comfort of your home. Personal, gentle, and trusted maternity care."
        keywords="midwife services, maternity care at home, pregnancy care, childbirth support, postpartum care, home birth, prenatal care, postnatal care, professional midwife"
        canonical="https://nurseme.com/midwife-services"
      />
      <MidwifeHero />
      <MidwifeKeyServices />
    </div>
  );
}

export default Midwife;