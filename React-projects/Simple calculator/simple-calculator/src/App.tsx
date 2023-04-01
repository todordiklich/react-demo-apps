import { ChangeEvent, useState } from 'react';

import Calculator from './Calculator';
import Result from './Result';

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [operation, setOperation] = useState<string>('add');

  function num1ChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setNum1(+e.target.value);
  }

  function num2ChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setNum2(+e.target.value);
  }

  function changeOperationHandler(e: ChangeEvent<HTMLSelectElement>) {
    setOperation(e.target.value);
  }

  let result = 0;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }

  return (
    <div>
      <h1>Simple Calculator</h1>
      <Calculator
        num1={num1}
        num2={num2}
        onNum1Change={num1ChangeHandler}
        onNum2Change={num2ChangeHandler}
        onOperationChange={changeOperationHandler}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
