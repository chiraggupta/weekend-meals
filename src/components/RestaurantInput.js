import React from 'react';

import AutoComplete from './AutoComplete';

const RestaurantInput = ({ value, onChange, restaurants, style }) => {
  return (
    <div style={{ ...style }}>
      <AutoComplete
        label="Restaurant"
        suggestions={restaurants}
        onChange={onChange}
      />
    </div>
  );
};

export default RestaurantInput;
