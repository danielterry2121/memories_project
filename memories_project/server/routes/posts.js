import express from 'express';

import { getPosts,createPost } from '../controllers/posts.js';

const router = express.Router();
//keeping all of the functionality of our post clean and importing the functionality from controllers
router.get('/', getPosts );
router.post('/', createPost );

export default router;