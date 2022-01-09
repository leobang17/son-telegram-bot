import pool from "../../../config/database";
import updateDao from "./updateDao";



const getChatId = async (chatId: number) => {
    try {
        const connection = await pool.getConnection();
        const getChatRes = await updateDao.getByChatId(connection, chatId);
        connection.release();

        return getChatRes;
    } catch(err) {
        console.error(err);
    };
};

const insertChatId = async (chatId: number) => {
    try {
        const connection = await pool.getConnection();
        const insertChatIdRes = await updateDao.insertChatId(connection, chatId);
        connection.release();

        return insertChatIdRes;
    
    } catch (err) {
        console.error(err);
    }
}

export default {
    getChatId,
    insertChatId,
};