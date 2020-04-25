import React from 'react';
import { Link } from 'react-router-dom';
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
        <ul style={{ listStyleType: 'none', padding: 0, margin: '0.8em' }}>
          {this.state.orders.map((order) => (
            <Order key={uuid()} entity={order} />
          ))}
        </ul>
        <Link
          to="/add"
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              fontSize: '1.2em',
              fontWeight: 'bold',
            }}
          >
            Add
          </button>
        </Link>
      </div>
    );
  }
}
