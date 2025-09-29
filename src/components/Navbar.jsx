import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img
            src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/icon-min.png"
            alt="Nurse Me Logo"
            className="logo-img"
          />
          <span className="logo-text">
            <span className="logo-black">Nurse</span>
            <span className="logo-blue"> Me</span>
          </span>
        </Link>
        
        <button className="menu-icon" aria-label="Open menu" onClick={() => setIsOpen(true)}>
          <Menu size={28} strokeWidth={1.5} />
        </button>
         
        {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          
          <li className="nav-close-row">
            <Link to="/" className="nav-logo drawer" onClick={() => setIsOpen(false)}>
              <img
                src="https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/icon-min.png"
                alt="Nurse Me Logo"
                className="logo-img"
              />
              <span className="logo-text">
                <span className="logo-black">Nurse</span>
                <span className="logo-blue"> Me</span>
              </span>
            </Link>
            <button className="close-icon" aria-label="Close menu" onClick={() => setIsOpen(false)}>
              <X size={24} strokeWidth={1.5} />
            </button>
          </li>
          <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className={`dropdown ${isServicesOpen ? "open" : ""}`} 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}>
            <button
              className="nav-link dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              onClick={(e) => {
                
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setIsServicesOpen((v) => !v);
                } else {
                  
                  setIsOpen(false);
                }
              }}
            >
              Services
            </button>
            <ul className="dropdown-menu" role="menu">
              <li role="none">
                <Link role="menuitem" to="/services/book" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                  Book a Visit
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/services/join" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                  Join as a Caregiver
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to="/how-it-works" className="nav-link" onClick={() => setIsOpen(false)}>How It Works</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li className="nav-cta">
            <Link to="/signin" className="nav-btn" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
