import React from 'react';
import { useParams } from 'react-router-dom';
import items from '../items';
import Features from '../features';
import Specification from '../specification'; // Assuming you have a Specification component
import ImagesSlider from '../imagesSlider'; // Assuming you have an imagesSlider component
import '../App.css'; // Assuming App.css contains styles for product view
import Slider from '../components/Slider';

function ProductView() {
    const { id } = useParams();
    const product = items.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, price, image, features, specification ,showImages} = product;

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart) {
            alert('This product is already in your cart');
        } else {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart');
        }
    };

    return (
        <div className="product-screen">
            <div className='images-container'>
            <ImagesSlider showImages={showImages} />
            </div>
            <h1 className="product-name">{name}</h1>
            <p className="product-price">O.R {price}</p>
            <button className="add-to-cart-button" onClick={addToCart}>Add to cart</button>
            <div className="features-container">
                <h2>Features:</h2>
                <Features features={features} />
            </div>
            <div className="specification-container">
                <h2>Specifications:</h2>
                <Specification specification={specification} />
             </div>
             <div className="slider-section">
                <h2>You might also like:</h2>
                <Slider items={items} searchTerm={""} />
             </div>


        </div>
    );
}
export default ProductView;