import React from 'react';
import DoctorHouseCallsHero from '../components/DoctorHouseCalls/DoctorHouseCallsHero';
import Specialization from '../components/DoctorHouseCalls/Specialization';
import Whentobook from '../components/DoctorHouseCalls/Whentobook';
import DoctorPricing from '../components/DoctorHouseCalls/DoctorPricing';
import FAQDoctor from '../components/DoctorHouseCalls/FAQDoctor';

function DoctorHouseCalls() {
  return (
    <div className="doctor-house-calls-page">
      <DoctorHouseCallsHero />
      <Specialization />
      <Whentobook />
      <DoctorPricing />
      <FAQDoctor />
    </div>
  );
}

export default DoctorHouseCalls;