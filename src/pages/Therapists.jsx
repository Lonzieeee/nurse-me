import React from 'react';
import TherapyHero from '../components/Therapy/TherapyHero';
import TherapistServices from '../components/Therapy/TherapistServices';
import WhyOurTherapists from '../components/Therapy/WhyOurTherapists';
import TherapyBookingSection from '../components/Therapy/TherapyBookingSection';
import FAQTherapy from '../components/Therapy/FAQTherapy';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import SEO from '../components/SEO';

function Therapists() {
  return (
    <div className="therapists-page" style={{ paddingTop: '0px' }}>
      <SEO 
        title="Therapist Services - Professional Mental Health Support at Home"
        description="Licensed therapists and counselors offering confidential mental health care from the comfort of your home. Professional, compassionate, and personalized therapy sessions."
        keywords="therapist services, mental health support, home therapy, counseling services, online therapy, licensed therapists, mental wellness, psychological support"
        canonical="https://nurseme.com/therapist"
      />
      <TherapyHero />
      <TherapistServices />
      <WhyOurTherapists />
      <TherapyBookingSection />
      <FAQTherapy />
      <ScrollToTop />
    </div>
  );
}

export default Therapists;