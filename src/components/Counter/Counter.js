import React from 'react';

import './Counter.css';

import Controls from './Controls';
import Value from './Value';
// import Dropdown from 'components/Dropdown/Dropdown';

//event - это кросс браузерная обёртка SyntheticEvent Object.
//Доступно только в синхронном коде!
//из event можем получить .type .target и много другого

//класс реализует метод render
class Counter extends React.Component {
    //Всё это
    //   constructor() {
    //     super();

    //     this.state = {
    //       value: 5,  
    //     };
    // }
    // Бабел транспелирует в это
    
    //так можно объявить props начальное значение по умолчанию
    // static defaultProps = {
    //     initialValue: 0,
    // }
    
    // initialvalue это prop - начальное значение приходит из App.jsx
    state = {
      value: this.props.initialValue,  
    };

    //Так правильно!
    //в обработчик событий добавляем
    //публичное свойство класса и в нём стрелочная функция
    //  handleIncreament=(event)=> {
    //     console.log('Click');
    //     console.log(this.type);
    // }

    //prevState это актуальное состояние на момент обновления
    handleIncreament = () => {
        
        this.setState(prevState => ({
            value: prevState.value + 1,
        }
    ))        
    }
    
        handleDecreament = () => {
        
        this.setState(prevState => ({
            value: prevState.value - 1,
        }
    ))        
 }
    
    //  handleDecreament=(event)=> {
    //     console.log('Click');
    //     console.log(this);
    // }

    //  handleDecreament=(prevState)=> {
    //     console.log(prevState);
    // }

    render() {
        return (
           
            <div className="Counter">
{/* Это вынесли как отдельный компонетн в Value.js */}
{/* <span className="Counter__value">{this.state.value}</span> */}
                
{/* Подъём состояния. От родителя в низ к детям кидаются props 
Здесь this.state.value и 
onIncreament={this.handleIncreament}
onDecreament={this.handleDecreament}
*/}
                <Value
                    value={this.state.value}
                />

{/* Это вынесли как отдельный компонетн в Controls.js */}
{/* <div className="Counter__controls">
    <button type="button" onClick={this.handleIncreament}>Увеличить на 1</button>
    <button type="button" onClick={this.handleDecreament}>Уменьшить на 1</button>
</div> */}

{/*Передаём два props  */}
                <Controls
                    onIncreament={this.handleIncreament}
                    onDecreament={this.handleDecreament}
                />

                

            </div>

           
            
        );
    }
}

export default Counter;