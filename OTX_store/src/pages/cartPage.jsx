import React, { useState, useEffect } from 'react';
import imptyCartImage from '../Images/imptyCart.png'; // Placeholder image for empty cart
import './cart.css'
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <p>Start shopping to add items to your cart!</p>
        <img src={imptyCartImage} alt="Empty Cart" className='empty-cart'/>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">

        {cartItems.map(item => (
          <Link to={`/product/${item.id}`} className="cart-item-link" key={item.id}>
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CartPage;