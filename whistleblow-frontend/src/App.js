import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    if (searchQuery) {
      alert(`You searched for: ${searchQuery}`);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart.`);
  };

  const viewCart = () => {
    if (cart.length > 0) {
      alert(cart.map((item, index) => `${index + 1}. ${item.name} - $${item.price}`).join('\n'));
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <h1>Whistleblow</h1>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="user-options">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <button onClick={viewCart}>Cart</button>
      </nav>
      <main>
        <section>
          <h2>Featured Products</h2>
          <button onClick={() => addToCart({ name: 'Product 1', price: 19.99 })}>
            Add Product 1 to Cart
          </button>
          <button onClick={() => addToCart({ name: 'Product 2', price: 29.99 })}>
            Add Product 2 to Cart
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;

