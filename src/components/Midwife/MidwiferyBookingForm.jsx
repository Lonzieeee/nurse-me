import React, { useState } from 'react';
import { Calendar, Upload, User, MapPin, Phone, Mail, Baby, Clock } from 'lucide-react';
import './MidwiferyBookingForm.css';

function MidwiferyBookingForm() {
  const [formData, setFormData] = useState({
 
    fullName: '',
    age: '',
    phoneNumber: '',
    email: '',
    
  
    pregnancyStage: '',
    expectedDueDate: '',
    servicesNeeded: [],
    
  
    homeAddress: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    
  
    specialRequests: '',
    midwifeGender: '',
    
  
    uploadedFile: null
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: checked 
          ? [...prev.servicesNeeded, value]
          : prev.servicesNeeded.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      uploadedFile: file
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.pregnancyStage) newErrors.pregnancyStage = 'Pregnancy stage is required';
    if (!formData.expectedDueDate) newErrors.expectedDueDate = 'Expected due date is required';
    if (formData.servicesNeeded.length === 0) newErrors.servicesNeeded = 'Please select at least one service';
    if (!formData.homeAddress.trim()) newErrors.homeAddress = 'Home address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
   
      alert('Your midwife visit request has been submitted successfully!');
    }
  };

  const services = [
    'Antenatal Checkups',
    'Home Birth Support',
    'Postnatal Care',
    'Breastfeeding Support',
    'Newborn Care'
  ];

  const cities = [
    'Nairobi',
    'Kiambu',
    'Kajiado',
    'Machakos',
    'Murang\'a',
    'Nyeri',
    'Thika'
  ];

  return (
    <section className="midwife-booking-form-page">
      <div className="midwife-booking-form-container">
        <div className="midwife-booking-form-header">
          <h2>Book Your <span className="midwife-blue-text">Midwife Visit</span></h2>
          <p>Complete this form to request personalized midwifery care at home</p>
        </div>

        <form onSubmit={handleSubmit} className="midwife-booking-form">
        
          <div className="midwife-form-section">
            <div className="midwife-section-header">
              {/* <User className="midwife-section-icon" size={24} /> */}
              <h3>Mother's Information</h3>
            
            </div>

            <div className="midwife-form-grid">
              <div className="midwife-form-group">
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
                {errors.fullName && <span className="midwife-error-message">{errors.fullName}</span>}
              </div>

              <div className="midwife-form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={errors.age ? 'error' : ''}
                  placeholder="Your age"
                  min="18"
                  max="50"
                />
                {errors.age && <span className="midwife-error-message">{errors.age}</span>}
              </div>

              <div className="midwife-form-group">
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
                {errors.phoneNumber && <span className="midwife-error-message">{errors.phoneNumber}</span>}
              </div>

              <div className="midwife-form-group">
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
            </div>
          </div>

        
          <div className="midwife-form-section">
            <div className="midwife-section-header">
              {/* <Baby className="midwife-section-icon" size={24} /> */}
              <h3>Pregnancy Details</h3>
            
            </div>

            <div className="midwife-form-grid">
              <div className="midwife-form-group">
                <label htmlFor="pregnancyStage">Current Pregnancy Stage *</label>
                <select
                  id="pregnancyStage"
                  name="pregnancyStage"
                  value={formData.pregnancyStage}
                  onChange={handleInputChange}
                  className={errors.pregnancyStage ? 'error' : ''}
                >
                  <option value="">Select pregnancy stage</option>
                  <option value="first-trimester">First Trimester (1-12 weeks)</option>
                  <option value="second-trimester">Second Trimester (13-26 weeks)</option>
                  <option value="third-trimester">Third Trimester (27-40 weeks)</option>
                </select>
                {errors.pregnancyStage && <span className="midwife-error-message">{errors.pregnancyStage}</span>}
              </div>

              <div className="midwife-form-group">
                <label htmlFor="expectedDueDate">Expected Due Date (EDD) *</label>
                <input
                  type="date"
                  id="expectedDueDate"
                  name="expectedDueDate"
                  value={formData.expectedDueDate}
                  onChange={handleInputChange}
                  className={errors.expectedDueDate ? 'error' : ''}
                />
                {errors.expectedDueDate && <span className="midwife-error-message">{errors.expectedDueDate}</span>}
              </div>

              <div className="midwife-form-group full-width">
                <label>Type of Service Needed *</label>
                <div className="midwife-checkbox-group">
                  {services.map((service, index) => (
                    <div key={index} className="midwife-checkbox-item">
                      <input
                        type="checkbox"
                        id={`service-${index}`}
                        name="servicesNeeded"
                        value={service}
                        checked={formData.servicesNeeded.includes(service)}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={`service-${index}`}>{service}</label>
                    </div>
                  ))}
                </div>
                {errors.servicesNeeded && <span className="midwife-error-message">{errors.servicesNeeded}</span>}
              </div>
            </div>
          </div>

         
          <div className="midwife-form-section">
            <div className="midwife-section-header">
              {/* <MapPin className="midwife-section-icon" size={24} /> */}
              <h3>Location & Visit Preferences</h3>
           
            </div>

            <div className="midwife-form-grid">
              <div className="midwife-form-group full-width">
                <label htmlFor="homeAddress">Home Address / Estate / Area *</label>
                <input
                  type="text"
                  id="homeAddress"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleInputChange}
                  className={errors.homeAddress ? 'error' : ''}
                  placeholder="Enter your complete home address"
                />
                {errors.homeAddress && <span className="midwife-error-message">{errors.homeAddress}</span>}
              </div>

              <div className="midwife-form-group">
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
                {errors.city && <span className="midwife-error-message">{errors.city}</span>}
              </div>

              <div className="midwife-form-group">
                <label htmlFor="preferredDate">Preferred Visit Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className={errors.preferredDate ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferredDate && <span className="midwife-error-message">{errors.preferredDate}</span>}
              </div>

              <div className="midwife-form-group">
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
                </select>
                {errors.preferredTime && <span className="midwife-error-message">{errors.preferredTime}</span>}
              </div>
            </div>
          </div>

        
          <div className="midwife-form-section">
            <div className="midwife-section-header">
              {/* <Clock className="midwife-section-icon" size={24} /> */}
              <h3>Additional Information</h3>
            
            </div>

            <div className="midwife-form-grid">
              <div className="midwife-form-group full-width">
                <label htmlFor="specialRequests">Describe Your Situation or Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="e.g., First pregnancy, would like home birth with female midwife."
                  rows="4"
                />
              </div>

              <div className="midwife-form-group">
                <label htmlFor="midwifeGender">Preferred Midwife Gender (Optional)</label>
                <select
                  id="midwifeGender"
                  name="midwifeGender"
                  value={formData.midwifeGender}
                  onChange={handleInputChange}
                >
                  <option value="">No preference</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div className="midwife-form-group">
                <label htmlFor="fileUpload">File Upload (Optional)</label>
                <div className="midwife-file-upload-area">
                  <input
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    onChange={handleFileUpload}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="midwife-file-input"
                  />
                  <div className="midwife-file-upload-content">
                    <Upload className="midwife-upload-icon" size={24} />
                    <p>Upload medical report, scan, or doctor's note</p>
                    <span>PDF, JPG, PNG (Max 5MB)</span>
                  </div>
                  {formData.uploadedFile && (
                    <div className="midwife-uploaded-file">
                      <span>📄 {formData.uploadedFile.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

       
          <div className="midwife-form-submit">
            <button type="submit" className="midwife-submit-btn">
              {/* <Calendar size={20} /> */}
              Request Midwife Visit
            </button>
            <p className="midwife-submit-note">
              We'll contact you within 2 hours to confirm your appointment
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MidwiferyBookingForm;
