import React from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';
import getTodayAsISOString from '../utils/getTodayAsISOString';

import CategoryInput from './CategoryInput';
import RestaurantInput from './RestaurantInput';
import OrdererSelectInput from './OrdererSelectInput';
import DateInput from './DateInput';

const OrderInput = ({ nextOrderer, restaurants }) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    category: '',
    date: getTodayAsISOString(),
    orderer: nextOrderer,
    restaurant: '',
  });

  const handleChange = (change) => {
    setState({ ...state, ...change });
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
        margin: '0.8rem',
      }}
      onSubmit={handleSubmit}
    >
      <RestaurantInput
        value={state.restaurant}
        onChange={(value) => handleChange({ restaurant: value })}
        restaurants={restaurants}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <CategoryInput
        value={state.category}
        onChange={(value) => handleChange({ category: value })}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <OrdererSelectInput
        value={state.orderer}
        onChange={(value) => handleChange({ orderer: value })}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <DateInput
        value={state.date}
        onChange={(value) => handleChange({ date: value })}
        style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}
      />

      <input
        type="submit"
        value="Add Order"
        style={{
          height: '2rem',
          width: '40vw',
          fontSize: '1.2rem',
          color: '#ffffff',
          backgroundColor: '#9555af',
          border: 0,
          borderRadius: '1rem',
          WebkitAppearance: 'none',
        }}
      />
    </form>
  );
};

export default OrderInput;
