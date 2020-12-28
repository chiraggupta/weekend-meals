import React from 'react';

import { getCategoryIcon } from '../utils/categories';
import { getRatingIcon, getRatingLabel } from '../utils/ratings';

export default function Order({ entity }) {
  return (
    <li
      style={{
        textAlign: 'left',
        listStylePosition: 'inside',
        borderBottomWidth: '0.01rem',
        borderBottomStyle: 'solid',
        borderBottomColor: '#ffcdf9',
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
        <div>
          <span role="img" aria-label={entity.category}>
            {getCategoryIcon(entity.category)}
          </span>
          <span role="img" aria-label={getRatingLabel(entity.rating)}>
            {getRatingIcon(entity.rating)}
          </span>
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
}
