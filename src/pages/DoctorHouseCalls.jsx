import React from 'react';
import DoctorHouseCallsHero from '../components/DoctorHouseCalls/DoctorHouseCallsHero';
import Specialization from '../components/DoctorHouseCalls/Specialization';
import Whentobook from '../components/DoctorHouseCalls/Whentobook';
import DoctorPricing from '../components/DoctorHouseCalls/DoctorPricing';
import FAQDoctor from '../components/DoctorHouseCalls/FAQDoctor';
import SEO from '../components/SEO';

function DoctorHouseCalls() {
  return (
    <div className="doctor-house-calls-page" style={{ paddingTop: '0px' }}>
      <SEO 
        title="Doctor House Calls - Medical Care at Your Home"
        description="Get professional medical consultations at home with qualified doctors. From routine check-ups to urgent care, our doctors come to you. Book a house call today."
        keywords="doctor house calls, home doctor visits, medical consultation at home, home healthcare, urgent care at home, doctor at home"
        canonical="https://nurseme.com/doctor-house-calls"
      />
      <DoctorHouseCallsHero />
      <Specialization />
      <Whentobook />
      <DoctorPricing />
      <FAQDoctor />
    </div>
  );
}

export default DoctorHouseCalls;