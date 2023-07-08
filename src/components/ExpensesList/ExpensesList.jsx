import React from 'react';
import ExpenseItem from '../Expenses/ExpenseItem/ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
