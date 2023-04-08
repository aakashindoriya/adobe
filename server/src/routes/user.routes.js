const express=require("express")
const { CreateNewUser, GetUserById, UpdateUser, DeleteUser } = require("../controllers/user.controller")
const app=express.Router()

// POST /users: Create a new user.
app.post('/',CreateNewUser)
// GET /users/{id}: Retrieve a user by id.
app.get('/:id',GetUserById)
// PUT /users/{id}: Update a user's name or bio by id.
app.put('/:id',UpdateUser)
// DELETE /users/{id}: Delete a user by id.
app.delete('/:id',DeleteUser)

module.exports=app
