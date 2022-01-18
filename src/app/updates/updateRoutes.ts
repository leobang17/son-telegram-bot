import express, { Request, Response } from "express";
import dotenv from 'dotenv';

import { insertUserId, deleteUserId } from "./updateController";
import { Commands, MemberStatus } from "./interfaces/interfaces";
import { memberStatusHandler, messageHandler } from "./routeHandler";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    console.log(req.body.message.entities);
    // console.log("this is default post");
    // const params = req.body.message;
    // const chatId: number = params.from.id;
    // const statusUpdated = req.body.my_chat_member;
    
    // Handle Bot Commands
    // if (params.entities && params.entities[0].type === "bot_command") {
    //     const content: string = params.text;
    //     const command: string = content.split(" ")[0].toLowerCase();

    //     switch (command) {
    //         case Commands.Start:
    //             await insertUserId(chatId);
    //             break;
    //         case Commands.Exit:
    //             await deleteUserId(chatId);
    //             break;
    //     };
    // };

    // Handle Block event
    // if (statusUpdated) {
    //     switch (statusUpdated.new_chat_member.status) {
    //         case MemberStatus.Blocked:
    //             await deleteUserId(chatId);
    //             break;
    //     };
    // }포

    const { update_id, message, my_chat_member, edited_message } = req.body;

    // Handle Message Content
    if (message) {
        await messageHandler({ update_id, message });
    }

    // Handle Member Status updates
    if (my_chat_member) {
        await memberStatusHandler({ update_id, my_chat_member });
    }

    // Handle edit message
    if (edited_message) {
        
    }


    return res.send("success");    
});


export default router;




    
    // const form: FormData = new FormData();
    // form.append('son-photo', fs.createReadStream(path.join(__dirname, './son-goal.jpeg')));

    // const body = {
    //     chat_id: chatId,
    //     photo: form,
    //     caption: "GOAL!"
    //     // text: "esese"
    // }
    // try {
    //     // await FootballAPI.post('/sendPhoto', body);
    //     const res: AxiosResponse = await TelegramAPI.get('/sendPhoto', {
    //         params: body,
            
    //     });
    //     console.log(res.data.result.photo);
    //     console.log("성공!");
    // } catch (err) {
    //     console.error(err);
    // }