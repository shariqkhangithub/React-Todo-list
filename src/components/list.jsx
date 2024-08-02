import React from 'react'

function Todolist(props) {
  return (
    <>
    <li className="list-items">
        {props.item}
       
    </li>
   
  </>
  )
}

export default Todolist