import React from 'react';

import ordersApi from '../services/ordersApi';

const getTodayAsISOString = () =>
  new Date(Date.now()).toISOString().split('T')[0];

export default () => {
  const [state, setState] = React.useState({
    category: '',
    date: getTodayAsISOString(),
    orderer: '',
    restaurant: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.restaurant.length === 0 || state.orderer.length === 0) {
      alert('Empty input');
      return;
    }

    ordersApi.create(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="restaurant">Restaurant</label>
        <br />
        <input
          id="restaurant"
          name="restaurant"
          type="text"
          value={state.restaurant}
          onChange={handleChange}
          style={{ fontSize: '1.2em' }}
        />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input
          id="category"
          name="category"
          type="text"
          value={state.category}
          onChange={handleChange}
          style={{ fontSize: '1.2em' }}
        />
        <br />
        <label htmlFor="orderer">Who ordered?</label>
        <br />
        <input
          id="orderer"
          name="orderer"
          type="text"
          value={state.orderer}
          onChange={handleChange}
          style={{ fontSize: '1.2em' }}
        />
        <br />
        <input type="submit" value="Add" style={{ fontSize: '1em' }} />
      </form>
    </div>
  );
};
