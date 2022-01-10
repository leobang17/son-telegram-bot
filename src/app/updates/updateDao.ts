

const getByUserId = async (connection: any, chatId: number) => {
    const query = `
        SELECT userId 
        FROM User
        WHERE userId = ${chatId};
    `;
    const [[chatIdRows]] = await connection.query(query);
    return chatIdRows;
}

const insertUserId = async (connection: any, chatId: number) => {
    const query = `
        INSERT INTO User (userId)
        VALUES (${chatId});
    `;
    const [chatIdRows] = await connection.query(query);
    return chatIdRows;
}

const getAllUserId = async (connection: any) => {
    const query = `
        SELECT userId
        FROM User;
    `;
    const [userIdRows] = await connection.query(query);
    return userIdRows;
}

export default {
    getByUserId,
    insertUserId,
    getAllUserId,
}