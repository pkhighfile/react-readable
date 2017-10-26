import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect  } from 'react-router-dom'

import Vote from '../Vote'

import { 
  upVotePostAction, 
  downVotePostAction,
  removePostAction
 } from '../../actions'

class PostDetailView extends Component {
  
  state = {
    deleted: false
  }

  onDelete = (id) => {
    this.props.removePost(id)
      .then(() => {
        this.setState({
          deleted: true
        })
      })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render() {
    const { id, author, body, category, title, voteScore, timestamp } = this.props.post
    const count = this.props.post.comments 
                  ? this.props.post.comments.length
                  : '&'

    if (this.state.deleted) {
      return (<Redirect to='/' />)
    } else {
      return(
        <div className="callout">
        <div className="row medium-10 large-9 columns">
        <h3>{title}</h3>
        <span><b>Posted on</b> {new Date(timestamp).toDateString()} by <b>{author}</b></span>
        <hr/>
        <p>{body}</p>
        <ul className="menu simple">
            <Vote 
              id={id}
              score={voteScore}
              onClickUpVote={this.onClickUpVote} 
              onClickDownVote={this.onClickDownVote} />          
            
            <li><b>Category: </b>{category}</li>
            <li> <i className="fi-comments"></i> {count} </li>
            <li><Link to={`/edit/${id}`}><i className="fi-pencil"></i> Edit</Link> </li>
            <li>
            <button onClick={() =>  this.onDelete(id)}><i className="fi-trash"></i> Delete</button>
            </li>  
          </ul>   
            </div>
            </div> 
      
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVotePostAction(id)),
    downVote: (id) => dispatch(downVotePostAction(id)),
    removePost: (id) => dispatch(removePostAction(id))
    
  }
}

export default connect(null, mapDispatchToProps)(PostDetailView)
