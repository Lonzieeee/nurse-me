import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import "./Contact.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/contactpage-1.webp" 
          alt="Contact Us" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row two">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="Name" name="name" required />
              </div>
              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="Email" name="email" required />
              </div>
            </div>
            <div className="row one">
              <div className="field full">
                <label>Subject</label>
                <input type="text" placeholder="Subject" name="subject" />
              </div>
            </div>
            <div className="row one">
              <div className="field full">
                <label>Message</label>
                <textarea placeholder="Message" name="message" rows={6} />
              </div>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-right">
          <iframe
            title="Chandaria Innovation Centre Map"
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Chandaria%20Innovation%20Centre%20Kenyatta%20University&output=embed"
          ></iframe>
        </div>
        
        <div className="contact-details">
          <div className="detail">
            <div className="icon">
              <MapPin size={20} />
            </div>
            <div className="info">
              <h4>Address</h4>
              <p>Chandaria Innovation Centre, Kenyatta University</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <Phone size={20} />
            </div>
            <div className="info">
              <h4>Phone</h4>
              <p>+254 700 000 000</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <Mail size={20} />
            </div>
            <div className="info">
              <h4>Email</h4>
              <p>info@nurseme.co.ke</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <Globe size={20} />
            </div>
            <div className="info">
              <h4>Website</h4>
              <p>www.nurseme.co.ke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
