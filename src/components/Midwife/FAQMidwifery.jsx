import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQMidwifery.css';

function FAQMidwifery() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Is giving birth at home safe?",
      answer: "Yes. Home births are safe for low-risk pregnancies when supervised by licensed midwives. We also assess every client beforehand to ensure it's the right choice for you and your baby."
    },
    {
      question: "What if there's an emergency during labor?",
      answer: "Your safety comes first. Our midwives are trained to handle emergencies and have protocols for quick hospital transfers if needed."
    },
    {
      question: "Do midwives bring their own equipment?",
      answer: "Yes. Our midwives come fully equipped with essential tools, sterile supplies, and medications to support safe home care."
    },
    {
      question: "Can I still deliver at a hospital if I change my mind?",
      answer: "Absolutely. You can choose hospital delivery anytime, and your midwife will help coordinate a smooth transition."
    },
    {
      question: "Do you offer postnatal or newborn care?",
      answer: "Yes! We provide full postnatal support including mother's recovery checks, baby monitoring, and breastfeeding guidance."
    },
    {
      question: "Can a midwife work with my doctor or hospital?",
      answer: "Yes. We often collaborate with obstetricians and hospitals to ensure continuity of care before, during, and after delivery."
    },
    {
      question: "How do I prepare my home for a midwife visit or birth?",
      answer: "You only need a clean, quiet space with good lighting and access to water. Your midwife will bring everything else and guide you through setup."
    }
  ];

  return (
    <section className="midwife-faq">
      <div className="midwife-faq-container">
        <div className="midwife-faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our home midwifery services</p>
        </div>

        <div className="midwife-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`midwife-faq-item ${openFAQ === index ? 'active' : ''}`}>
              <button 
                className="midwife-faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span className="midwife-question-text">{faq.question}</span>
                <span className="midwife-faq-icon">
                  {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div className={`midwife-faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <div className="midwife-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="midwife-faq-contact">
          <div className="midwife-contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our midwifery services.</p>
            <div className="midwife-contact-buttons">
              <button className="midwife-contact-btn primary">
                Contact Support
              </button>
              <button className="midwife-contact-btn secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQMidwifery;
