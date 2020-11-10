import React from 'react';
import './ProductCard.scss';
import ClassNames from 'classnames';

import { ColorPicker } from '../ColorPicker';
import { Slider } from '../Slider';
import { RadioBlock } from '../RadioBlock';
import { Increaser } from '../Increaser';

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

          <Slider images={images} />

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

        <RadioBlock
          items={volumes}
          selectedValue={volume}
          selectValue={this.selectVolume}
          productId={id}
        />

        <div className="product-card__buttons">
          <Increaser
            quantity={quantity}
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
          />

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