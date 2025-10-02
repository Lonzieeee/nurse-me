import React, { useState, useEffect } from 'react';
import { Zap, Calendar } from 'lucide-react';
import './MedicationOrder.css';

function MedicationOrder() {
  const [orderType, setOrderType] = useState('order-now');
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    medicationType: '',
    prescriptionFile: null,
    deliveryDate: '',
    deliveryTime: '',
    notes: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { orderType, ...formData });
   
  };

  return (
    <section className="medication-order">
      <div className="medication-order-container">
        <div className="order-header">
          <h2 className="order-title">
            Place Your <span className="order-highlight">Medication Order</span>
          </h2>
          <p className="order-subtitle">
            Choose your service type and fill in the details below
          </p>
        </div>

       
        <div className="order-type-selection">
          <div className="order-type-options">
            <label className={`order-type-option ${orderType === 'order-now' ? 'active' : ''}`}>
              <input
                type="radio"
                name="orderType"
                value="order-now"
                checked={orderType === 'order-now'}
                onChange={(e) => setOrderType(e.target.value)}
              />
              <div className="option-content">
                <div className="option-icon">
                  <Zap size={24} />
                </div>
                <h3>Order Now</h3>
                <p>Immediate delivery . Get your medications as soon as possible</p>
              </div>
            </label>

            <label className={`order-type-option ${orderType === 'book-delivery' ? 'active' : ''}`}>
              <input
                type="radio"
                name="orderType"
                value="book-delivery"
                checked={orderType === 'book-delivery'}
                onChange={(e) => setOrderType(e.target.value)}
              />
              <div className="option-content">
                <div className="option-icon">
                  <Calendar size={24} />
                </div>
                <h3>Book Delivery</h3>
                <p>Schedule delivery . Choose your preferred date and time</p>
              </div>
            </label>
          </div>
        </div>

       
        <form className="order-form" onSubmit={handleSubmit}>
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
              <label htmlFor="address">Delivery Address *</label>
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

          <div className="form-section medication-details">
            <h3 className="form-section-title">Medication Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="medicationType">Type of Medication</label>
                <select
                  id="medicationType"
                  name="medicationType"
                  value={formData.medicationType}
                  onChange={handleInputChange}
                >
                  <option value="">Select type</option>
                  <option value="prescription">Prescription</option>
                  <option value="otc">Over-the-Counter</option>
                  <option value="supplements">Supplements</option>
                  <option value="special">Special Handling</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="prescriptionFile">Upload Prescription</label>
                <input
                  type="file"
                  id="prescriptionFile"
                  name="prescriptionFile"
                  onChange={handleInputChange}
                  accept={isMobile ? ".jpg,.jpeg,.png,.pdf,image/*" : ".jpg,.jpeg,.png,.pdf"}
                  capture={isMobile ? "environment" : undefined}
                />
                <small>{isMobile ? "Take photo or upload file" : "Upload photo/scan"}</small>
              </div>
            </div>
          </div>

          {orderType === 'book-delivery' && (
            <div className="form-section delivery-schedule">
              <h3 className="form-section-title">Delivery Schedule</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="deliveryDate">Preferred Date *</label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required={orderType === 'book-delivery'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deliveryTime">Preferred Time</label>
                  <select
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleInputChange}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="form-section additional-info">
            <h3 className="form-section-title">Additional Information</h3>
            <div className="form-group full-width">
              <label htmlFor="notes">Special Instructions</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="2"
                placeholder="Special delivery instructions, allergies, notes..."
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-order-btn">
              {orderType === 'order-now' ? 'Place Order Now' : 'Schedule Delivery'}
            </button>
            <p className="form-note">
              * Required fields. We'll contact you within 30 minutes to confirm your order.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default MedicationOrder;
