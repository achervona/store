import React from 'react';
import './App.scss';
import { ProductList } from './components/ProductList';

import products from './api/products';

function App() {
  return (
    <div className="app">
      <ProductList 
        products={products}
      />
    </div>
  );
}

export default App;
