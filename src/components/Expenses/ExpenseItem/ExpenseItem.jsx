import React from 'react';
import ExpenseDate from '../../Expenses/ExpenseDate/ExpenseDate';
import Card from '../../../components/UI/Card/Card';
import './style.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
