import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchPost, fetchCategories, editPostAction } from '../actions'

class EditPost extends Component {
  state = { 
     id: '',
    title: '',
    author: '',
    body: '',
    category: '',
    notValid: false,
    success: false 
  }
  componentDidMount(){   
    const { id } = this.props.match.params

    this.props.getPost(id).then(() => {  
     
      const { title, author, body, category } = this.props.post.post
      this.setState({               
       id: id,
       title: title,
       author: author,
       body:body,
       category: category        
      }) 
    })   
       
  }
  componentWillReceiveProps(nextProps){
    if(this.state.title !== nextProps.post.post.title){
      const { title, author, body, category } = nextProps.post.post
      this.setState({               
       ...this.state,
       title: title,
       author: author,
       body:body,
       category: category        
      }) 
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value 
    })
  }

  onCategoryChange = (e) => {
    this.setState({
       category: e.target.value 
    })
  }

  onEditClick = () => {
    const { id, title, category, body, author } = this.state
    this.props.editPost(id, {
      title,
      category,
      body,
      author
    })
    .then(() => {
        this.setState({                  
          success: true       
        })
    })
  }

  render() {
    const { categories } = this.props.categories     
    const { id, category } = this.state   
    
    const categoryList = categories.map(category => {
      return (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      )
    })

    return(
      <div className="callout">
        <div>
          {this.state.success && (
            <Redirect 
              from={`/edit/${category}/${id}`} 
              to={`/${category}/${id}`}  />
          )}
        </div>
        <div>
          {this.state.notValid && (
            <p className="alert"><h3>All Fields Are Required</h3></p>
          )}
        </div>
        <div className="row medium-10 large-9 columns">        
          <div className="medium-10 large-9 ">        
  
          <div className="input-group">
          <span className="input-group-label">Post Title</span>   
            <input 
              type="text" 
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title ? this.state.title :''}
              className="input-group-field"
              name="title" />
          </div>

          <div className="input-group">
        <span className="input-group-label">Author</span>   
          
            <input 
              type="text" 
              onChange={(e) => this.onAuthorChange(e)}
              value={this.state.author ? this.state.author : ''}
              className="input-group-field"
              name="author" />
          </div>

          <div className="input-group">
          <span className="input-group-label">Select Category</span> 
            
            <select 
              onChange={this.onCategoryChange}
              value={this.state.category}
              className="input-group-field">
              {categoryList}
            </select>
          </div>
        </div>

    
        <div className="medium-10 large-9">

        <div className="input-field">   
            <textarea 
              value={this.state.body ? this.state.body : ''}
              onChange={(e) => this.onBodyChange(e)}              
              cols="30" 
              rows="8" />
          </div>

          <div>
          <button
            className="info button"
            type="button" 
            onClick={this.onEditClick}
            >
            Save &nbsp; <i className="fi-save"></i>
            </button>
            </div>
            </div>
       </div>
    </div>
    )
  }
}

const mapStateToProps = ({ post, categories }) => {
  return {
    post,
    categories   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, post) => dispatch(editPostAction(id, post)),
    getPost: (id) => dispatch(fetchPost(id)),
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
