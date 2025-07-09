import React from 'react';
import ItemContainer from '../itemContainer.jsx';
import '../App.css';
import Banner from '../Images/banner.jpg';

const Home = ({ items, searchTerm }) => {
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
  
        <img src={Banner} alt="Banner" className='banner-image'/>

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