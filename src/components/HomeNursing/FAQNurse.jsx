import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQNurse.css';

function FAQNurse() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can a nurse arrive?",
      answer: "Our nurses can typically arrive within 2-4 hours for urgent requests. For scheduled appointments, we offer same-day or next-day availability. Emergency nursing services are available 24/7 with priority response times of 30-60 minutes depending on your location and the nature of the medical need."
    },
    {
      question: "What should I prepare before the visit?",
      answer: "Please have the following ready: Current medications and prescriptions, medical history or recent test results, insurance cards and identification, a list of current symptoms or concerns, comfortable clothing for examination, and a clean, well-lit space for the nurse to work. If you have specific medical equipment needs, please mention this during booking."
    },
    {
      question: "Can I request the same nurse for follow-up visits?",
      answer: "Yes, absolutely! We understand the importance of continuity of care. When booking follow-up visits, you can request the same nurse who provided your previous care. We'll do our best to accommodate this request based on the nurse's availability and your scheduling preferences. This helps ensure consistent, personalized care."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule your appointment up to 2 hours before the scheduled time without any charges. For cancellations made less than 2 hours in advance, a small fee may apply. You can easily reschedule through our booking system, by phone, or through our mobile app. We understand that medical needs can change, so we try to be as flexible as possible."
    }
  ];

  return (
    <section className="faq-nurse">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our home nursing services</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <div className="contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our services.</p>
            <div className="contact-buttons">
              <button className="contact-btn primary">
                Contact Support
              </button>
              <button className="contact-btn secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQNurse;
