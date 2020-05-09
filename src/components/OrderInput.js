import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';
import getTodayAsISOString from '../utils/getTodayAsISOString';

import CategoryInput from './CategoryInput';
import RestaurantInput from './RestaurantInput';
import OrdererSelectInput from './OrdererSelectInput';
import DateInput from './DateInput';
import Button from './Button';
import Message from './Message';

const OrderInput = ({ nextOrderer, restaurantsWithCategories }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    orderDetails: {
      category: '',
      date: getTodayAsISOString(),
      orderer: nextOrderer,
      restaurant: '',
    },
    showError: false,
  });

  const isValidOrder = (order) => {
    return Object.values(order).every((value) => value.trim().length > 0);
  };

  const handleChange = (change) => {
    const updates = { ...change };
    if (updates.restaurant && restaurantsWithCategories[updates.restaurant]) {
      updates.category = restaurantsWithCategories[updates.restaurant];
    }

    const { orderDetails, showError } = state;

    const updatedOrderDetails = { ...orderDetails, ...updates };
    setState({
      orderDetails: updatedOrderDetails,
      showError: isValidOrder(updatedOrderDetails) ? false : showError,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { orderDetails } = state;

    if (!isValidOrder(orderDetails)) {
      setState({ orderDetails, showError: true });
      return;
    }

    await ordersApi.create(orderDetails);
    navigate('/');
  };

  const { showError, orderDetails } = state;

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0.8rem',
      }}
      onSubmit={handleSubmit}
    >
      {showError && <Message>Please input all fields</Message>}

      <RestaurantInput
        value={orderDetails.restaurant}
        onChange={(value) => handleChange({ restaurant: value })}
        restaurants={Object.keys(restaurantsWithCategories).sort()}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <CategoryInput
        value={orderDetails.category}
        onChange={(value) => handleChange({ category: value })}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <OrdererSelectInput
        value={orderDetails.orderer}
        onChange={(value) => handleChange({ orderer: value })}
        style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}
      />

      <DateInput
        value={orderDetails.date}
        onChange={(value) => handleChange({ date: value })}
        style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}
      />

      <Button>Add Order</Button>
    </form>
  );
};

export default OrderInput;
