import axios from 'axios';
//Step 3

const API = axios.create({ baseURL: 'https://my-mern-memory-app.herokuapp.com'});
const url = `https://my-mern-memory-app.herokuapp.com/posts`;

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const updatePost = (id,updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);