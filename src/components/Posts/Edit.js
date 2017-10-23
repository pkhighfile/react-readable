import React from 'react'
import { Link } from 'react-router-dom'

export const Edit = (props) => {
  return(
    <li>
      <Link to={`/edit/${props.id}`}><i className="fi-pencil"></i></Link>
    </li>
  )
}
