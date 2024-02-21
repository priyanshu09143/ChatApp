import bcrypt from "bcrypt"
import { User } from "../models/User.model.js"
import TokenGenerator from "../utils/Cookie.js"

export const Register = async (req, res, next) => {
    try {
        const { name, email, password, gender } = req.body;
        let user = await User.findOne({ email: email })
        if (user) return res.status(200).json({
            success: false,
            message: "User Already Exist"
        })

        const hashPass = await bcrypt.hash(password, 10)
        user = await User.create({
            name,
            email,
            password: hashPass,
            gender,
            profile: `https://avatar.iran.liara.run/public/${gender == "male" ? "boy" : "girl"}`
        })
        TokenGenerator(user._id, res)

        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "SomeThing Wrong"
        })
        console.log(error)
    }
}



export const login =async (req, res, next) => {
  try {
    const { email , password} = req.body;
    const user  =await User.findOne({email})
    if(!user) return res.status(404).json({
        success : false,
        message:"User Not Found"
    })
    const verifyPass =await bcrypt.compare(password, user.password)
    if(!verifyPass){ return res.status(400).json({
            success:false,
            message:"Invalid Email or Password"
        })
    }
    TokenGenerator(user._id, res)
    res.status(200).json({
        success:true,
        message:"Login user successfully",
        user
    })
    
  } catch (error) {
    res.status(500).json({
        success:true,
        message:"someThing Worng"
  })
   
}}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.find({})

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something worng"
        })
    }


}


export const logout = async (req, res, next) => {
    try {
        res.cookie("token","",{maxAge:0});
        res.status(200).json({
            success:true,
            message:"Logged Out Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something worng"
        })
    }


}