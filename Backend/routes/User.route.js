import { Router } from "express";
import protuctRoute from "../middleware/ProtuctRoute.js";
import { getUserSideBar } from "../controllers/User.controller.js";

const route = Router();

route.get("/",protuctRoute,getUserSideBar)

export default route