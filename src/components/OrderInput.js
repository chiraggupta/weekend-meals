import React from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';
import getTodayAsISOString from '../utils/getTodayAsISOString';

import CategoryInput from './CategoryInput';
import RestaurantInput from './RestaurantInput';
import OrdererSelectInput from './OrdererSelectInput';
import DateInput from './DateInput';
import Button from './Button';

const OrderInput = ({ nextOrderer, restaurantsWithCategories }) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    category: '',
    date: getTodayAsISOString(),
    orderer: nextOrderer,
    restaurant: '',
  });

  const handleChange = (change) => {
    const allUpdates = { ...change };
    if (
      allUpdates.restaurant &&
      restaurantsWithCategories[allUpdates.restaurant]
    ) {
      allUpdates.category = restaurantsWithCategories[allUpdates.restaurant];
    }

    setState({ ...state, ...allUpdates });
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
        restaurants={Object.keys(restaurantsWithCategories).sort()}
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

      <Button>Add Order</Button>
    </form>
  );
};

export default OrderInput;
