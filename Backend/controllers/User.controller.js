import { User } from "../models/User.model.js";
export const getUserSideBar =async(req,res,next)=>{
    try {
        const loggedInUser = req.user._id;
        const filterUser = await User.find({_id:{$ne:loggedInUser}}).select("-password")

        res.status(200).json({
            success:true,
            filterUser,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success :false,
            message:"internal server Error in User Controller"
        })
    }
}