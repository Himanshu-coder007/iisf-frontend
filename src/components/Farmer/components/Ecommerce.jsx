import React from 'react';
import '../styles/Ecommerce.css';

const Ecommerce = () => {
  return (
    <div className="ecommerce">
      <h2>Millet E-Commerce</h2>
      <p>Browse and purchase millet products from trusted sellers.</p>
      <div className="products">
        <div className="product-card">
          <h3>Millet Product 1</h3>
          <p>Price: $10</p>
          <button>Buy Now</button>
        </div>
        {/* Add more product cards */}
      </div>
    </div>
  );
};

export default Ecommerce;