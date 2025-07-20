import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const orderDetails = {
      customerInfo: formData,
      items: cartItems,
      totalAmount: totalAmount,
    };

    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          customerPhone: formData.phone,
          location: formData.location,
          orderDetails: cartItems,
          totalAmount: totalAmount,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Order submitted successfully!');
        navigate('/'); // Redirect to home page after successful order
      } else {
        throw new Error(result.error || 'Failed to submit order');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate('/')}>Go Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-form-and-summary">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="location">Address / Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            {errors.location && <p className="error-text">{errors.location}</p>}
          </div>
          <button type="submit" className="submit-order-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Confirm and Send Order'}
          </button>
        </form>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
