import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQdelivery.css';

function FAQDelivery() {
  const [openDeliveryFAQ, setOpenDeliveryFAQ] = useState(null);

  const toggleDeliveryFAQ = (index) => {
    setOpenDeliveryFAQ(openDeliveryFAQ === index ? null : index);
  };

  const deliveryFaqs = [
    {
      question: "Is my information private and secure?",
      answer: "Yes. We follow strict confidentiality and data protection protocols. Your prescription and health details are only shared with licensed professionals."
    },
    {
      question: "Can I cancel or reschedule a delivery?",
      answer: "Yes. You can cancel or reschedule through the app or by contacting support. Early cancellations are free, but late cancellations may attract a small fee."
    },
    {
      question: "How much does delivery cost?",
      answer: "Delivery fees depend on your location and urgency (standard vs express). The cost is shown before you confirm your order."
    },
    {
      question: "What if my prescribed medicine is out of stock?",
      answer: "Our pharmacist will suggest an approved alternative or let you know the soonest availability before confirming your order."
    },
    {
      question: "How long does delivery take?",
      answer: "Same-day orders are usually delivered within 1–2 hours (depending on location). Scheduled deliveries arrive at your chosen time slot."
    },
    {
      question: "Do I need a prescription for all medicines?",
      answer: "Only prescription drugs require a valid prescription. Over-the-counter medicines and supplies can be ordered without one."
    }
  ];

  return (
    <section className="delivery-faq">
      <div className="delivery-faq-container">
        <div className="delivery-faq-header">
          <h2>Medication Delivery <span className="delivery-faq-highlight">FAQs</span></h2>
          <p>Get answers to common questions about our medication delivery services</p>
        </div>

        <div className="delivery-faq-list">
          {deliveryFaqs.map((faq, index) => (
            <div key={index} className={`delivery-faq-item ${openDeliveryFAQ === index ? 'delivery-active' : ''}`}>
              <button 
                className="delivery-faq-question"
                onClick={() => toggleDeliveryFAQ(index)}
                aria-expanded={openDeliveryFAQ === index}
              >
                <span className="delivery-question-text">{faq.question}</span>
                <span className="delivery-faq-icon">
                  {openDeliveryFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div className={`delivery-faq-answer ${openDeliveryFAQ === index ? 'delivery-show' : ''}`}>
                <div className="delivery-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="delivery-faq-contact">
          <div className="delivery-contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our medication delivery services.</p>
            <div className="delivery-contact-buttons">
              <button className="delivery-contact-btn delivery-primary">
                Contact Support
              </button>
              <button className="delivery-contact-btn delivery-secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQDelivery;
