import React, { useState } from "react";
import "./PhysioBookingForm.css";

export default function PhysioBookingForm() {
  const [formData, setFormData] = useState({
  
    fullName: "",
    age: "",
    gender: "",
 
    phone: "",
    email: "",
    city: "",
    address: "",
  
    condition: "",
    painLevel: "",
    urgencyLevel: "",
    
    preferredDate: "",
    preferredTime: "",
    frequency: "",
    therapistGender: "",
  
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const conditions = [
    'Back Pain',
    'Neck Pain', 
    'Sports Injury',
    'Post-surgery Rehabilitation',
    'Stroke Recovery',
    'Arthritis',
    'Joint Stiffness',
    'Elderly Mobility Support'
  ];

  const cities = [
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Nakuru',
    'Eldoret',
    'Thika',
    'Machakos',
    'Meru',
    'Nyeri',
    'Kakamega'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'conditions') {
        setFormData(prev => ({
          ...prev,
          conditions: checked 
            ? [...(prev.conditions || []), value]
            : (prev.conditions || []).filter(condition => condition !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

 
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.age || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age (1-120)';
    }
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

 
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.condition) {
      newErrors.condition = 'Please select your condition';
    }
    if (!formData.painLevel) {
      newErrors.painLevel = 'Please rate your pain level';
    }
    if (!formData.urgencyLevel) {
      newErrors.urgencyLevel = 'Please select urgency level';
    }

   
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }
    if (!formData.frequency) {
      newErrors.frequency = 'Session frequency is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
    
      console.log('Physiotherapy booking submitted:', formData);
      
    
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you! Your physiotherapy session request has been submitted. We will contact you within 2 hours to confirm your appointment.');
      
   
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        condition: '',
        painLevel: '',
        urgencyLevel: '',
        preferredDate: '',
        preferredTime: '',
        frequency: '',
        therapistGender: '',
        notes: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="physio-booking-section">
      <div className="physio-booking-container">
        <div className="physio-booking-header">
          <h2>Book Your <span className="physio-highlight-blue">Physiotherapy Session</span></h2>
          <p>Complete this form to request personalized physiotherapy services at your home</p>
        </div>

        <form onSubmit={handleSubmit} className="physio-booking-form">
          
       
          <div className="physio-form-section">
            <div className="physio-section-header">
              <h3>Personal Information</h3>
            </div>

            <div className="physio-form-grid">
              <div className="physio-form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="physio-error-message">{errors.fullName}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={errors.age ? 'error' : ''}
                  placeholder="Your age"
                  min="1"
                  max="120"
                />
                {errors.age && <span className="physio-error-message">{errors.age}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="physio-error-message">{errors.gender}</span>}
              </div>
            </div>
          </div>

      
          <div className="physio-form-section">
            <div className="physio-section-header">
              <h3>Contact Details</h3>
            </div>

            <div className="physio-form-grid">
              <div className="physio-form-group">
                <label htmlFor="phone">Phone Number (WhatsApp enabled) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+254 7XX XXX XXX"
                />
                {errors.phone && <span className="physio-error-message">{errors.phone}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="email">Email Address (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="physio-form-group">
                <label htmlFor="city">City or County *</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'error' : ''}
                >
                  <option value="">Select your city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <span className="physio-error-message">{errors.city}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="address">Home Address / Estate *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                  placeholder="Enter your complete home address"
                />
                {errors.address && <span className="physio-error-message">{errors.address}</span>}
              </div>
            </div>
          </div>

        
          <div className="physio-form-section">
            <div className="physio-section-header">
              <h3>Condition & Treatment Needed</h3>
            </div>

            <div className="physio-form-grid">
              <div className="physio-form-group">
                <label htmlFor="condition">Primary Condition *</label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className={errors.condition ? 'error' : ''}
                >
                  <option value="">Select your condition</option>
                  {conditions.map((condition, index) => (
                    <option key={index} value={condition}>{condition}</option>
                  ))}
                  <option value="other">Other (please specify in notes)</option>
                </select>
                {errors.condition && <span className="physio-error-message">{errors.condition}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="painLevel">Pain Level (1-10) *</label>
                <select
                  id="painLevel"
                  name="painLevel"
                  value={formData.painLevel}
                  onChange={handleInputChange}
                  className={errors.painLevel ? 'error' : ''}
                >
                  <option value="">Rate your pain</option>
                  <option value="1-3">1-3 (Mild pain)</option>
                  <option value="4-6">4-6 (Moderate pain)</option>
                  <option value="7-8">7-8 (Severe pain)</option>
                  <option value="9-10">9-10 (Extreme pain)</option>
                </select>
                {errors.painLevel && <span className="physio-error-message">{errors.painLevel}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="urgencyLevel">How urgent is this? *</label>
                <select
                  id="urgencyLevel"
                  name="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={handleInputChange}
                  className={errors.urgencyLevel ? 'error' : ''}
                >
                  <option value="">Select urgency level</option>
                  <option value="emergency">Emergency (need immediate help)</option>
                  <option value="urgent">Urgent (within 24-48 hours)</option>
                  <option value="soon">Soon (within a week)</option>
                  <option value="flexible">Flexible (can wait 1-2 weeks)</option>
                </select>
                {errors.urgencyLevel && <span className="physio-error-message">{errors.urgencyLevel}</span>}
              </div>
            </div>
          </div>

          <div className="physio-form-section">
            <div className="physio-section-header">
              <h3>Session Preferences</h3>
            </div>

            <div className="physio-form-grid">
              <div className="physio-form-group">
                <label htmlFor="preferredDate">Preferred Start Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className={errors.preferredDate ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferredDate && <span className="physio-error-message">{errors.preferredDate}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={errors.preferredTime ? 'error' : ''}
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.preferredTime && <span className="physio-error-message">{errors.preferredTime}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="frequency">Session Frequency *</label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className={errors.frequency ? 'error' : ''}
                >
                  <option value="">Select frequency</option>
                  <option value="one-time">One-time session</option>
                  <option value="weekly">Weekly sessions</option>
                  <option value="bi-weekly">Bi-weekly sessions</option>
                  <option value="custom">Custom plan (discuss with therapist)</option>
                </select>
                {errors.frequency && <span className="physio-error-message">{errors.frequency}</span>}
              </div>

              <div className="physio-form-group">
                <label htmlFor="therapistGender">Preferred Physiotherapist Gender (Optional)</label>
                <select
                  id="therapistGender"
                  name="therapistGender"
                  value={formData.therapistGender}
                  onChange={handleInputChange}
                >
                  <option value="">No preference</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>
          </div>

        
          <div className="physio-form-section">
            <div className="physio-section-header">
              <h3>Additional Notes (Optional)</h3>
            </div>

            <div className="physio-form-grid">
              <div className="physio-form-group full-width">
                <label htmlFor="notes">Describe your condition or any specific requirements</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="e.g., Recovering from knee surgery, need pain management and mobility exercises..."
                  rows="4"
                />
                <p className="physio-note-privacy">
                  This information helps us match you with the right physiotherapist and plan your treatment.
                </p>
              </div>
            </div>
          </div>

       
          <div className="physio-form-submit">
            <button type="submit" className="physio-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Book Physiotherapy Session'}
            </button>
            <p className="physio-submit-note">
              We'll contact you within 2 hours to confirm your appointment and discuss your treatment plan
            </p>
            <p className="physio-submit-assurance">
              Our certified physiotherapists are ready to help you recover and improve your mobility.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
