import jwt  from "jsonwebtoken";
import { User } from "../models/User.model.js";

const protuctRoute =async(req,res,next)=>{
    try {
        const{token} = req.cookies;
        if(!token){
            res.status(401).json({
                success:false,
                message:"User Is Not Logged in"
            })
        }

        const decoded = jwt.verify(token,process.env.JWT)

            if(!decoded){
                return res.status(401).json({
                    success:false,
                    message:"User Not Logged in"
                })
            }

            const user = await User.findById(decoded.userid).select("-password")

            if(!user) return res.status(401).json({
                success:false,
                message:"User Not Logged in"
            })

            req.user = user;
            next();
    } catch (error) {
        
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

export default protuctRoute