import { Router } from "express"
import { Register, getUser, login, logout } from "../controllers/Auth.controllers.js";

const route = Router();


route.post("/register",Register)
route.post("/login",login)
route.get("/user",getUser)
route.get("/logout",logout)


export default route