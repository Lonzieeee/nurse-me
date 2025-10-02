import DeliveryHero from "../components/MedicatonDelivery/DeliveryHero";
import MedicationProcess from "../components/MedicatonDelivery/MedicationProcess";
import MedicationServices from "../components/MedicatonDelivery/MedicationServices";
import MedicationOrder from "../components/MedicatonDelivery/MedicationOrder";
import FAQDelivery from "../components/MedicatonDelivery/FAQdelivery";

function MedicationDelivery() {
  return (
    <div>
      <DeliveryHero />
      
      <MedicationProcess />
      <MedicationServices />
        <MedicationOrder />
        <FAQDelivery />
    </div>
  );
}

export default MedicationDelivery;
