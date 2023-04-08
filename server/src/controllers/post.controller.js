const Post = require('../models/post.model');

// POST /posts: Create a new post
const CreateNewPost= async (req, res) => {
  try {
    const {  content ,user_id} = req.body;
    const post = new Post({ user_id, content });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// GET /posts/{id}: Retrieve a post by id
const GetPostByID = async (req, res) => {
  const id=req.params.id
  try {
    if(id!="all"){
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).send('Post not found');
      }
      return res.status(200).send(post);
    }
    const allposts=await Post.find()
    return res.status(200).send(allposts) 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// PUT /posts/{id}: Update a post's content by id
const UpdatePost= async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!post) {
      return res.status(404).send( 'Post not found');
    }
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// DELETE /posts/{id}: Delete a post by id
const DeletePost= async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.status(201).send('Post deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// POST /posts/{id}/like: Increment the like count of a post by id
const LikeAPost= async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// POST /posts/{id}/unlike: Decrement the like count of a post by id. The count should not go below 0.
const DislikeApost= async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    if (post.likes <= 0) {
      return res.status(200).send(post);
    }
    post.likes -= 1;
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET /analytics/posts: Retrieve the total number of posts
// Retrieve the total number of posts
const getPostCount = async (req, res) => {
    try {
      const postCount = await Post.find();
      res.status(201).send(`Total number of posts: ${postCount.length}`);
    } catch (err) {
        res.status(500).send(err.message);
    }
  };
  
  // Retrieve the top 5 most liked posts
  const getTopLikedPosts = async (req, res) => {
    try {
      const topLikedPosts = await Post.find()
        .sort({ likes: -1 })
        .limit(5);
  
      res.status(201).send(topLikedPosts);
    } catch (err) {
        res.status(500).send(err.message);
    }
  };
  
module.exports={CreateNewPost,DeletePost,GetPostByID,LikeAPost,UpdatePost,getPostCount,getTopLikedPosts,DislikeApost}