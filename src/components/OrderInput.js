import React from 'react';

import ordersApi from '../services/ordersApi';

const getTodayAsISOString = () =>
  new Date(Date.now()).toISOString().split('T')[0];

export default () => {
  const [state, setState] = React.useState({
    what: '',
    who: '',
    when: getTodayAsISOString(),
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.what.length === 0 || state.who.length === 0) {
      alert('Empty input');
      return;
    }

    ordersApi.create(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="what">What did you order?</label>
        <br />
        <input
          id="what"
          name="what"
          type="text"
          value={state.what}
          onChange={handleChange}
          style={{ fontSize: '1.2em' }}
        />
        <br />
        <label htmlFor="who">Who decided?</label>
        <br />
        <input
          id="who"
          name="who"
          type="text"
          value={state.who}
          onChange={handleChange}
          style={{ fontSize: '1.2em' }}
        />
        <br />
        <input type="submit" value="Add" style={{ fontSize: '1em' }} />
      </form>
    </div>
  );
};
