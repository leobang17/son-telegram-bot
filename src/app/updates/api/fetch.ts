import TelegramAPI from ".";
import FormData from "form-data";
import fs from "fs";
import { EventParams, sendPhotoAPIParams } from "../interfaces";

const exitChat = async (chatId: number) => {
    const params = {
        chat_id: chatId,
    };

    try {
        const res = await TelegramAPI.get('/leaveChat', { params });
        console.log(res.data);
    } catch(err) {
        console.error(err);
    }
};

const sendEvents = async (events: EventParams, chatId: number) => {
    const params = {
        chat_id: chatId,
        photo: events.url,
        caption: events.content
    }
    try {
        const res = await TelegramAPI.get('/sendPhoto', { params });
        console.log(res.data);
    } catch (err) {
        console.error(err)
    }
}

const sendLineups = async (chatId: number) => {
    const params = {

    };
    try {
        
    } catch (err) {
        console.error(err);
    }
}

export {
    exitChat,
    sendEvents,
    sendLineups,
}