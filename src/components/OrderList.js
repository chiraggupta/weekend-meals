import React from 'react';
import uuid from 'uuid/v4';

import ordersApi from '../services/ordersApi';
import Order from './Order';

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
        <ul style={{ listStyleType: 'none', padding: 0, margin: '1em' }}>
          {this.state.orders.map((order) => (
            <Order key={uuid()} entity={order} />
          ))}
        </ul>
      </div>
    );
  }
}
