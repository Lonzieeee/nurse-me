import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-snippet">
      <div className="contact-container">
        <h2 className="contact-title">Let's Get In Touch.</h2>
        <p className="contact-subtitle">
          Join thousands of Kenyans who trust NurseMe for their healthcare needs.
        </p>

        <div className="contact-cta">
          <Link to="/services/book" className="contact-btn pill">
            Book a visit
          </Link>
          <Link to="/services/join" className="contact-btn pill">
            Join as a caregiver
          </Link>
        </div>
      </div>
    </section>
  );
}
