import React, { Component } from 'react' 
import PropTypes from 'prop-types'

export class Body extends Component {

  render() {
    const { body } = this.props.post
    return(
       
        <p>{body.substring(0,200)}</p>
       
    )
  }
}

Body.PropTypes = {  
  body: PropTypes.string.isRequired
}