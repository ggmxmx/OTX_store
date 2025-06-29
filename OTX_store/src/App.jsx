import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ItemContainer from './itemContainer.jsx';
import { useEffect } from 'react';
import unnamed from './unnamed.jpg';
import CartPage from './pages/cartPage'; // Import your CartPage component
import items from './items'; // Import the items array

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
            <Route path="/" element={
              <>
                <div className='banner'>
                  <img src={unnamed} className='image' alt="OTX Store Banner"/>
                </div>
                <div className='items-container'>
                  {items.map(item => (
                    <ItemContainer
                      key={item.name + item.price}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              </>
            } />
            <Route path="/cart" element={<CartPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;