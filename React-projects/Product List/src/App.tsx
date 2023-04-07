import { FormEvent, useState } from 'react';
import './App.css';

import AddProduct from './AddProduct';

interface Product {
  id: number;
  title: string;
  price: number;
}

const initialProducts: Product[] = [
  { id: 1, title: 'React - The Cocplete Guideline [Course]', price: 19.99 },
  { id: 2, title: 'History Video Game Collection', price: 99.99 },
  { id: 3, title: 'Stylish Chair', price: 329.49 },
];

function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [priceIsValid, setPriceIsValid] = useState(true);

  function validateInput(
    condition: boolean,
    setValue: (value: boolean) => void
  ) {
    if (condition) {
      setValue(true);
    } else {
      setValue(false);
    }
  }

  function addProductHandler(e: FormEvent) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const id = products.length + 1;
    const title = data.get('title') as string;
    const price = parseFloat(data.get('price') as string);

    //title and price initial validations
    if (!title && Number.isNaN(price)) {
      setTitleIsValid(false);
      setPriceIsValid(false);
      return;
    }

    validateInput(title.length > 0, setTitleIsValid);
    validateInput(price > 0, setPriceIsValid);

    if (!(title.length > 0) || !(price > 0)) {
      return;
    }

    setProducts((prevProducts) => [...prevProducts, { id, title, price }]);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="app">
      <h1>Product list:</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title} (${product.price})
            </li>
          );
        })}
      </ul>
      <br />
      <AddProduct
        titleIsValid={titleIsValid}
        priceIsValid={priceIsValid}
        onAddProduct={addProductHandler}
      />
    </div>
  );
}

export default App;
