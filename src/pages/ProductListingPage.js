import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css';

function ProductListingPage() {
  // Group products by category
  const productsByCategory = PRODUCTS.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-listing-page">
      <h1>Our Plants</h1>
      {Object.keys(productsByCategory).map(category => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {productsByCategory[category].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductListingPage;