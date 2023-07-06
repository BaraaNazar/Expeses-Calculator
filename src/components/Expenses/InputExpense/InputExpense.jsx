import React from 'react';
import './style.css';

function InputExpense({ handleNameChange }) {
  return (
    <div>
      <input
        type='text'
        className='input'
        placeholder='Title'
        onChange={handleNameChange}
      />
    </div>
  );
}

export default InputExpense;
