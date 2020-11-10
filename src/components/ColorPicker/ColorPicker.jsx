import React from 'react';
import './ColorPicker.scss';
import ClassNames from 'classnames';

export class ColorPicker extends React.PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { colors, selectedColor, selectColor } = this.props;

    return (
      <div className="color-picker">
        <button
          type="button"
          name="button"
          className="color-picker__button button"
          onClick={this.toggle}
        >
          {selectedColor.name || 'Цвет'}
        </button>
        {this.state.isOpen && (
          <ul className="color-picker__list">
            {colors.map(color => (
              <li
                className={ClassNames('color-picker__list-item', {
                  'color-picker__list-item--selected': selectedColor.value === color.value,
                })}
                key={color.id}
                onClick={() => {
                  selectColor(color);
                  this.toggle();
                }}
              >
                {color.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}