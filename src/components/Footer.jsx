import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">NurseMe</h3>
            <p className="footer-description">
              Connecting Kenyans with trusted healthcare providers for quality care at home.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Home Nursing</Link></li>
              <li><Link to="/services">Elderly Care</Link></li>
              <li><Link to="/services">Post-Surgery Care</Link></li>
              <li><Link to="/services">Chronic Disease Management</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/providers">Become a Provider</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+254 700 123 456</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@nurseme.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NurseMe. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
