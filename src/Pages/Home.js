import React, { useState } from 'react';
import NewExpense from '../components/Expenses/ExpenseForm/NewExpense.jsx';
import AllExpeseItems from '../components/Expenses/AllExpeseItems/AllExpeseItems.jsx';
import { expenses } from '../assets/expenses';
import Navbar from '../components/Navbar/Navbar.jsx';

function Home() {
  const [expenseItems, setExpenseItems] = useState(expenses);
  const addExpenseHandler = (expense) => {
    console.log('in app.js file');
    console.log(expense);
    setExpenseItems((prevExpenseItems) => [expense, ...prevExpenseItems]);
  };
  return (
    <div>
      <Navbar />
      <NewExpense addExpense={addExpenseHandler} />
      <AllExpeseItems items={expenseItems} />
    </div>
  );
}

export default Home;
