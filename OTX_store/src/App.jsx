import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';

import CartPage from './pages/cartPage'; // Import your CartPage component
import items from './items'; // Import the items array
import Home from './pages/home';
import ProductView from './pages/productView';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function App() {
  useEffect(() => {
    document.title = "OTX store";
  }, []);

  return (
    <Router>
      <div className='body'>
        <div className='main'>
          <div className='header'>
            <div className='nav'>
              <Link to="/"><p>home</p></Link>
              <Link to="/about"><p>about</p></Link>
              <Link to="/contact"><p>contact</p></Link>
              <Link to="/cart"><p>cart</p></Link>
            </div>
            <div className='logo'>
              <h1>OTX store</h1>
            </div>
          </div>
          
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductView />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;