import React from 'react';

const optionStyle = { marginTop: '0.6rem' };
const radioButtonStyle = {
  transform: 'scale(1.5)',
  marginRight: '0.6rem',
};

const RatingInput = ({ value, onChange, style }) => {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
        <legend>How was the food?</legend>
        <div style={optionStyle}>
          <input
            type="radio"
            name="rating"
            id="rating_awesome"
            value="rating_awesome"
            checked={value === 'rating_awesome'}
            onChange={({ target: { value } }) => onChange(value)}
            style={radioButtonStyle}
          />
          <label htmlFor="rating_awesome">Delicious!</label>
        </div>
        <div style={optionStyle}>
          <input
            type="radio"
            name="rating"
            id="rating_average"
            value="rating_average"
            checked={value === 'rating_average'}
            onChange={({ target: { value } }) => onChange(value)}
            style={radioButtonStyle}
          />
          <label htmlFor="rating_average">
            Not bad, will try other dishes.
          </label>
        </div>
        <div style={optionStyle}>
          <input
            type="radio"
            name="rating"
            id="rating_terrible"
            value="rating_terrible"
            checked={value === 'rating_terrible'}
            onChange={({ target: { value } }) => onChange(value)}
            style={radioButtonStyle}
          />
          <label htmlFor="rating_terrible">It was terrible, never again!</label>
        </div>
      </fieldset>
    </div>
  );
};

export default RatingInput;
