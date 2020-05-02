import React from 'react';

const RestaurantInput = ({ value, onChange, style }) => {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="restaurant">Which restaurant?</label>
      <input
        id="restaurant"
        name="restaurant"
        type="text"
        autoComplete="off"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        style={{ fontSize: 'inherit' }}
      />
    </div>
  );
};

export default RestaurantInput;
