import React from "react";
import VisitHero from "../components/BookVisit/VisitHero/VisitHero";
import Process from "../components/Process/Process";
import BookingForm from "../components/BookVisit/BookingForm/BookingForm";
// import TrustContact from "../components/BookVisit/Trust&Contact/Trust&Contact";
export default function BookVisit() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <VisitHero />
      <Process />
      <BookingForm />
      {/* <TrustContact /> */}

      
    </div>
  );
}
