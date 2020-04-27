import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import OrderList from './components/OrderList';
import OrderInput from './components/OrderInput';

function App() {
  return (
    <div>
      <Header />
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
