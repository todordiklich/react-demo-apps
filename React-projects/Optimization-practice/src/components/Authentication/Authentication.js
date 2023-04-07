import { Suspense, lazy, useState } from 'react';

import classes from './Authentication.module.css';

import Login from './Login/Login';
// import Signup from './Signup/Signup';
const Signup = lazy(() => import('./Signup/Signup.js'));

function Authentication() {
  const [mode, setMode] = useState('login');

  function switchAuthModeHandler() {
    setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'));
  }

  let authElement = <Login />;
  let switchBtnCaption = 'Create a new account';

  if (mode !== 'login') {
    authElement = (
      <Suspense fallback={<p>Loading...</p>}>
        <Signup />
      </Suspense>
    );
    switchBtnCaption = 'Login instead';
  }

  return (
    <div className={classes.auth}>
      <h1>You must authenticate yourself first!</h1>
      {authElement}
      <button className={classes.btn} onClick={switchAuthModeHandler}>
        {switchBtnCaption}
      </button>
    </div>
  );
}

export default Authentication;
