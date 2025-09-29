import React, { useState } from "react";
import "./BookingForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    service: "",
    conditions: "",
    date: "",
    time: "",
    frequency: "",
    county: "",
    town: "",
    street: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Booking submitted! We’ll contact you soon.");
  };

  return (
    <section id="booking-form" className="booking-form-section">
      <div className="booking-form-container">
        <h2 className="booking-form-title">Book Your Visit</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row two-col">
            <div className="form-section">
              <h3 className="form-section-title">Personal Info</h3>
              <div className="form-group">
                <label>Full Name <span className="required-mark">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number <span className="required-mark">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address <span className="required-mark">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Age <span className="required-mark">*</span></label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Visit Details</h3>
              <div className="form-group">
                <label>Preferred Date <span className="required-mark">*</span></label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Preferred Time <span className="required-mark">*</span></label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Frequency <span className="required-mark">*</span></label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Frequency --</option>
                  <option value="one-off">One-off</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Health Info</h3>
              <div className="form-group">
                <label>Service Needed <span className="required-mark">*</span></label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Service --</option>
                  <option value="elderly">Elderly Care</option>
                  <option value="post-surgery">Post-Surgery Recovery</option>
                  <option value="palliative">Palliative Care</option>
                  <option value="midwifery">Midwifery</option>
                  <option value="mental-health">Mental Health Support</option>
                  <option value="chronic">Chronic Illness Support</option>
                </select>
              </div>
              <div className="form-group">
                <label>Other Medical Conditions</label>
                <textarea
                  name="conditions"
                  value={formData.conditions}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Location</h3>
              <div className="form-group">
                <label>County <span className="required-mark">*</span></label>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Town / Estate <span className="required-mark">*</span></label>
                <input
                  type="text"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Street / House Number <span className="required-mark">*</span></label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section span-2">
              <h3 className="form-section-title">Extra Notes</h3>
              <div className="form-group">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Optional: Add any special instructions"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="booking-submit">
            Book My Visit
          </button>
        </form>
      </div>
    </section>
  );
}
