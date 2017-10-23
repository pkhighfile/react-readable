import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, addNewPostAction } from '../../actions'
import uuidv1 from 'uuid/v1'

class CreateNewPost extends Component {
  state = {
    title: '',
    category: 'react',
    author: '',
    body: '',
    InValid: false,
    success: false
  }

  componentWillMount() {
    this.props.getCategories();
  }

  onPostClick() {
    const { title, category, author, body } = this.state
    
    if (title && category && author && body) {
      const newPost = {
        id: uuidv1(),
        timestamp: Date.now(),
        title,
        category,
        author,
        body
      } 
      this.props.addPost(newPost)
        .then(() => this.setState({
          success: true,
          title: '',
          category: 'react',
          author: '',
          body: '',
          InValid: false 
        }))
    } else {
      this.setState({
        InValid: true,
        success: false
      })
    }
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  onCategoryChange(e) {
    this.setState({category: e.target.value })    
  }

  render() {
    const { categories } = this.props
    const optionList = categories.map(category => ( 
        <option key={category.name} value={category.name}>{category.name}</option>
      ))
      
    return(
      <div className="callout">
        <div>
          {this.state.success && (             
            <div className="success callout gradient-angle" data-closable="">
                    <h4>Post created successfully!</h4>                    
                    <button className="close-button" aria-label="Dismiss alert" type="button" data-close="">
                        <span aria-hidden="true">×</span>
                    </button>
            </div>
          )}
        </div>
        <div>
          {this.state.InValid && (
            <p className="alert"><h3>All Fields Are Required</h3></p> 
          )}
        </div>
        <div className="row medium-10 large-9 columns">
      
        <div className="medium-10 large-9 ">        

        <div className="input-group">
        <span className="input-group-label">Post Title</span>          
            <input 
              type="text" 
              placeholder="Title"
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title}
              className="input-group-field" />
           
        </div>
        <div className="input-group">
        <span className="input-group-label">Author</span>   
            <input 
              placeholder="Author"
              onChange={(e) => this.onAuthorChange(e)}
              type="text" 
              value={this.state.author} 
              className="input-group-field" />
          </div>
        

        <div className="input-group">
        <span className="input-group-label">Select Category</span> 
            <select              
              value={this.state.category} 
              onChange={(e) => this.onCategoryChange(e)}
              className="input-group-field" >
              {optionList}
            </select>
          </div>
       </div>
       
        
       <div className="medium-10 large-9">
       
        <div className="input-field">           
            <textarea 
              placeholder="Please Write your blog here..."
              onChange={(e) => this.onBodyChange(e)}
              value={this.state.body} 
              cols="30" 
              rows="8" />           
        </div>       

        <div>
          <button
            className="success button"
            type="button"             
            onClick={this.onPostClick.bind(this)}>
            Create Post &nbsp; <i className="fi-plus"></i>
            </button>
        </div>
        </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(addNewPostAction(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost)
