import useInput from '../../hooks/use-input';

import classes from './Checkout.module.css';

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasErrors: nameHasErrors,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasErrors: streetHasErrors,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    hasErrors: postalCodeHasErrors,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasErrors: cityHasErrors,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== '');

  let isFormValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    isFormValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    //send the data to the server
    props.onConfirm({
      name: enteredName,
      streer: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    resetName();
    resetStreet();
    resetPostalCode();
    resetCity();
  };

  const nameInputClasses = nameHasErrors
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const streetInputClasses = streetHasErrors
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const postalCodeInputClasses = postalCodeHasErrors
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const cityInputClasses = cityHasErrors
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasErrors && <p>Name must not be empty.</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasErrors && <p>Street must not be empty.</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasErrors && <p>Postal Code must not be empty.</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasErrors && <p>City must not be empty.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!isFormValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
