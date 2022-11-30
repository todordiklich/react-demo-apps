import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        'https://react-movies-b39d0-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      const mealsData = await response.json();

      const mealsList = [];

      for (const key in mealsData) {
        mealsList.push({
          id: key,
          title: mealsData[key].name,
          price: mealsData[key].price,
          description: mealsData[key].description,
        });
      }

      setProducts(mealsList);
    }

    fetchProducts();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
