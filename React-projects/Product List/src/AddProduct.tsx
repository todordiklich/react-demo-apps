import { FormEvent } from 'react';
import './AddProduct.css';

interface Props {
  titleIsValid: boolean;
  priceIsValid: boolean;
  onAddProduct: (e: FormEvent) => void;
}

export default function AddProduct(props: Props) {
  return (
    <div>
      <fieldset>
        <legend>Add your product</legend>
        <form onSubmit={props.onAddProduct}>
          <label className={props.titleIsValid ? '' : 'invalid'}>
            Title:
            <input
              className={props.titleIsValid ? '' : 'invalid'}
              type="text"
              id="title"
              name="title"
            ></input>
          </label>
          {!props.titleIsValid && <p>Please enter a title.</p>}
          <label className={props.priceIsValid ? '' : 'invalid'}>
            Price:
            <input
              className={props.priceIsValid ? '' : 'invalid'}
              type="decimal"
              id="price"
              name="price"
            ></input>
          </label>
          {!props.priceIsValid && (
            <p>Please enter a price (positive number).</p>
          )}
          <button>Add product</button>
        </form>
      </fieldset>
    </div>
  );
}
