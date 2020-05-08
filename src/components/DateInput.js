import React from 'react';

import getTodayAsISOString from '../utils/getTodayAsISOString';

const DateInput = ({ value, onChange, style }) => {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="date">When?</label>
      <input
        id="orderer"
        name="orderer"
        type="date"
        max={getTodayAsISOString()}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        style={{ fontSize: 'inherit', WebkitAppearance: 'none' }}
      />
    </div>
  );
};

export default DateInput;
