import express, { Request, Response } from "express";
import dotenv from 'dotenv';

import { insertUserId, deleteUserId } from "./updateController";
import { Commands, MemberStatus } from "./interfaces";
import axios, { AxiosResponse } from "axios";
import FormData from "form-data";
import fs from 'fs';
import TelegramAPI from "./api";
import path from "path";


const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const params = req.body.message;
    const chatId: number = params.from.id;
    const statusUpdated = req.body.my_chat_member;
    console.log(chatId, params.text);

    
    const form: FormData = new FormData();
    form.append('son-photo', fs.createReadStream(path.join(__dirname, './son-goal.jpeg')));

    const body = {
        chat_id: chatId,
        photo: form,
        caption: "GOAL!"
        // text: "esese"
    }
    try {
        // await FootballAPI.post('/sendPhoto', body);
        const res: AxiosResponse = await TelegramAPI.get('/sendPhoto', {
            params: body,
            
        });
        console.log(res.data.result.photo);
        console.log("성공!");
    } catch (err) {
        console.error(err);
    }
    
    
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