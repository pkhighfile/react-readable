import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  render() {    
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <li key={index} className="h6">
          <Link to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    })
    
    return(
      <div className="callout secondary ">
        <ul className="menu align-center">
          <All />
          {list}
        </ul>
      </div>      
    )
  }
}

const All = () => {
  return(
    <li key='All' className="h6">
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
