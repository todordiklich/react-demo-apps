import { useEffect, useState } from 'react';

import styles from './AvailableMeals.module.css';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
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
          ...mealsData[key],
        });
      }

      setMeals(mealsList);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.meals}>
        <Card>
          <p className={styles.mealsLoading}>Loading...</p>
        </Card>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.meals}>
        <Card>
          <p className={styles.mealsError}>{httpError}</p>
        </Card>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
