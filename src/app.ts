import express, { Response, Request } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";

import bot from "./bot";

// envs
dotenv.config();
const { NGROK_URL, PORT, BOT_TOKEN } = process.env;
const TELEGRAM_API: string = `https://api.telegram.org/bot${BOT_TOKEN}`;

const URI: string = `/webhook/${BOT_TOKEN}`;
const WEBHOOK_URL: string = NGROK_URL + URI;


// express
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded());
// app.use(bot.webhookCallback());


// create webhook
const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
    console.log(res.data);
};


// startBot();
app.get("/", (req: Request, res: Response): void => {
    res.send("Hi There !");
});

app.post(URI, async (req: Request, res: Response) => {
    console.log(req.body);
    const chatId: number = req.body.message.chat.id;
    const text: string = req.body.message.text;

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: text
    });
    return res.send();
})

app.listen(PORT, async () => {
    console.log(`Server app listening at port: ${PORT}`);
    await init();
})
