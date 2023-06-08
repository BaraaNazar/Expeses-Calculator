import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function AllExpeseItems(props) {
  return (
    <div className='expenses'>
    {props.expenses.map((item)=>{
      return <ExpenseItem key={item.id} title={item.title} price={item.amount} date={item.date}/>
    })
    }
  </div>
  )
}

export default AllExpeseItems