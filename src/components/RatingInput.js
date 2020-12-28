import React from 'react';

import { Ratings, getRatingInputLabel } from '../utils/ratings';

const optionStyle = { marginTop: '0.6rem' };
const radioButtonStyle = {
  transform: 'scale(1.5)',
  marginRight: '0.6rem',
};

function RatingOption({ ratingType, value, onChange }) {
  return (
    <div style={optionStyle}>
      <input
        type="radio"
        name="rating"
        id={ratingType}
        value={ratingType}
        checked={value === ratingType}
        onChange={({ target: { value } }) => onChange(value)}
        style={radioButtonStyle}
      />
      <label htmlFor={ratingType}>{getRatingInputLabel(ratingType)}</label>
    </div>
  );
}

export default function RatingInput({ value, onChange, style }) {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
        <legend>How was the food?</legend>
        {[Ratings.AWESOME, Ratings.AVERAGE, Ratings.TERRIBLE].map(
          (ratingType) => (
            <RatingOption
              key={ratingType}
              ratingType={ratingType}
              value={value}
              onChange={onChange}
            />
          ),
        )}
      </fieldset>
    </div>
  );
}
