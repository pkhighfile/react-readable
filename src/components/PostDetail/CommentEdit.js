import React, { Component } from 'react'

class CommentEdit extends Component {

  onEdit = () => {
    if(this.props.editId) {
      this.props.onEdit(null, this.props.editId)
    } else {
      this.props.onEdit(this.props.id, null)
    }
  }

  render() {
    let buttonValue
    let cssClass
    if (this.props.editId === this.props.id) {
      buttonValue = this.props.editId ? 'Save' : 'Edit'
      cssClass = this.props.editId ? 'fi-save' : 'fi-pencil'
    } else {
      buttonValue = 'Edit'
      cssClass = 'fi-pencil'
    }
    
    return(       
      <span>
      <button onClick={this.onEdit} className="primary hollow button" ><i className={cssClass}></i> {buttonValue}</button>      
    </span>
    )
  }
}

export default CommentEdit
