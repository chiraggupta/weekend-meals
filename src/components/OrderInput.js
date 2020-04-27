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
    orderer: 'Anya',
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
      <label htmlFor="restaurant">Which restaurant?</label>
      <input
        id="restaurant"
        name="restaurant"
        type="text"
        autoComplete="off"
        autoCorrect="off"
        value={state.restaurant}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.4em' }}
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        autoComplete="off"
        value={state.category}
        onChange={handleChange}
        style={{ fontSize: '1.2em', marginBottom: '0.4em' }}
      />

      <label htmlFor="orderer">Who ordered?</label>
      <select
        id="orderer"
        name="orderer"
        value={state.orderer}
        onChange={handleChange}
        style={{ fontSize: '1.1em', marginBottom: '0.4em' }}
      >
        <option value="Anya">Anya</option>
        <option value="Babina">Babina</option>
        <option value="Chirag">Chirag</option>
        <option value="Summer">Summer</option>
      </select>

      <input
        type="submit"
        value="Add"
        style={{
          height: '1.8em',
          width: '20vw',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '1.1em',
          color: '#ffffff',
          backgroundColor: '#9555af',
          border: 0,
          borderRadius: '0.4em',
          WebkitAppearance: 'none',
        }}
      />
    </form>
  );
};
