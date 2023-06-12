import React from 'react'
import ExpenseItem from '../../../components/Expenses/ExpenseItem/ExpenseItem'
import Card from '../../../components/UI/Card/Card'
import "./style.css"

function AllExpeseItems(props) {
  return (
    <Card className="expenses">
    {props.items.map((item)=>{
      return <ExpenseItem key={item.id} title={item.title} price={item.amount} date={item.date}/>
    })
    }
  </Card>
  )
}

export default AllExpeseItems