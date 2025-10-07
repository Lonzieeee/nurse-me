import Process from "../components/Process/Process";
import SEO from "../components/SEO";

function HowItWorks() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <SEO 
        title="How It Works - Simple Steps to Get Healthcare at Home"
        description="Learn how easy it is to get professional healthcare at home with NurseMe. Simple 3-step process: Choose your service, schedule your visit, and receive quality care at home."
        keywords="how it works, healthcare process, booking process, home healthcare steps, service delivery"
        canonical="https://nurseme.com/how-it-works"
      />
      <Process />
    </div>
  );
}

export default HowItWorks;
