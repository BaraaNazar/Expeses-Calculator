import React from 'react'
import "./style.css"

function ChangeTitleButton(props) {
  return (
    <div>
        <button className='expense-item__title__change' onClick={props.titleHandeler}>Change Title</button>
    </div>
  )
}

export default ChangeTitleButton