import React from 'react';
import { Link } from 'react-router-dom';

export default ({ entity }) => (
  <Link
    to="/add"
    style={{
      position: 'fixed',
      bottom: '1.2rem',
      left: '30vw',
      width: '40vw',
      paddingTop: '0.2em',
      height: '1.8rem',
      fontSize: '1.2rem',
      color: '#ffffff',
      backgroundColor: '#9555af',
      border: 0,
      borderRadius: '1rem',
      textAlign: 'center',
      textDecoration: 'none',
      WebkitAppearance: 'none',
    }}
  >
    <span>Add Order</span>
  </Link>
);
