import React from 'react'
import "./style.css"

function InputExpense({handleNameChange}) {
  return (
    <div>
  <input type="text" class="input" placeholder="Title" onChange={handleNameChange}/>
    </div>
  )
}

export default InputExpense