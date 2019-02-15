import React from 'react';

interface typeTodo {
  text: string;
  index: number;
  isComplete: boolean;
  isCompleteHandler: any;
  removeHandler: any;
}

const Todo = (props: any) => {
  return (
    <div className="todo">
      <p
        className="todo__text"
        onClick={() => props.removeHandler(props.index)}
      >
        {props.text}
      </p>
      <input
        type="checkbox"
        className="todo__radio"
        defaultChecked={props.isComplete}
        onChange={() => props.isCompleteHandler(props.index)}
      />
    </div>
  );
};

export default Todo;
