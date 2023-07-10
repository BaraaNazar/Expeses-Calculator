import React, { useState } from 'react';
import NewExpense from '../components/Expenses/ExpenseForm/NewExpense.jsx';
import { expenses } from '../assets/expenses';
import Navbar from '../components/Navbar/Navbar.jsx';
import Expenses from '../components/Expenses/Expenses/Expenses.jsx';

function Home() {
  const [expenseItems, setExpenseItems] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setExpenseItems((prevExpenseItems) => [expense, ...prevExpenseItems]);
  };
  return (
    <div>
      <Navbar />
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default Home;
