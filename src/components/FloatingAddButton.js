import React from 'react';
import { Link } from 'react-router-dom';

export default ({ entity }) => (
  <Link
    to="/add"
    style={{
      position: 'fixed',
      bottom: '1em',
      left: '30vw',
      height: '1.6em',
      width: '40vw',
      textAlign: 'center',
      textDecoration: 'none',
      paddingTop: '0.4em',
      fontSize: '1.1em',
      color: '#ffffff',
      backgroundColor: '#9555af',
      borderRadius: '0.4em',
    }}
  >
    <span>Add Order</span>
  </Link>
);
