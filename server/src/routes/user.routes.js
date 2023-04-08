const express=require("express")
const { CreateNewUser, GetUserById, UpdateUser, DeleteUser } = require("../controllers/user.controller")
const app=express.Router()

app.post('/',CreateNewUser)
app.get('/:id',GetUserById)
app.put('/:id',UpdateUser)
app.delete('/:id',DeleteUser)

module.exports=app
