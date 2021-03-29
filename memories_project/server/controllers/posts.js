import PostMessage from '../models/postMessage.js'

//all of the backend actions for post are written out here 

//Fetching Data
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

//Create
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

//Update
export const updatePost = async (req,res) => {
    //extract id from the params to target what to update - restructuring it with _id
    const { id: _id } = req.params;
    const post = req.body;
    //check if the id is a mongoose type id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    //asynchronoous action
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost)
}