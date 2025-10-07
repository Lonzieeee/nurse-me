import Hero from "../components/JoinTeam/HeroTeam/HeroJoin";
import WhyJoin from "../components/JoinTeam/WhyJoin/WhyJoin";
import Members from "../components/JoinTeam/members/members";
import RegisterForm from "../components/JoinTeam/RegisterForm/RegisterForm";
import SEO from "../components/SEO";

export default function JoinCaregiver() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <SEO 
        title="Join Our Team - Careers for Healthcare Professionals"
        description="Join the NurseMe team! We're looking for dedicated healthcare professionals including nurses, doctors, physiotherapists, and caregivers. Flexible schedules and competitive compensation."
        keywords="healthcare careers, nursing jobs, doctor jobs, caregiver jobs, join healthcare team, medical careers, physiotherapy jobs"
        canonical="https://nurseme.com/services/join"
      />
      <Hero />
      <WhyJoin />   
      <Members />
      <RegisterForm />
    </div>
  );
}