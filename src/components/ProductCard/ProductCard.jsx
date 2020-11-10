import React from 'react';
import './ProductCard.scss';
import ClassNames from 'classnames';

import { ColorPicker } from '../ColorPicker';

const IMG_URL = '/images/';

export class ProductCard extends React.PureComponent {
  state = {
    quantity: 1,
    volume: this.props.volumes[0],
    color: '',
    isButtonPressed: false,
    isIconClicked: false,
  };

  increaseQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decreaseQuantity = () => {
    if (this.state.quantity <= 1) {
      return;
    }

    this.setState(prevState => ({
      quantity: prevState.quantity - 1,
    }));
  };

  selectVolume = (value) => {
    this.setState({
      volume: value,
    });
  };

  selectColor = (color) => {
    this.setState({
      color,
    });
  };

  render() {
    const { 
      id, 
      title, 
      description, 
      images, 
      price, 
      volumes, 
      colors 
    } = this.props;
    const { quantity, volume, color } = this.state;

    return (
      <div className="product-card product-list__card">
        <div className="product-card__top">
          <div className="product-card__new-mark">new</div>
          <div className="product-card__img-block">
            {images.map((img, index) => (
              <img 
                src={`${IMG_URL}${img}`}
                alt="Product"
                className={ClassNames('product-card__img', {
                  'product-card__img--secondary': index > 0,
                })}
                key={img}
              />
            ))}
          </div>

          <div 
            className={ClassNames('product-card__icon', {
              'product-card__icon--clicked': this.state.isIconClicked
            })}
            onClick={() => this.setState(prevState => ({
              isIconClicked: !prevState.isIconClicked
            }))}
          >
          </div>
        </div>
        <div className="product-card__title">{title}</div>
        <p className="product-card__description">{description}</p>
        
        <div className="product-card__select-block">
          <ColorPicker
            selectedColor={color}
            colors={colors}
            selectColor={this.selectColor}
          />

          <p className="product-card__price">{`${price} грн`}</p>
        </div>
      
        <div className="product-card__radio-block">
          {volumes.map(value => (
            <div className="product-card__radio-item" key={value}>
              <input 
                id={`${id}${value}`} 
                type="radio"
                name={`radio${id}`} 
                value={value}
                className="product-card__radio"
                onChange={() => this.selectVolume(value)}
                checked={volume === value}
              />
              <label 
                htmlFor={`${id}${value}`} 
                className="product-card__radio-label"
              >
                <div><div></div></div>
                {`${value} мл`}
              </label>
            </div>
          ))}
        </div> 

        <div className="product-card__buttons">
          <div className="product-card__quantity-change">
            <button
              type="button"
              name="decrease"
              className="product-card__quantity-change-item product-card__quantity-change-item--left"
              onClick={this.decreaseQuantity}
            >
              -
            </button>
            <div className="product-card__quantity-change-item">
              {quantity}
            </div>
            <button
              type="button"
              name="increase"
              className="product-card__quantity-change-item product-card__quantity-change-item--right"
              onClick={this.increaseQuantity}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className={ClassNames('product-card__button',
              { 'product-card__button--pressed': this.state.isButtonPressed }
            )}
            onClick={() => this.setState(prevState => ({
              isButtonPressed: !prevState.isButtonPressed
            }))}
          >
            Купить
          </button>
        </div>
      </div>
    );
  }
}