import React from 'react';

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#790c5a',
        minHeight: '5rem',
        display: 'flex',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <span
        role="img"
        aria-label="Slice of pizza, chinese takeout box and a pita bread with kebab"
      >
        🍕🥡🥙
      </span>
      <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>Takeaways</span>
      <span role="img" aria-label="Burger, bowl of ramen and a taco">
        🍔🍜🌮
      </span>
    </header>
  );
}
