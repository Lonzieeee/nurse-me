import About from "../components/About/About";
import Story from "../components/Story/Story";
import Mission from "../components/Mission/Mission";
import Team from "../components/Team/Team";
import Impact from "../components/Impact/Impact";


const AboutPage = () => {
  return (
    <div style={{ paddingTop: '70px' }}>
      <About />
      <Story />
      <Mission />
      <Team />
      <Impact />
    </div>
  );
};

export default AboutPage;