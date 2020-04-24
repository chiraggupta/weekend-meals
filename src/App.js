import React from 'react';
import './App.css';
import OrderInput from './components/OrderInput';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span
          className="App-header-text"
          role="img"
          aria-label="Take away options - burger, chinese takeaway box, slice of pizza, ramen, doner kebab in pita and curry with rice"
        >
          🍔🥡🍕🍜🥙🍛
        </span>
      </header>
      <div className="App-order-input">
        <OrderInput />
      </div>
      <OrderList />
    </div>
  );
}

export default App;
