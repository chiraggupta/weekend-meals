import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OrderInput from './components/OrderInput';
import OrderList from './components/OrderList';

import './App.css';

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/add" element={<OrderInput />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
