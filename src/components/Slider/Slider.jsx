import React from 'react';
import './Slider.scss';
import ClassNames from 'classnames';

export const Slider = ({ images }) => (
  <div className="slider__img-block">
    {images.map((img, index) => (
      <img 
        src={img}
        alt="Product"
        className={ClassNames('slider__img', {
          'slider__img--secondary': index > 0,
        })}
        key={img}
      />
    ))}
  </div>
);