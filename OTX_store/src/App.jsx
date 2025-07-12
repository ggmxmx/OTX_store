import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

import CartPage from './pages/cartPage'; // Import your CartPage component
import items from './items'; // Import the items array
import Home from './pages/home';
import ProductView from './pages/productView';
import Sidebar from './components/Sidebar';
import AboutPage from './pages/aboutPage';
import Contacts from './pages/contacts';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = "OTX store";
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className='body'>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        
          <div className='main'>
            <div className='header'>
              <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                <FaBars />
              </button>
              <div className="search-bar-container">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className='nav'>
                <Link to="/cart"><FaShoppingCart /></Link>
              </div>
              <div className='logo'>
                <h1>OTX store</h1>
              </div>
            </div>
            
            <Routes>
              <Route path="/" element={<Home items={items} searchTerm={searchTerm} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:id" element={<ProductView />} />
              <Route path="/contact" element={<Contacts />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
  
      </div>
    </Router>
  );
}

export default App;