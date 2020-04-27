import React from 'react';

export default () => (
  <header
    style={{
      backgroundColor: '#282c34',
      minHeight: '10vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    }}
  >
    <span
      style={{ fontSize: '1.6em' }}
      role="img"
      aria-label="Take away options - burger, chinese takeaway box, slice of pizza, ramen, doner kebab in pita and curry with rice"
    >
      🍔🥡🍕🍜🥙🍛
    </span>
  </header>
);
