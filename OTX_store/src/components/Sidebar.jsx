import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <ul className="sidebar-nav">
        <li>
          <Link to="/">
            <FaHome />
            <span onClick={isSidebarOpen = true}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle />
            <span onClick={isSidebarOpen = true}>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope />
            <span onClick={isSidebarOpen = true}>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;