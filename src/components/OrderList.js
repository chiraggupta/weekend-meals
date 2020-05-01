import React, { useEffect, useState } from 'react';
import uuid from 'uuid/v4';

import ordersApi from '../services/ordersApi';
import Order from './Order';
import FloatingAddButton from './FloatingAddButton';

const OrderList = () => {
  const [state, setState] = useState({ orders: [] });

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await ordersApi.getAll();
      if (orders && orders.length > 0) {
        setState({ orders });
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: '0.8em' }}>
        {state.orders.map((order) => (
          <Order key={uuid()} entity={order} />
        ))}
      </ul>
      <FloatingAddButton />
    </div>
  );
};

export default OrderList;
