import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

export const ProductList = ({ products, productsImages }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard {...product} key={product.id} />
    ))}
  </div>
);