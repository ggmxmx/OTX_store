import React from "react";

function CartPage() {
    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
            <p>Start shopping to add items to your cart!</p>
            <img src="https://via.placeholder.com/150?text=Empty+Cart" alt="Empty Cart" />
        </div>
    );
}

export default CartPage;