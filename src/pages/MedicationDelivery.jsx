import DeliveryHero from "../components/MedicatonDelivery/DeliveryHero";
import MedicationProcess from "../components/MedicatonDelivery/MedicationProcess";
import MedicationServices from "../components/MedicatonDelivery/MedicationServices";
import MedicationOrder from "../components/MedicatonDelivery/MedicationOrder";
import FAQDelivery from "../components/MedicatonDelivery/FAQdelivery";
import SEO from "../components/SEO";

function MedicationDelivery() {
  return (
    <div style={{ paddingTop: '0px' }}>
      <SEO 
        title="Medication Delivery - Prescription Medicines at Your Doorstep"
        description="Fast and reliable medication delivery service. Get your prescription medicines delivered safely to your home. Track your order and enjoy hassle-free pharmaceutical delivery."
        keywords="medication delivery, prescription delivery, pharmacy delivery, medicines at home, pharmaceutical delivery, online pharmacy"
        canonical="https://nurseme.com/medication-delivery"
      />
      <DeliveryHero />
      <MedicationProcess />
      <MedicationServices />
      <MedicationOrder />
      <FAQDelivery />
    </div>
  );
}

export default MedicationDelivery;
