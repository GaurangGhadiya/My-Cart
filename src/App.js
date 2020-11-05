import './App.css';
import Form from './components/Form';
import CartList from './components/CartList';
import React, { useState, useEffect } from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    getLocalCart();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalCart();
  }, [cart, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredCart(cart.filter(cat => cat.completed === true));
        break;
      case 'uncompleted':
        setFilteredCart(cart.filter(cat => cat.completed === false));
        break;
      default:
        setFilteredCart(cart);
        break;
    }
  };

  const saveLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const getLocalCart = () => {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem('cart'));
      setCart(cartLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Cart</h1>
      </header>
      <Form cart={cart} setCart={setCart} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <CartList cart={cart} setCart={setCart} filteredCart={filteredCart}/>
    </div>
  );
}

export default App;
