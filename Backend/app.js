import express from "express"
import dotenv from "dotenv"
import path from "path"
import ConnectDB from "./data/Database.js";
import MessageRoute from "./routes/Message.route.js"
import Authantication from "./routes/Auth.route.js";
import UserRoute from "./routes/User.route.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"; 

dotenv.config({
    path:"./config.env"
})

const __dirname = path.resolve()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",Authantication)
app.use("/api/message", MessageRoute)
app.use("/api/user",UserRoute)
app.use(express.static(path.join(__dirname, "/Frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/Frontend", "dist", "index.html"))
})
app.get("/",(req,res)=>{
    res.send("hy")
})
server.listen(process.env.PORT,()=>{
    console.log("Server Is Running At Port", process.env.PORT);
    ConnectDB();
})








