import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';

import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
// Это стили для 'Общее кол-во: 5Кол-во выполненных: 3'
const Wrap = styled.h3`
 color: red;
 border: 2px dashed gold;
 width: 600px;
 padding: 5px;
`;

class App extends Component {
  state = {
    todos: initialTodos,
  };
 
// id todoId который мы хотим удалить
  deleteTodo = todoId => {
    //берем предыдущее состояния и из него делаем следующее состояние    
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));

  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <>
    
{/* initialvalue это prop - начальное значение */}
      
        <Counter initialValue={10} />

        <Dropdown />

        <ColorPicker options={colorPickerOptions} />
        
        <Wrap>
{/*Общее колво элементов, это длина массива */}
    <span>Общее кол-во: { todos.length }</span>
    <span>&nbsp;Кол-во выполненных: { completedTodos }</span>
{/*Передаём метод как props в Todolist.js  */}
        </Wrap>  
{/* В объекте state, поле todos содержит массив  initialTodos,
     который приходит из todos.json */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      
     </>
  );
};
}
export default App;

