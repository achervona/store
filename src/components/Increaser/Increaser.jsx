import React from 'react';
import './Increaser.scss';

export const Increaser = ({ quantity, increaseQuantity, decreaseQuantity }) => (
  <div className="increaser">
    <button
      type="button"
      name="decrease"
      className="increaser__item increaser__item--left"
      onClick={decreaseQuantity}
    >
      -
    </button>
    <div className="increaser__item">
      {quantity}
    </div>
    <button
      type="button"
      name="increase"
      className="increaser__item increaser__item--right"
      onClick={increaseQuantity}
    >
      +
    </button>
  </div>
);