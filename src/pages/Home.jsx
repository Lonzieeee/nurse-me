import Hero from "../components/Home/Hero";
import Services from "../components/Services/Services";
import Process from "../components/Process/Process";
import Audience from "../components/Audience/Audience";
import Providers from "../components/Providers/Providers";


function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <Audience />
      <Providers />
    </div>
  );
}

export default Home;
