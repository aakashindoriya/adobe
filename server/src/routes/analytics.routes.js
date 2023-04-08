const express=require("express")
const {  GetTotalUser, GetTopFive } = require("../controllers/user.controller")
const { getPostCount, getTopLikedPosts } = require("../controllers/post.controller")
const app=express.Router()
// GET /analytics/users: Retrieve the total number of users.
app.get("/user",GetTotalUser)
// GET /analytics/users/top-active: Retrieve the top 5 most active users, based on
// the number of posts.
app.get("/user/top-active",GetTopFive)
// GET /analytics/posts: Retrieve the total number of posts.
app.get("/posts",getPostCount)
// GET /analytics/posts/top-liked: Retrieve the top 5 most liked posts.
app.get("/posts/top-liked",getTopLikedPosts)


module.exports=app