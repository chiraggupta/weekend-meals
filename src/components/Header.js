import React from 'react';

const Header = () => (
  <header
    style={{
      backgroundColor: '#790c5a',
      minHeight: '5rem',
      display: 'flex',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      color: 'white',
    }}
  >
    <span
      role="img"
      aria-label="Slice of pizza, chinese takeout box and a pita bread with kebab"
    >
      🍕🥡🥙
    </span>
    Takeaways
    <span role="img" aria-label="Burger, bowl of ramen and a taco">
      🍔🍜🌮
    </span>
  </header>
);

export default Header;
