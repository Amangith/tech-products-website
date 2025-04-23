import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';

const ProductList = () => {
    // In ProductList.js
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="product-grid">
            {products.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}


export default ProductList;