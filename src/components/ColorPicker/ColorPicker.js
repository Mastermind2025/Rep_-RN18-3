import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    render() {
        return (
<div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* <p>Выбран цвет: {label}</p> */}
        <div>
          {this.props.options.map(({ label, color }) => (
            <span
              key={label}
            //   className={this.makeOptionClassName(index)}
            //   style={{ backgroundColor: color }}
            //   onClick={() => this.setActiveIdx(index)}
                  className="ColorPicker__option"
                  style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>

      );
  }
}

export default ColorPicker
