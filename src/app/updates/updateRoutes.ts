import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { getChatId } from "./updateController";

const { NGROK_URL, PORT, BOT_TOKEN } = process.env;

const URI: string = `/webhook/${BOT_TOKEN}`;

const router = express.Router();

router.post(URI, async (req: Request, res: Response) => {
    const params = req.body;
    const chatIdRes = await getChatId(params);
    return res.send("success");    
});


export default router;