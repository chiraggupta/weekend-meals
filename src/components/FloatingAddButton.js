import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

export default function FloatingAddButton({ entity }) {
  return (
    <Link
      to="/add"
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        padding: '0rem 0.8rem 0.8rem',
        backgroundColor: '#fff',
        boxShadow: '0 1rem 2rem 1rem #fff',
        textDecoration: 'none',
      }}
    >
      <Button style={{ margin: '0 auto' }}>Add Order</Button>
    </Link>
  );
}
