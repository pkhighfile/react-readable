import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'
const HomeMenuBar = () => {
  return(
      <div>
    <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">My Blog</li>      
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu ">
        <li><Link to="/" className="button primary large">Home</Link></li>
        <li><Link to="/new" className="button success large">Create Post &nbsp; <i className="fi-plus"></i></Link></li>       
      </ul>
    </div>
  </div>  
  <Categories />
  </div>
  )
}

export default HomeMenuBar
