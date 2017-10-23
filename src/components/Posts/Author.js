import React from 'react'

export const Author = (props) => {
  return(
    <li>
      Written by {props.author} <i className="fi-torso"></i> on {new Date(props.datex).toDateString()}
    </li>
  )
}

