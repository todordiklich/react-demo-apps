import { useState, useReducer } from 'react';
import classes from './Form.module.css';

const actionTypes = {
  CHANGE_EMAIL: 'CHANGE_EMAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
};

const initState = {
  email: {
    value: '',
    isValid: false,
  },
  password: {
    value: '',
    isValid: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_EMAIL:
      return {
        ...state,
        email: {
          value: action.payload,
          isValid: action.payload.includes('@'),
        },
      };

    case actionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: {
          value: action.payload,
          isValid: action.payload.trim().length > 7,
        },
      };

    default:
      return initState;
  }
}

function Form() {
  const [formState, dispatch] = useReducer(reducer, initState);

  const formIsValid = formState.email.isValid && formState.password.isValid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    dispatch({ type: actionTypes.CHANGE_EMAIL, payload: value });
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    dispatch({ type: actionTypes.CHANGE_PASSWORD, payload: value });
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert('Invalid form inputs!');
      return;
    }

    console.log('Good job!');
    console.log(formState.email.value, formState.password.value);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
