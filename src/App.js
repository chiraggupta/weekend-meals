import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import OrderList from './components/OrderList';
import OrderInput from './components/OrderInput';

import OrdersReducer, { initialState } from './reducers/OrdersReducer';

export default function App() {
  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<OrderList orders={state.orders} dispatch={dispatch} />}
            />
            <Route
              path="/add"
              element={
                <OrderInput
                  nextOrderer={state.nextOrderer}
                  restaurantsWithDetails={state.restaurantsWithDetails}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
