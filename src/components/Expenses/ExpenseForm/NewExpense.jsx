import React from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
