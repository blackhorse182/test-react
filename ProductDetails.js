import React from 'react';

function ProductDetails({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="modal">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ProductDetails;