import React from 'react';

export default ({ style, children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.4em',
      borderRadius: '0.2rem',
      backgroundColor: '#ffb2a7',
      fontSize: '1rem',
      ...style,
    }}
  >
    <span role="img" aria-label="Error">
      ℹ️
    </span>
    {children}
  </div>
);
