import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p className="price">Rs {product.price}</p>
    <p>{product.description}</p>
    <div className="specs">
      {Object.entries(product.specs).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
    
  </div>
);

export default ProductCard;