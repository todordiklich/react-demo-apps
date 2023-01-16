import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>
        Todo Text
        <input type="text" ref={todoTextInputRef} />
      </label>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
