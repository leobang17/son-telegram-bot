

const getByChatId = async (connection: any, chatId: number) => {
    const query = `
        SELECT userId 
        FROM User
        WHERE userId = ${chatId};
    `;
    const [[chatIdRows]] = await connection.query(query);
    return chatIdRows;
}

const insertChatId = async (connection: any, chatId: number) => {
    const query = `
        INSERT INTO User (userId)
        VALUES (${chatId});
    `;
    const [chatIdRows] = await connection.query(query);
    return chatIdRows;
}

export default {
    getByChatId,
    insertChatId,
}