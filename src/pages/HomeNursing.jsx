import HeroHomeNursing from "../components/HomeNursing/HeroHomeNursing";
import ServiceDesc from "../components/HomeNursing/ServiceDesc";
import ServicesIncluded from "../components/HomeNursing/ServicesIncluded";
import NursePricing from "../components/HomeNursing/NursePricing";
import NurseBooking from "../components/HomeNursing/NurseBooking";
import FAQNurse from "../components/HomeNursing/FAQNurse";

function HomeNursing() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <HeroHomeNursing />
      <ServiceDesc />
      <ServicesIncluded />
      <NursePricing />
      <NurseBooking />
      <FAQNurse />
    </div>
  );
}

export default HomeNursing;
