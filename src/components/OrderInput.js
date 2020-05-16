import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';
import getTodayAsISOString from '../utils/getTodayAsISOString';

import CategoryInput from './CategoryInput';
import RestaurantInput from './RestaurantInput';
import OrdererSelectInput from './OrdererSelectInput';
import DateInput from './DateInput';
import RatingInput from './RatingInput';
import Button from './Button';
import Message from './Message';

const inputStyle = { fontSize: '1.2rem', marginBottom: '1.2rem' };

const OrderInput = ({ nextOrderer, restaurantsWithDetails }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    orderDetails: {
      category: '',
      date: getTodayAsISOString(),
      orderer: nextOrderer,
      rating: '',
      restaurant: '',
    },
    showError: false,
  });

  const isValidOrder = (order) => {
    return Object.values(order).every((value) => value.trim().length > 0);
  };

  const handleChange = (change) => {
    console.log(change);

    const updates = { ...change };
    const selectedRestaurantCategory =
      restaurantsWithDetails[updates.restaurant] &&
      restaurantsWithDetails[updates.restaurant].category;
    if (selectedRestaurantCategory) {
      updates.category = selectedRestaurantCategory;
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
      {showError && <Message>Please fill in all fields</Message>}

      <RestaurantInput
        value={orderDetails.restaurant}
        onChange={(value) => handleChange({ restaurant: value })}
        restaurants={restaurantsWithDetails}
        style={inputStyle}
      />

      <CategoryInput
        value={orderDetails.category}
        onChange={(value) => handleChange({ category: value })}
        style={inputStyle}
      />

      <OrdererSelectInput
        value={orderDetails.orderer}
        onChange={(value) => handleChange({ orderer: value })}
        style={inputStyle}
      />

      <DateInput
        value={orderDetails.date}
        onChange={(value) => handleChange({ date: value })}
        style={inputStyle}
      />

      <RatingInput
        value={orderDetails.rating}
        onChange={(value) => handleChange({ rating: value })}
        style={inputStyle}
      />

      <Button>Add Order</Button>
    </form>
  );
};

export default OrderInput;
