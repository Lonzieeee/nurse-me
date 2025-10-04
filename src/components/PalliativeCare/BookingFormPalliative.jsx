import React, { useState } from 'react';
import { User, Calendar, Clock, Phone, Mail, FileText, Upload, CheckCircle } from 'lucide-react';
import './BookingFormPalliative.css';

const BookingFormPalliative = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    condition: '',
    contactName: '',
    phone: '',
    email: '',
    startDate: '',
    preferredTime: '',
    careTypes: [],
    notes: '',
    confirmation: false,
    urgency: 'standard',
    medicalFile: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'careTypes') {
      setFormData(prev => ({
        ...prev,
        careTypes: checked 
          ? [...prev.careTypes, value]
          : prev.careTypes.filter(type => type !== value)
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, medicalFile: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Palliative Care Booking:', formData);

  };

  return (
    <section className="palliative-booking-form">
      <div className="palliative-booking-container">
        <div className="palliative-booking-header">
          <h2 className="palliative-booking-title">
            Request <span className="palliative-booking-highlight">Palliative Care</span> Support
          </h2>
          <p className="palliative-booking-subtitle">
            Compassionate care tailored to your loved one's needs
          </p>
        </div>

        <form onSubmit={handleSubmit} className="palliative-booking-form-content">
       
          <div className="palliative-form-section">
            <h3 className="palliative-section-title">
              <User size={20} />
              Patient Information
            </h3>
            
            <div className="palliative-form-row">
              <div className="palliative-form-group">
                <label htmlFor="patientName">Patient's Full Name </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Enter patient's full name"
                  required
                />
              </div>
              
              <div className="palliative-form-group">
                <label htmlFor="age">Age </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter age"
                  min="0"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="palliative-form-group">
              <label htmlFor="condition">Condition / Care Needs</label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                required
              >
                <option value="">Select condition or care needs</option>
                <option value="cancer">Cancer</option>
                <option value="elderly">Elderly Care</option>
                <option value="chronic">Chronic Illness</option>
                <option value="neurological">Neurological</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

        
          <div className="palliative-form-section">
            <h3 className="palliative-section-title">
              <Phone size={20} />
              Contact Person
            </h3>
            
            <div className="palliative-form-group">
              <label htmlFor="contactName">Contact Name </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Often a family member"
                required
              />
            </div>

            <div className="palliative-form-row">
              <div className="palliative-form-group">
                <label htmlFor="phone">Phone Number (WhatsApp enabled)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              
              <div className="palliative-form-group">
                <label htmlFor="email">Email Address (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="For updates"
                />
              </div>
            </div>
          </div>

      
          <div className="palliative-form-section">
            <h3 className="palliative-section-title">
              <Calendar size={20} />
              Care Preferences
            </h3>
            
            <div className="palliative-form-row">
              <div className="palliative-form-group">
                <label htmlFor="startDate">Preferred Start Date </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div className="palliative-form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="palliative-form-group">
              <label>Type of Care Needed</label>
              <div className="palliative-checkbox-group">
                {[
                  { value: 'pain-management', label: 'Pain Management' },
                  { value: 'emotional-support', label: 'Emotional Support' },
                  { value: 'family-guidance', label: 'Family Guidance' },
                  { value: 'end-of-life-comfort', label: 'End-of-Life Comfort' }
                ].map(care => (
                  <label key={care.value} className="palliative-checkbox-label">
                    <input
                      type="checkbox"
                      name="careTypes"
                      value={care.value}
                      checked={formData.careTypes.includes(care.value)}
                      onChange={handleInputChange}
                    />
                    <span className="palliative-checkbox-custom"></span>
                    <span className="palliative-checkbox-text">{care.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

        
          <div className="palliative-form-section">
            <h3 className="palliative-section-title">
              <FileText size={20} />
              Additional Information
            </h3>
            
            <div className="palliative-form-group">
              <label htmlFor="notes">Tell us more about your loved one's needs</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Please provide any additional details about the patient's condition, specific needs, or concerns..."
                rows="4"
              ></textarea>
            </div>
          </div>

         
          <div className="palliative-form-section">
            <h3 className="palliative-section-title">
              <Upload size={20} />
              Optional Add-Ons
            </h3>
            
            <div className="palliative-form-row">
              <div className="palliative-form-group">
                <label htmlFor="medicalFile">Medical Report/Prescription (if available)</label>
                <input
                  type="file"
                  id="medicalFile"
                  name="medicalFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="palliative-file-input"
                />
              </div>
              
              <div className="palliative-form-group">
                <label htmlFor="urgency">Urgency Level</label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                >
                  <option value="standard">Standard</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>
          </div>

       
          <div className="palliative-form-section">
            <div className="palliative-confirmation-group">
              <label className="palliative-checkbox-label">
                <input
                  type="checkbox"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                  required
                />
                <span className="palliative-checkbox-custom"></span>
                <span className="palliative-checkbox-text">I confirm the information provided is correct.</span>
              </label>
            </div>
          </div>

       
          <div className="palliative-form-submit">
            <button 
              type="submit" 
              className="palliative-submit-btn"
              disabled={!formData.confirmation}
            >
              <CheckCircle size={20} />
              Request Palliative Care Support
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingFormPalliative;
