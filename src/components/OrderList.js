import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import ordersApi from '../services/ordersApi';
import Order from './Order';
import FloatingAddButton from './FloatingAddButton';

const OrderList = ({ orders, dispatch }) => {
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await ordersApi.getAll();
      if (orders && orders.length > 0) {
        dispatch({ type: 'UPDATE', orders });
      }
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: '0.8rem' }}>
        {orders.map((order) => (
          <Order key={uuid()} entity={order} />
        ))}
      </ul>
      <FloatingAddButton />
    </div>
  );
};

export default OrderList;
