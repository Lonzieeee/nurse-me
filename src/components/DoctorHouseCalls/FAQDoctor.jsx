import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQDoctor.css';

function FAQDoctor() {
  const [openDoctorFAQ, setOpenDoctorFAQ] = useState(null);

  const toggleDoctorFAQ = (index) => {
    setOpenDoctorFAQ(openDoctorFAQ === index ? null : index);
  };

  const doctorFaqs = [
    {
      question: "What can I expect during a home visit?",
      answer: "A licensed doctor will visit you at home, perform an examination, ask about your symptoms, and provide treatment or prescriptions if needed. Each visit is personalized to your condition."
    },
    {
      question: "How quickly can a doctor arrive?",
      answer: "Availability depends on your location and doctor schedule, but most visits can be arranged within the same day, often within a few hours."
    },
    {
      question: "When should I book a home visit instead of going to the hospital?",
      answer: "Book a home visit for non-emergencies such as flu, fever, chronic condition reviews, follow-ups, or child checkups. Go to a hospital immediately for severe chest pain, difficulty breathing, heavy bleeding, or any life-threatening emergency."
    },
    {
      question: "Do I need any special equipment at home?",
      answer: "No.Our doctors bring basic medical tools with them. If advanced equipment is required (e.g., scans, X-rays), they will advise on the nearest facility."
    },
    {
      question: "Can you provide prescriptions or medications during the visit?",
      answer: "Yes. Doctors can issue prescriptions, and in some cases provide medication on the spot. Follow-up prescriptions can also be renewed."
    },
    {
      question: "Can I request the same doctor for follow-up visits?",
      answer: "Yes, whenever possible we assign the same doctor for continuity of care, unless your preferred doctor is unavailable."
    },
    {
      question: "Can I cancel or reschedule a home visit?",
      answer: "Yes. You can cancel or reschedule through our booking system or support team. Early cancellations (2–4 hours before) are usually free, while late cancellations may incur a small fee. We'll do our best to accommodate rescheduling."
    }
  ];

  return (
    <section className="doctor-faq">
      <div className="doctor-faq-container">
        <div className="doctor-faq-header">
          <h2>Doctor House Call <span className="doctor-faq-highlight">FAQs</span></h2>
          <p>Get answers to common questions about our doctor home visit services</p>
        </div>

        <div className="doctor-faq-list">
          {doctorFaqs.map((faq, index) => (
            <div key={index} className={`doctor-faq-item ${openDoctorFAQ === index ? 'doctor-active' : ''}`}>
              <button 
                className="doctor-faq-question"
                onClick={() => toggleDoctorFAQ(index)}
                aria-expanded={openDoctorFAQ === index}
              >
                <span className="doctor-question-text">{faq.question}</span>
                <span className="doctor-faq-icon">
                  {openDoctorFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div className={`doctor-faq-answer ${openDoctorFAQ === index ? 'doctor-show' : ''}`}>
                <div className="doctor-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="doctor-faq-contact">
          <div className="doctor-contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our doctor home visit services.</p>
            <div className="doctor-contact-buttons">
              <button className="doctor-contact-btn doctor-primary">
                Contact Support
              </button>
              <button className="doctor-contact-btn doctor-secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQDoctor;
