import React from 'react'
import "./style.css"

function AddExpenseButton({props}) {
  const submitHandler = (event)=>{
    event.preventDefault()
    const expenseData={
      title: props.title,
      amount: props.amount,
      date: new Date(props.date)
    }
    console.log(expenseData)
  }
  return (
    <div className='new-expense__actions'>
<button type='submit' onClick={submitHandler} class="button-50 new-expense_button">Add Expense</button>
    </div>
  )
}

export default AddExpenseButton