import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cartSlice';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <div className="shopping-cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
              </div>
              <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Plants: {totalQuantity}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
              <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;