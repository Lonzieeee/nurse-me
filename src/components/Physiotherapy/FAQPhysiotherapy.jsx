import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQPhysiotherapy.css';

function FAQPhysiotherapy() {
  const [openPhysioFAQ, setOpenPhysioFAQ] = useState(null);

  const togglePhysioFAQ = (index) => {
    setOpenPhysioFAQ(openPhysioFAQ === index ? null : index);
  };

  const physiotherapyFaqs = [
    {
      question: "Do I need a doctor's referral for physiotherapy?",
      answer: "No, you don't. You can book directly, but if you already have a doctor's recommendation, our physiotherapist will include it in your care plan."
    },
    {
      question: "How many sessions will I need?",
      answer: "It depends on your condition and progress. After your first assessment, your physiotherapist will suggest a plan that fits your recovery goals."
    },
    {
      question: "Do physiotherapists bring their own equipment?",
      answer: "Yes. Our team brings the essential tools and materials needed for your sessions. You only need a small clear space at home."
    },
    {
      question: "Is home physiotherapy safe?",
      answer: "Absolutely. All sessions are handled by licensed professionals who follow strict hygiene and safety measures."
    },
    {
      question: "Can I choose my physiotherapist or request a gender preference?",
      answer: "Yes, you can. We'll do our best to match your request to ensure your comfort throughout the sessions."
    },
    {
      question: "What if I need to cancel or reschedule a session?",
      answer: "You can cancel or reschedule through our platform or by contacting support. Early changes are free, while late cancellations may attract a small fee."
    },
    {
      question: "What conditions can home physiotherapy help with?",
      answer: "We treat back and neck pain, sports injuries, arthritis, stroke recovery, post-surgery rehabilitation, and more all from the comfort of your home."
    }
  ];

  return (
    <section className="physio-faq">
      <div className="physio-faq-container">
        <div className="physio-faq-header">
          <h2>Physiotherapy <span className="physio-faq-highlight">FAQs</span></h2>
          <p>Get answers to common questions about our home physiotherapy services</p>
        </div>

        <div className="physio-faq-list">
          {physiotherapyFaqs.map((faq, index) => (
            <div key={index} className={`physio-faq-item ${openPhysioFAQ === index ? 'physio-active' : ''}`}>
              <button 
                className="physio-faq-question"
                onClick={() => togglePhysioFAQ(index)}
                aria-expanded={openPhysioFAQ === index}
              >
                <span className="physio-question-text">{faq.question}</span>
                <span className="physio-faq-icon">
                  {openPhysioFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div className={`physio-faq-answer ${openPhysioFAQ === index ? 'physio-show' : ''}`}>
                <div className="physio-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="physio-faq-contact">
          <div className="physio-contact-card">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you with any additional questions about our physiotherapy services.</p>
            <div className="physio-contact-buttons">
              <button className="physio-contact-btn physio-primary">
                Contact Support
              </button>
              <button className="physio-contact-btn physio-secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPhysiotherapy;
