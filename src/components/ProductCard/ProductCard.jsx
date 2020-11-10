import React from 'react';
import './ProductCard.scss';
import img from '../../api/images/image1.jpg';

export class ProductCard extends React.PureComponent {
  state = {
    quantity: 1,
    volume: this.props.volumes[0],
    color: '',
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

  selectColor = ({ target }) => {
    this.setState({
      color: target.value,
    });
  };

  render() {
    const { id, title, description, price, volumes, colors } = this.props;
    const { quantity, volume } = this.state;
    //delete not forget
    console.log(this.state);

    return (
      <div className="product-card product-list__card">
        <div className="product-card__top">
          <div className="product-card__new-mark">new</div>
          <div className="product-card__img-block">
            <img 
              src={img}
              alt="Product"
              className="product-card__img"
            />
          </div>
          <div className="product-card__icon"></div>
        </div>
        
        <div className="product-card__title">{title}</div>
        <p className="product-card__description">{description}</p>
        
        <div className="product-card__select-block">
          <div className="product-card__select-wrapper">
            <select 
              className="product-card__select"
              onChange={this.selectColor}
            >
              <option value="">Цвет</option>
              {colors.map(color => (
                <option 
                  value={color.value}
                  key={color.id}
                >
                  {color.name}
                </option>
              ))}
            </select>
          </div>
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
              <label htmlFor={`${id}${value}`} className="product-card__radio-label">
                <span><div></div></span>
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
            className="product-card__button"
          >
            Купить
          </button>
        </div>
      </div>
    );
  }
 
}