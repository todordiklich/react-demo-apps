import useInput from '../hooks/use-input';

const hasAtLeastTwoSymbols = (value) => value.trim().length >= 2;
const isEmail = (value) => value.trim().includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(hasAtLeastTwoSymbols);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(hasAtLeastTwoSymbols);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let isFromValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    isFromValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isFromValid) {
      return;
    }

    console.log('Submitted!');
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameHasErrors
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameHasErrors
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasErrors
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasErrors && (
            <p className="error-text">
              First name must be at least 2 symbols long.
            </p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasErrors && (
            <p className="error-text">
              Last name must be at least 2 symbols long.
            </p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasErrors && (
          <p className="error-text">
            Please enter valid email (example@email.com).
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFromValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
