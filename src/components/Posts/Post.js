import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  deletePostAction, 
  upVoteAction, 
  downVoteAction
 } from '../../actions'

import Vote from '../Vote/'
import { Title } from './Title'
import { Body } from './Body'
import { Author } from './Author'
import { Count } from './Count'
 

class Post extends Component {
  state = {
    score: 0
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      score: this.state.score + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({
      score: this.state.score - 1
    })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      score: voteScore
    })
  }

  render() {
    
    const { id, body, title, author, timestamp } = this.props.post  
    const { score } = this.state
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'
    return(  
      <div className="callout">  

            <Title post={this.props.post} />
            <Body post={this.props.post} />
            
              <ul className="menu simple">

              <Vote 
                id={id}
                score={score}
                onClickDownVote={this.onClickDownVote}
                onClickUpVote={this.onClickUpVote} />    

              <Author author={author} datex={timestamp}/>
              <Count count={count} />               

              </ul>
                   
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
