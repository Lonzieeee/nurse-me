import React, { useState } from 'react';
import './TherapyBookingSection.css';

function TherapyBookingSection() {
  const [formData, setFormData] = useState({

    fullName: '',
    age: '',
    gender: '',

    phoneNumber: '',
    email: '',
    city: '',
   
    therapyTypes: [],
    therapyFor: '',
    urgencyLevel: '',
   
    sessionMode: '',
    preferredDate: '',
    preferredTime: '',
    sessionDuration: '',
    therapistGender: '',
    
    briefNote: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const therapyTypes = [
    'Individual Counseling',
    'Family Therapy',
    'Couples Therapy',
    'Child & Adolescent Therapy',
    'Trauma & PTSD Therapy',
    'Anxiety & Depression Therapy',
    'Addiction Counseling',
    'Grief & Loss Counseling'
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
      if (name === 'therapyTypes') {
        setFormData(prev => ({
          ...prev,
          therapyTypes: checked 
            ? [...prev.therapyTypes, value]
            : prev.therapyTypes.filter(type => type !== value)
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
    if (!formData.age || formData.age < 5 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age (5-120)';
    }
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    }


    if (formData.therapyTypes.length === 0) {
      newErrors.therapyTypes = 'Please select at least one type of therapy';
    }
    if (!formData.therapyFor) {
      newErrors.therapyFor = 'Please specify who the therapy is for';
    }
    if (!formData.urgencyLevel) {
      newErrors.urgencyLevel = 'Please select urgency level';
    }

  
    if (!formData.sessionMode) {
      newErrors.sessionMode = 'Please select session mode';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }
    if (!formData.sessionDuration) {
      newErrors.sessionDuration = 'Session duration is required';
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
     
      console.log('Form submitted:', formData);
      
    
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you! Your therapy session request has been submitted. We will contact you within 2 hours to confirm your appointment.');
      
    
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        email: '',
        city: '',
        therapyTypes: [],
        therapyFor: '',
        urgencyLevel: '',
        sessionMode: '',
        preferredDate: '',
        preferredTime: '',
        sessionDuration: '',
        therapistGender: '',
        briefNote: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="therapy-booking-section">
      <div className="therapy-booking-container">
        <div className="therapy-booking-header">
          <h2>Book Your <span className="therapy-highlight-blue">Therapy Session</span></h2>
          <p>Complete this form to request personalized therapy services tailored to your needs</p>
        </div>

        <form onSubmit={handleSubmit} className="therapy-booking-form">
          
     
          <div className="therapy-form-section">
            <div className="therapy-section-header">
              <h3>Personal Information</h3>
            </div>

            <div className="therapy-form-grid">
              <div className="therapy-form-group">
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
                {errors.fullName && <span className="therapy-error-message">{errors.fullName}</span>}
              </div>

              <div className="therapy-form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={errors.age ? 'error' : ''}
                  placeholder="Your age"
                  min="5"
                  max="120"
                />
                {errors.age && <span className="therapy-error-message">{errors.age}</span>}
              </div>

              <div className="therapy-form-group">
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
                {errors.gender && <span className="therapy-error-message">{errors.gender}</span>}
              </div>
            </div>
          </div>

      
          <div className="therapy-form-section">
            <div className="therapy-section-header">
              <h3>Contact Details</h3>
            </div>

            <div className="therapy-form-grid">
              <div className="therapy-form-group">
                <label htmlFor="phoneNumber">Phone Number (WhatsApp enabled) *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={errors.phoneNumber ? 'error' : ''}
                  placeholder="+254 7XX XXX XXX"
                />
                {errors.phoneNumber && <span className="therapy-error-message">{errors.phoneNumber}</span>}
              </div>

              <div className="therapy-form-group">
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

              <div className="therapy-form-group">
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
                {errors.city && <span className="therapy-error-message">{errors.city}</span>}
              </div>
            </div>
          </div>

       
          <div className="therapy-form-section">
            <div className="therapy-section-header">
              <h3>Type of Therapy Needed</h3>
            </div>

            <div className="therapy-form-grid">
              <div className="therapy-form-group full-width">
                <label>Select Type(s) of Therapy *</label>
                <div className="therapy-checkbox-group">
                  {therapyTypes.map((therapy, index) => (
                    <div key={index} className="therapy-checkbox-item">
                      <input
                        type="checkbox"
                        id={`therapy-${index}`}
                        name="therapyTypes"
                        value={therapy}
                        checked={formData.therapyTypes.includes(therapy)}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={`therapy-${index}`}>{therapy}</label>
                    </div>
                  ))}
                </div>
                {errors.therapyTypes && <span className="therapy-error-message">{errors.therapyTypes}</span>}
              </div>

              <div className="therapy-form-group">
                <label htmlFor="therapyFor">Who is this therapy for? *</label>
                <select
                  id="therapyFor"
                  name="therapyFor"
                  value={formData.therapyFor}
                  onChange={handleInputChange}
                  className={errors.therapyFor ? 'error' : ''}
                >
                  <option value="">Select option</option>
                  <option value="myself">Myself</option>
                  <option value="my-child">My child/adolescent</option>
                  <option value="family-member">Family member</option>
                  <option value="couple">My partner and I</option>
                  <option value="family">My family</option>
                </select>
                {errors.therapyFor && <span className="therapy-error-message">{errors.therapyFor}</span>}
              </div>

              <div className="therapy-form-group">
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
                {errors.urgencyLevel && <span className="therapy-error-message">{errors.urgencyLevel}</span>}
              </div>
            </div>
          </div>

      
          <div className="therapy-form-section">
            <div className="therapy-section-header">
              <h3>Session Preferences</h3>
            </div>

            <div className="therapy-form-grid">
              <div className="therapy-form-group">
                <label htmlFor="sessionMode">Session Mode *</label>
                <select
                  id="sessionMode"
                  name="sessionMode"
                  value={formData.sessionMode}
                  onChange={handleInputChange}
                  className={errors.sessionMode ? 'error' : ''}
                >
                  <option value="">Select session mode</option>
                  <option value="in-person">In-person (at your home)</option>
                  <option value="virtual">Virtual (video call)</option>
                  <option value="phone">Phone call</option>
                  <option value="flexible">Flexible (either mode)</option>
                </select>
                {errors.sessionMode && <span className="therapy-error-message">{errors.sessionMode}</span>}
              </div>

              <div className="therapy-form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className={errors.preferredDate ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferredDate && <span className="therapy-error-message">{errors.preferredDate}</span>}
              </div>

              <div className="therapy-form-group">
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
                {errors.preferredTime && <span className="therapy-error-message">{errors.preferredTime}</span>}
              </div>

              <div className="therapy-form-group">
                <label htmlFor="sessionDuration">Session Duration *</label>
                <select
                  id="sessionDuration"
                  name="sessionDuration"
                  value={formData.sessionDuration}
                  onChange={handleInputChange}
                  className={errors.sessionDuration ? 'error' : ''}
                >
                  <option value="">Select duration</option>
                  <option value="30-minutes">30 minutes</option>
                  <option value="45-minutes">45 minutes</option>
                  <option value="60-minutes">60 minutes (standard)</option>
                  <option value="90-minutes">90 minutes (extended)</option>
                </select>
                {errors.sessionDuration && <span className="therapy-error-message">{errors.sessionDuration}</span>}
              </div>

              <div className="therapy-form-group">
                <label htmlFor="therapistGender">Preferred Therapist Gender (Optional)</label>
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

      
          <div className="therapy-form-section">
            <div className="therapy-section-header">
              <h3>Brief Note (Optional)</h3>
            </div>

            <div className="therapy-form-grid">
              <div className="therapy-form-group full-width">
                <label htmlFor="briefNote">Tell us briefly about your situation or any specific concerns</label>
                <textarea
                  id="briefNote"
                  name="briefNote"
                  value={formData.briefNote}
                  onChange={handleInputChange}
                  placeholder="e.g., Dealing with anxiety and stress from work, need help managing emotions, looking for family counseling after recent changes..."
                  rows="4"
                />
                <p className="therapy-note-privacy">
                  This information helps us match you with the right therapist. All information is kept strictly confidential.
                </p>
              </div>
            </div>
          </div>

     
          <div className="therapy-form-submit">
            <button type="submit" className="therapy-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Therapy Session'}
            </button>
            <p className="therapy-submit-note">
              We'll contact you within 2 hours to confirm your appointment and discuss next steps
            </p>
            <p className="therapy-submit-assurance">
              Your mental health journey is important to us. Rest assured, you're taking a positive step forward.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TherapyBookingSection;
