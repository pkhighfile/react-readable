const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

let token = localStorage.token 

if (!token) 
  token = localStorage.token = Math.random().toString(40).substr(-8)

  //Authorization:'Basic QURhZDphZERBRA=='
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//Most of method taken from the reactnd readable project server post.js, comment.js 

// GET /categories
export const getAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)
}

// GET /:category/posts
export const getAllPostsForCategory = (category) => {
  return fetch(`${api}/${category}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}

// GET /posts
export const getAllPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
}

// POST /posts
export const addNewPost = (newPost) => {
  return fetch(`${api}/posts`, { 
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(data => data.json())
}

// PUT /posts/:id
export const editPost = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

// GET /posts/:id
export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json()).catch(e => e)
}

// POST /posts/:id
export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}

// DELETE /posts/:id
export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  })
}

// GET /posts/:id/comments
export const getComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}

// POST /comments
export const addComment = (newComment) => {
  return fetch(`${api}/comments`, { 
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(data => data.json())
}

// DELETE /comments/:id
export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
}

// PUT /comments/:id
export const editComment = (id, comment) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())
}

// POST /comments/:id
export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}
