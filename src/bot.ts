import { Bot } from 'grammy';
import dotenv from 'dotenv'

dotenv.config();

export const startBot = (): void => {

    const bot = new Bot(process.env.BOT_TOKEN as string);

    bot.on("message", (ctx) => ctx.reply("Hi there!"))

    bot.start();
};