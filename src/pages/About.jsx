import About from "../components/About/About";
import Story from "../components/Story/Story";
import Mission from "../components/Mission/Mission";
import Team from "../components/Team/Team";
import Impact from "../components/Impact/Impact";
import SEO from "../components/SEO";


const AboutPage = () => {
  return (
    <div style={{ paddingTop: '70px' }}>
      <SEO 
        title="About Us - Our Story and Mission"
        description="Learn about NurseMe's mission to bring professional healthcare to your home. Discover our story, meet our team, and see the impact we're making in healthcare delivery."
        keywords="about NurseMe, healthcare mission, healthcare team, home healthcare company, our story"
        canonical="https://nurseme.com/about"
      />
      <About />
      <Story />
      <Mission />
      <Team />
      <Impact />
    </div>
  );
};

export default AboutPage;