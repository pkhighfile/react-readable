import { 
  getPost,
  getAllPosts, 
  getAllCategories,
  deletePost,
  votePost,
  getAllPostsForCategory,
  getComments,
  addNewPost,
  editPost,
  addComment,
  deleteComment,
  editComment,
  voteComment
} from '../utils/SeverAPIcalls'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
export const DELETE_POSTS = 'DELETE_POSTS'
export const VOTE_POST = 'VOTE_POST'
export const CHANGE_SORT = 'CHANGE_SORT' 
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_ADD_POST = 'VOTE_ADD_POST'
export const VOTE_DELETE_POST = 'VOTE_DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const COUNT_COMMENT = 'COUNT_COMMENT'
export const VOTE_ADD_COMMENT = 'VOTE_ADD_COMMENT'
export const VOTE_DELETE_COMMENT = 'VOTE_DELETE_COMMENT' 


export const fetchPosts = () => dispatch => (
  getAllPosts()
    .then(posts => {
      posts.map(post => {
        getComments(post.id)
          .then(comments => {
            dispatch({
              type: GET_POSTS,
              post,
              comments
            })
          })
      })
    })
)

export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type: GET_POST,
            post,
            comments
          })
        })
    })
)

export const addNewPostAction = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch({
        type: ADD_POST,
        post
      })
    })
)

export const editPostAction = (id, post) => dispatch => (
  editPost(id, post)
    .then((post) => {
      dispatch({
        type: UPDATE_POST,
        id, 
        post
      })
    })
)

export const deletePostAction = (id) => dispatch => (
  deletePost(id)
    .then(() => {
      dispatch({
        type: DELETE_POST,
        id
      })
    })
)

export const removePostAction = (id) => dispatch => {
  return deletePost(id)
    .then(() => {
      dispatch({
        type: DELETE_POST,
        id
      })
    })
}

export const getAllPostsCategoryAction = (category) => dispatch => (
  getAllPostsForCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POST_CATEGORY,
        posts
      })
    })
)

export const downVoteAction = (id) => dispatch => (
  votePost(id, "downVote")
    .then(() => {
      dispatch({
        type: VOTE_DELETE_POST,
        id
      })
    })
)

export const upVoteAction = (id) => dispatch => (
  votePost(id, "upVote")
    .then(() => {
      dispatch({
        type: VOTE_ADD_POST,
        id
      })
    })
)


export const downVotePostAction = (id) => dispatch => (
  votePost(id, "downVote")
    .then((comment) => {
      dispatch({
        type: VOTE_POST,
        voteScore: comment.voteScore
      })
    })
)

export const upVotePostAction = (id) => dispatch => (
  votePost(id, "upVote")
    .then((comment) => {
      dispatch({
        type: VOTE_POST,
        voteScore: comment.voteScore
      })
    })
)

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
)

export const deletePosts = () => ({
  type: DELETE_POSTS
})

export const changeSortAction = (value) => {
  return {
    type: CHANGE_SORT,
    value: value
  }
}

export const addCommentAction = (comment) => dispatch => {
  return addComment(comment)
    .then(comment => {
      dispatch({
        type: ADD_COMMENT,
        comment
      })
    })
}

export const deleteCommentAction = (id) => dispatch => {
  return deleteComment(id)
    .then(() => {
      dispatch({
        type: DELETE_COMMENT,
        id
      })
    })
}

export const editCommentAction = (id, comment) => dispatch => {
  return editComment(id, comment)
    .then((comment) => {
      dispatch({
        type: UPDATE_COMMENT,
        id,
        comment
      })
    })
}

export const upVoteCommentAction = (id) => dispatch => (
  voteComment(id, "upVote")
    .then((comment) => {
      dispatch({
        type: VOTE_ADD_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore
      })
    })
)

export const downVoteCommentAction = (id) => dispatch => (
  voteComment(id, "downVote")
    .then((comment) => {
      dispatch({
        type: VOTE_DELETE_COMMENT,
        id: comment.id,
        parentId: comment.parentId,
        voteScore: comment.voteScore
      })
    })
)
