import React from "react";
import './itemCon.css';
import { Link } from "react-router-dom";
import productScreen from "./pages/productView.jsx";
const itemContainer = (props) =>{

    let {name, price, image} = props;

    return (
        <>
            <Link to={'/product'} className="item-link">
                <div className="item-container">
                    <img src={image} alt={name} className="item-image" />
                    <h2 className="item-name">{name}</h2>
                    <p className="item-price">${price}</p>
                </div>
            </Link>
        </>
    );

}

export default itemContainer;