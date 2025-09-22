import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-snippet">
      <div className="contact-container">
        <h2 className="contact-title">Ready to get started?</h2>
        <p className="contact-subtitle">
          Join thousands of Kenyans who trust NurseMe for their healthcare needs.
        </p>

        <div className="contact-cta">
          <Link to="/contact" className="contact-btn primary">
            Book your visit
          </Link>
          <Link to="/contact" className="contact-btn secondary">
            Become a provider
          </Link>
        </div>
      </div>
    </section>
  );
}
