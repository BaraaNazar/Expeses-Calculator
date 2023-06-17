import React, { useState } from 'react';
import ExpenseItem from '../../../components/Expenses/ExpenseItem/ExpenseItem';
import Card from '../../../components/UI/Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import './style.css';

function AllExpeseItems(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangedHandler = (selectedYear) => {
    console.log(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
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
    </Card>
  );
}

export default AllExpeseItems;
