import jwt from "jsonwebtoken"

const TokenGenerator = (userid, res) => {
    const payload = { userid };
    const token = jwt.sign(payload,process.env.JWT, {
        expiresIn: "15d"
    });
    res.cookie("token", token,{
        maxAge : 15 * 24 *60 * 60 * 1000,
        httpOnly : true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developement"
    })
}

export default TokenGenerator