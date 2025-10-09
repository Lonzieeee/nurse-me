import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQTherapy.css';

function FAQTherapy() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Are therapy sessions confidential?",
      answer: "Yes. Everything you share stays 100% private between you and your therapist. We follow strict confidentiality and data protection standards."
    },
    {
      question: "Can I choose between in-person and virtual therapy?",
      answer: "Absolutely. You can choose what feels most comfortable we offer both secure online sessions and home visits."
    },
    {
      question: "How long does a therapy session last?",
      answer: "Most sessions last between 45 to 60 minutes. Your therapist will recommend a schedule that fits your goals and progress."
    },
    {
      question: "Can I request a male or female therapist?",
      answer: "Yes. We understand comfort matters, and you can choose your preference when booking."
    },
    {
      question: "What if I feel uncomfortable after my first session?",
      answer: "That's completely okay. You can request a different therapist. Finding the right fit is an important part of the healing process."
    },
    {
      question: "Is therapy only for people with serious mental illness?",
      answer: "Not at all. Therapy is for anyone. Whether you're managing stress, improving relationships, or just want someone to talk to."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "It depends on your needs. Some people meet weekly, others biweekly or monthly. Your therapist will guide you based on progress and comfort."
    }
  ];

  return (
    <section className="therapy-faq-section">
      <div className="therapy-faq-container">
        <div className="therapy-faq-header">
          <h2>Frequently Asked <span className="therapy-faq-highlight">Questions</span></h2>
          <p>Get answers to common questions about our professional therapy services</p>
        </div>

        <div className="therapy-faq-content">
          <div className="therapy-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`therapy-faq-item ${openFAQ === index ? 'active' : ''}`}>
                <button 
                  className="therapy-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="therapy-question-text">{faq.question}</span>
                  <span className="therapy-faq-icon">
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <div className={`therapy-faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <div className="therapy-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="therapy-faq-contact">
            <div className="therapy-contact-card">
              <h3>Still have questions?</h3>
              <p>Our mental health support team is here to help you with any additional questions about our therapy services.</p>
              <div className="therapy-contact-buttons">
                <button className="therapy-contact-btn primary">
                  Contact Support
                </button>
                <button className="therapy-contact-btn secondary">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQTherapy;
