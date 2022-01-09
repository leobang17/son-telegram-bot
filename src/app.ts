import express, { Response, Request } from "express";
import dotenv from "dotenv";
import axios from "axios";

import { webHookInit } from "./webhook";
import { updateRoutes } from "./app/index";


// envs
dotenv.config();
const { NGROK_URL, PORT, BOT_TOKEN } = process.env;
const TELEGRAM_API: string = `https://api.telegram.org/bot${BOT_TOKEN}`;

const URI: string = `/webhook/${BOT_TOKEN}`;
const WEBHOOK_URL: string = NGROK_URL + URI;
const chatIds: number[] = [5074918684, 1082663030];

// express
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded());
// app.use(bot.webhookCallback());

// Routes.
app.use("/", updateRoutes);

app.get("/sendText", async (req: Request, res: Response): Promise<void> => {
    chatIds.map(async (chatId: number, index: number) => {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: chatId,
            text: "Hello world!"
        });
    });
    // const res2 = await axios.post(`${TELEGRAM_API}/getChatMember`, {
    //     chat_id: 5074918684,

    // });
    // console.log(res2.data);

    res.send();
});


app.listen(PORT, async () => {
    console.log(`Server app listening at port: ${PORT}`);
    await webHookInit();
})
