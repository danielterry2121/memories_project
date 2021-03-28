import PostMessage from '../models/postMessage.js'

//all of the backend actions for post are written out here 

export const getPosts = async (req,res) => {
    //writing try/catch to pull all of the post currently in the database
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}