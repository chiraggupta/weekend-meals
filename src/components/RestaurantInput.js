import React from 'react';

import AutoComplete from './AutoComplete';
import { getRatingIcon } from '../utils/ratings';

export default function RestaurantInput({
  value,
  onChange,
  restaurants,
  style,
}) {
  function renderRestaurantSuggestion(restaurant) {
    return (
      <>
        {restaurant}
        <span role="img" aria-label="awesome" style={{ marginLeft: '0.2rem' }}>
          {getRatingIcon(restaurants[restaurant].rating)}
        </span>
      </>
    );
  }

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
}
