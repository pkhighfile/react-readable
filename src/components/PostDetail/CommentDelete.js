import React, { Component } from 'react'

class CommentDelete extends Component {
  
  onDelete = () => {
    const id = this.props.id
    this.props.onDelete(id) 
  }

  render() {
    return(     
      <span>
      <button onClick={this.onDelete} className="secondary hollow button"  ><i className="fi-trash"></i> Delete</button>
    </span>
    )
  }
}

export default CommentDelete
