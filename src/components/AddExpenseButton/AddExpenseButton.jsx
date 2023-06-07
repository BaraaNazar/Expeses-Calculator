import React from 'react'
import "./style.css"

function AddExpenseButton({handleAddUser}) {
  return (
<button type='submit' onClick={handleAddUser} class="button-50">Add Expense</button>
  )
}

export default AddExpenseButton