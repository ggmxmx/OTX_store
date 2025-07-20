import React, { useState, useEffect } from 'react';
import imptyCartImage from '../Images/imptyCart.png'; // Placeholder image for empty cart
import './cart.css'
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    navigate('/checkout', { state: { cartItems, totalAmount } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <>
          <p>Your cart is currently empty.</p>
          <p>Start shopping to add items to your cart!</p>
          <img src={imptyCartImage} alt="Empty Cart" className='empty-cart'/>
        </>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>سلة المسروقات

      </h1>
      <div className="cart-items">

        {cartItems.map(item => (
          
          <div key={item.id} className="cart-item">
            <Link to={`/product/${item.id}`} className="cart-item-link" key={item.id}>
            <img src={item.image} alt={item.name} />
            </Link>
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>

        ))}
      </div>
      <div className="cart-summary">
        <button onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;