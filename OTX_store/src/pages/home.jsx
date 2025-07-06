import React, { useState } from 'react';
import ItemContainer from '../itemContainer.jsx';
import '../App.css'; // Assuming App.css contains general styles or grid for home

const Home = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="products-grid">
        {filteredItems.map((item) => (
          <ItemContainer
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;