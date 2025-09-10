import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector

function Header() {
  // Get the array of items from the cart state
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.length;

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f0f0f0', alignItems: 'center' }}>
      <nav>
        <Link to="/products" style={{ marginRight: '1rem', textDecoration: 'none', color: '#333', fontSize: '1.2rem' }}>
          The Green Shelf
        </Link>
      </nav>
      <div>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontSize: '1.2rem' }}>
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </header>
  );
}

export default Header;