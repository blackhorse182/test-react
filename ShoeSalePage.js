import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import './components/ShoeSalesPage.css';

function ShoeSalesPage() {
  const [products] = useState([
    { id: 1, name: 'Sneaker 1', price: 50, category: 'sneakers', imageUrl: 'shoe1.jpg' },
    { id: 2, name: 'Boot 1', price: 80, category: 'boots', imageUrl: 'shoe2.jpg' },
  ]);
  const [filters, setFilters] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    filters.category ? product.category === filters.category : true
  );

  return (
    <CartProvider>
      <Header />
      <Banner />
      <div className="main-content">
        <Filters setFilters={setFilters} />
        <ProductList products={filteredProducts} />
      </div>
      <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <Cart />
    </CartProvider>
  );
}

export default ShoeSalesPage;