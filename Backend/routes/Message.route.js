import { Router } from "express";
import { MessageSend, getMessage } from "../controllers/Message.controller.js";
import protuctRoute from "../middleware/ProtuctRoute.js";
const route = Router();


route.get("/:id",protuctRoute,getMessage)
route.post("/send/:id",protuctRoute,MessageSend)


export default route