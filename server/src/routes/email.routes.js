import { sendMails } from "../controller/email.controller.js";
import express from "express"

const router = express.Router();

router.post("/mail", sendMails);

export default router