import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userDisplayName, setUserDisplayName] = useState("");
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        
        const displayName = currentUser.displayName || 
                           currentUser.email?.split('@')[0] || 
                           'User';
        setUserDisplayName(displayName);
      } else {
        setUserDisplayName("");
      }
    });
    return () => unsubscribe();
  }, []);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-profile-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

 
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);


  useEffect(() => {
    setIsServicesOpen(false);
  }, [location.pathname]);


  const getUserInitials = (name) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  const handleMouseEnterServices = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); 
    setDropdownTimeout(timeout);
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setIsOpen(false);
      setIsServicesOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };


  const isActive = (path) => {
    if (path === "/home") {
      return location.pathname === "/home";
    }
    if (path === "/" && user) {
      return location.pathname === "/home";
    }
    if (path === "/" && !user) {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <Link to={user ? "/home" : "/"} className="nav-logo" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
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
            <Link to={user ? "/home" : "/"} className="nav-logo drawer" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
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
          {user && (
            <>
              <li><Link to="/home" className={`nav-link ${isActive("/home") ? "active" : ""}`} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>Home</Link></li>
              <li className={`dropdown ${isServicesOpen ? "open" : ""}`}
                  onMouseEnter={handleMouseEnterServices} 
                  onMouseLeave={handleMouseLeaveServices}>
                <button
                  className={`nav-link dropdown-toggle ${isActive("/home-nursing") || isActive("/midwife-services") || isActive("/doctor-house-calls") || isActive("/physiotherapy") || isActive("/medication-delivery") || isActive("/palliative-care") || isActive("/therapist") ? "active" : ""}`}
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
                    <Link role="menuitem" to="/home-nursing" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Home Nursing Care 
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/midwife-services" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Midwifery Services
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/doctor-house-calls" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Doctor House Calls
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/physiotherapy" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Physiotherapy at Home
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/medication-delivery" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Medication Delivery
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/palliative-care" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Palliative Care
                    </Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/therapist" className="dropdown-item" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                      Therapist Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/services/book" className={`nav-link ${isActive("/services/book") ? "active" : ""}`} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>Book a Visit</Link></li>
              <li><Link to="/services/join" className={`nav-link ${isActive("/services/join") ? "active" : ""}`} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>Join as Caregiver</Link></li>
              <li><Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>About</Link></li>
              <li><Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>Contact</Link></li>
            </>
          )}
          <li className="nav-cta">
            {user ? (
              <div className="user-profile-container">
                <div 
                  className="user-avatar"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="avatar-circle">
                    {getUserInitials(userDisplayName)}
                  </div>
                  
                  {isUserMenuOpen && (
                    <div className="user-dropdown">
                      <div className="user-info">
                        <div className="user-avatar-large">
                          {getUserInitials(userDisplayName)}
                        </div>
                        <div className="user-details">
                          <p className="user-name">{userDisplayName}</p>
                          <p className="user-email">{user.email}</p>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <button onClick={handleLogout} className="logout-btn">
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link to="/signin" className="nav-btn" onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                Sign Up
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
