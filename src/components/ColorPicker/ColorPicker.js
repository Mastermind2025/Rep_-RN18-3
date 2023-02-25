import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  }
//По верх записываем новый index. Не от предыдущего!
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  }

  makeOptionClassName = (index) => {
  
    // Создали массив и в нём Базовый класс
    const optionClasses = ['ColorPicker__option'];
    // Если индекс равен Добавили класс в массив           
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    // Два класса объеденили в строку 
    return optionClasses.join(' ');
  };

  render() {
// Деструктуризация пропов и стейтов в методе render
    // const { activeOptionIdx } = this.state;
    const { options } = this.props;

// Получаем объект из массива colorPickerOptions в Арр
// const activeOptionLabel = this.props.options[this.state.activeOptionIdx];
// Деструктуризируем объект и получаем свойство label
    
// Было так:
// const { label } = this.props.options[this.state.activeOptionIdx];
// после деструктуризации в строке 28

   const { label } = options[this.state.activeOptionIdx];
    

       console.log(label);

        return (
<div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* <p>Выбран цвет: {label}</p> */}
<div>
              
              <p>Выбран цвет: { label }</p>
              
{/*У мар может быть три аргумента. Здесь, только два. Первый, это элемент массива
(сразу деструктуризируем), второй, это index               */}
              {/* {this.props.options.map(({ label, color }, index) => { */}
              {/* После деструктуризации */}
              {options.map(({ label, color }, index) => {

              const optionClassName = this.makeOptionClassName(index);
                
              return (
                  <button
                    key={label}
                    //   className={this.makeOptionClassName(index)}
                    //   style={{ backgroundColor: color }}
                    

                    className={optionClassName}
                    style={{ backgroundColor: color }}
// Анонимная фунция при своём вызовев вызывает setActiveIdx(index)
                    onClick={() => this.setActiveIdx(index)}
                  >
                  </button>
                );
              })}
        </div>
      </div>

      );
  }
}

export default ColorPicker
