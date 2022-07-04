import { useState } from 'react';

import './Expenses.css'

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const pickedYearHandler = pickedYear => {
    setFilteredYear(pickedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <Card className="expenses">
        <ExpensesFilter
          onPickedYear={pickedYearHandler}
          filtered={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    );
}

export default Expenses;