import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import Vote from '../Vote/'

import { 
  deleteCommentAction,
  editCommentAction,
  upVoteCommentAction,
  downVoteCommentAction
 } from '../../actions'


class CommentList extends Component {

  state = {
    edit: false,
    editId: ''
  }

  onDelete = (id) => {
    this.props.deleteComment(id)
  }

  onEdit = (id, editId, comment) => {
    if (comment) {
      this.props.editComment(editId, {
        timestamp: Date.now(),
        body: comment
      })
    }

    this.setState({
      edit: !this.state.edit,
      editId: id
    })
  }

  onClickUpVote = (id) => {
    this.props.upVoteComment(id)
  }

  onClickDownVote = (id) => {
    this.props.downVoteComment(id)
  }

  render() {

    let commentList = null

    
    if (this.props.comments) {
      commentList = this.props.comments.sort((a, b) => {
        if(a.voteScore > b.voteScore) {
          return -1
        } else {
          return 1
        }       
      }).map(comment => (
        <div className="callout" key={comment.id}>
        <ul className="menu simple">
            <Vote 
              id={comment.id}
              score={comment.voteScore}
              onClickUpVote={this.onClickUpVote} 
              onClickDownVote={this.onClickDownVote} />
              </ul>
            <Comment 
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              editId={this.state.editId}
              id={comment.id}
              body={comment.body}
              author={comment.author}
              datex={comment.timestamp}/>
              
          </div>  
         
      ))
    }

    return(
      <div className="row medium-12 large-12 columns">       
          {commentList}        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteCommentAction(id)),
    editComment: (id, comment) => dispatch(editCommentAction(id, comment)),
    upVoteComment: (id) => dispatch(upVoteCommentAction(id)),
    downVoteComment: (id) => dispatch(downVoteCommentAction(id))
  }
}

export default connect(null, mapDispatchToProps)(CommentList)
