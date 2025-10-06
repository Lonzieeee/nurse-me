import React, { useState } from "react";
import "./PhysioBookingForm.css";

export default function PhysioBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    condition: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    frequency: "",
    notes: "",
    therapistGender: "",
    confirmInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Physiotherapy booking submitted:", formData);
    alert("Booking submitted! We'll contact you soon to confirm your physiotherapy session.");
  };

  return (
    <section id="physio-booking-form" className="physio-booking-form-section">
      <div className="physio-booking-form-container">
        <h2 className="physio-booking-form-title">Book Your Physiotherapy Session</h2>
        <form className="physio-booking-form" onSubmit={handleSubmit}>
          
        
          <div className="physio-form-row two-col">
            <div className="physio-form-section">
              <h3 className="physio-form-section-title">Patient Details</h3>
              <p className="physio-section-description">Basic info for identification and follow-up</p>
              
              <div className="physio-form-group">
                <label>Full Name <span className="physio-required-mark">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="physio-form-group">
                <label>Age <span className="physio-required-mark">*</span></label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="1"
                  max="120"
                  placeholder="Enter your age"
                />
              </div>
              
              <div className="physio-form-group">
                <label>Gender (optional, for therapist preference)</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              
              <div className="physio-form-group">
                <label>Condition or Pain Area <span className="physio-required-mark">*</span></label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your condition</option>
                  <option value="back-pain">Back pain</option>
                  <option value="neck-pain">Neck pain</option>
                  <option value="stroke-recovery">Stroke recovery</option>
                  <option value="post-surgery-rehab">Post-surgery rehabilitation</option>
                  <option value="sports-injury">Sports injury</option>
                  <option value="arthritis">Arthritis</option>
                  <option value="joint-stiffness">Joint stiffness</option>
                  <option value="elderly-mobility">Elderly mobility support</option>
                  <option value="other">Other (please specify in notes)</option>
                </select>
              </div>
            </div>

           
            <div className="physio-form-section">
              <h3 className="physio-form-section-title">Contact Information</h3>
              <p className="physio-section-description">So our team can confirm bookings and coordinate visits</p>
              
              <div className="physio-form-group">
                <label>Phone Number (WhatsApp enabled) <span className="physio-required-mark">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+254 XXX XXX XXX"
                />
              </div>
              
              <div className="physio-form-group">
                <label>Email Address (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

       
          <div className="physio-form-section physio-span-2">
            <h3 className="physio-form-section-title">Location Details</h3>
            <p className="physio-section-description">For the home visit</p>
            
            <div className="physio-form-row two-col">
              <div className="physio-form-group">
                <label>Home Address / Estate Name <span className="physio-required-mark">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your home address or estate name"
                />
              </div>
              
              <div className="physio-form-group">
                <label>City / Area <span className="physio-required-mark">*</span></label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City/Area</option>
                  <option value="nairobi">Nairobi</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="kisumu">Kisumu</option>
                  <option value="nakuru">Nakuru</option>
                  <option value="eldoret">Eldoret</option>
                  <option value="thika">Thika</option>
                  <option value="machakos">Machakos</option>
                  <option value="other">Other (please specify in notes)</option>
                </select>
              </div>
            </div>
          </div>

        
          <div className="physio-form-section physio-span-2">
            <h3 className="physio-form-section-title">Appointment Preferences</h3>
            <p className="physio-section-description">Helps us assign the right therapist</p>
            
            <div className="physio-form-row three-col">
              <div className="physio-form-group">
                <label>Preferred Start Date <span className="physio-required-mark">*</span></label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="physio-form-group">
                <label>Preferred Time <span className="physio-required-mark">*</span></label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
              
              <div className="physio-form-group">
                <label>Session Frequency <span className="physio-required-mark">*</span></label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="one-time">One-time session</option>
                  <option value="weekly">Weekly sessions</option>
                  <option value="bi-weekly">Bi-weekly sessions</option>
                  <option value="custom">Custom plan (discuss with therapist)</option>
                </select>
              </div>
            </div>
          </div>

        
          <div className="physio-form-section physio-span-2">
            <h3 className="physio-form-section-title">Additional Information</h3>
            <p className="physio-section-description">A short open field to understand their needs</p>
            
            <div className="physio-form-group">
              <label>Notes / Describe Your Condition</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g., 'Recovering from knee surgery, need pain management and mobility exercises.'"
                rows="4"
              />
            </div>
          </div>

        
          <div className="physio-form-section physio-span-2">
            <h3 className="physio-form-section-title">Therapist Preference</h3>
            <p className="physio-section-description">Choose who you're most comfortable with</p>
            
            <div className="physio-form-group">
              <label>Preferred Physiotherapist Gender</label>
              <select
                name="therapistGender"
                value={formData.therapistGender}
                onChange={handleChange}
              >
                <option value="">No preference</option>
                <option value="male">Male physiotherapist</option>
                <option value="female">Female physiotherapist</option>
              </select>
            </div>
          </div>

          {/* Confirmation & Submit Section */}
          <div className="physio-form-section physio-span-2">
            <h3 className="physio-form-section-title">Confirmation & Submit</h3>
            
            <div className="physio-form-group physio-checkbox-group">
              <label className="physio-checkbox-label">
                <input
                  type="checkbox"
                  name="confirmInfo"
                  checked={formData.confirmInfo}
                  onChange={handleChange}
                  required
                />
                <span className="physio-checkmark"></span>
                I confirm the information provided is correct. <span className="physio-required-mark">*</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="physio-submit-btn"
              disabled={!formData.confirmInfo}
            >
              Book a Physiotherapist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
