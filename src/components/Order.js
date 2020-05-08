import React from 'react';

import { getCategoryIcon } from '../utils/categories';

const Order = ({ entity }) => (
  <li
    style={{
      textAlign: 'left',
      listStylePosition: 'inside',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: '#dbdbdb',
      padding: '0.4rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontSize: '1.2rem',
        paddingBottom: '0.8rem',
      }}
    >
      <div>{entity.restaurant}</div>
      <div role="img" aria-label={entity.category}>
        {getCategoryIcon(entity.category)}
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: '#727472',
        fontSize: '1rem',
      }}
    >
      <div>{entity.orderer}</div>
      <div>{new Date(entity.date).toDateString()}</div>
    </div>
  </li>
);

export default Order;
