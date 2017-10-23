import React from 'react'

const Up = (props) => {
  return(
    <li>
    <button 
      className="button success"
      onClick={() => props.onClickUpVote(props.id)}>
      <i className="fi-like"></i>
    </button>
    </li>
  )
}

export default Up
