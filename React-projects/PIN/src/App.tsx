import { useEffect, useState } from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const pin = '4587';

export default function App() {
  const [enteredPin, setEnteredPin] = useState('');
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('');

  function enterPinHandler(num: number) {
    setEnteredPin((curr) => curr + num);
  }

  useEffect(() => {
    if (enteredPin.length === 1) {
      setValid(false);
      setError('');
    }

    if (enteredPin.length !== pin.length) {
      return;
    }

    if (enteredPin === pin) {
      setValid(true);
    } else {
      setError('Invalid PIN');
    }
    setEnteredPin('');
  }, [enteredPin]);

  return (
    <>
      {enteredPin.replaceAll(/[0-9]/g, '*')}
      <div className="result">
        {error ? error : ''}
        {valid ? <p>Correct!</p> : ''}
      </div>
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
