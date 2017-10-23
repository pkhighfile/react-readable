import React from 'react'

const Down = (props) => {
  return(
    <li>
    <button 
      className="button warning"
      onClick={() => props.onClickDownVote(props.id)}>
      <i className="fi-dislike"></i>
    </button>
    </li>
  )
}

export default Down
