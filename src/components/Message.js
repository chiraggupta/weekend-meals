import React from 'react';

const Message = ({ style, children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.4em',
      borderRadius: '0.2rem',
      backgroundColor: '#ffcdf9',
      fontSize: '1rem',
      ...style,
    }}
  >
    <span role="img" aria-label="Error">
      ⛔️
    </span>
    {children}
  </div>
);

export default Message;
