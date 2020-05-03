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
      padding: '0.4em',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontSize: '1.2em',
        paddingBottom: '0.8em',
      }}
    >
      <div>{entity.restaurant}</div>
      <div>{getCategoryIcon(entity.category)} </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: '#7C7A7A',
        fontSize: '1em',
      }}
    >
      <div>{entity.orderer}</div>
      <div>{new Date(entity.date).toDateString()}</div>
    </div>
  </li>
);

export default Order;
