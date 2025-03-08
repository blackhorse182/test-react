import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;