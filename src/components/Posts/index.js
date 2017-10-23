import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePosts } from '../../actions'
import Post from './Post'
import SortBy from './SortBy'

 
class Posts extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.props.deletePosts()
    }
    this.props.getPosts()
      .then(() => {
        this.setState({
          loaded: true
        })
      })
  }
  timestampToDate = (a) => {
    return new Date(a.timestamp)
    }
    
  render() {
    const { posts, match } = this.props     
    const filteredPosts = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    
    let postList   
    if (filteredPosts.length > 0) {
      if(this.props.sort === 'HigestVoted') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return -1
          } else {
            return 1
          }          
        }).map(post => (<div key={post.id}><Post post={post} /></div>))
      } 
       if(this.props.sort === 'LowestVoted') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return 1
          } else {
            return -1
          }         
        }).map(post => (<div key={post.id}><Post post={post} /></div>))
      } 
       if(this.props.sort === 'date') {
        postList = filteredPosts.sort((a, b) => {
          if(this.timestampToDate(a) < this.timestampToDate(b)) {
            return 1
          } else {
            return -1
          }          
        }).map(post => (<div key={post.id}><Post post={post} /></div>))
      }
    } 
    return(
      <div className="row medium-9 large-8 columns">
        <SortBy />
          {!this.state.loaded && 
            <p>Loading...</p>
          }
          { filteredPosts.length > 0
            ? postList.length > 0 
            ? (<div>{postList}</div>) 
            : (<div>Not Found</div>)
            : (<p>No Posts</p>)
          }
      </div>
    )    
  }
}


const mapStateToProps = ({ posts, sort }) => {
  return {
    posts: posts.posts,
    sort: sort.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
    deletePosts: () => dispatch(deletePosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
