import TelegramAPI from ".";

const exitChat = async (chatId: number) => {
    const params = {
        chat_id: chatId,
    };

    try {
        const res = await TelegramAPI.get('/leaveChat', { params });
        console.log(res.data);
    } catch(err: any) {
        console.error(err.response.data);
    }
};


export {
    exitChat,
}