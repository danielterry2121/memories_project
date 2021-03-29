import express from 'express';

import { getPosts,createPost,updatePost } from '../controllers/posts.js';

const router = express.Router();
//keeping all of the functionality of our post clean and importing the functionality from controllers

//Fetching data
router.get('/', getPosts );
//Create
router.post('/', createPost );
//Update
router.patch('/:id', updatePost)

export default router;