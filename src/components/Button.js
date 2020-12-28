import React from 'react';

const Button = ({ children }) => (
  <button
    style={{
      padding: '0.8rem 1.8rem',
      width: '100%',
      border: 'none',
      borderRadius: '0.2rem',
      textDecoration: 'none',
      fontFamily: 'inherit',
      fontSize: '1.2rem',
      color: '#fff',
      backgroundColor: '#be4b77',
      boxShadow:
        'inset 0 -0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.3), inset 0 0.5rem 2rem -0.5rem rgba(255, 255, 255, 0.2), inset 0 0 0rem 0.1rem rgba(255, 255, 255, 0.1)',
    }}
  >
    {children}
  </button>
);

export default Button;
