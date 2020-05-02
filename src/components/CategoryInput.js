import React from 'react';

const CategoryInput = ({ value, onChange, style }) => {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        autoComplete="off"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        style={{ fontSize: 'inherit' }}
      />
    </div>
  );
};

export default CategoryInput;
