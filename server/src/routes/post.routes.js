const express=require("express")
const { CreateNewPost, GetPostByID, UpdatePost, DeletePost, LikeAPost, DislikeApost } = require("../controllers/post.controller")

const app=express.Router()
// POST /posts: Create a new post. The request should include the user_id.
app.post("/",CreateNewPost)
// GET /posts/{id}: Retrieve a post by id.
app.get("/:id",GetPostByID)
// PUT /posts/{id}: Update a post's content by id.
app.put("/:id",UpdatePost)
// DELETE /posts/{id}: Delete a post by id.
app.delete("/:id",DeletePost)
// POST /posts/{id}/like: Increment the like count of a post by id.
app.post("/:id/like",LikeAPost)
// POST /posts/{id}/unlike: Decrement the like count of a post by id. The count
app.post("/:id/unlike",DislikeApost)


module.exports=app