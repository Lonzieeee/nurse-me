import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import './MidwiferyBookingForm.css';

function MidwiferyBookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pregnancyStage: '',
    expectedDueDate: '',
    servicesNeeded: [],
    address: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your midwife visit request has been submitted successfully!');
  };

  const services = [
    'Antenatal Checkups',
    'Home Birth Support', 
    'Postnatal Care',
    'Breastfeeding Support'
  ];

  const cities = [
    'Nairobi',
    'Kiambu', 
    'Kajiado',
    'Machakos',
    'Thika'
  ];

  return (
    <section className="midwife-booking-form">
      <div className="booking-form-container">
        <div className="booking-header">
          <h2 className="booking-title">
            Book Your <span className="booking-highlight">Midwife Visit</span>
          </h2>
          <p className="booking-subtitle">
            Complete the form below to request personalized midwifery care at home
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-section personal-info">
            <h3 className="form-section-title">Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Home Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="2"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-section pregnancy-details">
            <h3 className="form-section-title">Pregnancy Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pregnancyStage">Pregnancy Stage *</label>
                <select
                  id="pregnancyStage"
                  name="pregnancyStage"
                  value={formData.pregnancyStage}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select stage</option>
                  <option value="first-trimester">First Trimester (1-12 weeks)</option>
                  <option value="second-trimester">Second Trimester (13-26 weeks)</option>
                  <option value="third-trimester">Third Trimester (27-40 weeks)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="expectedDueDate">Expected Due Date *</label>
                <input
                  type="date"
                  id="expectedDueDate"
                  name="expectedDueDate"
                  value={formData.expectedDueDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Services Needed *</label>
              <div className="checkbox-group">
                {services.map((service, index) => (
                  <label key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      name="servicesNeeded"
                      value={service}
                      checked={formData.servicesNeeded.includes(service)}
                      onChange={handleInputChange}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="form-section visit-preferences">
            <h3 className="form-section-title">Visit Preferences</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
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
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time *</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                required
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8AM-12PM)</option>
                <option value="afternoon">Afternoon (12PM-5PM)</option>
                <option value="evening">Evening (5PM-8PM)</option>
              </select>
            </div>
          </div>

          <div className="form-section additional-info">
            <h3 className="form-section-title">Additional Information</h3>
            <div className="form-group full-width">
              <label htmlFor="notes">Special Requests or Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="2"
                placeholder="Special requests, medical conditions, preferences..."
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-booking-btn">
              <Calendar size={20} />
              Request Midwife Visit
            </button>
            <p className="form-note">
              * Required fields. We'll contact you within 2 hours to confirm your appointment.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MidwiferyBookingForm;
