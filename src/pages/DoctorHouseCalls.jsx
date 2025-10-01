import React from 'react';
import DoctorHouseCallsHero from '../components/DoctorHouseCalls/DoctorHouseCallsHero';
import Specialization from '../components/DoctorHouseCalls/Specialization';

function DoctorHouseCalls() {
  return (
    <div className="doctor-house-calls-page">
      <DoctorHouseCallsHero />
      <Specialization />
    </div>
  );
}

export default DoctorHouseCalls;