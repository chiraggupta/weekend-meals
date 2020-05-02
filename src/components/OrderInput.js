import React from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';

import CategoryInput from './CategoryInput';
import RestaurantInput from './RestaurantInput';
import OrdererSelectInput from './OrdererSelectInput';

const getTodayAsISOString = () =>
  new Date(Date.now()).toISOString().split('T')[0];

const OrderInput = ({ nextOrderer }) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    category: '',
    date: getTodayAsISOString(),
    orderer: nextOrderer,
    restaurant: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      state.restaurant.length === 0 ||
      state.category.length === 0 ||
      state.orderer.length === 0
    ) {
      alert('Please input all fields');
      return;
    }

    await ordersApi.create(state);
    navigate('/');
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0.8em',
      }}
      onSubmit={handleSubmit}
    >
      <RestaurantInput
        value={state.restaurant}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.8em' }}
      />

      <CategoryInput
        value={state.category}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.8em' }}
      />

      <OrdererSelectInput
        value={state.orderer}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '1.2em' }}
      />

      <input
        type="submit"
        value="Add Order"
        style={{
          height: '2em',
          width: '40vw',
          fontSize: '1.2em',
          color: '#ffffff',
          backgroundColor: '#9555af',
          border: 0,
          borderRadius: '1em',
          WebkitAppearance: 'none',
        }}
      />
    </form>
  );
};

export default OrderInput;
