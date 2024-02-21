import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({
    participants :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
],
message :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message",
    default:[]
}]
},{timestamps:true})

export const Conversation = mongoose.model("Conversation",ConversationSchema)