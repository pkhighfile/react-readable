import React, { Component } from 'react'

export class CommentForm extends Component {

  render() {
    return(
      <div className="callout">
        <form
          onSubmit={this.props.onCommentSubmit}>
          <input type="text" className="input"
            placeholder="your name"
            value={this.props.cmtAuthor}
            onChange={this.props.onInputAuthorChange} />
            <textarea 
                placeholder="Enter your comment..."
                onChange={this.props.onInputChange} 
                value={this.props.txtComment}
                name="comments" 
                id="" 
                cols="30" 
                rows="5" />
            <input 
              className="medium primary button"
              value="Add Comment"
              type="submit"/>
        </form>
      </div> 
    )
  }
}
