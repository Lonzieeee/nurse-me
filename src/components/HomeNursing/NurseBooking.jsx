import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import './NurseBooking.css';

function NurseBooking() {
  const [formData, setFormData] = useState({
    bookingFor: 'myself',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    patientName: '',
    patientAge: '',
    patientRelation: '',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    
  };

  const serviceTypes = [

    'Wound Care & Dressing',
    'Medication Administration',
    'Vital Signs Monitoring',
    'Post Surgery Care',
    'Chronic Disease Management',
    'Family Health Education'
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  return (
    <section className="nurse-booking">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Book a <span className="highlight">Home Nurse</span> Today</h2>
          <p>Schedule professional nursing care in the comfort of your home</p>
        </div>

        <div className="booking-content">
          <form className="booking-form" onSubmit={handleSubmit}>
          
            <div className="booking-for-section">
              <h3>Who are you booking for?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="bookingFor"
                    value="myself"
                    checked={formData.bookingFor === 'myself'}
                    onChange={handleChange}
                  />
                  <span className="radio-label">Myself</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="bookingFor"
                    value="someone-else"
                    checked={formData.bookingFor === 'someone-else'}
                    onChange={handleChange}
                  />
                  <span className="radio-label">Someone Else</span>
                </label>
              </div>
            </div>

           {/* if booking gor someone else  */}
            {formData.bookingFor === 'someone-else' && (
              <div className="patient-info-section">
                <h3>Patient Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="patientName">Patient's Full Name *</label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter patient's full name"
                      required={formData.bookingFor === 'someone-else'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="patientAge">Patient's Age</label>
                    <input
                      type="number"
                      id="patientAge"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleChange}
                      placeholder="Enter age"
                      min="0"
                      max="120"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="patientRelation">Your Relationship to Patient *</label>
                    <select
                      id="patientRelation"
                      name="patientRelation"
                      value={formData.patientRelation}
                      onChange={handleChange}
                      required={formData.bookingFor === 'someone-else'}
                    >
                      <option value="">Select relationship</option>
                      <option value="spouse">Spouse</option>
                      <option value="parent">Parent</option>
                      <option value="child">Child</option>
                      <option value="sibling">Sibling</option>
                      <option value="relative">Other Relative</option>
                      <option value="friend">Friend</option>
                      <option value="caregiver">Caregiver</option>
                      <option value="guardian">Legal Guardian</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="form-grid">
             
              <div className="form-group">
                <label htmlFor="serviceType">Service Type *</label>
                <select 
                  id="serviceType"
                  name="serviceType" 
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

         
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

           
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select 
                  id="preferredTime"
                  name="preferredTime" 
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              
              <div className="form-group">
                <label htmlFor="location">Location/Address *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  required
                />
              </div>

             
              <div className="form-group">
                <label htmlFor="contactName">Full Name *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Contact Phone */}
              <div className="form-group">
                <label htmlFor="contactPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="e.g., +254 700 000 000"
                  required
                />
              </div>

              
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

           
            <div className="form-group full-width">
              <label htmlFor="specialRequirements">Special Requirements</label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Please describe any specific medical conditions, accessibility needs, or special instructions for the nurse..."
                rows="4"
              />
            </div>

           
            <div className="form-actions">
              <button type="submit" className="book-now-btn">
                <Calendar className="btn-icon" />
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NurseBooking;
