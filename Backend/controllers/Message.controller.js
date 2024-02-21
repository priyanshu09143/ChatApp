import {Conversation} from "../models/conversation.model.js"
import {Message} from "../models/Message.model.js"
import { getReciverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";
export const MessageSend = async(req,res,next)=>{
    try {
        const {message} = req.body;
        const {id : reciverId} = req.params;
        const senderId = req.user._id

       let conversation =  await Conversation.findOne({
            participants:{$all : [senderId, reciverId]},

        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId , reciverId]
            })
    }

    const newMessage =new Message({
        senderId,
        reciverId,
        message
    })
    if(newMessage){
        conversation.message.push(newMessage._id)
    }

    await Promise.all([conversation.save(),newMessage.save()])
    
    const reciverSocketId = getReciverSocketId(reciverId);
    if(reciverSocketId) {
        io.to(reciverSocketId).emit("newMessage",newMessage)
    }
    res.status(201).json(newMessage)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server Issue"
        })
    }
}

export const getMessage = async(req,res,next)=>{
    try {
        const {id:userTochatId} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants :{$all :[senderId , userTochatId]},
        }).populate("message")


        if(!conversation) return res.status(200).json([])

        const message = conversation.message;

        res.status(200).json(message)
    } catch (error) {

        res.status(500).json({
            success:false,
            message:"Something Went Wrong"
        })
    }
}