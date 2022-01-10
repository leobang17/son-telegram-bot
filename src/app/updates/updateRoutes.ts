import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { insertUserId, deleteUserId } from "./updateController";

const { NGROK_URL, PORT, BOT_TOKEN } = process.env;

const URI: string = `/webhook/${BOT_TOKEN}`;

enum Commands {
    Start = "/start",
    Exit = "/exit",
};

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const params = req.body;
    const content: string = req.body.message.text;

    if (content) {
        const command = content.split(" ")[0].toLowerCase();

        switch (command) {
            case Commands.Start:
                await insertUserId(params);
                break;
            case Commands.Exit:
                await deleteUserId(params);
                break;
        }

        console.log(command);
    }

    return res.send("success");    
});


export default router;