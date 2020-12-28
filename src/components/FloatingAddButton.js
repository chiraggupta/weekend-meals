import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const FloatingAddButton = ({ entity }) => (
  <Link
    to="/add"
    style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '0rem 0.8rem 0.8rem',
      backgroundColor: '#fff',
      boxShadow: '0 1rem 2rem 1rem #fff',
    }}
  >
    <Button style={{ width: '100%' }}>Add Order</Button>
  </Link>
);

export default FloatingAddButton;
