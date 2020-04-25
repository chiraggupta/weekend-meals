import React from 'react';

export default ({ entity }) => (
  <li
    style={{
      textAlign: 'left',
      listStylePosition: 'inside',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: '#dbdbdb',
      padding: '0.5em',
    }}
  >
    <div style={{ fontSize: '1.2em', marginBottom: '0.4em' }}>
      {entity.restaurant} - {entity.orderer}
    </div>
    <div
      style={{
        color: '#7C7A7A',
        fontSize: '0.8em',
      }}
    >
      {new Date(entity.date).toDateString()}
    </div>
  </li>
);
