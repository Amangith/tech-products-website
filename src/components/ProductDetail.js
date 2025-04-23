// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  return (
    <div className="product-detail">
      {/* Detailed product view */}
    </div>
  );
};