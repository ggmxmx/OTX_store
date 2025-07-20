import React from "react";
import './itemCon.css';
import { Link } from "react-router-dom";
import productScreen from "./pages/productView.jsx";
// A simple container for displaying a product with a link to its page.
const ItemContainer = (props) => {

    let {name, price, image} = props;

    return (
        <>
        
            <Link to={`/product/${props.id}`} className="item-link">
                <div className="item-container">
                    <img src={image} alt={name} className="item-image" />
                    <h2 className="item-name">{name}</h2>
                    <p className="item-price">O.R {price}</p>
                </div>
            </Link>
        </>
    );

}

export default ItemContainer;