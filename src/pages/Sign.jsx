import React, { useState, useEffect, useRef } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Sign.css";

export default function Sign() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const formRowRef = useRef(null);
  const loginOptionsRef = useRef(null);

  
  const images = [
    "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/signinimage-1-min.png",
    "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/signin2-min.png", 
    "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/signin3-min.png"
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  
  useEffect(() => {
    if (formRowRef.current && loginOptionsRef.current) {
      if (isLogin) {
      
        formRowRef.current.classList.add('hidden');
        
        setTimeout(() => {
          loginOptionsRef.current.classList.remove('hidden');
        }, 150);
      } else {
  
        loginOptionsRef.current.classList.add('hidden');
        
        setTimeout(() => {
          formRowRef.current.classList.remove('hidden');
        }, 150);
      }
    }
  }, [isLogin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

  };

  return (
    <div className="sign-page">
      <div className="sign-container">
       
        <div className="sign-left">
          <div className="image-carousel">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Sign up image ${index + 1}`} />
                <div className="image-overlay"></div>
              </div>
            ))}
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

      
        <div className="sign-right">
          <div className="sign-form-container">
            <div className="sign-header">
              <h1>{isLogin ? "Login to your account" : "Create an Account"}</h1>
              <p>{isLogin ? "Welcome back! Please sign in to continue" : "Join NurseMe today and get started with professional healthcare at home"}</p>
            </div>

            <form className="sign-form" onSubmit={handleSubmit}>
              <div 
                ref={formRowRef}
                className={`form-row ${isLogin ? 'hidden' : ''}`}
              >
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-group">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required={!isLogin}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-group">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <div className="input-group">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <Lock size={20} className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={isLogin ? "Enter your password" : "Create a password"}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div 
                ref={loginOptionsRef}
                className={`login-options ${!isLogin ? 'hidden' : ''}`}
              >
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="create-account-btn">
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="social-auth">
              <button className="social-btn google-btn">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              <button className="social-btn apple-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            <div className="sign-footer">
              {isLogin ? (
                <p>Don't have an account? <a href="/signin">Create one</a></p>
              ) : (
                <p>Already have an account? <a href="/login">Sign in</a></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
