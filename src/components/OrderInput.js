import React from 'react';
import { useNavigate } from 'react-router-dom';

import ordersApi from '../services/ordersApi';

const getTodayAsISOString = () =>
  new Date(Date.now()).toISOString().split('T')[0];

export default () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    category: '',
    date: getTodayAsISOString(),
    orderer: '',
    restaurant: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.restaurant.length === 0 || state.orderer.length === 0) {
      alert('Empty input');
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
        fontSize: '1.2em',
        margin: '0.8em',
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="restaurant">Which restaurant?</label>
      <input
        id="restaurant"
        name="restaurant"
        type="text"
        value={state.restaurant}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.4em' }}
        required
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        value={state.category}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.4em' }}
      />

      <label htmlFor="orderer">Excellent choice! Who decided?</label>
      <input
        id="orderer"
        name="orderer"
        type="text"
        value={state.orderer}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.4em' }}
      />

      <input
        type="submit"
        value="Add"
        style={{ fontSize: '1em', fontWeight: 'bold' }}
      />
    </form>
  );
};
