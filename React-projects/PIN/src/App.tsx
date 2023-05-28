import { useState } from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const pin = '4587';
let message = '';

export default function App() {
  const [enteredPin, setEnteredPin] = useState('');

  function enterPinHandler(num: number) {
    const derivedPin = enteredPin + num;

    setEnteredPin((curr) => curr + num);

    if (derivedPin.length === 1) {
      message = '';
    }

    if (derivedPin.length === pin.length) {
      if (derivedPin === pin) {
        message = 'Correct!';
      } else {
        message = 'Invalid PIN';
      }
      setEnteredPin('');
    }
  }

  return (
    <>
      {enteredPin.replaceAll(/[0-9]/g, '*')}
      <div className="result">{message}</div>
      <div className="numpad">
        {numbers.map((num) => (
          <button
            className={num == 0 ? 'zero' : ''}
            key={num}
            onClick={() => enterPinHandler(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
}
