import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  // Check if the item is already in the cart
  const cartItem = useSelector(state => state.cart.items.find(item => item.id === product.id));

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={cartItem}>
        {cartItem ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;