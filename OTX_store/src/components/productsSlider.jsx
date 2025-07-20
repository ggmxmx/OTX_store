import React from "react";
import { Link } from "react-router-dom";
const ProductSlider = (props) =>{

    let {name, image} = props;

    return (
        <>
        
            <Link to={`../product/${props.id}`} className="item-link">
                <div className="item-container">
                    <img src={image} alt={name} className="item-image" />
                </div>
            </Link>
        </>
    );

}
export default ProductSlider