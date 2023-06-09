import React from 'react';
import { useState } from 'react';

import './style.css';

const ExpensesFilter = (props) => {
  const filteredYearHandler = (event) => {
    return props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor='year'>Filter by year</label>
        <select onChange={filteredYearHandler} value={props.selected}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
