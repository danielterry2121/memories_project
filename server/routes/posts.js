import express from 'express';
//Step one 
import { getPosts,createPost,updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();
//keeping all of the functionality of our post clean and importing the functionality from controllers

//Fetching data
router.get('/', getPosts );
//Create
router.post('/', createPost );
//Update
router.patch('/:id', updatePost);
//Delete
router.delete('/:id', deletePost);
//like functionality
router.patch('/:id/likePost', likePost);
export default router;