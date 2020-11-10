import './App.css';
import { ProductList } from './components/ProductList';

import products from './api/products';
import productsImages from './api/productsImages';

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ProductList 
        products={products}
        productsImages={productsImages}
      />
    </div>
  );
}

export default App;
