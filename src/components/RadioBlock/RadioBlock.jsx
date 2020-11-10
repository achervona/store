import React from 'react';
import './RadioBlock.scss';

export const RadioBlock = ({ items, productId, selectedValue, selectValue }) => (
  <div className="radio-block">
    {items.map(value => (
      <div 
        className="radio-block__item" 
        key={value}
      >
        <input 
          id={`${productId}${value}`} 
          type="radio"
          name={`radio${productId}`} 
          value={value}
          className="radio-block__input" 
          onChange={() => selectValue(value)}
          checked={selectedValue === value}
        />
        <label 
          htmlFor={`${productId}${value}`} 
          className="radio-block__label"
        >
          <div><div></div></div>
          {`${value} мл`}
        </label>
      </div>
    ))}
  </div> 
);