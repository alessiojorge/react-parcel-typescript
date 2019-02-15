import React, { useState } from 'react';

import { Todo, TodoAddHandler } from './index';

interface Todo {
  text: string;
  isComplete?: boolean;
}

const initialStateTodos = [
  { text: 'Learn to bundle React with ParcelJS', isComplete: false },
  { text: 'Learn to use Typescript in React environment', isComplete: false },
  { text: 'Learn to use React Hooks in v16.8', isComplete: false }
];

const Hooks = () => {
  const [todos, changeTodos] = useState<Array<Todo>>(initialStateTodos);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text }];
    changeTodos(newTodos);
  };

  const isCompleteHandler = (index: number) => {
    const newTodos = [...todos];
    const newTodo = newTodos[index].isComplete;
    newTodos[index].isComplete = !newTodo;

    changeTodos(newTodos);
  };

  const removeHandler = (index: number) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    changeTodos(newTodos);
  };

  return (
    <div className="hooks">
      {todos.map((todo, index) => (
        <Todo
          key={`todo-${index}`}
          text={todo.text}
          index={index}
          isComplete={todo.isComplete}
          isCompleteHandler={isCompleteHandler}
          removeHandler={removeHandler}
        />
      ))}

      <TodoAddHandler addTodo={addTodo} />
    </div>
  );
};

Hooks.defaultProps = {
  isComplete: false
};

export default Hooks;
