import React from 'react'
import ExpenseDate from "../../Expenses/ExpenseDate/ExpenseDate"
import Card from '../../../components/UI/Card/Card'
import "./style.css"
import ChangeTitleButton from '../ChangeTitleButton/ChangeTitleButton'
import { useState } from 'react'

function ExpenseItem(props) {
  const [Title, setTitle] = useState(props.title)
  const titleHandeler = ()=>{
    setTitle("Updated!")
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{Title}</h2>
        <div className='expense-item__price'>$ {props.price}</div>
      </div>
      <ChangeTitleButton titleHandeler={titleHandeler} />
    </Card>
  )
}

export default ExpenseItem