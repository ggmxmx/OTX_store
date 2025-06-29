import react from 'react';

function productScreen(props) {
    const { name, price, image } = props;

    return (
        <div className="product-screen">
            <h1 className="product-name">{name}</h1>
            <img src={image} alt={name} className="product-image" />
            <p className="product-price">${price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}
export default productScreen;