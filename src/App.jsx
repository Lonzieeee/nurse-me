import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookVisit from "./pages/BookVisit";
import JoinCaregiver from "./pages/JoinCaregiver";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sign from "./pages/Sign";
import Login from "./pages/Sign"; 
import HomeNursing from "./pages/HomeNursing";
import DoctorHouseCalls from "./pages/DoctorHouseCalls";
import MedicationDelivery from "./pages/MedicationDelivery";
import PalliativeCare from "./pages/PalliativeCare";
import Physiotherapy from "./pages/Physiotherapy";
import Midwife from "./pages/Midwife";
import Therapists from "./pages/Therapists";


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/book" element={<BookVisit />} />
        <Route path="/services/join" element={<JoinCaregiver />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-nursing" element={<HomeNursing />} />
        <Route path="/doctor-house-calls" element={<DoctorHouseCalls />} />
        <Route path="/medication-delivery" element={<MedicationDelivery />} />
        <Route path="/palliative-care" element={<PalliativeCare />} />
        <Route path="/physiotherapy" element={<Physiotherapy />} />
        <Route path="/midwife-services" element={<Midwife />} />
        <Route path="/therapist" element={<Therapists />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
