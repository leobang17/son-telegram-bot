import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';

import { webHookInit } from "./webhook";
import { updateRoutes } from "./app/index";


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


import FormData from 'form-data';
import fs from 'fs';
import path from "path";

const form: FormData = new FormData();
// form.append("key", fs.createReadStream(''));
// console.log(fs.createReadStream(path.join(__dirname, './static/son-lose.jpeg')));
// console.log(form);
// console.log(form);
// console.log("--------------");
// console.log(fs.createReadStream('./src/static/son-goal.jpeg'));


// Server Init
app.listen(PORT, async () => {
    console.log(`Server app listening at port: ${PORT}`);
    await webHookInit();
})
