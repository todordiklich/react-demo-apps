import { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesCahrt from './ExpensesChart';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2022');

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  let filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearChange={yearChangeHandler} />
        <ExpensesCahrt expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
