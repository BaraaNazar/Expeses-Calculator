import React from 'react';
import { useState } from 'react';
import ExpenseFormInput from './ExpenseFormInput';
import './style.css';
import AddExpenseButton from './AddExpenseButton';

function ExpenseForm(props) {
  const [showForm, setShowForm] = useState(true);
  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.saveExpenseDataHandler(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      {showForm ? (
        <form>
          <div className='new-expense__controls'>
            <ExpenseFormInput
              changeHandler={titleChangeHandler}
              lable='Title'
              value={title}
              type='text'
            />
            <ExpenseFormInput
              changeHandler={amountChangeHandler}
              lable='Amount'
              value={amount}
              type='number'
              min='0.01'
              step='0.01'
            />
            <ExpenseFormInput
              changeHandler={dateChangeHandler}
              lable='Date'
              value={date}
              type='date'
              min='2023-01-01'
              max='2023-12-31'
            />
            <div className='new-expense__actions'>
              <button
                onClick={showFormHandler}
                type='button'
                className='new-expense__actions button-50 new-expense_button'
              >
                Cancel
              </button>
              <button
                type='submit'
                onClick={submitHandler}
                className='button-50 new-expense_button'
              >
                Add Expense
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button
          className='new-expense__actions button-50 new-expense_button'
          onClick={showFormHandler}
        >
          Add Expenses
        </button>
      )}
    </div>
  );
}

export default ExpenseForm;
