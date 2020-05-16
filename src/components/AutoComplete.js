import React, { useState } from 'react';
import { useCombobox } from 'downshift';

const menuStyle = {
  position: 'absolute',
  left: '0.8rem',
  right: '0.8rem',
  maxHeight: '12rem',
  overflowY: 'auto',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  border: 0,
  boxShadow:
    '0 0.2rem 0.6rem rgba(0,0,0,0.12), 0 0.2rem 0.4rem rgba(0,0,0,0.24)',
  background: 'white',
};

const inputStyle = {
  fontSize: 'inherit',
  boxSizing: 'border-box',
  width: '100%',
};

const defaultSuggestionRenderer = (suggestion) => suggestion;

const AutoComplete = ({
  label,
  suggestions,
  value,
  onChange,
  renderSuggestion = defaultSuggestionRenderer,
}) => {
  const [inputItems, setInputItems] = useState(suggestions);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      onChange(inputValue);
      setInputItems(
        suggestions.filter(
          (item) => item.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1,
        ),
      );
    },
  });
  return (
    <div>
      <label {...getLabelProps()}>{label}</label>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            value,
            autoComplete: 'off',
            autoCorrect: 'off',
            style: inputStyle,
          })}
        />
      </div>
      <ul {...getMenuProps()} style={menuStyle}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={{
                fontSize: 'inherit',
                padding: '0.4rem',
                backgroundColor:
                  highlightedIndex === index ? '#ffcdf9' : 'white',
              }}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {renderSuggestion(item)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
