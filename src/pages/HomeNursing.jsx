import HeroHomeNursing from "../components/HomeNursing/HeroHomeNursing";
import ServiceDesc from "../components/HomeNursing/ServiceDesc";
import ServicesIncluded from "../components/HomeNursing/ServicesIncluded";
import NursePricing from "../components/HomeNursing/NursePricing";
import NurseBooking from "../components/HomeNursing/NurseBooking";
import FAQNurse from "../components/HomeNursing/FAQNurse";
import SEO from "../components/SEO";

function HomeNursing() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <SEO 
        title="Home Nursing Services - Professional Nurses at Your Home"
        description="Professional home nursing services tailored to your needs. Get qualified nurses for wound care, medication management, post-surgery care, and more. Book your visit today."
        keywords="home nursing, professional nurses at home, nursing care, wound care, medication management, post-surgery nursing, in-home nursing services"
        canonical="https://nurseme.com/home-nursing"
      />
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
