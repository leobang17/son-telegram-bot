import express, { Response, Request } from "express";
import dotenv from "dotenv";

import { startBot } from './bot'

dotenv.config();

const app = express();

startBot();

app.get("/", (req: Request, res: Response): void => {
    res.send("Hi There !");
});

app.listen(process.env.PORT, (): void => {
    console.log(`Server app listening at port: ${process.env.PORT}`);
})
