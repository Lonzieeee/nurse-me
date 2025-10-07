import Services from "../components/Services/Services";
import SEO from "../components/SEO";

function ServicesPage() {
  return (
    <div className="services-page" style={{ paddingTop: '70px' }}>
      <SEO 
        title="Our Healthcare Services"
        description="Explore our comprehensive range of healthcare services including home nursing, doctor house calls, medication delivery, palliative care, and physiotherapy. Quality healthcare delivered to your home."
        keywords="healthcare services, home nursing services, doctor house calls, medication delivery, palliative care, physiotherapy at home"
        canonical="https://nurseme.com/services"
      />
      <Services />
    </div>
  );
}

export default ServicesPage;
