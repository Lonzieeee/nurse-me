import Hero from "../components/JoinTeam/HeroTeam/HeroJoin";
import WhyJoin from "../components/JoinTeam/WhyJoin/WhyJoin";
import Members from "../components/JoinTeam/members/members";
import RegisterForm from "../components/JoinTeam/RegisterForm/RegisterForm";

export default function JoinCaregiver() {
  return (
    <div>
      <Hero />
      <WhyJoin />   
      <Members />
      <RegisterForm />
    </div>
  );
}