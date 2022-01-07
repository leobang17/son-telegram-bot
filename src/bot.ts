import { Telegraf } from 'telegraf';
import dotenv from 'dotenv'
import { Bot } from 'grammy';

dotenv.config();

const TOKEN : string = process.env.BOT_TOKEN as string;

if (!TOKEN) {
    throw new Error("Token not exists");
}

const bot = new Telegraf(TOKEN);

bot.on('text', (ctx) => ctx.reply("aaa"));


export default bot;