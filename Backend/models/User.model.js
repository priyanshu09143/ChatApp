import mongoose from "mongoose";
 const UserSchema =  mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true,
        unique:true,
    },

    password:{
        type:String,
        required : true,
    },
    gender:{
        type:String,
        enum :["male", "female"],
        required : true,
    },
    profile:{
        type:String,
    }
},{timestamps:true})

export const User = mongoose.model("User", UserSchema)