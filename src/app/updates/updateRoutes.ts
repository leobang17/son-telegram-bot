import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { insertUserId, deleteUserId } from "./updateController";

const { NGROK_URL, PORT, BOT_TOKEN } = process.env;

const URI: string = `/webhook/${BOT_TOKEN}`;

enum Commands {
    Start = "/start",
    Exit = "/exit",
};

enum MemberStatus {
    Blocked = "kicked",
};

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const params = req.body.message;
    const chatId: number = params.from.id;
    const statusUpdated = req.body.my_chat_member;
    
    // Handle Bot Commands
    if (params.entities && params.entities[0].type === "bot_command") {
        const content: string = params.text;
        const command: string = content.split(" ")[0].toLowerCase();

        switch (command) {
            case Commands.Start:
                await insertUserId(chatId);
                break;
            case Commands.Exit:
                await deleteUserId(chatId);
                break;
        };
    };

    // Handle Block event
    if (statusUpdated) {
        switch (statusUpdated.new_chat_member.status) {
            case MemberStatus.Blocked:
                await deleteUserId(chatId);
                break;
        };
    }

    return res.send("success");    
});


export default router;