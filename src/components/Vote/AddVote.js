import React from 'react'

const AddVote = (props) => {
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

export default AddVote
