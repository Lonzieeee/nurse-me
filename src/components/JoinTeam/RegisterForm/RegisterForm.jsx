import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    licenseNumber: "",
    experience: "",
    idFile: null,
    licenseFile: null,
    availability: [],
    location: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      let updatedAvailability = [...formData.availability];
      if (checked) {
        updatedAvailability.push(value);
      } else {
        updatedAvailability = updatedAvailability.filter((a) => a !== value);
      }
      setFormData({ ...formData, availability: updatedAvailability });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const isEmptyString = (value) => !value || String(value).trim() === "";
    const missing = {
      fullName: isEmptyString(formData.fullName),
      phone: isEmptyString(formData.phone),
      email: isEmptyString(formData.email),
      role: isEmptyString(formData.role),
      licenseNumber: isEmptyString(formData.licenseNumber),
      experience: isEmptyString(formData.experience),
      idFile: !formData.idFile,
      licenseFile: !formData.licenseFile,
      availability: !formData.availability || formData.availability.length === 0,
      location: isEmptyString(formData.location),
    };

    const hasMissing = Object.values(missing).some(Boolean);
    if (hasMissing) {
      alert("Please complete all fields before submitting, including files and availability.");
      return;
    }

    console.log("Form Submitted:", formData);
    setSuccess(true);
   
    window.setTimeout(() => setSuccess(false), 4000);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      role: "",
      licenseNumber: "",
      experience: "",
      idFile: null,
      licenseFile: null,
      availability: [],
      location: "",
    });
  };

  return (
    <section className="register-section" id="register">
      <div className="register-container">
        <h2>Register as a Caregiver</h2>
        <p className="subtitle">
          Fill in your details to join our trusted healthcare provider network.
        </p>

        {success && (
          <div className="success-message">
            Thank you for registering! Our team will review your application.
          </div>
        )}

        <form className="register-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-group">
            <label>Role *</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="Therapist">Therapist</option>
              <option value="Nurse">Nurse</option>
              <option value="Doctor">Doctor</option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Physiotherapist">Physiotherapist</option>
              <option value="Midwife">Midwife</option>
            </select>
          </div>

          <div className="form-group">
            <label>License Number *</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Years of Experience *</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          
          <div className="form-group">
            <label>Upload ID *</label>
            <input type="file" name="idFile" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Upload License *</label>
            <input type="file" name="licenseFile" onChange={handleChange} required />
          </div>

         
          <div className="form-group">
            <label>Availability *</label>
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  value="Weekdays"
                  onChange={handleChange}
                  checked={formData.availability.includes("Weekdays")}
                />
                Weekdays
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Weekends"
                  onChange={handleChange}
                  checked={formData.availability.includes("Weekends")}
                />
                Weekends
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Full-time"
                  onChange={handleChange}
                  checked={formData.availability.includes("Full-time")}
                />
                Full-time
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Part-time"
                  onChange={handleChange}
                  checked={formData.availability.includes("Part-time")}
                />
                Part-time
              </label>
            </div>
          </div>

          
          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Nairobi, Kenya"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Register as a Caregiver
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
