import { ChangeEvent } from 'react';

interface calcProps {
  num1: number;
  num2: number;
  onNum1Change: (e: ChangeEvent<HTMLInputElement>) => void;
  onNum2Change: (e: ChangeEvent<HTMLInputElement>) => void;
  onOperationChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Calculator(props: calcProps) {
  return (
    <div>
      <input type="number" value={props.num1} onChange={props.onNum1Change} />
      <select onChange={props.onOperationChange}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" value={props.num2} onChange={props.onNum2Change} />
    </div>
  );
}

export default Calculator;
