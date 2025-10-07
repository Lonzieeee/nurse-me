import Hero from "../components/Home/Hero";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Trust from "../components/Trust/Trust";
import Audience from "../components/Audience/Audience";
import Providers from "../components/Providers/Providers";
import Contact from "../components/Contact/Contact";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";


function Home() {
  return (
    <div>
      <SEO 
        title="Professional Healthcare at Home"
        description="Get professional healthcare services delivered to your home. From nursing care to doctor house calls, medication delivery, and physiotherapy - NurseMe brings quality healthcare to your doorstep."
        keywords="healthcare at home, home nursing, doctor house calls, medication delivery, physiotherapy, palliative care, professional healthcare, NurseMe"
        canonical="https://nurseme.com/home"
      />
      <StructuredData />
      <Hero />
      <Services />
      <Process />
      <Audience />
      <Providers />
      <Trust />
      <Contact />
    </div>
  );
}

export default Home;
