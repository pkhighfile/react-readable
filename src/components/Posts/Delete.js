import React from 'react'

export const Delete = (props) => {
  return(
    <li>
      <button onClick={() => props.onDeleteClick(props.id)} ><i className="fi-trash"></i></button>
    </li>
  )
}
