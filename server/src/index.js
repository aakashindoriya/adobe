require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connect = require("./database/connect")
// const userRoute=require("./routes/user.route")
const app=express()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>res.send("<h1>Welcome To Adobe</h1>"))
// app.use("/user",userRoute)

const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    connect()
    console.log(`server is listening on ${PORT}`)
})