import React from "react";
import "./Trust&Contact.css";
import { Lock, Phone } from "lucide-react";

export default function TrustAndContact() {
  return (
    <section className="trust-contact">
      <div className="trust-contact-card">
        <div className="trust-message">
          <Lock className="trust-icon" />
          <p>
            Your information is <strong>secure & confidential</strong>. Only
            licensed professionals will contact you.
          </p>
        </div>

        <div className="trust-phone">
          <Phone className="trust-icon phone-icon" />
          <span>Need help booking? Call us at</span>
          <a href="tel:+254700123456" className="phone-number">
            +254 700 000 000
          </a>
        </div>

        <div className="trust-cta">
          <a href="tel:+254700123456" className="call-btn">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
