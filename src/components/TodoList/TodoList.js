import React from "react";

import './TodoList.css';

//в todos приходят данные из todos.json
// метод onDeleteTodo принимаем из App
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button
          onClick={() => onDeleteTodo(id)}
        >
                Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;