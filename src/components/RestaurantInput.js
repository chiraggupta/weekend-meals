import React from 'react';

import AutoComplete from './AutoComplete';
import { getRatingIcon } from '../utils/ratings';

const RestaurantInput = ({ value, onChange, restaurants, style }) => {
  const renderRestaurantSuggestion = (restaurant) => (
    <>
      {restaurant}
      <span role="img" aria-label="awesome" style={{ marginLeft: '0.2rem' }}>
        {getRatingIcon(restaurants[restaurant].rating)}
      </span>
    </>
  );

  return (
    <div style={{ ...style }}>
      <AutoComplete
        label="Restaurant"
        suggestions={Object.keys(restaurants).sort()}
        onChange={onChange}
        value={value}
        renderSuggestion={renderRestaurantSuggestion}
      />
    </div>
  );
};

export default RestaurantInput;
