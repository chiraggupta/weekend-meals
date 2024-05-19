import React from 'react';

export default function OrdererSelectInput({ value, onChange, style }) {
  return (
    <div style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="orderer">Who ordered?</label>
      <select
        id="orderer"
        name="orderer"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        style={{ fontSize: 'inherit' }}
      >
        <option value="Anya">Anya</option>
        <option value="Babina">Babina</option>
        <option value="Yoshi">Yoshi</option>
        <option value="Chirag">Chirag</option>
        <option value="Takeaway Explorer 🎲">Takeaway Explorer 🎲</option>
        <option value="Celebration 🥳">Celebration 🥳</option>
      </select>
    </div>
  );
}
