import React from 'react';

import AutoComplete from './AutoComplete';
import { getCategories } from '../utils/categories';

const CategoryInput = ({ value, onChange, style }) => {
  return (
    <div style={{ ...style }}>
      <AutoComplete
        label="Category"
        suggestions={getCategories()}
        onChange={onChange}
      />
    </div>
  );
};

export default CategoryInput;
