import React from 'react';
import uuid from 'uuid/v4';

import ordersApi from '../services/ordersApi';
import Order from './Order';
import FloatingAddButton from './FloatingAddButton';

export default class OrderList extends React.Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = async () => {
    const orders = await ordersApi.getAll();
    if (orders && orders.length > 0) {
      this.setState({ orders });
    }
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: 'none', padding: 0, margin: '0.8em' }}>
          {this.state.orders.map((order) => (
            <Order key={uuid()} entity={order} />
          ))}
        </ul>
        <FloatingAddButton />
      </div>
    );
  }
}
