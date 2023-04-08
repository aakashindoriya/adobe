const express=require("express")
const {  GetTotalUser, GetTopFive } = require("../controllers/user.controller")
const app=express.Router()

app.get("/user",GetTotalUser)
app.get("/user/top-active",GetTopFive)

module.exports=app