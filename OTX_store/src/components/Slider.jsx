import React from "react";
import ProductSlider from "./productsSlider";

import "./Slider.css"

function Slider({ items, searchTerm }){

      const filteredItems = Array.isArray(items) ? items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

    return(
        <div className="container">
         
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ProductSlider
              key={item.id}
              id={item.id}
              image={item.image}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
        </div>
    )
}
export default Slider