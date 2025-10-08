import React from "react";
import VisitHero from "../components/BookVisit/VisitHero/VisitHero";
import Process from "../components/Process/Process";
import BookingForm from "../components/BookVisit/BookingForm/BookingForm";
import SEO from "../components/SEO";
// import TrustContact from "../components/BookVisit/Trust&Contact/Trust&Contact";

export default function BookVisit() {
  return (
    <div style={{ paddingTop: '0px' }}>
      <SEO 
        title="Book a Visit - Schedule Healthcare Services"
        description="Book your home healthcare visit today. Choose from nursing care, doctor consultations, physiotherapy, or medication delivery. Easy online booking available 24/7."
        keywords="book healthcare visit, schedule home care, book nurse, book doctor, healthcare booking, online appointment"
        canonical="https://nurseme.com/services/book"
      />
      <VisitHero />
      <Process />
      <BookingForm />
      {/* <TrustContact /> */}
    </div>
  );
}
