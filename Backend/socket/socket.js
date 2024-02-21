import { Server } from "socket.io";
import {createServer} from "http"
import express from "express"
import { connect } from "http2";

 const app = express();

const server = createServer(app)

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})

export const getReciverSocketId = (reciverId)=>{
    return userSocketMap[reciverId]
}

const userSocketMap ={} //{userId : socketId}

io.on('connection',(socket)=>{
    console.log(socket.id,"  User Is Connected")


    const userId = socket.handshake.query.userId;

    if(userId != 'undefined') userSocketMap[userId] = socket.id;
    io.emit("getOnlineUser",Object.keys(userSocketMap));


    socket.on("disconnect",()=>{
        console.log("User Disconnected" , socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUser",Object.keys(userSocketMap));

})

})

export{ app , server , io}