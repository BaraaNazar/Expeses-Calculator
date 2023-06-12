import React from 'react'
import "./style.css"

function ExpenseFormInput(props) {
  return (
    <div className='new-expense__control'>
    <label htmlFor="">{props.lable}</label>
    <input onChange={props.changeHandler} value={props.value} type={props.type} max={props.max} min={props.min} step={props.step} />
  </div>
  )
}

export default ExpenseFormInput