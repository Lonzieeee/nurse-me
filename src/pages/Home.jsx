import Hero from "../components/Home/Hero";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Trust from "../components/Trust/Trust";
import Audience from "../components/Audience/Audience";
import Providers from "../components/Providers/Providers";
import Contact from "../components/Contact/Contact";


function Home() {
  return (
    <div>
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
