import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQPalliative.css';

function FAQPalliative() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "When should we consider palliative care?",
      answer: "Palliative care can begin at any stage of a serious illness. It's not only for end of life situations . It can support patients and families from the moment of diagnosis, alongside other treatments."
    },
    {
      question: "Is palliative care the same as hospice care?",
      answer: "Not exactly. Palliative care focuses on improving quality of life and can be provided at any stage of illness. Hospice care is a type of palliative care specifically for those nearing the final stage of life."
    },
    {
      question: "Can palliative care be combined with active treatment?",
      answer: "Yes. Palliative care works alongside ongoing treatments like chemotherapy, dialysis, or physiotherapy. Its goal is to relieve symptoms and provide comfort while other care continues."
    },
    {
      question: "How does palliative care support families?",
      answer: "Our team not only cares for patients but also supports families through counseling, caregiver training, and emotional guidance,helping loved ones feel confident and less overwhelmed."
    },
    {
      question: "Who provides palliative care at home?",
      answer: "A team of trained professionals including doctors, nurses, and counselors who work together to provide compassionate care tailored to each patient's needs."
    }
  ];

  return (
    <section className="faq-palliative">
      <div className="faq-palliative-container">
        <div className="faq-palliative-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our palliative care services</p>
        </div>

        <div className="faq-palliative-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-palliative-item ${openFAQ === index ? 'active' : ''}`}>
              <button 
                className="faq-palliative-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span className="palliative-question-text">{faq.question}</span>
                <span className="faq-palliative-icon">
                  {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div className={`faq-palliative-answer ${openFAQ === index ? 'open' : ''}`}>
                <div className="palliative-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-palliative-contact">
          <div className="palliative-contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our palliative care services.</p>
            <div className="palliative-contact-buttons">
              <button className="palliative-contact-btn primary">
                Contact Support
              </button>
              <button className="palliative-contact-btn secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPalliative;
