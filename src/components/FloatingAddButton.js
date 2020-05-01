import React from 'react';
import { Link } from 'react-router-dom';

export default ({ entity }) => (
  <Link
    to="/add"
    style={{
      position: 'fixed',
      bottom: '1em',
      left: '30vw',
      width: '40vw',
      padding: '0.4em 0em',
      fontSize: '1.2em',
      color: '#ffffff',
      backgroundColor: '#9555af',
      border: 0,
      borderRadius: '1em',
      textAlign: 'center',
      textDecoration: 'none',
      WebkitAppearance: 'none',
    }}
  >
    <span>Add Order</span>
  </Link>
);
