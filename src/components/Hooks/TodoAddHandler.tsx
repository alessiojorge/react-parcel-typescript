import React, { useState } from 'react';

const TodoAddHandler = (props: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!value) return;
    props.addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-form__input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
};

export default TodoAddHandler;
