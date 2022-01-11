import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';

import { webHookInit } from "./webhook";
import { updateRoutes } from "./app/index";
import getData from "./app/football";
import { getFixture } from "./app/football/fetch";


// envs
dotenv.config();
const { PORT, BOT_TOKEN } = process.env;
const URI: string = `/webhook/${BOT_TOKEN}`;

// express
const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));


// Routes.
app.use(URI, updateRoutes);


// Server Init
app.listen(PORT, async () => {
    console.log(`Server app listening at port: ${PORT}`);
    await webHookInit();
})
